import type React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  BarChart,
  ChevronDown,
  LayoutDashboardIcon,
  QrCode,
  ShieldCheck,
  UserCog,
  UserPen,
  UserPlus,
  UserSquare,
  Workflow,
} from "lucide-react";
import logoTop from "../assets/logo-top.svg";
import { Collapsible, CollapsibleContent } from "./ui/collapsible";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";

const items = [
  {
    label: "",
    content: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: "View Merchant",
        url: "#",
        icon: UserSquare,
      },
      {
        title: "Generate QR Code",
        url: "#",
        icon: QrCode,
      },
      {
        title: "Transaction Management",
        url: "#",
        icon: BarChart,
      },
      {
        title: "Operation Management",
        url: "#",
        icon: Workflow,
      },
      {
        title: "Role Management",
        url: "#",
        icon: ShieldCheck,
      },
    ],
  },
  {
    label: "User Management",
    content: [
      {
        title: "User Profile",
        url: "#",
        icon: UserPen,
      },
      {
        title: "Password Reset",
        url: "#",
        icon: UserCog,
      },

      {
        title: "User Registration",
        url: "#",
        icon: UserPlus,
      },
    ],
  },
];
export const AppSidebar: React.FC = () => {
  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader className="bg-[#1a222c] group-data-[collapsible=icon]:hidden">
        <SidebarMenu>
          <SidebarMenuItem>
            <img src={logoTop} className="object-cover w-35 h-35" alt="Logo" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#1a222c] text-white">
        {items.map((group, index) => (
          <Collapsible
            key={group?.label + index}
            className="group/collapsible"
            defaultOpen={index == 0}
          >
            <SidebarGroup>
              <SidebarGroupLabel className="text-white">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-base">
                  {group?.label}
                  {group?.label && (
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  )}
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group?.content.map((item) => (
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="">
                            <item.icon
                              className="text-[#e45f06] w-6! h-6!"
                              width={24}
                              height={24}
                            />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
