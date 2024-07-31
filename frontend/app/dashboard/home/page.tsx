"use client";
import HeroSection from "@/components/dashboard/home/hero/HeroSection";
import FilterSection from "@/components/dashboard/home/tasks/FilterSection";
import TaskSection from "@/components/dashboard/home/tasks/TaskSection";
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <HeroSection />
      <FilterSection />
      <TaskSection />
    </div>
  );
};

export default DashboardHome;
