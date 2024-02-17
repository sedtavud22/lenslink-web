import React from "react";
import { Outlet } from "react-router-dom";
import RequestContextProvider from "../features/account/contexts/RequestContext";

function AccountContainer() {
  return (
    <>
      <RequestContextProvider>
        <Outlet />
      </RequestContextProvider>
    </>
  );
}

export default AccountContainer;
