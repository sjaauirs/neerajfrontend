import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../envirinment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Employee/All`);
  }

  updateEmployee(id: number, employeeData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Employee/${id}`, employeeData);
  }
  
  createEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Employee`, employeeData);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Employee/${id}`);
  }
  


}
