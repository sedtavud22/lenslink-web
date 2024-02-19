import { useEffect, useState } from "react";
import Input from "../../../components/Input";
import { FilterIcon, SearchIcon } from "../../../icons";
import Button from "../../../components/Button";
import useWork from "../hooks/use-work";

function FilterTab({ searchParams, setSearchParams, filteredWorks }) {
  const { works } = useWork();

  const [searchQueryDate, setSearchQueryDate] = useState(
    searchParams.get("date") || ""
  );
  const [searchQueryName, setSearchQueryName] = useState(
    searchParams.get("firstName") || ""
  );

  useEffect(() => {
    setSearchQueryDate("");
    setSearchQueryName("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      date: searchQueryDate,
      firstName: searchQueryName,
    });
  };

  return (
    <div className="bg-secondary grid grid-cols-12 items-center px-24 py-6">
      {/* Left */}
      <div className="flex gap-3 items-center justify-self-start col-span-3">
        <FilterIcon className="w-6 h-6" />
        <p className="text-xl">Filter</p>
      </div>
      {/* Search */}
      <form
        className="text-sm flex gap-4 items-center col-span-6"
        onSubmit={handleSubmit}
      >
        <Input
          type="date"
          value={searchQueryDate}
          onChange={(e) => {
            setSearchQueryDate(e.target.value);
          }}
        />
        <div className="w-full flex items-center">
          <Input
            placeholder="Name"
            value={searchQueryName}
            onChange={(e) => setSearchQueryName(e.target.value)}
          />
          <SearchIcon className="w-4 h-4 fill-lightGrayText -ml-8 z-10" />
        </div>
        <Button>Submit</Button>
      </form>
      {/* Right */}
      <div className="justify-self-end col-span-3">
        Showing {filteredWorks.length} out of {works.length} results
      </div>
    </div>
  );
}

export default FilterTab;
