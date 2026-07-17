export interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  date: string;
}
export type CreateClientData = Omit<Client, 'id' | 'date'>;