import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Filter, Search, Share2, Sparkles } from "lucide-react";
import React from "react";
import CreateTask from "./CreateTask";

const FilterSection = () => {
  return (
    <div className="my-5 flex justify-between">
      <Input Icon={Search} placeholder="Search..." />
      <div className="flex gap-2">
        <Button className="icon-btn" variant="special">
          <span>Calender View</span>
          <Calendar size={18} />
        </Button>
        <Button className="icon-btn" variant="special">
          <span>Automation</span>
          <Sparkles size={18} />
        </Button>
        <Button className="icon-btn" variant="special">
          <span>Filter</span>
          <Filter size={18} />
        </Button>
        <Button className="icon-btn" variant="special">
          <span>Share</span>
          <Share2 size={18} />
        </Button>
        <CreateTask />
      </div>
    </div>
  );
};

export default FilterSection;
