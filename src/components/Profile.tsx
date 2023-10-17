import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'

export function Profile() {
  return (
    <div className="-mt-24 flex w-profileContainer gap-8 rounded-lg bg-base-profile px-10 py-8 text-base-title shadow-md">
      <img
        src="https://github.com/Daniel-Guimaraes.png"
        alt="Imagem do usuário"
        className="h-36 w-36 rounded-lg bg-contain"
      />

      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h1 className="text-2xl">Daniel Guimarães</h1>

          <a
            href="#"
            className="flex gap-2 text-xs font-bold uppercase text-base-blue"
          >
            Github
            <ArrowSquareOut size={15} />
          </a>
        </div>

        <p className="mb-6 mt-2 text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <GithubLogo size={20} weight="fill" className="text-base-label" />
            <span className="text-base-subtitle">Login</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={20} weight="fill" className="text-base-label" />
            <span className="text-base-subtitle">Seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}
