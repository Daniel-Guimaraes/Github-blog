export function Post() {
  return (
    <div className="max-w-postContainer h-64 rounded-2xl bg-base-post p-8">
      <div className="flex  justify-between gap-4">
        <h2 className="text-xl text-base-title">
          JavaScript data types and data structures
        </h2>

        <span className="whitespace-nowrap text-sm text-base-span">
          Há 1 dia
        </span>
      </div>

      <p className="mt-5 line-clamp-5 text-base-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = bar; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </div>
  )
}
