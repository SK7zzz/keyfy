import { KeyContainer } from "../containers/key-container";
import SearchBar from "../components/search-bar/search-bar";
import KeyTable from "../components/key-table/key-table";
import TonalitySelector from "../components/key-selector/key-selector";
import BackIcon from "../components/back-icon/back-icon";

const Key = () => {
  return (
    <KeyContainer>
      <BackIcon />
      <SearchBar />
      <TonalitySelector />
      <KeyTable />
    </KeyContainer>
  );
};

export default Key;
