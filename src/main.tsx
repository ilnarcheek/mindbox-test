import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { TodoProvider } from "./context/todoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);