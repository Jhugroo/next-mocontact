import type { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

type buttonProps = {
    small?: boolean
    gray?: boolean
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>
    , HTMLButtonElement>;

export function Button({ small = false, gray = false, className = "", ...props }: buttonProps) {
    const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
    const colorClasses = gray ? "bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300" : "bg-blue-400 hover:bg-blue-300 focus-visible:bg-blue-300";
    return <button className={`text-white rounded-full transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses} ${colorClasses} ${className}`}{...props}></button>;
}