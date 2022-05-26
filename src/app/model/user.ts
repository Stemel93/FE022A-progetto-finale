export interface User {
  accessToken: string;
  nome: string;
  cognome: string;
  email: string;
  id: number;
  Roles: [
    {
      id: number;
      roleName: string;
    }
  ];
  tokenType: string;
  username: string;
}
