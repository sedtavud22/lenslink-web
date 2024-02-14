import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import CreateWorkPage from "../pages/CreateWorkPage";
import ProtectedPhotographer from "./ProtectedPhotographer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "create-edit",
        element: (
          <ProtectedPhotographer>
            <CreateWorkPage />
          </ProtectedPhotographer>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
