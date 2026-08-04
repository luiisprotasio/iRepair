import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  withCredentials: false,
  headers: {
    // ✔️ Cole aqui o seu token pessoal!
    // Acesse trainee.fidelis.workers.dev/inicio para pegar o seu.
    'Authorization': 'Bearer f15e5ef4-d17b-4245-8ddf-b9556f5c389b',
    'Content-Type': 'application/json',
  },
});