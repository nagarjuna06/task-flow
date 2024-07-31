"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import SessionProvider from "@/context/sessionContext";
import TaskProvider from "@/context/taskContext";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <TaskProvider>
        <div className="grid grid-cols-5 bg-secondary">
          <Sidebar />
          <div className="p-5 col-span-4 h-[90vh] overflow-y-auto">
            {children}
          </div>
        </div>
      </TaskProvider>
    </SessionProvider>
  );
};

export default Layout;
