import EditWorkForm from "../features/work/components/EditWorkForm";
import WorkInfoContextProvider from "../features/workinfo/contexts/WorkInfoContext";
import BreadcrumbsTab from "../layouts/BreadcrumbsTab";

function EditWorkPage() {
  return (
    <WorkInfoContextProvider>
      <div>
        <BreadcrumbsTab links={{ Home: "", Work: "work" }} currentPage="Edit" />
        <div className="flex flex-col gap-16 max-w-[1440px] mx-auto px-32 py-12 items-center">
          {/* Title */}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-center">Edit Work</h1>
            <p className="text-xl text-lightGrayText">
              Provide information for your clients
            </p>
          </div>

          <EditWorkForm />
        </div>
      </div>
    </WorkInfoContextProvider>
  );
}

export default EditWorkPage;
