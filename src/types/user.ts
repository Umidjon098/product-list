export interface IUser {
  id: number;
  uuid: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  gender?: string;
  email_verified_at: string;
  registered_at: string;
  active: boolean;
  role: string;
  img: string;
}
