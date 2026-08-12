export type ServiceOrderStatus='open'| 'in_progress'| 'done';
export interface ServiceOrder{
 id:number;
 client_id:number;
 device:string;
 issue:string;
 created_at: string;
 status: ServiceOrderStatus;
}
export type CreateServiceOrderData = {
 clientId:number;
 device:string;
 issue:string;
 status: ServiceOrderStatus;
}