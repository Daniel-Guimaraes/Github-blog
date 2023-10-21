import { Link } from 'react-router-dom'
import { Issue } from '../types/issue'
import { dateFormatter } from '../utils/dateFormatter'

interface PostProps {
  issue: Issue
}

export function Post({ issue }: PostProps) {
  const issueCreationDate = dateFormatter(issue.created_at)

  return (
    <Link to={`/post/${issue.number}`}>
      <div className="h-64 max-w-postContainer rounded-2xl bg-base-post p-8 hover:ring-2 hover:ring-base-label hover:transition">
        <div className="flex-start flex justify-between gap-4">
          <h2 className="text-lg text-base-title lg:text-xl">{issue.title}</h2>

          <span className="whitespace-nowrap text-xs text-base-span lg:text-sm">
            {issueCreationDate}
          </span>
        </div>

        <div className="mt-4 line-clamp-5 text-sm text-base-text lg:line-clamp-4 lg:text-base">
          {issue.body}
        </div>
      </div>
    </Link>
  )
}
