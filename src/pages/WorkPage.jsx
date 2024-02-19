import { useSearchParams } from "react-router-dom";
import FilterTab from "../features/work/components/FilterTab";
import Hero from "../features/work/components/Hero";
import WorkList from "../features/work/components/WorkList";
import { useEffect } from "react";
import useWork from "../features/work/hooks/use-work";
import { isAfter, isBefore } from "date-fns";

function WorkPage() {
  let [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (!searchParams.get("searchedDate")) {
      setSearchParams({});
    }
  }, []);

  const { works } = useWork();

  let filteredWorks = works;

  if (searchParams.get("firstName")) {
    filteredWorks = works.filter((work) =>
      work.user?.firstName
        .toLowerCase()
        .includes(searchParams.get("firstName").toLowerCase())
    );
  }

  if (searchParams.get("date")) {
    filteredWorks = filteredWorks.filter(
      (work) =>
        isAfter(searchParams.get("date"), work.firstAvailableDate) &&
        isBefore(searchParams.get("date"), work.lastAvailableDate)
    );
  }

  if (searchParams.get("searchedDate")) {
    filteredWorks = filteredWorks.filter(
      (work) =>
        isAfter(searchParams.get("searchedDate"), work.firstAvailableDate) &&
        isBefore(searchParams.get("searchedDate"), work.lastAvailableDate)
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <FilterTab
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        filteredWorks={filteredWorks}
      />
      <WorkList searchParams={searchParams} filteredWorks={filteredWorks} />
    </div>
  );
}

export default WorkPage;
