import { AuthRole } from "../auth";

export type CreateUserType = {
  fullname: string
  username: string
  password: string
  newPassword?: string
  oldPassword?: string
  img?: string
  imgList?: any[]
  phone?: string
  email?: string
  description?: string
  role?: AuthRole
  passwordSwitcher?: boolean
}