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
    }
  }
  `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24 //1 day
  )
}

export default async function Home() {
  const { landingPage: data } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={data} />
      <Experience />
      <HighlightedProject />
      <WorkExperience />
    </>
  )
}
