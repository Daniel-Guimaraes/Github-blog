import { Link } from 'react-router-dom'
import { Issue } from '../hooks/useHome'

interface PostProps {
  issue: Issue
}

export function Post({ issue }: PostProps) {
  return (
    <Link to={`/post/${issue.number}`}>
      <div className="h-64 max-w-postContainer rounded-2xl bg-base-post p-8">
        <div className="flex  justify-between gap-4">
          <h2 className="text-xl text-base-title">{issue.title}</h2>

          <span className="whitespace-nowrap text-sm text-base-span">
            Há 1 dia
          </span>
        </div>

        <div className="mt-4 line-clamp-4 text-base-text">{issue.body}</div>
      </div>
    </Link>
  )
}
