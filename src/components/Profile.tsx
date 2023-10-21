import { ArrowSquareOut, GithubLogo, MapPin, Users } from 'phosphor-react'
import { UserData } from '../types/user'

interface ProfileProps {
  user: UserData
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="max-w-profileContainer -mt-24 flex flex-col items-center gap-8 rounded-lg bg-base-profile px-10 py-8 text-center text-base-title shadow-md lg:flex-row lg:text-left">
      <img
        src={user?.avatar_url}
        alt="Imagem do usuário"
        className="w-28 rounded-lg bg-contain lg:h-36 lg:w-36"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl lg:text-2xl">{user?.name}</h1>

          <div className="lg:border-b lg:border-transparent lg:transition lg:hover:border-b lg:hover:border-b-base-blue">
            <a
              href={user?.html_url}
              target="_blank"
              className="flex items-start gap-2 text-xs font-bold uppercase text-base-blue"
              rel="noreferrer"
            >
              Github
              <ArrowSquareOut size={15} />
            </a>
          </div>
        </div>

        <p className="mb-6 mt-3 text-sm text-base-text lg:mt-2 lg:text-base">
          {user?.bio}
        </p>

        <div className="flex justify-center gap-6 lg:justify-normal">
          <div className="flex items-center gap-2">
            <GithubLogo size={20} weight="fill" className=" text-base-label" />
            <span className="whitespace-nowrap text-xs text-base-subtitle lg:text-base">
              {user?.login}
            </span>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <MapPin size={20} weight="fill" className="text-base-label" />
            <span className="text-base-subtitle">{user?.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={20} weight="fill" className="text-base-label" />
            <span className="text-xs text-base-subtitle lg:text-base">
              {user?.followers}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
