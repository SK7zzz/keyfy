import React from "react";
import { KeyTableContainer } from "./key-table.styles";

const KeyTable = () => {
  return (
    <KeyTableContainer>
      <table>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Diatonic Scale Name</th>
            <th>Diatonic Scale Notes</th>
            <th>Triade Chord Name</th>
            <th>Triade Chord Notes</th>
            <th>Tetrad Chord Name</th>
            <th>Tetrad Chord Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
          </tr>
          <tr>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
            <td>TONTO</td>
          </tr>
        </tbody>
      </table>
    </KeyTableContainer>
  );
};

export default KeyTable;
