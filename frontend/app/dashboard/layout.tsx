import Sidebar from "@/components/Sidebar";
import React from "react";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
