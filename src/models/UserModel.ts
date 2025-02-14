export interface User {
  id?: number; // Optional เพราะตอนสร้าง user ยังไม่มี ID
  name: string;
  email: string;
  password?: string; // Optional หากไม่จำเป็นต้องส่ง password
  createdAt?: Date; // Optional เพราะได้มาจาก Backend
  updatedAt?: Date; // Optional
}
