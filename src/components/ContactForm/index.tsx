'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { z } from 'zod'
import { SectionTitle } from '../SectionTitle'
import { Button } from '../button'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Message sent successfully!')
      reset()
    } catch (err) {
      toast.error('Unexpected error, please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950 "
    >
      <div className="w-full max-w-[420px] mx-auto ">
        <SectionTitle
          section="Contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          className="w-full flex flex-col gap-4 mt-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="w-full h-14 p-4 rounded-lg bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            type="text"
            placeholder="Name"
            {...register('name')}
          />
          <input
            className="w-full h-14 p-4 rounded-lg bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            type="email"
            placeholder="Name@domain.com"
            {...register('email')}
          />

          <textarea
            className="w-full h-[138px] p-4 rounded-lg resize-none bg-gray-800 text-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 ring-emerald-600"
            placeholder="Let's connect"
            maxLength={500}
            {...register('message')}
          />
          <Button
            className="w-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
