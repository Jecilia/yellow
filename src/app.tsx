import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Yellow" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
