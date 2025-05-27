import * as React from "react"
import {
  AudioWaveform,
  Command,
  File,
  GalleryVerticalEnd,
  Layers,
  Image,
  PlayCircle,
  Droplet,
  Terminal,
} from "lucide-react";


import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  projects: [
    {
      name: "UI Components",
      url: "/components",
      icon: Layers,
    },
    {
      name: "Illustration Assets",
      url: "/illustrations",
      icon: Image,
    },
    {
      name: "Animation & Effects",
      url: "/animation",
      icon: PlayCircle,
    },
    {
      name: "Color & Styling Tools",
      url: "/color",
      icon: Droplet,
    },
    {
      name: "Developer Platforms",
      url: "/developer",
      icon: Terminal,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
