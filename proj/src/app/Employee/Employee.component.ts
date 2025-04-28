import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee.Model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { PRIMENG_IMPORTS } from '../app.config';
import { DatePickerModule } from 'primeng/datepicker';
import moment from 'moment';

@Component({
  selector: 'employee',
  standalone: true,
  imports: [FormsModule, CommonModule, PRIMENG_IMPORTS,DatePickerModule],
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  loading: boolean = false;
  error: string = '';
  searchText = '';
  newEmployee = new Employee();
  showModal: boolean = false; // <-- PrimeNG Dialog Control
  SelectedDate : Date = new Date();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load employees';
        this.loading = false;
        console.error(err);
      }
    });
  }

  onAddEmployee() {
    this.newEmployee.joiningDate = moment(this.newEmployee.joiningDate, 'YYYY-MM-DD').utc().toDate();
    debugger;
    if (this.newEmployee.employeeId > 0) {
      // Update
      this.employeeService.updateEmployee(this.newEmployee.employeeId, this.newEmployee)
        .subscribe(
          response => {
            console.log('Employee updated:', response);
            this.refreshEmployees();
            this.resetForm();
            this.showModal = false;  // PrimeNG Dialog close
          },
          error => {
            console.error('Update failed:', error);
            this.resetForm();
            this.showModal = false;
          }
        );
    } else {
      // Create
      this.employeeService.createEmployee(this.newEmployee)
        .subscribe(
          response => {
            console.log('Employee added:', response);
            this.refreshEmployees();
            this.resetForm();
            this.showModal = false;
          },
          error => {
            console.error('Creation failed:', error);
            this.resetForm();
            this.showModal = false;
          }
        );
    }
  }

  onEdit(employee: Employee) {
    debugger; 
    this.newEmployee = { ...employee };
    this.newEmployee.joiningDate = new Date(employee.joiningDate);
    this.showModal = true;  // Open PrimeNG Dialog
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        response => {
          console.log('Employee deleted:', response);
          this.refreshEmployees();
        },
        error => console.error('Deletion failed:', error)
      );
  }

  refreshEmployees() {
    this.fetchEmployees();
  }

  resetForm() {
    this.newEmployee = new Employee();
  }

  get filteredEmployees() {
    if (!this.searchText) {
      return this.employees;
    }
    return this.employees.filter(emp =>
      emp.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      emp.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}


