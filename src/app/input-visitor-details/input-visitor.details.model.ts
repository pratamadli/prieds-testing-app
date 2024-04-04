export interface Visitor {
  firstName: string;
  lastName: string;
  idCard: string;
  birthDate: string;
  contactNumber: number;
  email: string;
  address: string;
  sex: string;
  height: number;
  weight: number;
  city: string;
  province: string;
  emergencyContactName: string;
  emergencyContactNumber: number;
}

export interface ApiResponse {
  success: boolean;
  date_end: Date | null;
  date_start: Date | null;
  message: string;
  description: string;
  data: any[]; // You can specify a more specific type for 'data' if you know its structure
}
