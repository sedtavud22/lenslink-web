import { useParams } from "react-router-dom";
import useWork from "../../work/hooks/use-work";
import MyWorkCard from "./MyWorkCard";

function MyWorkList() {
  const { userId } = useParams();
  const { works } = useWork();
  const myWorkArray = works.filter((work) => work.photographerId === +userId);
  return (
    <div className="col-span-8 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">My Works</h1>
      {myWorkArray?.map((work) => (
        <MyWorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}

export default MyWorkList;
