export type Role = "admin" | "manager" | "user";

export interface JwtPayload {
  userId: string;
  email: string;
  role: Role;
}
