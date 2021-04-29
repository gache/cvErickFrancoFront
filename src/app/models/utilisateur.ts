
export interface IUtilisateur {
  id?: number;
  username: string;
  password: string;
  prenom: string;
  nom: string;
  email: string;
  roles: string[];
}


export class Utilisateur implements IUtilisateur {
  id?: number;
  username: string;
  password: string;
  prenom: string;
  nom: string;
  email: string;
  roles: string[] = [];
}