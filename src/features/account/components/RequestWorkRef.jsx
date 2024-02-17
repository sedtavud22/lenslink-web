import RequestCard from "./RequestCard";

function RequestWorkRef() {
  return (
    <div className="col-span-5">
      <div className="p-8 bg-secondary flex flex-col gap-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Request</h2>
        <RequestCard />
      </div>
    </div>
  );
}

export default RequestWorkRef;
