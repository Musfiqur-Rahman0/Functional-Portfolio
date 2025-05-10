import { ModeToggle } from "./components/ui/toggleTheme/ModeToggle";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import AuthProvider from "./Context/AuthContext";
import { ThemeProvider } from "./Theme/ThemeProvider";
import PrivetRoute from "./routes/PrivetRoute";
import ProjectsDetails from "./pages/ProjectsDetails";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement : <p>Error page</p>,
      children: [
        {
          path: "/",
          element: <Home />,
          loader : ()=> fetch("/data.json")
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/project/:projectId",
          loader : ()=> fetch("/data.json"),
          element: <ProjectsDetails />,
        },
        {
          path: "contact",
          element: <PrivetRoute>
            <Contact />
          </PrivetRoute>,
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
