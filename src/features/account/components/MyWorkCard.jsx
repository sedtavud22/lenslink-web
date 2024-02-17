import React from "react";
import { CalendarIcon } from "../../../icons";

function MyWorkCard() {
  return (
    <div>
      <hr className="border mb-10" />

      <div className="flex gap-8 items-center">
        {/* Image */}
        <div className="w-36 aspect-[4/3] rounded-lg">
          <img
            className="aspect-[4/3] rounded-lg object-cover"
            src="https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        {/* Info */}
        <div className="flex gap-2">
          <CalendarIcon className="w-6 h-6" />
          <p>19/1/24 - 24/1/24</p>
        </div>
      </div>
    </div>
  );
}

export default MyWorkCard;
