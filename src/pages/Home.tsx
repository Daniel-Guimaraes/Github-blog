import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { Search } from '../components/Search'

export function Home() {
  return (
    <div>
      <Profile />
      <Search />

      <div className="grid grid-cols-2 gap-8">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
