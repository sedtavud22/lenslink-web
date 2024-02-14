import Input from "../../../components/Input";
import { FilterIcon, SearchIcon } from "../../../icons";

function FilterTab() {
  return (
    <div className="bg-secondary grid grid-cols-3 items-center px-24 py-6">
      {/* Left */}
      <div className="flex gap-3 items-center justify-self-start">
        <FilterIcon className="w-6 h-6" />
        <p className="text-xl">Filter</p>
      </div>
      {/* Search */}
      <form className="text-sm flex gap-6 items-center">
        <Input type="date" />
        <div className="w-full flex items-center">
          <Input placeholder="Name" />
          <SearchIcon className="w-4 h-4 fill-lightGrayText -ml-8 z-10" />
        </div>
      </form>
      {/* Right */}
      <div className="justify-self-end">Showing 16 out of 32 results</div>
    </div>
  );
}

export default FilterTab;
