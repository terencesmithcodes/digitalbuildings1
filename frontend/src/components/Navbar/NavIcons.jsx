import {
  OfficeBuildingIcon,
  CogIcon,
  LogoutIcon,
  TemplateIcon,
  
} from "@heroicons/react/outline";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <TemplateIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Select Building",
    icon: <OfficeBuildingIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Settings",
    icon: <CogIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
  },
];
