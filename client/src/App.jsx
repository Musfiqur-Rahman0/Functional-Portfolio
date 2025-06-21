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
import ThreeDotsWave from "./pages/ThreeDotsWave";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      hydrateFallbackElement: <ThreeDotsWave />,
      errorElement: <p>Error page</p>,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => fetch("/data.json"),
        },
        {
          path: "about",
          loader : ()=> fetch("https://server-mpqtonacd-musfiqur-rahman0s-projects.vercel.app/reviews"),
          element: <About />,
        },
        {
          path: "/projects",
          loader: () => fetch("https://server-mpqtonacd-musfiqur-rahman0s-projects.vercel.app/projects"),
          element: <ProjectsPage />,
        },
        {
          path: "/project/:projectId",
          loader: ({ params }) =>
            fetch(`https://server-mpqtonacd-musfiqur-rahman0s-projects.vercel.app/project/${params.projectId}`),
          element: <ProjectsDetails />,
        },
        {
          path: "contact",
          element: (
            // <PrivetRoute>
            <Contact />
            // </PrivetRoute>
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
