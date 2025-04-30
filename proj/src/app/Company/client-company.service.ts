import { Injectable } from '@angular/core';
import { ClientCompany } from '../Models/models'; // adjust path if needed
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientCompanyService {

  constructor() {}

  getClientCompany(): Observable<ClientCompany> {
    const mockData: ClientCompany = {
      clientCompanyId: 9,
      companyName: "CompanyName1",
      addressLine1: "Address1",
      phoneNumber: "1234-update24",
      email: "string",
      website: "string",
      accountNumber: "string",
      gstNumber: "string",
      challanTags: [
        {
          challanTagId: 2,
          tagName: "AprilWork-updated24",
          description: "string",
          createdOn: "2025-04-25T11:43:04.178Z",
          isActive: true,
          deleteNbr: 0,
          challans: [
            {
              challanId: 2,
              challanDate: "2025-04-25T00:00:00Z",
              createdOn: "2025-04-25T11:43:04.178Z",
              challanItems: [
                { challanItemId: 4, styleNumber: "WildCat", itemCount: 1000, price: 100000 },
                { challanItemId: 3, styleNumber: "blouse back", itemCount: 10, price: 150 },
                { challanItemId: 2, styleNumber: "blouse", itemCount: 10, price: 100 }
              ]
            },
            {
              challanId: 3,
              challanDate: "2025-04-25T00:00:00Z",
              createdOn: "2025-04-25T11:43:04.178Z",
              challanItems: [
                { challanItemId: 7, styleNumber: "blouse2", itemCount: 10, price: 100 },
                { challanItemId: 6, styleNumber: "blouse back2", itemCount: 10, price: 150 },
                { challanItemId: 5, styleNumber: "WildCat2", itemCount: 1000, price: 100000 }
              ]
            }
          ]
        }
      ]
    };

    return of(mockData); // Simulate an HTTP request
  }
}
