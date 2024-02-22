import Input from "../../../components/Input";
import { FilterIcon, SearchIcon } from "../../../icons";
import useWork from "../hooks/use-work";

function FilterTab({
  searchParams,
  setSearchParams,
  filteredWorks,
  handleFilter,
  searchTerm,
}) {
  const { works } = useWork();

  return (
    <div className="bg-secondary grid grid-cols-12 items-center px-24 py-6">
      {/* Left */}
      <div className="flex gap-3 items-center justify-self-start col-span-3">
        <FilterIcon className="w-6 h-6" />
        <p className="text-xl">Filter</p>
      </div>
      {/* Search */}
      <form className="text-sm flex gap-4 items-center col-span-6">
        <Input
          type="date"
          value={searchParams.get("date")}
          onChange={(e) => {
            setSearchParams({ date: e.target.value });
          }}
        />
        <div className="w-full flex items-center">
          <Input
            placeholder="Name"
            value={searchTerm}
            onChange={(e) => handleFilter(e.target.value)}
          />
          <SearchIcon className="w-4 h-4 fill-lightGrayText -ml-8 z-10" />
        </div>
      </form>
      {/* Right */}
      <div className="justify-self-end col-span-3">
        Showing {filteredWorks.length} out of {works.length} results
      </div>
    </div>
  );
}

export default FilterTab;
