import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type PrimarySelectType = {
  placeholder: string;
  labelName: string;
  selectItems: { label: string; value: string }[];
  handleChange: (e: React.SetStateAction<string>) => void;
};

export function PrimarySelect({
  placeholder,
  labelName,
  selectItems,
  handleChange,
}: PrimarySelectType) {
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[200px] font-medium flex items-center justify-center gap-2">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent
        ref={(ref) => {
          if (!ref) return;
          ref.ontouchstart = (e) => {
            e.preventDefault();
          };
        }}
      >
        <SelectGroup>
          {/* <SelectLabel>{labelName}</SelectLabel> */}
          {selectItems.map((item, index) => {
            return (
              <SelectItem value={item.value} key={index}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
