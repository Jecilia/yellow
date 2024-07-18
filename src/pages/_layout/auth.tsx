import { Sun } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-center text-lg font-medium text-foreground">
          <Sun className="size-8 text-yellow-300" />
          <span className="text-2xl font-bold text-yellow-300">Yellow</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; Yellow - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
