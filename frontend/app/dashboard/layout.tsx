"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import SessionProvider from "@/context/sessionContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <div className="grid grid-cols-5 bg-secondary">
        <Sidebar />
        <div className="p-5 col-span-4">{children}</div>
      </div>
    </SessionProvider>
  );
};

export default Layout;
