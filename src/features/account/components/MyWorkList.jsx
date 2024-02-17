import MyWorkCard from "./MyWorkCard";

function MyWorkList() {
  return (
    <div className="col-span-8 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">My Works</h1>
      <MyWorkCard />
      <MyWorkCard />
      <MyWorkCard />
    </div>
  );
}

export default MyWorkList;
