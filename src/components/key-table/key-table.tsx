import { KeyTableContainer } from "./key-table.styles";
import { useSelector } from "react-redux";

const KeyTable = () => {
  // Selector to access global states
  const keyState = useSelector((state: any) => state.keyState.value);

  // Array for playing hehe
  const noCurrentNote = [0, 0, 0, 0, 0, 0, 0];

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
          {keyState.currentNote === ""
            ? noCurrentNote.map(() => (
                <tr>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                  <td>???</td>
                </tr>
              ))
            : keyState.currentKey === "Major"
            ? keyState.currentMajorKeyData.map((grade: any, i: number) => (
                <tr>
                  <td>{grade.Grade}</td>
                  <td>{grade.DiatonicScaleName}</td>
                  <td>{grade.DiatonicScaleNotes}</td>
                  <td>{grade.TriadName}</td>
                  <td>{grade.TriadNotes}</td>
                  <td>{grade.TetradName}</td>
                  <td>{grade.TetradNotes}</td>
                </tr>
              ))
            : keyState.currentMinorKeyData.map((grade: any, i: number) => (
                <tr>
                  <td>{grade.Grade}</td>
                  <td>{grade.DiatonicScaleName}</td>
                  <td>{grade.DiatonicScaleNotes}</td>
                  <td>{grade.TriadName}</td>
                  <td>{grade.TriadNotes}</td>
                  <td>{grade.TetradName}</td>
                  <td>{grade.TetradNotes}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </KeyTableContainer>
  );
};

export default KeyTable;
