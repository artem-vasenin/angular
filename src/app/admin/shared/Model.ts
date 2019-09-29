export interface User {
  email: string;
  password: string;
}

export interface Environment {
  apiKey: string;
  production: boolean;
}

export interface FbAuthResponse {
  idToken: string;
}
