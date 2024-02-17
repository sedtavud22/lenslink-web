import MyRequestList from "../features/account/components/MyRequestList";
import Sidebar from "../features/account/components/Sidebar";
import BreadcrumbsTab from "../layouts/BreadcrumbsTab";

function MyCompletedRequestPage() {
  return (
    <div>
      <BreadcrumbsTab links={{ Home: "" }} currentPage="Account" />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Account</h1>
        <div className="grid grid-cols-12 gap-16 py-16">
          <Sidebar bgSidebarTab4="bg-darkblueishGray" />
          <MyRequestList title="Completed Requests" />
        </div>
      </div>
    </div>
  );
}

export default MyCompletedRequestPage;
