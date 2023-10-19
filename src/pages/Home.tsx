import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { Search } from '../components/Search'
import { useHome } from '../hooks/useHome'

export function Home() {
  const { issues, searchTerm, handleSearchTermChange, userData, count } =
    useHome()

  return (
    <div>
      <Profile user={userData} />
      <Search
        searchTerm={searchTerm}
        issuesCount={count}
        onSearchTerm={handleSearchTermChange}
      />

      <div className="grid grid-cols-2 gap-8">
        {issues && issues.map((issue) => <Post key={issue.id} issue={issue} />)}
      </div>
    </div>
  )
}
