import Markdown from 'react-markdown'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export interface MarkdownHandlerProps {
  issueContent: string
}

export function MarkdownHandler({ issueContent }: MarkdownHandlerProps) {
  return (
    <Markdown
      className="prose dark:prose-invert text-base-text"
      components={{
        code({ children, className, ...rest }) {
          const match = /language-(\w+)/.exec(className || '')

          return match ? (
            <SyntaxHighlighter style={dracula} language={match[1]} PreTag="div">
              children={String(children).replace(/\n$/, '')}
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
