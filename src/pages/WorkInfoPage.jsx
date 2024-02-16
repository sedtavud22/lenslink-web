import WorkInfoContainer from "../features/workinfo/components/WorkInfoContainer";
import WorkInfoContextProvider from "../features/workinfo/contexts/WorkInfoContext";

function WorkInfoPage() {
  return (
    <WorkInfoContextProvider>
      <WorkInfoContainer />
    </WorkInfoContextProvider>
  );
}

export default WorkInfoPage;
