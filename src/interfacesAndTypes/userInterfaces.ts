export interface LoginFields {
  email: string;
  password: string;
}

export interface User {
  email: string;
  id: number | null;
  firstName: string;
  lastName: string;
  avatarFile?: any;
}

export interface UserData {
  user: User;
  token: string;
}