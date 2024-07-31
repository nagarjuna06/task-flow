import { getSession, logout } from "@/apis/auth";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type SessionContextProps = {
  user?: User;
  logoutSession: () => void;
  loading: boolean;
};

const SessionContext = createContext<SessionContextProps>({
  user: undefined,
  logoutSession: () => {},
  loading: false,
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const fetchUser = useCallback(async () => {
    try {
      const res = await getSession();
      setUser(res.data);
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const router = useRouter();

  const logoutSession = () => {
    logout();
    router.replace("/login");
  };
  return (
    <SessionContext.Provider value={{ loading, user, logoutSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

export const useSession = (): SessionContextProps => {
  const context = useContext(SessionContext);
  return context;
};
