import { api } from './api';
import axios from 'axios';
import type { ServiceOrder, CreateServiceOrderData } from '../types';

export async function getAllServiceOrders(): Promise<ServiceOrder[]> {
  try{const response = await api.get<ServiceOrder[]>('/service-orders');
  return response.data;}
  catch (error){
   if (axios.isAxiosError(error)) {
      console.error('Erro da API:', error.response?.data);
      console.error('Status:', error.response?.status);
      throw error;
    } else {
      console.error('Erro inesperado:', error);
      throw error;
  }
  }
}

export async function createServiceOrder(
  data: CreateServiceOrderData
): Promise<ServiceOrder> {
  try{const response = await api.post<ServiceOrder>('/service-orders', data);
  return response.data;}
   catch (error){
    if (axios.isAxiosError(error)) {
      console.error('Erro da API:', error.response?.data);
      console.error('Status:', error.response?.status);
      throw error;
    } else {
      console.error('Erro inesperado:', error);
      throw error;
  }
  }

}

export async function deleteServiceOrder(id: number): Promise<void> {
 try{ await api.delete(`/service-orders/${id}`);}
  catch (error){
    if (axios.isAxiosError(error)) {
      console.error('Erro da API:', error.response?.data);
      console.error('Status:', error.response?.status);
    } else {
      console.error('Erro inesperado:', error);
  }
}
}
export async function getServiceOrderById(id: number): Promise<ServiceOrder> {
  try{const response = await api.get<ServiceOrder>(`/service-orders/${id}`);
  return response.data;}
    catch (error){
      if (axios.isAxiosError(error)) {
        console.error('Erro da API:', error.response?.data);
        console.error('Status:', error.response?.status);
        throw error;
      } else {
        console.error('Erro inesperado:', error);
        throw error;
    }
    }
}
export async function editServiceOrder(id: number, data: CreateServiceOrderData): Promise<ServiceOrder> {
  try{const response = await api.put<ServiceOrder>(`/service-orders/${id}`, data);
  return response.data;}
    catch (error){
      if (axios.isAxiosError(error)) {
        console.error('Erro da API:', error.response?.data);
        console.error('Status:', error.response?.status);
        throw error;
      } else {
        console.error('Erro inesperado:', error);
        throw error;
    }
    }
}