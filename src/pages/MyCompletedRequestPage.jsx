import Loading from "../components/Loading";
import { REQUEST_STATUS } from "../constants";
import MyRequestList from "../features/account/components/MyRequestList";
import Sidebar from "../features/account/components/Sidebar";
import useRequest from "../features/account/hooks/use-request";
import BreadcrumbsTab from "../layouts/BreadcrumbsTab";

function MyCompletedRequestPage() {
  const { loading, completedUserRequests } = useRequest();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BreadcrumbsTab links={{ Home: "" }} currentPage="Account" />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Account</h1>
        <div className="grid grid-cols-12 gap-16 py-16">
          <Sidebar bgSidebarTab4="bg-darkblueishGray" />
          <MyRequestList
            title="Completed Requests"
            requestArray={completedUserRequests}
          />
        </div>
      </div>
    </div>
  );
}

export default MyCompletedRequestPage;
