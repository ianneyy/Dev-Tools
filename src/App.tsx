// src/App.tsx
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  );
}
