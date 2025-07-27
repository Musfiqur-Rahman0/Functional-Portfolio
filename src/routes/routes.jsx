import AuthLayout from "@/layout/authLayout/AuthLayout";
import DashboardLayout from "@/layout/Dashboard/DashboardLayout";
import Layout from "@/layout/Layout";
import About from "@/pages/About";
import Login from "@/pages/auth/login/Login";
import Signup from "@/pages/auth/signup/Signup";
import Contact from "@/pages/Contact";
import AddBlogs from "@/pages/Dashboard/Blogs/AddBlogs";
import ManageBlogs from "@/pages/Dashboard/Blogs/ManageBlogs";
import AddProjects from "@/pages/Dashboard/projects/AddProjects";
import ManageProjects from "@/pages/Dashboard/projects/ManageProjects";
import AddSkills from "@/pages/Dashboard/skills/AddSkills";
import ManageSkills from "@/pages/Dashboard/skills/ManageSkills";
import ManageTestimonials from "@/pages/Dashboard/Testimonials/ManageTestimonials";
import Error from "@/pages/error/Error";
import Home from "@/pages/Home";
import DetailsPage from "@/pages/projects/DetailsPage";
import Projects from "@/pages/projects/Projects";
import ThreeDotsWave from "@/pages/ThreeDotsWave";
import React from "react";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: <ThreeDotsWave />,
    errorElement: <Error />,
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
        loader: () => fetch("http://localhost:5000/projects"),
        element: <Projects />,
      },
      {
        path: "/project/:projectId",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/project/${params.projectId}`),
        element: <DetailsPage />,
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "projects",
        element: <ManageProjects />,
      },
      {
        path: "add-project",
        element: <AddProjects />,
      },
      {
        path: "blogs",
        element: <ManageBlogs />,
      },
      {
        path: "add-blog",
        element: <AddBlogs />,
      },
      {
        path: "skills",
        element: <ManageSkills />,
      },
      {
        path: "add-skill",
        element: <AddSkills />,
      },
      {
        path: "testimonials",
        element: <ManageTestimonials />,
      },
    ],
  },
  {
    path: "/",

    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
