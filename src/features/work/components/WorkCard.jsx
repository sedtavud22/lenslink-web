import Button from "../../../components/Button";
import RatingStar from "../../../components/RatingStar";
import { CalendarIcon, LocationIcon, UserIcon } from "../../../icons";
import WorkCardImage from "./WorkCardImage";
import WorkCardInfo from "./WordCardInfo";

function WorkCard() {
  return (
    <div className="card w-96 bg-secondary shadow-xl">
      <WorkCardImage />
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-2xl">
          <p>Sukkarin</p>
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
            <p>15/1/24 - 24/1/24</p>
          </WorkCardInfo>

          {/* Clients */}
          <WorkCardInfo>
            <UserIcon className="w-5 h-5 fill-lightGrayText" />
            <p>34 Clients so far</p>
          </WorkCardInfo>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          {/* Location */}
          <div className="flex items-center gap-2 min-h-12">
            <LocationIcon className="w-4 h-4 fill-lightGrayText" />
            <p>Bangkok</p>
          </div>

          {/* Own Work Card Button Group */}
          <div className="flex justify-end gap-4">
            <Button bg="accent" width="35">
              Edit
            </Button>
            <Button bg="warning" width="35">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
