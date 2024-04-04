export interface Queue {
  visitorNumber: string;
  payment: string;
  polyclinicCode: string;
}

export interface ApiResponse {
  success: boolean;
  date_end: Date | null;
  date_start: Date | null;
  message: string;
  description: string;
  data: any[]; // You can specify a more specific type for 'data' if you know its structure
}
