import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ClientCompanyService } from './client-company.service';
import { ClientCompany } from '../Models/models';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-client-company',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  templateUrl: './client-company.component.html',
})
export class ClientCompanyComponent {
  form: FormGroup;

  showCompanyForm = false;

  companyOptions :any = [
    { companyName: 'Company A', id: 1 },
    { companyName: 'Company B', id: 2 },
    { companyName: 'Company C', id: 3 }
  ];

  constructor(
    private fb: FormBuilder,
    private clientCompanyService: ClientCompanyService
  ) {
    this.form = this.fb.group({
      companyName: [''],
      addressLine1: [''],
      phoneNumber: [''],
      email: [''],
      website: [''],
      accountNumber: [''],
      gstNumber: [''],
      challanTags: this.fb.array([]),
    });
  }

  ngOnInit() {

    this.form = this.fb.group({
        selectedCompany: [null]  ,
        companyForm: this.createEmptyCompanyForm()
      });

    this.clientCompanyService.getClientCompany().subscribe(data => {
      this.populateForm(data);
    });
  }

  toggleAddCompany(flag: boolean) {
    this.showCompanyForm = flag;
    this.form.get('selectedCompany')?.reset();
  }

  onCompanySelect(event: any) {
    if (event.value) {
      // Populate the form with the existing company details
      this.showCompanyForm = false;
      this.form.patchValue({
        companyName: event.value.companyName,
        addressLine1: event.value.address,
        phoneNumber: event.value.phoneNumber,
        email: event.value.email,
        website: event.value.website,
        accountNumber: event.value.accountNumber,
        gstNumber: event.value.gstNumber,
      });
    }
}

  populateForm(data: ClientCompany): void {
    // Update the main form fields
    this.form.patchValue({
      companyName: data.companyName,
      addressLine1: data.addressLine1,
      phoneNumber: data.phoneNumber,
      email: data.email,
      website: data.website,
      accountNumber: data.accountNumber,
      gstNumber: data.gstNumber,
    });

    // Dynamically create form groups for each challan tag
    const challanTagsFGs = data.challanTags.map(tag => this.fb.group({
      challanTagId: tag.challanTagId,
      tagName: tag.tagName,
      description: tag.description,
      challans: this.fb.array(tag.challans.map(challan => this.fb.group({
        challanId: challan.challanId,
        challanDate: challan.challanDate,
        challanItems: this.fb.array(challan.challanItems.map(item => this.fb.group({
          challanItemId: item.challanItemId,
          styleNumber: item.styleNumber,
          itemCount: item.itemCount,
          price: item.price
        })))
      })))
    }));

    // Add the dynamically created form groups to the form array
    const challanTagsFA = this.form.get('challanTags') as FormArray;
    challanTagsFGs.forEach(fg => challanTagsFA.push(fg));
  }

  get challanTags(): FormArray {
    return this.form.get('challanTags') as FormArray;
  }

  // Method to get challans of a particular challan tag
  getChallans(tagIndex: number): FormArray {
    return this.challanTags.at(tagIndex).get('challans') as FormArray;
  }

  // Method to get challan items for a particular challan
  getChallanItems(tagIndex: number, challanIndex: number): FormArray {
    const challansArray = this.challanTags.at(tagIndex).get('challans') as FormArray;
    const challanGroup = challansArray.at(challanIndex) as FormGroup;
    return challanGroup.get('challanItems') as FormArray;
  }

  // Methods to add new entities to the form (challan tags, challans, and challan items)
  createChallanItem(): FormGroup {
    return this.fb.group({
      styleNumber: [''],
      itemCount: [0],
      price: [0]
    });
  }

  createChallan(): FormGroup {
    return this.fb.group({
      challanDate: [''],
      challanItems: this.fb.array([this.createChallanItem()])
    });
  }

  createChallanTag(): FormGroup {
    return this.fb.group({
      challanTagId: [null],  // Dynamically filled
      tagName: [''],
      description: [''],
      challans: this.fb.array([this.createChallan()])
    });
  }

  addChallanTag(): void {
    this.challanTags.push(this.createChallanTag());
  }

  addChallan(tagIndex: number): void {
    this.getChallans(tagIndex).push(this.createChallan());
  }

  addChallanItem(tagIndex: number, challanIndex: number): void {
    this.getChallanItems(tagIndex, challanIndex).push(this.createChallanItem());
  }

  onSubmit() {
    console.log(this.form.value);
  }

  addCompany(): void {
    // Reset the company form to a fresh blank structure
    this.form.get('selectedCompany')?.reset();
    this.form.setControl('companyForm', this.createEmptyCompanyForm());
  }

  createEmptyCompanyForm(): FormGroup {
    return this.fb.group({
      clientCompanyId: null,
      companyName: '',
      addressLine1: '',
      phoneNumber: '',
      email: '',
      website: '',
      accountNumber: '',
      gstNumber: '',
      challanTags: this.fb.array([])
    });
  }
}
