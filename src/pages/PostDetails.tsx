import { MarkdownHandler } from '../components/MarkdownHandler'
import { PostHeader } from '../components/PostHeader'

export function PostDetails() {
  return (
    <div>
      <PostHeader />

      <div className="max-w-postDetailContainer px-8 py-10">
        <MarkdownHandler />
      </div>
    </div>
  )
}
