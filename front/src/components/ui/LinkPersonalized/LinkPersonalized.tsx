import React from "react";
import Link from "next/link";

interface ILink {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "accent"
    | "error"
    | "buy"
    | null;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  onClick?: () => void;
  href: string;
  isTextLink?: boolean;
}

const LinkPersonalized: React.FC<ILink> = ({
  children,
  className = "",
  variant = "secondary",
  size = "base",
  onClick,
  href = "/",
  isTextLink = false,
}) => {
  const sizeClasses = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl",
    xl: "text-xl sm:text-2xl",
  };

  const buttonSizeClasses = {
    xs: "px-2 py-1 sm:px-3 sm:py-1.5",
    sm: "px-3 py-1.5 sm:px-4 sm:py-2",
    base: "px-4 py-2 sm:px-5 sm:py-2.5",
    lg: "px-5 py-2.5 sm:px-6 sm:py-3",
    xl: "px-6 py-3 sm:px-7 sm:py-3.5",
  };

  const variantClasses = {
    primary: "text-blue-600 hover:text-blue-800",
    secondary: "text-gray-600 hover:text-gray-800",
    tertiary: "text-gray-500 hover:text-gray-700",
    accent: "text-purple-600 hover:text-purple-800",
    error: "text-red-600 hover:text-red-800",
    buy: "text-green-600 hover:text-green-800",
  };

  const buttonVariantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    tertiary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
    accent: "bg-purple-500 text-white hover:bg-purple-600",
    error: "bg-red-500 text-white hover:bg-red-600",
    buy: "bg-green-500 text-white hover:bg-green-600",
  };

  const baseClasses = isTextLink
    ? `${sizeClasses[size]} ${variant ? variantClasses[variant] : ""} hover:underline`
    : `inline-block rounded-md font-medium shadow-md transition-all ease-in-out
       hover:scale-110 active:scale-90
       ${sizeClasses[size]} ${buttonSizeClasses[size]}
       ${variant ? buttonVariantClasses[variant] : ""}`;

  return (
    <Link
      href={href}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LinkPersonalized;
