"use client";

import { menu } from "@/lib/menu";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import UserProfile from "./UserProfile";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="p-5 w-[300px] h-screen shadow">
      {/* user profile */}
      <UserProfile />
      {/* menu list */}
      <div className="flex flex-col gap-3 mt-5 text-gray-500">
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
      </div>
    </div>
  );
};

export default Sidebar;
