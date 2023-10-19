interface SearchProps {
  searchTerm: string
  onSearchTerm: (newSearchTerm: string) => void
  issuesCount: number
}

export function Search({ searchTerm, onSearchTerm, issuesCount }: SearchProps) {
  return (
    <div className="mb-8 mt-searchContainer">
      <div className="mb-4 flex justify-between">
        <span className="text-lg font-bold text-base-subtitle">
          Publicações
        </span>

        <span className="text-sm text-base-span">{issuesCount}Publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
        className="w-full rounded-md border border-base-border bg-base-input px-4 py-3 text-base-text outline-none placeholder:text-base-label focus:border-base-blue"
      />
    </div>
  )
}
