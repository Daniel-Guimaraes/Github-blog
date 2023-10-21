import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  Chat,
  GithubLogo,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Issue } from '../types/issue'
import { dateFormatter } from '../utils/dateFormatter'

interface PostHeaderProps {
  issueDetails: Issue
}

export function PostHeader({ issueDetails }: PostHeaderProps) {
  const issueCreationDate =
    issueDetails?.created_at && dateFormatter(issueDetails.created_at)

  return (
    <div className="max-w-profileContainer -mt-24 flex flex-col rounded-lg bg-base-profile px-10 py-8 text-base-title shadow-md">
      <div className="mt-5 flex flex-1 justify-between lg:mt-0">
        <Link
          to="/"
          className="flex items-center gap-2 text-xs text-base-blue "
        >
          <CaretLeft size={15} />
          Voltar
        </Link>

        <div className="lg:border-b lg:border-transparent lg:transition lg:hover:border-b lg:hover:border-b-base-blue">
          <a
            href={issueDetails?.html_url}
            target="_blank"
            className="flex items-start gap-2 text-xs uppercase text-base-blue"
            rel="noreferrer"
          >
            Ver no Github
            <ArrowSquareOut size={15} />
          </a>
        </div>
      </div>

      <h2 className=" mb-6 mt-5 text-2xl text-base-title lg:mb-2">
        {issueDetails?.title}
      </h2>

      <div className="flex gap-6">
        <div className="flex items-center gap-2 whitespace-nowrap text-xs lg:text-base">
          <GithubLogo size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">
            {issueDetails?.user?.login}
          </span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap text-xs lg:text-base">
          <Calendar size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">{issueCreationDate}</span>
        </div>

        <div className="flex items-center gap-2 text-xs lg:text-base">
          <Chat size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">{issueDetails?.comments}</span>
        </div>
      </div>
    </div>
  )
}
