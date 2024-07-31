import { useSession } from "@/context/sessionContext";
import { heroCardsData } from "@/lib/hero-cards";
import React from "react";
import HeroCard from "./HeroCard";
import Loading from "../../Loading";
import Failed from "../../Failed";

const HeroSection = () => {
  const { loading, user } = useSession();
  if (loading) return <Loading />;
  if (!user) return <Failed title="User" />;
  return (
    <div>
      <h1 className="text-4xl font-semibold">Good Morning, {user.name}</h1>
      <div className="flex gap-3 mt-3">
        {heroCardsData.map((each, i) => (
          <HeroCard {...each} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
