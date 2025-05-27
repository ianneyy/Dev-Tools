import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink, BreadcrumbItem
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
    name: "21st.dev",
    description: "Discover, share & remix the best UI components",
    href: "https://21st.dev/",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    name: "Shadcn",
    description: "Build your React component library",
    href: "https://ui.shadcn.com/",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    name: "DaisyUI",
    description: "Faster, cleaner, easier Tailwind CSS development",
    href: "https://daisyui.com/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    name: "HeadlessUI",
    description: "Faster, cleaner, easier Tailwind CSS development",
    href: "https://headlessui.com/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    name: "Radix UI",
    description: "Unstyled, accessible components for React",
    href: "https://www.radix-ui.com/",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const features2 = [
  {
    name: "Blade Icons",
    description:
      "A package to easily make use of SVG icons in your Laravel Blade views. Choose from a wide selection of icon sets. ",
    href: "https://blade-ui-kit.com/blade-icons",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
  {
    name: "Flowbite",
    description:
      "Build websites even faster with components on top of Tailwind CSS",
    href: "https://flowbite.com/",
    cta: "Browse",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
];

export default function Components() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    UI Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className="hidden md:block">
                  <ModeToggle />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
          <BentoGrid className="lg:grid-rows-3">
            {features2.map((features2) => (
              <BentoCard key={features2.name} {...features2} />
            ))}
          </BentoGrid>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
