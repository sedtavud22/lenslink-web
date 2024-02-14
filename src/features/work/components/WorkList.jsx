import Button from "../../../components/Button";
import { USER_ROLE } from "../../../constants";
import useAuth from "../../../hooks/use-auth";
import { Link } from "react-router-dom";
import WorkCard from "./WorkCard";

function WorkList() {
  const { authUser } = useAuth();

  return (
    <div className="py-14 px-24 flex flex-col items-center">
      {/* Create Work */}
      {authUser?.role === USER_ROLE.Photographer && (
        <div className="mb-8 w-full text-end">
          <Link to="/create-edit">
            <Button>Create Work</Button>
          </Link>
        </div>
      )}

      {/* WorkCards */}
      <div className="grid grid-cols-3 gap-x-12 gap-y-16">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}

export default WorkList;
