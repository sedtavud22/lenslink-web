import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

function BreadcrumbsTab({ links, currentPage }) {
  return (
    <div className="w-full bg-secondary px-36 py-4">
      <Breadcrumbs links={links} currentPage={currentPage} />
    </div>
  );
}

export default BreadcrumbsTab;
