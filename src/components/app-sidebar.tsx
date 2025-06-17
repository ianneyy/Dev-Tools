import * as React from "react"
import {
  AudioWaveform,
  Command,
  Wand,
  GalleryVerticalEnd,
  Layers,
  Image,
  PlayCircle,
  Terminal,
  Link,
} from "lucide-react";



import { NavProjects } from "@/components/nav-projects"

import {
  Sidebar,
  SidebarContent,

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
      name: "Layout & Styling Tools",
      url: "/color",
      icon: Wand,
    },
    {
      name: "Developer Platforms",
      url: "/developer",
      icon: Terminal,
    },
    {
      name: "API",
      url: "/api",
      icon: Link,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
     
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
     
      <SidebarRail />
    </Sidebar>
  )
}
