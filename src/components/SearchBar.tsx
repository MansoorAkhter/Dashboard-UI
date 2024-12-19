import Image from "next/image";
import search from "@/assets/search.svg";

const SearchBar = () => {
  return (
    <div className="bg-gray-100 border-gray-200 border-2 w-[25%] h-14 rounded-[20px] flex items-center gap-x-2 px-2">
      <Image src={search} alt="search_icon" />
      <input
        placeholder="Type here..."
        className="bg-transparent h-full w-full outline-none"
      />
    </div>
  );
};

export default SearchBar;
