import ApiService from './ApiService'
import type {
  SignInCredential,
  ForgotPassword,
  ResetPassword,
  SignInResponse,
} from '@/@types/auth'

export async function apiSignIn(data: SignInCredential | undefined) {
  return ApiService.fetchData<SignInResponse>({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export async function apiSignOut() {
  return ApiService.fetchData({
    url: '/user/logout',
    method: 'get',
  })
}

export async function apiForgotPassword(data: ForgotPassword) {
  return ApiService.fetchData({
    url: '/forgot-password',
    method: 'post',
    data,
  })
}

export async function apiResetPassword(data: ResetPassword) {
  return ApiService.fetchData({
    url: '/reset-password',
    method: 'post',
    data,
  })
}
