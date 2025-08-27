"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="relative w-[25px] h-[28px]">
      <Image
        alt="Avatar"
        className="rounded-full"
        fill
        src="/images/placeholder.png"
        objectFit="cover"
      />
    </div>
  );
};

export default Avatar;
