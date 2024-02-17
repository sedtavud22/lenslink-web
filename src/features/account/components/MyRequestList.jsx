import RequestCard from "./RequestCard";

function MyRequestList({ title, requestArray }) {
  return (
    <div className="col-span-8 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {requestArray.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}

export default MyRequestList;
