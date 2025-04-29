import { ModeToggle } from "./components/ui/toggleTheme/ModeToggle";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import AuthProvider from "./Context/AuthContext";
import { ThemeProvider } from "./Theme/ThemeProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
       <AuthProvider> 
       <RouterProvider router={router} />
     </AuthProvider> 

  )
}

export default App;
