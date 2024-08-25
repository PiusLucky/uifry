import { cn } from "@/lib/utils";
import React from "react";

function FaqCard({ title, description, type }: IFaqCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col  gap-2 p-[31px] rounded-[8px]",
        type === "white" ? "bg-primary" : "bg-white"
      )}
    >
      <p className={cn(type === "white" ? "text-white" : "text-black", "font-semibold text-[28px]")}>
        {title}
      </p>
      <p className={cn(type === "white" ? "text-white" : "text-black")}>
        {description}
      </p>
    </div>
  );
}

export default FaqCard;
