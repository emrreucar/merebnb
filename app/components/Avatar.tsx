"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div className="relative w-[25px] h-[28px]">
      <Image
        alt="Avatar"
        className="rounded-full"
        fill
        src={src || "/images/placeholder.png"}
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
