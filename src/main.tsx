import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Providers from "./Providers.tsx";
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
      <Toaster />
    </Providers>
  </StrictMode>
);
