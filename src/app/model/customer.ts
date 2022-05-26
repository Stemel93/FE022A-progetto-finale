import { Sede } from './sede';
export interface Customer {
  id: number;
  ragioneSociale: string;
  partitaIva: string;
  tipoCliente: string;
  email: string;
  pec: string;
  telefono: string;
  nomeContatto: string;
  cognomeContatto: string;
  telefonoContatto: string;
  emailContatto: string;
  indirizzoSedeOperativa: Sede;
  indirizzoSedeLegale: Sede;
  dataInserimento: string;
  dataUltimoContatto: string;
}
