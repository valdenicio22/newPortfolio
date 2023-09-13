import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="font-medium text-gray-50">{children}</b>
        ),
        ul: ({ children }) => (
          <ul className="list-disc text-sm list-inside mt-1 pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            className="hover:text-emerald-500 underline transition-colors"
            target="_blank"
            {...props}
          >
            {children}
          </a>
        ),
        p: ({ children }) => <p className="mt-2">{children}</p>
      }}
    />
  )
}
