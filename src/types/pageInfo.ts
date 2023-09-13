import type { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech, Project } from "./projects";
import { WorkExperience } from './workExperience';

export type SocialMedia = {
  url: string;
  iconSvg: string;
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  },
  technologies: KnownTech[],
  profilePicture: {
    url: string
  },
  knownTechs: KnownTech[],
  socialMedias: SocialMedia[],
  highLightProjects: Project[]
}

export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}

export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
}
export type HomePageData = {
  landingPage: HomePageInfo
  workExperiences: WorkExperience[]
}