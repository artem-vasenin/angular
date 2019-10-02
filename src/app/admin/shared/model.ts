export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface Environment {
  apiKey: string;
  production: boolean;
  fbDbUrl: string;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface FbCreateResponse {
  name: string;
}

export interface Post {
  id?: string;
  title: string;
  author: string;
  text: any;
  date: Date;
}

export type AlertType = 'success' | 'warning' | 'danger';

export interface Alert {
  type: AlertType;
  text: string;
}
