import React from "react";
import { CalendarIcon } from "../../../icons";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function MyWorkCard({ work }) {
  return (
    <div>
      <hr className="border mb-10" />

      <Link className="flex gap-8 items-center" to={`/work/${work.id}`}>
        {/* Image */}
        <div className="w-36 aspect-[4/3] rounded-lg">
          <img
            className="aspect-[4/3] rounded-lg object-cover"
            src={work?.cardImageUrl}
          />
        </div>

        {/* Info */}
        <div className="flex gap-2">
          <CalendarIcon className="w-6 h-6" />
          <p>{`${format(work?.firstAvailableDate, "dd/MM/yy")} - ${format(
            work?.lastAvailableDate,
            "dd/MM/yy"
          )}`}</p>
        </div>
      </Link>
    </div>
  );
}

export default MyWorkCard;
