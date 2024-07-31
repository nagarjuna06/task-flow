import { heroCard } from "@/lib/hero-cards";
import Image from "next/image";
import React from "react";

const HeroCard = ({ title, description, image }: heroCard) => {
  return (
    <div className="flex gap-3 shadow border border-secondary rounded-lg p-2 w-full">
      <Image src={image} alt={title} width={100} height={100} />
      <div>
        <h2 className="text-gray-500 font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
