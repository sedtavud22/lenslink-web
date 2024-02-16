import useWorkInfo from "../hooks/use-workinfo";
import WorkCardInfo from "../../work/components/WordCardInfo";
import { CalendarIcon, LocationIcon } from "../../../icons";
import { format } from "date-fns";
import RatingStar from "../../../components/RatingStar";
import WorkInfoAction from "./WorkInfoAction";

function WorkInfoDetail() {
  const { workInfo } = useWorkInfo();
  return (
    <div className="col-span-6 flex flex-col py-6 gap-4">
      <h1 className="text-4xl font-semibold">
        {workInfo.user?.firstName} {workInfo.user?.lastName}
      </h1>

      {/* Date */}
      <WorkCardInfo textSize="text-xl">
        <CalendarIcon className="w-6 h-6 fill-lightGrayText" />
        <p>{`${format(workInfo.firstAvailableDate, "dd/MM/yy")} - ${format(
          workInfo.lastAvailableDate,
          "dd/MM/yy"
        )}`}</p>
      </WorkCardInfo>

      {/* Stars & Number of clients */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <RatingStar size={1.5} />
          <RatingStar size={1.5} />
          <RatingStar size={1.5} />
          <RatingStar size={1.5} />
          <RatingStar size={1.5} />
        </div>
        <div className="bg-lightGrayText w-[1px] h-full"></div>
        <WorkCardInfo textSize="text-lg">
          <p className="text-lightGrayText">
            {workInfo.workRequests.length} clients so far
          </p>
        </WorkCardInfo>
      </div>

      <div>
        <p>{workInfo.description}</p>
      </div>

      {/* Location */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-lightGrayText font-medium">Location</h1>
        <WorkCardInfo textSize="text-base">
          <LocationIcon className="fill-lightGrayText w-5 h-5" />
          <p>{workInfo.user.province}</p>
        </WorkCardInfo>
      </div>

      <WorkInfoAction />
    </div>
  );
}

export default WorkInfoDetail;
