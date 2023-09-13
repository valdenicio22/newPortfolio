import { ProjectDetails } from '@/components/pages/projects/ProjectDetails'
import { ProjectSections } from '@/components/pages/projects/ProjectSections'
import { ProjectPageData, ProjectsPageStaticData } from '@/types/pageInfo'
import { Project } from '@/types/projects'
import { fetchHygraphQuery } from '@/utils/fetchHygraphQuery'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type ProjectProps = {
  params: {
    slug: string
  }
}

const getProjectDetailsData = async (
  slug: string
): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      pageThumbnail {
        url
      }
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `
  const data = fetchHygraphQuery<ProjectPageData>(
    query,
    1000 * 60 * 60 * 24 // 1 day
  )

  return data
}

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetailsData(slug)

  if (!project?.title) return notFound()

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  )
}

export async function generateStaticParams() {
  const query = `
  query ProjectsSlugsQuery(){
    projects(first: 50){
      slug
    }
  }`

  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)
  return projects
}

// export async function generateMetadata({
//   params: { slug }
// }: ProjectProps): Promise<Metadata> {
//   const { project } = await getProjectDetailsData(slug)
//   return {
//     title: project.title,
//     description: project.description.text,
//     openGraph: {
//       images: [
//         {
//           url: project.thumbnail.url,
//           width: 1200,
//           height: 630
//         }
//       ]
//     }
//   }
// }
