import lgbtSeniorHousing from "./projects/lgbt-senior-housing";
import rlStuff from "./projects/rl-stuff";
import portfolio from "./projects/portfolio";
import fillybExchange from "./projects/fillyb-exchange";
import satoru from "./projects/satoru";
import genshinOptimizer from "./projects/genshin-optimizer";
import rpgConcept from "./projects/rpg-concept";
import conway from "./projects/conway";
import phirl from "./projects/phirl";
import type { Project } from "./projects/types";

export type { Project };
export type { LinkInfo, TechIcon, GalleryItem, ProjectDetails, ProjectTag } from "./projects/types";

export const projects: Project[] = [
  lgbtSeniorHousing,
  rlStuff,
  portfolio,
  fillybExchange,
  satoru,
  genshinOptimizer,
  rpgConcept,
  conway,
  phirl,
];
