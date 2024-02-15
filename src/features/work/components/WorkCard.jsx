import Button from "../../../components/Button";
import RatingStar from "../../../components/RatingStar";
import { CalendarIcon, LocationIcon, UserIcon } from "../../../icons";
import WorkCardImage from "./WorkCardImage";
import WorkCardInfo from "./WordCardInfo";
import useAuth from "../../../hooks/use-auth";
import { format } from "date-fns";

function WorkCard({ work }) {
  const { authUser } = useAuth();
  return (
    <div className="card w-96 bg-secondary shadow-xl">
      <WorkCardImage src={work.cardImageUrl} />
      <div className="card-body">
        {/* Title */}
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
            <CalendarIcon className="w-5 h-5 fill-lightGrayText" />
            <p>{`${format(work.firstAvailableDate, "dd/MM/yy")} - ${format(
              work.lastAvailableDate,
              "dd/MM/yy"
            )}`}</p>
          </WorkCardInfo>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          {/* Location */}
          <div className="flex items-center gap-2 min-h-12">
            <LocationIcon className="w-4 h-4 fill-lightGrayText" />
            <p>{work.user.province}</p>
          </div>

          {/* Own Work Card Button Group */}
          {authUser.id === work.photographerId && (
            <div className="flex justify-end gap-4">
              <Button bg="accent" width="35">
                Edit
              </Button>
              <Button bg="warning" width="35">
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
