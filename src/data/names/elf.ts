/* cSpell:disable */

import { ElfNames } from "./common/elf-names";
import { NameList } from "./name-list";

import * as Races from "../../models/races";

export const Elf: Races.NameDefinition = {
    name: "Elf",
    formats: [
        "{forenamePrefixConsonant}{forenameSuffixVowel} {surname}",
        "{forenamePrefixVowel}{forenameSuffixConsonant} {surname}"
    ],
    parts: {
        forenamePrefixConsonant: ElfNames.forenamePrefixConsonant,
        forenamePrefixVowel: ElfNames.forenamePrefixVowel,
        forenameSuffixVowel: ElfNames.forenameSuffixVowel,
        forenameSuffixConsonant: ElfNames.forenameSuffixConsonant,
        surname: ElfNames.surname
    }
};

NameList[Elf.name] = Elf;
