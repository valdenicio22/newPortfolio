import { cn } from "@/utils/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn('px-3 py-4 bg-emerald-600 flex items-center gap-2 text-gray-50 rounded-lg hover:bg-emerald-500 transition-all', className)} {...props}>
      {children}
    </button>
  )
}
