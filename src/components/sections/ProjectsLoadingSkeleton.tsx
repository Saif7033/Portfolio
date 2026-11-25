export function ProjectsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="animate-pulse rounded-xl border border-zinc-200 bg-white p-6 shadow-xs"
        >
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded bg-zinc-200" />
            <div className="h-3 w-16 rounded bg-zinc-100" />
          </div>
          <div className="mt-4 h-6 w-3/4 rounded bg-zinc-200" />
          <div className="mt-3 space-y-2">
            <div className="h-3.5 w-full rounded bg-zinc-100" />
            <div className="h-3.5 w-5/6 rounded bg-zinc-100" />
          </div>
          <div className="mt-5 h-9 w-full rounded-lg bg-zinc-100" />
          <div className="mt-4 flex gap-2">
            <div className="h-5 w-16 rounded bg-blue-50" />
            <div className="h-5 w-14 rounded bg-blue-50" />
            <div className="h-5 w-20 rounded bg-blue-50" />
          </div>
          <div className="mt-6 flex justify-between border-t border-zinc-100 pt-4">
            <div className="h-4 w-28 rounded bg-zinc-200" />
            <div className="h-4 w-12 rounded bg-zinc-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
