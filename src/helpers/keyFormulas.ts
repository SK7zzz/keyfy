const keyFormulas = () => {
  const notes = [
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

  // Vamos a necesitar el indice del primer grado para jugar con eso
  const firstGradeIndex = (note: string) => notes.findIndex((e) => e === note);
  // Funcion para pillar el indice de cada grado
  const getGradeIndex = (distance: number, note: string) => {
    const gradeIndex = distance + firstGradeIndex(note);
    if (gradeIndex >= notes.length) {
      return gradeIndex - notes.length;
    } else {
      return gradeIndex;
    }
  };

  const convertToMajorKey = (note: string) => {
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
  const getIonianScale = (note: string) => convertToMajorKey(note);

  const getDorianScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(10, note)],
    ];
    return scale;
  };

  const getPhrygianScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(1, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return scale;
  };

  const getLydianScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(4, note)],
      notes[getGradeIndex(6, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(11, note)],
    ];
    return scale;
  };

  const getMixolydianScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(4, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(9, note)],
      notes[getGradeIndex(10, note)],
    ];
    return scale;
  };

  const getAeoliancScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(2, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(7, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return scale;
  };

  const getLocrianScale = (note: string) => {
    const scale = [
      note,
      notes[getGradeIndex(1, note)],
      notes[getGradeIndex(3, note)],
      notes[getGradeIndex(5, note)],
      notes[getGradeIndex(6, note)],
      notes[getGradeIndex(8, note)],
      notes[getGradeIndex(10, note)],
    ];
    return scale;
  };

  // Funciones para las triadas
  const getMajorTriadChord = (note: string) => {
    const chord = [
      note,
      " ",
      convertToMajorKey(note)[2],
      " ",
      convertToMajorKey(note)[4],
    ];
    return chord;
  };

  const getMinorTriadChord = (note: string) => {
    const chord = [
      convertToMinorKey(note)[0],
      " ",
      convertToMinorKey(note)[2],
      " ",
      convertToMinorKey(note)[4],
    ];
    return chord;
  };

  const getDiminishedTriadChord = (note: string) => {
    const chord = [
      note,
      " ",
      notes[getGradeIndex(3, note)],
      " ",
      notes[getGradeIndex(6, note)],
    ];
    return chord;
  };

  // Funciones para las cuatriadas

  const getMajorSeventh = (note: string) => {
    const chord = [
      convertToMajorKey(note)[0],
      " ",
      convertToMajorKey(note)[2],
      " ",
      convertToMajorKey(note)[4],
      " ",
      convertToMajorKey(note)[6],
    ];
    return chord;
  };

  const getMinorSeventh = (note: string) => {
    const chord = [
      convertToMinorKey(note)[0],
      " ",
      convertToMinorKey(note)[2],
      " ",
      convertToMinorKey(note)[4],
      " ",
      convertToMinorKey(note)[6],
    ];
    return chord;
  };

  const getSeventh = (note: string) => {
    const chord = [
      note,
      " ",
      notes[getGradeIndex(4, note)],
      " ",
      notes[getGradeIndex(7, note)],
      " ",
      notes[getGradeIndex(10, note)],
    ];
    return chord;
  };

  const getSemiDiminished = (note: string) => {
    const chord = [
      note,
      " ",
      notes[getGradeIndex(3, note)],
      " ",
      notes[getGradeIndex(6, note)],
      " ",
      notes[getGradeIndex(10, note)],
    ];
    return chord;
  };

  // Funciones que devuelven toda la info de una nota en su tonalidad mayor
  const getMajorKeyInfo = (note: string) => {
    const grades = convertToMajorKey(note);
    const info = [
      {
        Grade: "1",
        DiatonicScaleName: "Ionian",
        DiatonicScaleNotes: `${getIonianScale(grades[0])}`,
        TriadName: `${grades[0]}`,
        TriadNotes: getMajorTriadChord(grades[0]),
        TetradName: `${grades[0]}Maj7`,
        TetradNotes: getMajorSeventh(grades[0]),
      },
      {
        Grade: "2",
        DiatonicScaleName: "Dorian",
        DiatonicScaleNotes: `${getDorianScale(grades[1])}`,
        TriadName: `${grades[1]}m`,
        TriadNotes: getMinorTriadChord(grades[1]),
        TetradName: `${grades[1]}m7`,
        TetradNotes: getMinorSeventh(grades[1]),
      },
      {
        Grade: "3",
        DiatonicScaleName: "Phrygian",
        DiatonicScaleNotes: `${getPhrygianScale(grades[2])}`,
        TriadName: `${grades[2]}m`,
        TriadNotes: getMinorTriadChord(grades[2]),
        TetradName: `${grades[2]}m7`,
        TetradNotes: getMinorSeventh(grades[2]),
      },
      {
        Grade: "4",
        DiatonicScaleName: "Lydian",
        DiatonicScaleNotes: `${getLydianScale(grades[3])}`,
        TriadName: `${grades[3]}`,
        TriadNotes: getMajorTriadChord(grades[3]),
        TetradName: `${grades[3]}Maj7`,
        TetradNotes: getMajorSeventh(grades[3]),
      },
      {
        Grade: "5",
        DiatonicScaleName: "Mixolydian",
        DiatonicScaleNotes: `${getMixolydianScale(grades[4])}`,
        TriadName: `${grades[4]}`,
        TriadNotes: getMajorTriadChord(grades[4]),
        TetradName: `${grades[4]}7`,
        TetradNotes: getSeventh(grades[4]),
      },
      {
        Grade: "6",
        DiatonicScaleName: "Aeolian",
        DiatonicScaleNotes: `${getAeoliancScale(grades[5])}`,
        TriadName: `${grades[5]}m`,
        TriadNotes: getMinorTriadChord(grades[5]),
        TetradName: `${grades[5]}m7`,
        TetradNotes: getMinorSeventh(grades[5]),
      },
      {
        Grade: "7",
        DiatonicScaleName: "Locrian",
        DiatonicScaleNotes: `${getLocrianScale(grades[6])}`,
        TriadName: `${grades[6]}mb5`,
        TriadNotes: getDiminishedTriadChord(grades[6]),
        TetradName: `${grades[6]}⌀7`,
        TetradNotes: getSemiDiminished(grades[6]),
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
        DiatonicScaleNotes: `${getAeoliancScale(grades[0])}`,
        TriadName: `${grades[0]}m`,
        TriadNotes: getMinorTriadChord(grades[0]),
        TetradName: `${grades[0]}m7`,
        TetradNotes: getMinorSeventh(grades[0]),
      },
      {
        Grade: "2",
        DiatonicScaleName: "Locrian",
        DiatonicScaleNotes: `${getLocrianScale(grades[1])}`,
        TriadName: `${grades[1]}mb5`,
        TriadNotes: getDiminishedTriadChord(grades[1]),
        TetradName: `${grades[1]}⌀7`,
        TetradNotes: getSemiDiminished(grades[1]),
      },
      {
        Grade: "b3",
        DiatonicScaleName: "Ionian",
        DiatonicScaleNotes: `${getIonianScale(grades[2])}`,
        TriadName: `${grades[2]}`,
        TriadNotes: getMajorTriadChord(grades[2]),
        TetradName: `${grades[2]}Maj7`,
        TetradNotes: getMajorSeventh(grades[2]),
      },
      {
        Grade: "4",
        DiatonicScaleName: "Dorian",
        DiatonicScaleNotes: `${getDorianScale(grades[3])}`,
        TriadName: `${grades[3]}m`,
        TriadNotes: getMinorTriadChord(grades[3]),
        TetradName: `${grades[3]}m7`,
        TetradNotes: getMinorSeventh(grades[3]),
      },
      {
        Grade: "5",
        DiatonicScaleName: "Phrygian",
        DiatonicScaleNotes: `${getPhrygianScale(grades[4])}`,
        TriadName: `${grades[4]}m`,
        TriadNotes: getMinorTriadChord(grades[4]),
        TetradName: `${grades[4]}m7`,
        TetradNotes: getMinorSeventh(grades[4]),
      },
      {
        Grade: "b6",
        DiatonicScaleName: "Lydian",
        DiatonicScaleNotes: `${getLydianScale(grades[5])}`,
        TriadName: `${grades[5]}`,
        TriadNotes: getMajorTriadChord(grades[5]),
        TetradName: `${grades[5]}Maj7`,
        TetradNotes: getMajorSeventh(grades[5]),
      },
      {
        Grade: "b7",
        DiatonicScaleName: "Mixolydian",
        DiatonicScaleNotes: `${getMixolydianScale(grades[6])}`,
        TriadName: `${grades[6]}`,
        TriadNotes: getMajorTriadChord(grades[6]),
        TetradName: `${grades[6]}7`,
        TetradNotes: getSeventh(grades[6]),
      },
    ];

    return info;
  };

  return { getMajorKeyInfo, getMinorKeyInfo };
};

export default keyFormulas;
