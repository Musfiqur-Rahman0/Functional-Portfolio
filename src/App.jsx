import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import AuthProvider from "./Context/AuthContext";
import PrivetRoute from "./routes/PrivetRoute";
import ProjectsDetails from "./pages/ProjectsDetails";
import ProjectsPage from "./pages/ProjectsPage";
import GlobalProvider from "./Context/GlobalContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      hydrateFallbackElement: <p>Loading...</p>,
      errorElement: <p>Error page</p>,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => fetch("/data.json"),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/projects",
          loader: () => fetch("/data.json"),
          element: <ProjectsPage />,
        },
        {
          path: "/project/:projectId",
          loader: () => fetch("/data.json"),
          element: <ProjectsDetails />,
        },
        {
          path: "contact",
          element: (
            <PrivetRoute>
              <Contact />
            </PrivetRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <GlobalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
