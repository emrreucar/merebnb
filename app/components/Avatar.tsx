"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <div className="relative w-[30px] h-[30px]">
      <Image
        alt="Avatar"
        className="rounded-full"
        fill
        src="/images/placeholder.png"
      />
    </div>
  );
};

export default Avatar;
