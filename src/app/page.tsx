import { Experience } from '@/components/pages/home/Experience'

import { HomePageData } from '@/Types/home'
import { HighlightedProject } from '@/components/pages/home/HighlightedProject'
import { WorkExperience } from '@/components/pages/home/WorkExperience'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { HeroSection } from '../components/pages/home/HeroSection'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query LandingPages {
    landingPage(where: {slug: "home"}) {
      introduction {
        raw
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socialMedias {
        url
        iconSvg
      } 
      highLightProjects {
        slug
        githubUrl
        liveProjectUrl
        title
        shortDescription
        thumbnail {
          url
        }
        technologies {
          name
        }
        description {
          raw
        }
      }
    }
  }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 // 24h
  )
}

export default async function Home() {
  const { landingPage: data } = await getPageData()

  console.log(data, data)

  return (
    <>
      <HeroSection homeInfo={data} />
      <Experience techs={data.knownTechs} />
      <HighlightedProject projects={data.highLightProjects} />
      <WorkExperience />
    </>
  )
}
