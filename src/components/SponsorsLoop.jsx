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
		<div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
			<LogoLoop
				logos={techLogos}
				speed={80}
				direction="right"
				logoHeight={100}
				gap={100}
				pauseOnHover
				scaleOnHover
				fadeOut={false}
				fadeOutColor="#000000"
				ariaLabel="Sponsors Loop"
			/>
		</div>
	)
}
