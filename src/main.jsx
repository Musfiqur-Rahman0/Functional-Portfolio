import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./Theme/ThemeProvider";
import AuthProvider from "./Context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <App />
     </ThemeProvider>
  </StrictMode>
);
