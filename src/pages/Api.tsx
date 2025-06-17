import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useEffect, useState } from "react";
import axios from "axios";
import Dialog03 from "@/components/dialog-1";


// const features = [
//   {
//     name: "CurrencyScoop",
//     description: "Get exchange rates and convert currencies in real-time",
//     href: "https://currencybeacon.com/",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://currencybeacon.com/"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
//   },
//   {
//     name: "Rapid API",
//     description:
//       "A marketplace that connects developers with thousands of APIs, enabling easy discovery, testing, and integration in one platform.",
//     href: "https://rapidapi.com/",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://rapidapi.com/"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
//   },
//   {
//     name: "SerpAPI",
//     description:
//       "Real-time API that scrapes and delivers search engine results from Google, Bing, and others in a structured format.",
//     href: "https://serpapi.com/",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://serpapi.com/"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4",
//   },
//   {
//     name: "Resend",
//     description: "Send transactional emails easily (auth codes, receipt, etc.)",
//     href: "https://resend.com/",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://resend.com/"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-1",
//   },

//   {
//     name: "Public APIs",
//     description: "A curated list of free public APIs for development.",
//     href: "https://public-apis.io/",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://public-apis.io/"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-1",
//   },
//   {
//     name: "API List",
//     description: " Fun and useful free APIs, well-categorized.",
//     href: "https://apilist.fun",
//     cta: "Browse",
//     background: (
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
//         <iframe
//           src="https://apilist.fun"
//           className="h-full w-full scale-[1.2] transform rounded-xl"
//         />
//       </div>
//     ),
//     className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//   },
// ];
type Tool = {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
};
export default function Api() {
  const [tools, setTools] = useState<Tool[]>([]);
  useEffect(() => {
    axios
      .get("https://dev-tools-backend-aar6.onrender.com/tools")
      .then((res) => setTools(res.data))
      .catch((err) => console.error("Failed to fetch tools", err));
  }, []);

  const getBackground = (url: string) => (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none z-0">
      <iframe
        src={url}
        className="h-full w-full scale-[1.2] transform rounded-xl"
      />
    </div>
  );
  function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
  const getGridPosition = (index: number) => {
    switch (index % 5) {
      case 0:
        return "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3";
      case 1:
        return "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3";
      case 2:
        return "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4";
      case 3:
        return "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2";
      case 4:
        return "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4";
      default:
        return "lg:row-start-auto lg:col-start-auto";
    }
  };
  const filteredTools = tools.filter((tool) => tool.category === "api");
  const groupedTools = chunkArray(filteredTools, 5);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="fixed flex justify-center items-center h-screen z-50">
                  <Dialog03 />
                </div>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">API List</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem className="hidden md:block">
                  <ModeToggle />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {groupedTools.map((group, groupIndex) => (
            <BentoGrid key={groupIndex} className="lg:grid-rows-3">
              {group.map((tool, index) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                // const absoluteIndex = groupIndex * 5 + index;
                return (
                  <BentoCard
                    key={tool.id}
                    name={tool.name}
                    description={tool.description}
                    href={tool.link}
                    cta="Browse"
                    background={getBackground(tool.link)}
                    className={getGridPosition(index)} // local index 0–4
                  />
                );
              })}
            </BentoGrid>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
