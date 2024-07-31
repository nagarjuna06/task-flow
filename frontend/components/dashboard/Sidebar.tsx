"use client";

import { menu } from "@/lib/menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import UserProfile from "./UserProfile";
import CreateTask from "./home/tasks/CreateTask";
import { ArrowDownToLine } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="p-5 w-[300px] h-full shadow min-h-screen">
      {/* user profile */}
      <UserProfile />
      {/* menu list */}
      <div className="flex flex-col justify-between h-[80vh]">
        <div className="flex flex-col gap-3 mt-5 text-gray-500 mb-5">
          {menu.map((each, i) => (
            <Link
              href={`/dashboard${each.href}`}
              key={i}
              className={cn(
                "flex gap-3 items-center w-full hover:bg-gray-200 p-2 rounded-lg",
                {
                  "bg-gray-200": pathname.includes(each.href),
                }
              )}
            >
              <each.Icon size={25} />
              <p>{each.title}</p>
            </Link>
          ))}
          <CreateTask />
        </div>
        <div className="text-gray-500 flex gap-2 w-full bg-gray-200 rounded-lg p-2 justify-center items-center">
          <ArrowDownToLine size={25} />
          <div>
            <h3 className="font-semibold">Download the app</h3>
            <p className="text-sm">Get the full experience </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
