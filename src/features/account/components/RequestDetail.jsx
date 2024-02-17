import RequestInfo from "./RequestInfo";

function RequestDetail() {
  return (
    <div className="col-span-7 flex flex-col gap-11">
      {/* Status */}
      <div className="flex justify-between items-center border border-accent rounded-lg p-4">
        <h2 className="text-2xl font-semibold">Status</h2>
        <h2 className="text-2xl font-semibold text-accent">Pending</h2>
      </div>

      <RequestInfo />
    </div>
  );
}

export default RequestDetail;
