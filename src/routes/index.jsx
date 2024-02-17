import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../layouts/Container";
import HomePage from "../pages/HomePage";
import WorkPage from "../pages/WorkPage";
import CreateWorkPage from "../pages/CreateWorkPage";
import ProtectedPhotographer from "./ProtectedPhotographer";
import EditWorkPage from "../pages/EditWorkPage";
import WorkInfoPage from "../pages/WorkInfoPage";
import ProfilePage from "../pages/ProfilePage";
import MyRequestPage from "../pages/MyRequestPage";
import MyWorkPage from "../pages/MyWorkPage";
import MyCompletedRequestPage from "../pages/MyCompletedRequestPage";
import ProtectedOwnAccount from "./ProtectedOwnAccount";
import AccountContainer from "../layouts/AccountContainer";
import RequestInfoPage from "../pages/RequestInfoPage";

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
        path: "work/:workId",
        element: <WorkInfoPage />,
      },
      {
        path: "create",
        element: (
          <ProtectedPhotographer>
            <CreateWorkPage />
          </ProtectedPhotographer>
        ),
      },
      {
        path: "edit/:workId",
        element: (
          <ProtectedPhotographer>
            <EditWorkPage />
          </ProtectedPhotographer>
        ),
      },
      {
        path: "account/",
        element: <AccountContainer />,
        children: [
          {
            path: ":userId/profile",
            element: <ProfilePage />,
          },
          {
            path: ":userId/mywork",
            element: (
              <ProtectedOwnAccount>
                <ProtectedPhotographer>
                  <MyWorkPage />
                </ProtectedPhotographer>
              </ProtectedOwnAccount>
            ),
          },
          {
            path: ":userId/request",
            element: (
              <ProtectedOwnAccount>
                <MyRequestPage />
              </ProtectedOwnAccount>
            ),
          },
          {
            path: ":userId/completed",
            element: (
              <ProtectedOwnAccount>
                <MyCompletedRequestPage />
              </ProtectedOwnAccount>
            ),
          },
          {
            path: "request/:requestId",
            element: <RequestInfoPage />,
          },
        ],
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
