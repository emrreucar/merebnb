"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer object-cover"
        height="100"
        width="100"
        src="/images/logo_airbnb.png"
        onClick={() => router.push("/")}
      />
    </React.Fragment>
  );
};

export default Logo;
