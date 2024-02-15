import CreateWorkForm from "../features/work/components/CreateWorkForm";
import BreadcrumbsTab from "../layouts/BreadcrumbsTab";

function CreateWorkPage() {
  return (
    <div>
      <BreadcrumbsTab
        links={{ "": "Home", work: "Work" }}
        currentPage="Create"
      />
      <div className="flex flex-col gap-16 max-w-[1440px] mx-auto px-32 py-12 items-center">
        {/* Title */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold text-center">Create Work</h1>
          <p className="text-xl text-lightGrayText">
            Provide information for your clients
          </p>
        </div>

        <CreateWorkForm />
      </div>
    </div>
  );
}

export default CreateWorkPage;
