import { Names } from "./name-list";

import * as Races from "../../models/races";

export const Elf: Races.NameDefinition = {
    name: "Elf",
    markovOrder: 2,
    forenames: {
        "M": [
            "Aiwin",
            "Ettrian",
            "Elidyr",
            "Elaith",
            "Ardryll",
            "Inialos",
            "Morthil",
            "Mirthal",
            "Ellisar",
            "Eldrin",
            "Aegnor",
            "Amdir",
            "Amras",
            "Amrod",
            "Amroth",
            "Angrod",
            "Argon",
            "Beleg",
            "Caranthir",
            "Celeborn",
            "Celebrimbor",
            "Celegorm",
            "Cirdan",
            "Curufin",
            "Daeron",
            "Denethor",
            "Duilin",
            "Eärendil",
            "Ecthelion",
            "Edrahil",
            "Egalmoth",
            "Elemmakil",
            "Elmo",
            "Elu",
            "Elrond",
            "Enel",
            "Enerdhil",
            "Eol",
            "Fëanor",
            "Finarfin",
            "Fingolfin",
            "Fingon",
            "Finrod",
            "Galadhon",
            "Galathil",
            "Galdor",
            "Galion",
            "Gildor",
            "Gil-galad",
            "Glorfindel",
            "Gwindor",
            "Haldir",
            "Ingwë",
            "Ingwion",
            "Legolas",
            "Lindir",
            "Olwë",
            "Orodreth",
            "Oropher",
            "Orophin",
            "Rúmil",
            "Saeros",
            "Thranduil",
        ],
        "F": [
            "Rothana",
            "Amairë",
            "Anairë",
            "Annael",
            "Aredhel",
            "Celebrian",
            "Eärwen",
            "Eldalótë",
            "Elenwë",
            "Elemmírë",
            "Enelyë",
            "Findis",
            "Finduilas",
            "Galadriel",
            "Idril",
            "Imin",
            "Iminyë",
            "Indis",
            "Irimë",
            "Lúthien",
            "Míriel",
            "Mithrellas",
            "Nellas",
            "Nerdanel",
            "Nimrodel",
        ]
    },
    surnames: [
        "Helvaris",
        "Heleneth",
        "Hermenor",
        "Tormaer",
        "Ulalynn",
    ]
};

Names.NameList[Elf.name] = Elf;