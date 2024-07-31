import { TriangleAlert } from "lucide-react";
import React from "react";

type Props = {
  title: string;
};
const Failed = ({ title }: Props) => {
  return (
    <div className="text-red-500 py-5 flex items-center gap-2 justify-center">
      <TriangleAlert size={20} />
      <p>
        Failed to load <b>{title}</b> data
      </p>
    </div>
  );
};

export default Failed;
