import React from 'react'

export default function ButtonSecondary({children}) {
  return (
    <div className="theme-card flex-shrink-0 flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-[var(--text-main)] transition-all duration-300 hover:border-transparent hover:bg-[var(--accent)] hover:shadow-[0_0_10px_var(--accent-glow)]"
>
        {children}
      
    </div>
  )
}
