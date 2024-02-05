import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { i18nSetup } from "./i18n/i18n.setup.ts";
import Providers from "./providers/providers.tsx";
import { BrowserRouter } from "react-router-dom";
import NotAuthenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/not-authenticated";
import Authenticated from "@tmw-universe/react-tmw-universe-authentication-utils/dist/components/authenticated";
import LoginPage from "./pages/login.page.tsx";
import "./index.pcss";

i18nSetup();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <>
          <NotAuthenticated>
            <LoginPage />
          </NotAuthenticated>
          <Authenticated>
            <App />
          </Authenticated>
        </>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
