import { MarkdownHandler } from '../components/MarkdownHandler'
import { PostHeader } from '../components/PostHeader'
import { useIssueDetails } from '../hooks/usePostDetails'

export function PostDetails() {
  const { issueDetails } = useIssueDetails()

  return (
    <div>
      <PostHeader issueDetails={issueDetails} />

      <div className="max-w-postDetailContainer px-8 py-10">
        <MarkdownHandler issueContent={issueDetails?.body} />
      </div>
    </div>
  )
}
