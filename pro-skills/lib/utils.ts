import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//quản lý các className
//định nghĩa một hàm cn được sử dụng để kết hợp các giá trị class CSS lại với nhau 
//sử dụng hai thư viện phổ biến là clsx và tailwind-merge
