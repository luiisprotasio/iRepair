export type ServiceOrderStatus = 'open' | 'in_progress' | 'done';

export interface ServiceOrder {
  id: number;
  clientId: number;
  client: { id: number; name: string; email: string; phone: string };
  device: string;
  issue: string;
  createdAt: string;
  status: ServiceOrderStatus;
}

export type CreateServiceOrderData = {
  clientId: number;
  device: string;
  issue: string;
  status?: ServiceOrderStatus;
}