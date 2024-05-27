import { AppErrorCode } from '@/@types/auth'

export const TOKEN_TYPE = 'Bearer '
export const REQUEST_HEADER_AUTH_KEY = 'Authorization'
export const AppErrorMessage: Record<AppErrorCode, string> = {
  [AppErrorCode.OK]: 'Thành công!',
  [AppErrorCode.USER_NOT_LOGGED_IN]: 'Cần đăng nhập để thực hiện!',
  [AppErrorCode.NO_PERMISSION]: 'Không có quyền!',
  [AppErrorCode.INTERNAL_ERROR]: 'Có lỗi hệ thống, vui lòng thử lại sau!',
  // [AppErrorCode.INVALID_UPLOAD_FILE_TYPE]: 'Định dạng file không hợp lệ!',
  [AppErrorCode.PAGE_OUT_OF_RANGE]: 'Vượt quá số trang tối đa!',
  [AppErrorCode.WRONG_USERNAME_OR_PASSWORD]: 'Sai tài khoản hoặc mật khẩu!',
  [AppErrorCode.WRONG_OLD_PASSWORD]: 'Sai mật khẩu cũ!',
  [AppErrorCode.USERNAME_IN_USE]: 'Username đã tổn tại!',
  [AppErrorCode.INVALID_PASSWORD]: 'Mật khẩu không hợp lệ!',
  [AppErrorCode.INVALID_PARAMETERS]: 'Tham số không hợp lệ',
  [AppErrorCode.COURSE_NOT_FOUND]: 'Không tìm thấy thông tin, vui lòng thử lại!',
}
