'use client'

import { Button } from '@/components/button'
import { TechBadge } from '@/components/techBadge'
import { socialMediaContacts, technologies } from '@/constants'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function HeroSection() {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      className="w-full lg:h-[755px] flex flex-col justify-end  bg-hero-image bg-cover bg-no-repeat bg-center 
  pb-10 sm:pb-32 lg:pb-[110px] py-32
  "
    >
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-emerald-400 font-mono">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Valdenício Ferreira</h2>

          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é Valdenício Ferreira e sou um desenvolvedor front-end
            apaixonado por tecnologia. Com mais de{' '}
            <strong className="font-medium">1 anos de experiência</strong>. Meu
            objetivo é criar interfaces de usuário bonitas e funcionais, além de
            liderar equipes técnicas em projetos desafiadores. Estou sempre
            aberto a novas oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {technologies.map((tech, i) => (
              <TechBadge key={`${tech}-${i}`} name={tech} />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex items-center gap-4">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="h-20 flex items-center gap-3 text-2xl text-gray-600 ">
              {socialMediaContacts.map((item, i) => (
                <a
                  href={item.url}
                  key={i + 1}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/images/profile-pic.png"
          width={420}
          height={404}
          alt="My profile picture"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
