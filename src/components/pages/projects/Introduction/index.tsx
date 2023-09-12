'use client'
import { Link } from '@/components/Link'
import { SectionTitle } from '@/components/SectionTitle'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function Introduction() {
  return (
    <section className="w-full h-[460px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        section="projects"
        title="My Projects"
        className="text-center items-center [&>h3:text-4xl]"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="max-w-[640px] my-6 text-sm text-gray-400 text-center sm:text-base">
          {` Feel free to explore the projects I've worked on. You can see how they
          were created, what technologies were used, and the features that were
          implemented.`}
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Back to home page
        </Link>
      </motion.div>
    </section>
  )
}
