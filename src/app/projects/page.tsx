import { Introduction } from '@/components/pages/projects/Introduction'
import { List } from '@/components/pages/projects/List'
import { ProjectsPageData } from '@/Types/home'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `

  return fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24 // 1 day
  )
}

export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <Introduction />
      <List projects={projects} />
    </>
  )
}
