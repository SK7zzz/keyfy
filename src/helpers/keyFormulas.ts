const flatNotes = [
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
];

const sharpNotes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

const keyFormulas = () => {
  // Function to filter if the notes are flat or sharp
  const filterNotes = (note: string) => {
    // Determine if the notes array are sharps or flats
    if (note.includes("b")) {
      return flatNotes;
    } else {
      return sharpNotes;
    }
  };
  // Function to get the first grade position
  const firstGradeIndex = (note: string) => {
    const notes = filterNotes(note);
    return notes.findIndex((e) => e === note);
  };
  // Function to get the index of any grade
  const getGradeIndex = (distance: number, note: string) => {
    // Const with the Index of the grade
    const gradeIndex = distance + firstGradeIndex(note);
    // Const with the notes array filtered
    const notes = filterNotes(note);
    // If to go back to the first element of the array if there are no elements left
    if (gradeIndex >= notes.length) {
      return gradeIndex - notes.length;
    } else {
      return gradeIndex;
    }
  };

  const convertToMajorKey = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    // la tonica o primer grado es la nota que recibe mediante parametro
    const firstGrade = note;
    // El segundo grado esta a un tono de distancia, por lo que debemos sumar 2 al indice del array
    const secondGrade = notes[getGradeIndex(2, firstGrade)];
    // El tercer grado esta a dos tonos de distancia, por lo que sumamos 4 al indice del array
    const thirdGrade = notes[getGradeIndex(4, firstGrade)];
    // El cuarto grado esta a dos tonos y medio, por lo que sumamos 5 al indice
    const fourthGrade = notes[getGradeIndex(5, firstGrade)];
    // El quinto grado esta a 3 tonos y medio, por lo que sumamos 7 al indice
    const fifthGrade = notes[getGradeIndex(7, firstGrade)];
    // El sexto grado esta a 4 tonos y medio, por lo que sumamso 9 al indice
    const sixthGrade = notes[getGradeIndex(9, firstGrade)];
    // El septimo grado esta a 5 tonos y medio, por lo que sumammos 11 al indice
    const seventhGrade = notes[getGradeIndex(11, firstGrade)];

    return [
      firstGrade,
      secondGrade,
      thirdGrade,
      fourthGrade,
      fifthGrade,
      sixthGrade,
      seventhGrade,
    ];
  };

  // Funcion que devuelve la tonalidad menor de una nota
  const convertToMinorKey = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    // la tonica o primer grado es la nota que recibe mediante parametro
    const firstGrade = note;
    // El segundo grado esta a un tono de distancia, por lo que debemos sumar 2 al indice del array
    const secondGrade = notes[getGradeIndex(2, firstGrade)];
    // El tercer grado esta a un tono y medio de distancia, por lo que sumamos 5¡3 al indice del array
    const flatThirdGrade = notes[getGradeIndex(3, firstGrade)];
    // El cuarto grado esta a dos tonos y medio, por lo que sumamos 5 al indice
    const fourthGrade = notes[getGradeIndex(5, firstGrade)];
    // El quinto grado esta a 3 tonos y medio, por lo que sumamos 7 al indice
    const fifthGrade = notes[getGradeIndex(7, firstGrade)];
    // El sexto grado esta a 4 tonos, por lo que sumamos 8 al indice
    const flatSixthGrade = notes[getGradeIndex(8, firstGrade)];
    // El septimo grado esta a 5, por lo que sumammos 10 al indice
    const flatSeventhGrade = notes[getGradeIndex(10, firstGrade)];

    return [
      firstGrade,
      secondGrade,
      flatThirdGrade,
      fourthGrade,
      fifthGrade,
      flatSixthGrade,
      flatSeventhGrade,
    ];
  };

  // Funciones para las escalas diatonicas
  const getIonianScale = (note: string) => {
    return {
      otherNames: "Major, Ionian",
      notes: convertToMajorKey(note),
      intervals: ["1P", "2M", "3M", "4P", "5P", "6M", "7M"],
      semitones: [2, 2, 1, 2, 2, 2, 1],
    };
  };

  const getDorianScale = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);

    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: "Dorian, Kafi theta",
      notes: scale,
      intervals: ["1P", "2M", "3m", "4P", "5P", "6M", "7m"],
      semitones: [2, 1, 2, 2, 2, 1, 2],
    };
  };

  const getPhrygianScale = (note: string) => {
    // Const with the notes array filtered
    const notes = flatNotes;
    const scale = [
      note,
      notes[getGradeIndex(1, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: "Phrygian, Neopolitan minor",
      notes: scale,
      intervals: ["1P", "2m", "3m", "4P", "5P", "6m", "7m"],
      semitones: [1, 2, 2, 2, 1, 2, 2],
    };
  };

  const getLydianScale = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(4, note)],
      notes[getGradeIndex(6, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(11, note)],
    ];
    return {
      otherNames: "Lydian, Kalyan theta",
      notes: scale,
      intervals: ["1P", "2M", "3M", "4A", "5P", "6M", "7M"],
      semitones: [2, 2, 2, 1, 2, 2, 1],
    };
  };

  const getMixolydianScale = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(4, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: "Mixolydian, Dominant 7th, Khamaj theta",
      notes: scale,
      intervals: ["1P", "2M", "3M", "4A", "5P", "6M", "7m"],
      semitones: [2, 2, 1, 2, 2, 1, 2],
    };
  };

  const getAeoliancScale = (note: string) => {
    // Const with the notes array filtered
    const notes = flatNotes;
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: "Aeolian, Minor(natural), Asavari theta",
      notes: scale,
      intervals: ["1P", "2M", "3m", "4A", "5P", "6m", "7m"],
      semitones: [2, 1, 2, 2, 1, 2, 2],
    };
  };

  const getLocrianScale = (note: string) => {
    // Const with the notes array filtered
    const notes = flatNotes;
    const scale = [
      note,
      notes[getGradeIndex(1, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(6, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: "Locrian, Half diminished",
      notes: scale,
      intervals: ["1P", "2m", "3m", "4P", "5d", "6m", "7m"],
      semitones: [1, 2, 2, 1, 2, 2, 2],
    };
  };

  // Funciones para las triadas
  const getMajorTriadChord = (note: string) => {
    const chord = [
      note,
      convertToMajorKey(note)[2],
      convertToMajorKey(note)[4],
    ];
    return {
      otherNames: `${note}maj, ${note}M, ${note}`,
      notes: chord,
      intervals: ["1P", "3M", "5P"],
      semitones: [4, 3],
    };
  };

  const getMinorTriadChord = (note: string) => {
    const chord = [
      convertToMinorKey(note)[0],
      convertToMinorKey(note)[2],
      convertToMinorKey(note)[4],
    ];
    return {
      otherNames: `${note}m, ${note}min, ${note}-`,
      notes: chord,
      intervals: ["1P", "3m", "5P"],
      semitones: [3, 4],
    };
  };

  const getDiminishedTriadChord = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    const chord = [
      note,
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(6, note)],
    ];
    return {
      otherNames: `${note}dim, ${note}o, ${note}b5`,
      notes: chord,
      intervals: ["1P", "3m", "5d"],
      semitones: [3, 3],
    };
  };

  // Funciones para las cuatriadas

  const getMajorSeventh = (note: string) => {
    const chord = [
      convertToMajorKey(note)[0],
      convertToMajorKey(note)[2],
      convertToMajorKey(note)[4],
      convertToMajorKey(note)[6],
    ];
    return {
      otherNames: `${note}maj7, ${note}Δ, ${note}M7`,
      notes: chord,
      intervals: ["1P", "3M", "5P", "7M"],
      semitones: [4, 3, 4],
    };
  };

  const getMinorSeventh = (note: string) => {
    const chord = [
      convertToMinorKey(note)[0],
      convertToMinorKey(note)[2],
      convertToMinorKey(note)[4],
      convertToMinorKey(note)[6],
    ];
    return {
      otherNames: `${note}m7, ${note}-7, ${note}min7`,
      notes: chord,
      intervals: ["1P", "3m", "5P", "7m"],
      semitones: [3, 4, 3],
    };
  };

  const getSeventh = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    const chord = [
      note,
      notes[getGradeIndex(4, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: `${note}7, ${note}dom, ${note}dom7`,
      notes: chord,
      intervals: ["1P", "3M", "5P", "7m"],
      semitones: [4, 3, 3],
    };
  };

  const getSemiDiminished = (note: string) => {
    // Const with the notes array filtered
    const notes = filterNotes(note);
    const chord = [
      note,
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(6, note)],
      notes[getGradeIndex(10, note)],
    ];
    return {
      otherNames: `${note}⌀7, ${note}m7b5, ${note}-7b5`,
      notes: chord,
      intervals: ["1P", "3m", "5d", "7m"],
      semitones: [3, 3, 4],
    };
  };

  // Funciones que devuelven toda la info de una nota en su tonalidad mayor
  const getMajorKeyInfo = (note: string) => {
    const grades = convertToMajorKey(note);
    const info = [
      {
        Grade: "1",
        DiatonicScaleName: "Ionian",
        DiatonicScaleNotes: `${getIonianScale(grades[0]).notes}`,
        TriadName: `${grades[0]}`,
        TriadNotes: getMajorTriadChord(grades[0]).notes,
        TetradName: `${grades[0]}Maj7`,
        TetradNotes: getMajorSeventh(grades[0]).notes,
      },
      {
        Grade: "2",
        DiatonicScaleName: "Dorian",
        DiatonicScaleNotes: `${getDorianScale(grades[1]).notes}`,
        TriadName: `${grades[1]}m`,
        TriadNotes: getMinorTriadChord(grades[1]).notes,
        TetradName: `${grades[1]}m7`,
        TetradNotes: getMinorSeventh(grades[1]).notes,
      },
      {
        Grade: "3",
        DiatonicScaleName: "Phrygian",
        DiatonicScaleNotes: `${getPhrygianScale(grades[2]).notes}`,
        TriadName: `${grades[2]}m`,
        TriadNotes: getMinorTriadChord(grades[2]).notes,
        TetradName: `${grades[2]}m7`,
        TetradNotes: getMinorSeventh(grades[2]).notes,
      },
      {
        Grade: "4",
        DiatonicScaleName: "Lydian",
        DiatonicScaleNotes: `${getLydianScale(grades[3]).notes}`,
        TriadName: `${grades[3]}`,
        TriadNotes: getMajorTriadChord(grades[3]).notes,
        TetradName: `${grades[3]}Maj7`,
        TetradNotes: getMajorSeventh(grades[3]).notes,
      },
      {
        Grade: "5",
        DiatonicScaleName: "Mixolydian",
        DiatonicScaleNotes: `${getMixolydianScale(grades[4]).notes}`,
        TriadName: `${grades[4]}`,
        TriadNotes: getMajorTriadChord(grades[4]).notes,
        TetradName: `${grades[4]}7`,
        TetradNotes: getSeventh(grades[4]).notes,
      },
      {
        Grade: "6",
        DiatonicScaleName: "Aeolian",
        DiatonicScaleNotes: `${getAeoliancScale(grades[5]).notes}`,
        TriadName: `${grades[5]}m`,
        TriadNotes: getMinorTriadChord(grades[5]).notes,
        TetradName: `${grades[5]}m7`,
        TetradNotes: getMinorSeventh(grades[5]).notes,
      },
      {
        Grade: "7",
        DiatonicScaleName: "Locrian",
        DiatonicScaleNotes: `${getLocrianScale(grades[6]).notes}`,
        TriadName: `${grades[6]}mb5`,
        TriadNotes: getDiminishedTriadChord(grades[6]).notes,
        TetradName: `${grades[6]}⌀7`,
        TetradNotes: getSemiDiminished(grades[6]).notes,
      },
    ];

    return info;
  };
  // Funciones que devuelven toda la info de una nota en su tonalidad menor
  const getMinorKeyInfo = (note: string) => {
    const grades = convertToMinorKey(note);
    const info = [
      {
        Grade: "1",
        DiatonicScaleName: "Aeolian",
        DiatonicScaleNotes: `${getAeoliancScale(grades[0]).notes}`,
        TriadName: `${grades[0]}m`,
        TriadNotes: getMinorTriadChord(grades[0]).notes,
        TetradName: `${grades[0]}m7`,
        TetradNotes: getMinorSeventh(grades[0]).notes,
      },
      {
        Grade: "2",
        DiatonicScaleName: "Locrian",
        DiatonicScaleNotes: `${getLocrianScale(grades[1]).notes}`,
        TriadName: `${grades[1]}mb5`,
        TriadNotes: getDiminishedTriadChord(grades[1]).notes,
        TetradName: `${grades[1]}⌀7`,
        TetradNotes: getSemiDiminished(grades[1]).notes,
      },
      {
        Grade: "b3",
        DiatonicScaleName: "Ionian",
        DiatonicScaleNotes: `${getIonianScale(grades[2]).notes}`,
        TriadName: `${grades[2]}`,
        TriadNotes: getMajorTriadChord(grades[2]).notes,
        TetradName: `${grades[2]}Maj7`,
        TetradNotes: getMajorSeventh(grades[2]).notes,
      },
      {
        Grade: "4",
        DiatonicScaleName: "Dorian",
        DiatonicScaleNotes: `${getDorianScale(grades[3]).notes}`,
        TriadName: `${grades[3]}m`,
        TriadNotes: getMinorTriadChord(grades[3]).notes,
        TetradName: `${grades[3]}m7`,
        TetradNotes: getMinorSeventh(grades[3]).notes,
      },
      {
        Grade: "5",
        DiatonicScaleName: "Phrygian",
        DiatonicScaleNotes: `${getPhrygianScale(grades[4]).notes}`,
        TriadName: `${grades[4]}m`,
        TriadNotes: getMinorTriadChord(grades[4]).notes,
        TetradName: `${grades[4]}m7`,
        TetradNotes: getMinorSeventh(grades[4]).notes,
      },
      {
        Grade: "b6",
        DiatonicScaleName: "Lydian",
        DiatonicScaleNotes: `${getLydianScale(grades[5]).notes}`,
        TriadName: `${grades[5]}`,
        TriadNotes: getMajorTriadChord(grades[5]).notes,
        TetradName: `${grades[5]}Maj7`,
        TetradNotes: getMajorSeventh(grades[5]).notes,
      },
      {
        Grade: "b7",
        DiatonicScaleName: "Mixolydian",
        DiatonicScaleNotes: `${getMixolydianScale(grades[6]).notes}`,
        TriadName: `${grades[6]}`,
        TriadNotes: getMajorTriadChord(grades[6]).notes,
        TetradName: `${grades[6]}7`,
        TetradNotes: getSeventh(grades[6]).notes,
      },
    ];

    return info;
  };

  return {
    //get key
    getMajorKeyInfo,
    getMinorKeyInfo,
    //get chords
    getMajorTriadChord,
    getMinorTriadChord,
    getDiminishedTriadChord,
    getMajorSeventh,
    getMinorSeventh,
    getSeventh,
    getSemiDiminished,
    //get scales
    getIonianScale,
    getDorianScale,
    getPhrygianScale,
    getLydianScale,
    getMixolydianScale,
    getAeoliancScale,
    getLocrianScale,
  };
};

export default keyFormulas;
