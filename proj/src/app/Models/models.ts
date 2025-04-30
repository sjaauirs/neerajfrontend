export interface ChallanItem {
    challanItemId: number;
    styleNumber: string;
    itemCount: number;
    price: number;
  }
  
  export interface Challan {
    challanId: number;
    challanDate: string;
    createdOn: string;
    challanItems: ChallanItem[];
  }
  
  export interface ChallanTag {
    challanTagId: number;
    tagName: string;
    description: string;
    createdOn: string;
    isActive: boolean;
    deleteNbr: number;
    challans: Challan[];
  }
  
  export interface ClientCompany {
    clientCompanyId: number;
    companyName: string;
    addressLine1: string;
    phoneNumber: string;
    email: string;
    website: string;
    accountNumber: string;
    gstNumber: string;
    challanTags: ChallanTag[];
  }
  
  export interface Company {
    id: number;
    companyName: string;
    addressLine1: string;
    phoneNumber: string;
    email: string;
    website: string;
    challanTags: any[]; // adjust the type if needed
  }