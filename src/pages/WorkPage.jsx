import { useSearchParams } from "react-router-dom";
import FilterTab from "../features/work/components/FilterTab";
import Hero from "../features/work/components/Hero";
import WorkList from "../features/work/components/WorkList";
import { useEffect, useState } from "react";
import useWork from "../features/work/hooks/use-work";
import { addDays, isAfter, isBefore } from "date-fns";
import Loading from "../components/Loading";

function WorkPage() {
  let [searchParams, setSearchParams] = useSearchParams({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchParams.get("searchedDate")) {
      setSearchParams({ date: searchParams.get("searchedDate") });
    } else {
      setSearchParams({});
    }
  }, []);

  const { works, loading } = useWork();

  if (loading) {
    return <Loading />;
  }

  let filteredWorks = works.filter((work) =>
    work.user?.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (searchParams.get("date")) {
    filteredWorks = filteredWorks.filter(
      (work) =>
        isAfter(searchParams.get("date"), work.firstAvailableDate) &&
        isBefore(searchParams.get("date"), addDays(work.lastAvailableDate, 1))
    );
  }

  const handleFilter = (string) => {
    setSearchTerm(string);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <FilterTab
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        filteredWorks={filteredWorks}
        searchTerm={searchTerm}
        handleFilter={handleFilter}
      />
      <WorkList filteredWorks={filteredWorks} />
    </div>
  );
}

export default WorkPage;
