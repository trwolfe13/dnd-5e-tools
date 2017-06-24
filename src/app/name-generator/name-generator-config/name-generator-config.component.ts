import { Component, Input } from "@angular/core";

import * as Data from "../../../data";
import * as BackgroundData from "../../../data/backgrounds";
import * as ClassData from "../../../data/classes";
import * as NameData from "../../../data/names";
import * as RaceData from "../../../data/races";
import * as Abilities from "../../../models/abilities";
import * as Characters from "../../../models/characters";
import * as Classes from "../../../models/classes";
import { CharacterGeneratorConfig } from "../../../generators/character-generator-config";
import * as Races from "../../../models/races";

@Component({
  selector: "dnd-name-generator-config",
  templateUrl: "./name-generator-config.component.html",
  styleUrls: ["./name-generator-config.component.scss"]
})
export class NameGeneratorConfigComponent {
  @Input() config: CharacterGeneratorConfig;

  races: Races.Race[] = Object.keys(RaceData.RaceList).sort().map(name => RaceData.RaceList[name]);
  names: Races.NameDefinition[] = Object.keys(NameData.NameList).sort().map(name => NameData.NameList[name]);
  abilities: Abilities.Ability[] = Object.keys(Data.Abilities.AbilityList).map(name => Data.Abilities.AbilityList[name]);
  backgrounds: Characters.Background[] = Object.keys(BackgroundData.BackgroundList)
    .sort().map(name => BackgroundData.BackgroundList[name]);
  classes: Classes.Class[] = Object.keys(ClassData.ClassList).sort().map(name => ClassData.ClassList[name]);
};
