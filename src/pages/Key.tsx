import React from "react";
import { KeyContainer } from "../containers/key-cotainer";
import SearchBar from "../components/search-bar/search-bar";
import KeyTable from "../components/key-table/key-table";
const Key = () => {
  return (
    <KeyContainer>
      <SearchBar />
      <KeyTable />
    </KeyContainer>
  );
};

export default Key;
