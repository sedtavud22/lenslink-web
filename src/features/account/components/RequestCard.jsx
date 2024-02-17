import { format } from "date-fns";
import { USER_ROLE } from "../../../constants";
import useAuth from "../../../hooks/use-auth";
import { Link } from "react-router-dom";

function RequestCard({ request }) {
  const { authUser } = useAuth();

  return (
    <div>
      <hr className="border mb-10" />

      <Link
        className="flex gap-8 items-center"
        to={`/account/request/${request?.id}`}
      >
        {/* Image */}
        <div className="w-36 aspect-[4/3] rounded-lg">
          <img
            className="aspect-[4/3] rounded-lg object-cover"
            src={request.work?.cardImageUrl}
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lightGrayText text-2xl">{request?.status}</h3>
          <div>
            {authUser?.role === USER_ROLE.Photographer && (
              <p>
                From {request.user?.firstName} {request.user?.lastName}
              </p>
            )}
            {authUser?.role === USER_ROLE.Client && (
              <p>
                {request.work.user?.firstName} {request.work.user?.lastName}
              </p>
            )}
            <p>{format(request?.createdAt, "PP")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RequestCard;
