/* cSpell:disable */

import { NameList } from "./name-list";

import * as Races from "../../models/races";

import { DwarfSurnames } from "./common/dwarf-surnames";

export const DwarfNorse: Races.NameDefinition = {
    name: "Dwarf (Norse)",
    formats: [
        "{forename} {prefixAdjective}{suffixNoun}",
        "{forename} {prefixNoun}{suffixAdjective}",
    ],
    parts: {
        forename: {
            markovOrder: 2,
            mode: "markov",
            maxLength: 12,
            source: {
                "F": [
                    "alfhild",
                    "alva",
                    "alvilda",
                    "ase",
                    "asta",
                    "astrid",
                    "audhild",
                    "bergljot",
                    "borghild",
                    "brenna",
                    "brynhild",
                    "dagmar",
                    "eerika",
                    "eira",
                    "erika",
                    "eydis",
                    "freja",
                    "freydis",
                    "gerd",
                    "gunhild",
                    "gunilla",
                    "gyda",
                    "hege",
                    "helga",
                    "hella",
                    "helle",
                    "hertha",
                    "hilde",
                    "hillevi",
                    "inge",
                    "ingeborg",
                    "inger",
                    "ingrid",
                    "inkeri",
                    "iona",
                    "jorunn",
                    "kari",
                    "magnhild",
                    "nanna",
                    "oili",
                    "olga",
                    "oydis",
                    "ragna",
                    "ragnhild",
                    "ranveig",
                    "runa",
                    "saga",
                    "sassa",
                    "sigfrid",
                    "signe",
                    "sigrid",
                    "sigrun",
                    "sigrunn",
                    "siri",
                    "solveig",
                    "solvej",
                    "solvi",
                    "svanhild",
                    "sylvi",
                    "thora",
                    "thyra",
                    "tone",
                    "torborg",
                    "tordis",
                    "torhild",
                    "toril",
                    "torny",
                    "tova",
                    "tove",
                    "turid",
                    "turunn",
                    "tyra",
                    "unn",
                    "vigdis",
                    "ylva",
                    "yngvild",
                ],
                "M": [
                    "ake",
                    "alva",
                    "arne",
                    "arvid",
                    "asger",
                    "asmund",
                    "audun",
                    "balder",
                    "bard",
                    "birger",
                    "bjarke",
                    "bjarni",
                    "bjarte",
                    "bjørn",
                    "brandt",
                    "brant",
                    "brynjar",
                    "canute",
                    "carr",
                    "dag",
                    "dagfinn",
                    "dustin",
                    "eerikki",
                    "egil",
                    "einar",
                    "eindride",
                    "eirik",
                    "elof",
                    "eluf",
                    "endre",
                    "fiske",
                    "fjell",
                    "folke",
                    "frey",
                    "fritjof",
                    "frode",
                    "geir",
                    "gisle",
                    "gosta",
                    "gunnar",
                    "håkon",
                    "halstein",
                    "halvar",
                    "halvard",
                    "halvdan",
                    "halvor",
                    "harald",
                    "havardr",
                    "herleif",
                    "herleifr",
                    "hjalmar",
                    "inge",
                    "ingemar",
                    "ingfred",
                    "inghard",
                    "ingolf",
                    "ingvar",
                    "ivar",
                    "jari",
                    "jarl",
                    "jarle",
                    "jerrik",
                    "jkeld",
                    "kalder",
                    "kjell",
                    "knud",
                    "knut",
                    "leif",
                    "loki",
                    "magnus",
                    "odin",
                    "olaf",
                    "olav",
                    "oluf",
                    "rangvald",
                    "rangvaldr",
                    "rolf",
                    "sigurd",
                    "snorre",
                    "steinar",
                    "stig",
                    "stigr",
                    "sveinn",
                    "sven",
                    "svend",
                    "tait",
                    "tarben",
                    "thor",
                    "thorsen",
                    "thorsten",
                    "thorvaldr",
                    "thurman",
                    "thurmond",
                    "thurston",
                    "torben",
                    "torbjorn",
                    "tore",
                    "torstein",
                    "torsten",
                    "torvald",
                    "troels",
                    "trygve",
                    "tyr",
                    "uffe",
                    "ulf",
                    "unn",
                    "valdemar",
                    "vali",
                    "vern",
                    "vidar",
                    "viggo",
                    "yngve"
                ]
            },
        },
        prefixAdjective: DwarfSurnames.prefixAdjective,
        suffixNoun: DwarfSurnames.suffixNoun,
        prefixNoun: DwarfSurnames.prefixNoun,
        suffixAdjective: DwarfSurnames.suffixAdjective
    }
};

NameList[DwarfNorse.name] = DwarfNorse;