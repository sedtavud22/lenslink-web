import FilterTab from "../features/work/components/FilterTab";
import Hero from "../features/work/components/Hero";
import WorkList from "../features/work/components/WorkList";

function WorkPage() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <FilterTab />
      <WorkList />
    </div>
  );
}

export default WorkPage;
