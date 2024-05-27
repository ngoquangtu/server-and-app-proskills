export type SignInCredential = {
    username: string
    password: string
    remember_login: boolean
  }
  
  export type UserInfo = {
    fullname: string
    username: string
    id: number
    email: string
    role: AuthRole
    img: string
    enabled: boolean
  }
  
  export type SignInResponse = {
    error: { code: AppErrorCode; msg: string }
    user_info?: UserInfo
  }
  
  export type CreateUserResponse = Pick<SignInResponse, 'error'> & {
    user_id: number
  }
  
  export type SignUpCredential = {
    username: string
    password: string
    email: string
    fullname: string
    role: number | string
  }
  
  export type ForgotPassword = {
    email: string
  }
  
  export type ResetPassword = {
    password: string
  }
  
  export enum AppErrorCode {
    OK,
    USER_NOT_LOGGED_IN,
    NO_PERMISSION,
    INTERNAL_ERROR,
    INVALID_UPLOAD_FILE_TYPE,
    PAGE_OUT_OF_RANGE,
  
    WRONG_USERNAME_OR_PASSWORD,
    WRONG_OLD_PASSWORD,
    USERNAME_IN_USE,
    INVALID_PASSWORD,
    INVALID_PARAMETERS,
    INVALID_EMAIL,
  }
  
  export enum AuthRole {
    UNAUTHENTICATED,
    SYSTEM_ADMIN,
    SYSTEM_USER,
  }
  