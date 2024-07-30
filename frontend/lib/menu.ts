import {
  ChartSpline,
  Home,
  LucideIcon,
  Settings,
  SquareKanban,
  Users,
} from "lucide-react";

type MenuItem = {
  title: string;
  href: string;
  Icon: LucideIcon;
};

export const menu: MenuItem[] = [
  {
    title: "Home",
    href: "/home",
    Icon: Home,
  },
  {
    title: "Boards",
    href: "/boards",
    Icon: SquareKanban,
  },
  {
    title: "Settings",
    href: "/settings",
    Icon: Settings,
  },
  {
    title: "Teams",
    href: "/teams",
    Icon: Users,
  },
  {
    title: "Analytics",
    href: "/analytics",
    Icon: ChartSpline,
  },
];
