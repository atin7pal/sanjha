import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./Pages/About/About.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Contact } from "./Pages/Contact/Contact.jsx";
import { Restaurant } from "./Pages/Restaurant/Restaurant.jsx";
import { Menupage } from "./Pages/Menu/Menupage.jsx";
import { Meditation } from "./Pages/Meditation/Meditation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path : "/contact",
    element: <Contact/>
  },
  {
    path: "/restaurant",
    element: <Restaurant/>
  },
  {
    path: "/meditation",
    element : <Meditation/>
  },
  {
    path : "/menu",
    element: <Menupage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </HelmetProvider>
);
