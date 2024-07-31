import { useSession } from "@/context/sessionContext";
import { heroCardsData } from "@/lib/hero-cards";
import React from "react";
import HeroCard from "./HeroCard";
import Loading from "../../Loading";
import Failed from "../../Failed";
import { CircleHelp } from "lucide-react";

const HeroSection = () => {
  const { loading, user } = useSession();
  if (loading) return <Loading />;
  if (!user) return <Failed title="User" />;
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold">Good Morning, {user.name}</h1>
        <div className="icon-btn">
          <span>Help & Feedback</span>
          <CircleHelp size={20} />
        </div>
      </div>
      <div className="flex gap-3 mt-3">
        {heroCardsData.map((each, i) => (
          <HeroCard {...each} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
