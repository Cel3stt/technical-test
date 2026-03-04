import './index.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="max-w-md w-full px-6 py-8 bg-slate-800/70 rounded-2xl shadow-xl border border-slate-700">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold tracking-wide text-sky-400">Technical Project</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Tailwind is working 🎉</h1>
          <p className="mt-2 text-sm text-slate-300">
            Edit <code className="px-1.5 py-0.5 rounded bg-slate-900/80 text-xs">src/App.tsx</code> and
            start building your UI with Tailwind.
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-200">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
              ✓
            </span>
            <p>Utility classes are ready to use in your React components.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
              ⚡
            </span>
            <p>Styles are purged automatically in production via Vite + Tailwind.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
