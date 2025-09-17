import React from 'react'
import { Copy } from 'lucide-react'

export function CopyButton({ text }) {
	return (
		<button
			type="button"
			onClick={() => navigator.clipboard?.writeText(text)}
			className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10
				px-3 py-1 text-sm hover:bg-white/20`}
			aria-label="Copiar número de cuenta"
		>
			<Copy className="size-4" />
			Copiar
		</button>
	)
}
