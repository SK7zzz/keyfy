import { useSelector, useDispatch } from "react-redux";
import { setKeyData } from "../../redux/features/KeyState";
import { SearchContainer, SearchIcon, SearchInput } from "./search-bar.styles";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  // Dispach and Selector to access global states and functions
  const dispatch = useDispatch();
  const keyState = useSelector((state: any) => state.keyState.value);

  // Function to filter the data introduced by the user
  const filterInput = (input: string) => {
    return keyState.availableNotes.includes(input);
  };

  // Function to set the global state when the user introduce a new note
  const handleInputChange = (event: any) => {
    const input = event.target.value;
    console.log(input.length);
    const styledInput = () => {
      if (input.length === 2) {
        return input[0].toUpperCase() + input[1].toLowerCase();
      } else if (input.length === 1) {
        return input.toUpperCase();
      }
    };
    if (filterInput(styledInput())) {
      dispatch(setKeyData(styledInput()));
    } else {
      console.log("Input does not exist");
    }
  };
  console.log(keyState.availableNotes);
  console.log(keyState.currentNote);

  return (
    <SearchContainer>
      <SearchIcon>
        <FaSearch size="28px" />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search by note"
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
};

export default SearchBar;
