export interface Visitor {
  _id: string;
  visitorNumber: string;
  token: string;
  queueNumber: number;
  payment: string;
  polyclinicCode: string;
  polyclinicName: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse {
  success: boolean;
  date_end: Date | null;
  date_start: Date | null;
  message: string;
  description: string;
  data: any[]; // You can specify a more specific type for 'data' if you know its structure
}
