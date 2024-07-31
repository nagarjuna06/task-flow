import { priorityColors } from "@/lib/colors";
import { generateLabel } from "@/lib/fields";
import { cn } from "@/lib/utils";
import { TaskPriority } from "@/types/task";
import React from "react";

type Props = {
  priority?: TaskPriority;
};

const PriorityBadge = ({ priority }: Props) => {
  if (!priority) return;
  return (
    <div
      className={cn(
        "p-1 w-fit text-white text-sm rounded-lg",
        priorityColors[priority as keyof object]
      )}
    >
      {generateLabel(priority)}
    </div>
  );
};

export default PriorityBadge;
