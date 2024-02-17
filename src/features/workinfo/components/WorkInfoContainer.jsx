import Loading from "../../../components/Loading";
import BreadcrumbsTab from "../../../layouts/BreadcrumbsTab";
import useWorkInfo from "../hooks/use-workinfo";
import WorkInfoDetail from "./WorkInfoDetail";
import WorkInfoPictures from "./WorkInfoPictures";

function WorkInfoContainer() {
  const { loading, workInfo } = useWorkInfo();

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BreadcrumbsTab
        links={{ Home: "", Work: "work" }}
        currentPage={workInfo.user.firstName}
      />
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-16 px-8 py-16">
          <WorkInfoPictures />
          <WorkInfoDetail />
        </div>
      </div>
    </div>
  );
}

export default WorkInfoContainer;
