import MyWorkList from "../features/account/components/MyWorkList";
import Sidebar from "../features/account/components/Sidebar";
import BreadcrumbsTab from "../layouts/BreadcrumbsTab";

function MyWorkPage() {
  return (
    <div>
      <BreadcrumbsTab links={{ Home: "" }} currentPage="Account" />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Account</h1>
        <div className="grid grid-cols-12 gap-16 py-16">
          <Sidebar bgSidebarTab2="bg-darkblueishGray" />
          <MyWorkList />
        </div>
      </div>
    </div>
  );
}

export default MyWorkPage;
