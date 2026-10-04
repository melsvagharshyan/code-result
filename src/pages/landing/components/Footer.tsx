import { Reveal } from './Reveal'

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-paper-100">
      <Reveal className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze-500 font-serif text-lg font-bold text-slate-950">
              CR
            </div>
            <span className="flex items-center gap-1.5 font-serif text-xl font-bold tracking-tight text-paper-100">
              Code Result <span className="inline-block h-1.5 w-1.5 rounded-full bg-bronze-500" />
            </span>
          </div>

          <p className="text-center text-xs font-medium text-paper-300/60 sm:text-right">
            Code Result © 2026. B2B Presentation Materials for Real Estate Developers.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
