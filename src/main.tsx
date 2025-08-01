import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-range-slider-input/dist/style.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
