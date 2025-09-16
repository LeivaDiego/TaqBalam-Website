import { LogoLoop } from '@UI/logo-animation-loop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const techLogos = [
	{ node: <SiReact />, title: 'React', href: 'https://react.dev' },
	{ node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
	{ node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
	{ node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
]

export function SponsorsLoop() {
	return (
		<div
			className={`relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-4
				shadow-lg backdrop-blur`}
			style={{ height: '150px' }}
		>
			<LogoLoop
				logos={techLogos}
				speed={120}
				direction="right"
				logoHeight={100}
				gap={50}
				pauseOnHover
				scaleOnHover
				fadeOut
				fadeOutColor="#18181b"
				ariaLabel="Sponsors Loop"
			/>
		</div>
	)
}
