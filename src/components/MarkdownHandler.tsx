import Markdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export interface MarkdownHandlerProps {
  issueContent: string | undefined
}

export function MarkdownHandler({ issueContent }: MarkdownHandlerProps) {
  return (
    <Markdown
      className="prose max-w-none text-base-text dark:prose-invert"
      components={{
        code(props) {
          const { children, className, ...rest } = props

          const match = /language-(\w+)/.exec(className || '')

          return match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        },
      }}
    >
      {issueContent}
    </Markdown>
  )
}
