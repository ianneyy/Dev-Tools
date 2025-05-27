import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
const features = [
  {
    name: "Colorffy",
    description: "The easiest CSS Color Palette Generators.",
    href: "https://colorffy.com/",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
];

export default function Color() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <ModeToggle />
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
