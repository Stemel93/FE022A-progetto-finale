import { Customer } from './customer';
export interface Invoice {
  id?: number;
  data: string;
  numero: number;
  anno: number;
  importo: number;
  stato: {
    id: number;
    nome: string;
  };
  cliente: Customer;
}
