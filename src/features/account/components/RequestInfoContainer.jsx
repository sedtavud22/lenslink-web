import { Link } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import BreadcrumbsTab from "../../../layouts/BreadcrumbsTab";
import RequestDetail from "./RequestDetail";
import RequestWorkRef from "./RequestWorkRef";
import Loading from "../../../components/Loading";
import useRequest from "../hooks/use-request";

function RequestInfoContainer() {
  const { authUser } = useAuth();
  const { loading } = useRequest();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BreadcrumbsTab
        links={{ Home: "", Account: `account/${authUser?.id}/profile` }}
        currentPage="Request"
      />
      <div className="max-w-[1440px] mx-auto px-32">
        <h1 className="py-12 text-4xl font-semibold">Work Request</h1>
        <div className="grid grid-cols-12 gap-16 pt-16">
          <RequestDetail />
          <RequestWorkRef />
        </div>

        <div className="w-36">
          <Link to={`/account/${authUser?.id}/profile`}>
            <div className="my-10 underline">&lt; Back to Account</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequestInfoContainer;
