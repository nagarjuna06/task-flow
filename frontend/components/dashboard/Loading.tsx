import { RefreshCcw } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-10 w-full flex justify-center items-center">
      <RefreshCcw size={20} className="animate-spin text-primary" />
    </div>
  );
};

export default Loading;
