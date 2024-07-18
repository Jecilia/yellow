import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/auth/sign-in";
import { Home } from "./pages/app/home";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/sign-in", element: <SignIn /> },
]);
