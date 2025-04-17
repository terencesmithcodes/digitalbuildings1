import {
  OfficeBuildingIcon,
  CogIcon,
  LogoutIcon,
  HomeIcon,
  ChartBarIcon,
  SupportIcon
} from "@heroicons/react/outline";

export const navLinks = [
  {
    id: 0,
    title: "Home",
    icon: <HomeIcon className="nav-icon" />,
    path: '/'
  },
  {
    id: 1,
    title: "Building",
    icon: <OfficeBuildingIcon className="nav-icon" />,
    path: '/building'
  },
  {
    id: 2,
    title: "Analytics",
    icon: <ChartBarIcon className="nav-icon" />,
    path: '/energy'
  },
  {
    id: 3,
    title: "Support",
    icon: <SupportIcon className="nav-icon" />,
    path: '/building'
  },
  {
    id: 4,
    title: "Logout",
    icon: <LogoutIcon className="nav-icon" />,
    path: '/'
  },
];
