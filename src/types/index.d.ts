export type UserType = {
  id?: any;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin?: boolean | null;
  logs?: any;
};

export type NODE_SECRET_TYPE = string;
export type NODE_COOKIE_RESAVE = boolean;
export type NODE_ADMIN_EMAIL_TYPE = string;
export type NODE_ADMIN_PASSWORD_TYPE = string;
export type NODE_COOKIE_SAVE_UNINITIALZED_TYPE = string;
export type NODE_EX = boolean;
