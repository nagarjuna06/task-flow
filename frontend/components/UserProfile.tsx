import { getSession, logout } from "@/apis/auth";
import { User } from "@/types/user";
import { BellDot, ChevronsRight, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  useEffect(() => {
    getSession(setUser);
  }, []);
  const logoutUer = () => {
    logout();
    router.replace("/login");
  };
  if (!user) return;
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="bg-primary w-10 aspect-square flex justify-center items-center rounded-lg">
          <span className="text-white font-bold text-lg">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <p>{user.name}</p>
      </div>
      {/* features */}
      <div className="flex justify-between mt-5">
        <div className="flex items-center gap-5">
          <BellDot size={25} />
          <Loader size={25} />
          <ChevronsRight size={25} />
        </div>
        <Button variant="secondary" onClick={logoutUer}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
