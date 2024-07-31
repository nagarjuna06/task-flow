import { BellDot, ChevronsRight, Loader } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "@/context/sessionContext";
import Loading from "./Loading";
import Failed from "./Failed";

const UserProfile = () => {
  const { loading, user, logoutSession } = useSession();
  if (loading) return <Loading />;

  if (!user) return <Failed title="User" />;

  return (
    <div>
      <div className="flex gap-3 items-center">
        <Button variant="gradient" className="text-lg">
          {user.name.charAt(0).toUpperCase()}
        </Button>
        <p className="text-lg font-semibold">{user.name}</p>
      </div>
      {/* features */}
      <div className="flex justify-between mt-5 text-gray-500">
        <div className="flex items-center gap-5">
          <BellDot size={25} />
          <Loader size={25} />
          <ChevronsRight size={25} />
        </div>
        <Button variant="special" onClick={logoutSession}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
