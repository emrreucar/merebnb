"use client";

import useCountries from "@/app/hooks/useCountires";
import Image from "next/image";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: number;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange?: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll() as unknown as CountrySelectValue[]}
        value={value}
        onChange={(value) => onChange?.(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <Image
              src={`https://flagcdn.com/24x18/${option.value.toLowerCase()}.png`}
              alt={`${option.label} flag`}
              width={24}
              height={18}
              className="rounded-sm"
            />
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1"> {option.region}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>
  );
};

export default CountrySelect;
