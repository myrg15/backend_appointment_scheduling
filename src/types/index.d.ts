export {};

export interface TokenDecoded {
  user: number;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    export interface Request {
      // decoded token
      token: TokenDecoded;
    }
  }
}
