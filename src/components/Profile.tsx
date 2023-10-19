import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import { UserData } from '../types/user'

interface ProfileProps {
  user: UserData | undefined
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="-mt-24 flex w-profileContainer gap-8 rounded-lg bg-base-profile px-10 py-8 text-base-title shadow-md">
      <img
        src={user?.avatar_url}
        alt="Imagem do usuário"
        className="h-36 w-36 rounded-lg bg-contain"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl">{user?.name}</h1>

          <a
            href={user?.html_url}
            target="_blank"
            className="flex gap-2 text-xs font-bold uppercase text-base-blue"
            rel="noreferrer"
          >
            Github
            <ArrowSquareOut size={15} />
          </a>
        </div>

        <p className="mb-6 mt-2 text-base-text">{user?.bio}</p>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <GithubLogo size={20} weight="fill" className="text-base-label" />
            <span className="text-base-subtitle">{user?.login}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={20} weight="fill" className="text-base-label" />
            <span className="text-base-subtitle">{user?.followers}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
