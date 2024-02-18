import { REQUEST_STATUS } from "../../../constants";
import useRequest from "../hooks/use-request";
import RequestInfo from "./RequestInfo";

function RequestDetail() {
  const { requestInfo } = useRequest();

  const statusTextColor =
    requestInfo?.status === REQUEST_STATUS.Cancelled ||
    requestInfo?.status === REQUEST_STATUS.Rejected
      ? "text-warning"
      : "text-accent";

  return (
    <div className="col-span-7 flex flex-col gap-11">
      {/* Status */}
      <div className="flex justify-between items-center border border-accent rounded-lg p-4">
        <h2 className="text-2xl font-semibold">Status</h2>
        <h2 className={`text-2xl font-semibold ${statusTextColor}`}>
          {requestInfo?.status}
        </h2>
      </div>

      <RequestInfo />
    </div>
  );
}

export default RequestDetail;
