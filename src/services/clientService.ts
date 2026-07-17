import { api } from './api';
import axios from 'axios';
import type { Client, CreateClientData } from '../types/';

export async function getAllClients(): Promise<Client[]> {
  try{const response = await api.get<Client[]>('/clients');
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

export async function createClient(data: CreateClientData): Promise<Client> {
  try{const response = await api.post<Client>('/clients', data);
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

export async function deleteClient(id: number): Promise<void> {
  try{await api.delete(`/clients/${id}`);}
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