"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  // useCallback: performans optimizasyonu -> daha az re-render, daha iyi performans, özellikle büyük listelerde fark edilir seviyede hız artışı
  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    type Query = {
      category?: string;
      [key: string]: string | undefined;
    };

    const updatedQuery: Query = {
      ...currentQuery,
      category: label,
    };

    // toggle category
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true } // skipNull: boş değerleri olan query parametrelerini atla.
    );

    router.push(url);
  }, [label, params, router]); // label, params, router değişmediği sürece yeniden oluşturulmaz.

  return (
    <div
      onClick={handleClick}
      className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            select-none
            ${selected ? "border-b-neutral-800" : "border-transparent"}
            ${selected ? "text-neutral-800" : "text-neutral-500"}
        `}
    >
      <Icon size={26} />

      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
