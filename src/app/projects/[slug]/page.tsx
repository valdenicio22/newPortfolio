import { Project } from '@/Types/projects'
import { ProjectDetails } from '@/components/pages/projects/ProjectDetails'
import { ProjectSections } from '@/components/pages/projects/ProjectSections'

export default async function Project() {
  return (
    <>
      <ProjectDetails />
      <ProjectSections />
    </>
  )
}
