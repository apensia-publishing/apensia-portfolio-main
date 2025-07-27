import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import Router from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ReactLenis root /> */}
    <Router />
  </StrictMode>
);
