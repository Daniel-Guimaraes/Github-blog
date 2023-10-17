import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  Chat,
  GithubLogo,
} from 'phosphor-react'

export function PostHeader() {
  return (
    <div className="-mt-24 flex w-profileContainer flex-col rounded-lg bg-base-profile px-10 py-8 text-base-title shadow-md">
      <div className="flex flex-1 justify-between">
        <a href="#" className="flex items-center gap-2 text-xs text-base-blue">
          <CaretLeft size={15} />
          Voltar
        </a>

        <a href="#" className="flex items-center gap-2 text-xs text-base-blue">
          VER NO GITHUB
          <ArrowSquareOut size={15} />
        </a>
      </div>

      <h2 className="mb-2 mt-5 text-2xl text-base-title">
        JavaScript data types and data structures
      </h2>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <GithubLogo size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">Daniel-Guimarães</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">Há 1 dia</span>
        </div>

        <div className="flex items-center gap-2">
          <Chat size={20} weight="fill" className="text-base-label" />
          <span className="text-base-subtitle">8 cometários</span>
        </div>
      </div>
    </div>
  )
}
