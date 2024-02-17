import { useParams } from "react-router-dom";
import SidebarTab from "./SidebarTab";
import {
  BriefcaseIcon,
  FileCheckIcon,
  FileTextIcon,
  HouseIcon,
} from "../../../icons";
import useAuth from "../../../hooks/use-auth";
import { USER_ROLE } from "../../../constants";

function Sidebar({
  bgSidebarTab1,
  bgSidebarTab2,
  bgSidebarTab3,
  bgSidebarTab4,
}) {
  const { authUser } = useAuth();
  const { userId } = useParams();

  return (
    <div className="col-span-4">
      <div className="p-8 flex flex-col gap-2 bg-secondary">
        {/* Profile */}
        <SidebarTab
          bg={bgSidebarTab1}
          title="Profile"
          to={`/account/${+userId}/profile`}
        >
          <HouseIcon className="w-5 h-5" />
        </SidebarTab>

        {/* MyWork */}
        {authUser?.id === +userId &&
          authUser?.role === USER_ROLE.Photographer && (
            <SidebarTab
              bg={bgSidebarTab2}
              title="My Works"
              to={`/account/${+userId}/mywork`}
            >
              <BriefcaseIcon className="w-5 h-5" />
            </SidebarTab>
          )}

        {/* Requests */}
        {authUser?.id === +userId && (
          <SidebarTab
            bg={bgSidebarTab3}
            title="Requests"
            to={`/account/${+userId}/request`}
          >
            <FileTextIcon className="w-5 h-5" />
          </SidebarTab>
        )}

        {/* Completed Requests */}
        {authUser?.id === +userId && (
          <SidebarTab
            bg={bgSidebarTab4}
            title="Completed Requests"
            to={`/account/${+userId}/completed`}
          >
            <FileCheckIcon className="w-5 h-5" />
          </SidebarTab>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
