"use client";

import React from "react";
import { IconType } from "react-icons";
import { BiLoader } from "react-icons/bi";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        cursor-pointer
        ${outline ? "bg-white" : "bg-rose-500"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1" : "py-3"}
        ${small ? "text-sm" : "text-base"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}

    `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
                    absolute
                    left-4
                    top-3
                "
        />
      )}
      <div className="flex items-center justify-center gap-2 ">
        {label}
        {disabled && <BiLoader className="size-5 animate-spin" />}
      </div>
    </button>
  );
};

export default Button;
