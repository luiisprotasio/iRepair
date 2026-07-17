export type ServiceOrderStatus='open'| 'in progress'| 'done';
export interface ServiceOrder{
 id:number;
 client:string;
 model:string;
 problem:string;
 date: string;
 status: ServiceOrderStatus;
}
export type CreateServiceOrderData = Omit<ServiceOrder, 'id' | 'date'>;