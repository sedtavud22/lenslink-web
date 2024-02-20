import Button from "../../../components/Button";
import RatingStar from "../../../components/RatingStar";
import { CalendarIcon, LocationIcon, UserIcon } from "../../../icons";
import WorkCardImage from "./WorkCardImage";
import WorkCardInfo from "./WordCardInfo";
import useAuth from "../../../hooks/use-auth";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import DeleteAction from "../../../components/action-buttons/DeleteAction";
import EditAction from "../../../components/action-buttons/EditAction";

function WorkCard({ work }) {
  const { authUser } = useAuth();

  return (
    <div className="card w-96 bg-secondary shadow-xl hover:scale-105">
      <Link to={`/work/${work.id}`}>
        <WorkCardImage src={work.cardImageUrl} />
        <div className="pb-8"></div>
      </Link>
      <div className="card-body pt-0">
        {/* Title */}
        <Link to={`/work/${work.id}`}>
          <div>
            <h2 className="card-title text-2xl">
              <p>{work.user.firstName}</p>
              <div className="flex items-center">
                <RatingStar size={1.5} />
                <RatingStar size={1.5} />
                <RatingStar size={1.5} />
                <RatingStar size={1.5} />
                <RatingStar size={1.5} />
              </div>
            </h2>
            <div className="flex justify-between items-center py-1">
              {/* Date */}
              <WorkCardInfo>
                <CalendarIcon className="w-4 h-4 fill-lightGrayText" />
                <p>{`${format(work.firstAvailableDate, "dd/MM/yy")} - ${format(
                  work?.lastAvailableDate,
                  "dd/MM/yy"
                )}`}</p>
              </WorkCardInfo>

              <WorkCardInfo>
                <UserIcon className="w-4 h-4 fill-lightGrayText" />
                <p>{`${work.workRequests.length} clients so far`}</p>
              </WorkCardInfo>
            </div>
            <div className="flex flex-wrap items-center justify-between">
              {/* Location */}
              <div className="flex items-center gap-2 min-h-12">
                <LocationIcon className="w-4 h-4 fill-lightGrayText" />
                <p>{work.user.province}</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Own Work Card Button Group */}
        {authUser?.id === work.photographerId && (
          <div className="flex gap-4">
            <EditAction workId={work.id} />
            <div>
              <DeleteAction id={work.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkCard;
