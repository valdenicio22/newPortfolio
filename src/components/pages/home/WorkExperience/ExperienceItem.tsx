'use client'
import { WorkExperience } from '@/Types/workExperience'
import { RichText } from '@/components/RichText'
import { TechBadge } from '@/components/techBadge'
import { fadeUpAnimation, techBadgeAnimation } from '@/lib/animation'
import { differenceInMonths, differenceInYears } from 'date-fns'
import format from 'date-fns/format'
import enUS from 'date-fns/locale/en-US'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ExperienceItemProps = {
  experience: WorkExperience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const {
    companyName,
    companyLogo,
    companyUrl,
    description,
    endDate,
    role,
    startDate,
    technologies
  } = experience

  const dateStart = new Date(startDate)

  const formattedStartDate = format(dateStart, 'MMM yyyy', {
    locale: enUS
  })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: enUS })
    : 'Present'

  const dateEnd = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(dateEnd, dateStart)
  const years = differenceInYears(dateEnd, dateStart)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} year${years > 1 ? 's' : ''} 
        ${
          monthsRemaining > 0
            ? ` and ${monthsRemaining} month${monthsRemaining > 1 ? 's' : ''}`
            : ``
        }
            `
      : `${monthsRemaining} month${monthsRemaining > 1 ? 's' : ''}`

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
            width={40}
            height={40}
            alt={`${companyName} company logo`}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300 font-medium">{role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>
        {!!technologies.length && (
          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Technologies
          </p>
        )}
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[420px] mb-8">
          {!!technologies.length &&
            technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`${tech.name}-tech-${i}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: i * 0.2 }}
              />
            ))}
        </div>
      </div>
    </motion.div>
  )
}
