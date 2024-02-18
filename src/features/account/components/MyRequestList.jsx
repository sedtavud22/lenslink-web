import RequestAction from "./RequestAction";
import RequestCard from "./RequestCard";

function MyRequestList({ title, requestArray }) {
  return (
    <div className="col-span-8 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">{title}</h1>

      {requestArray.map((request) => (
        <div key={request.id} className="flex flex-col gap-10">
          <hr className="border" />
          <div className="flex justify-between items-center">
            <RequestCard request={request} />
            <RequestAction request={request} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyRequestList;
