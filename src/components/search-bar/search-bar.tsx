import { SearchContainer, SearchIcon, SearchInput } from "./search-bar.styles";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon>
        <FaSearch size="28px" />
      </SearchIcon>
      <SearchInput type="text" placeholder="Search by note" />
    </SearchContainer>
  );
};

export default SearchBar;
