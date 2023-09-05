import type { RichTextContent } from '@graphcms/rich-text-types';
import { KnownTech } from "./projects";

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
  socialMedias: SocialMedia[]
}

export type HomePageData = {
  landingPage: HomePageInfo
}