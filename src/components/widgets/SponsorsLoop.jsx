import { LogoLoop } from '@UI/logo-animation-loop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const techLogos = [
	{ node: <SiReact className="text-brand-50" />, title: 'React', href: 'https://react.dev' },
	{ node: <SiNextdotjs className="text-brand-50" />, title: 'Next.js', href: 'https://nextjs.org' },
	{
		node: <SiTypescript className="text-brand-50" />,
		title: 'TypeScript',
		href: 'https://www.typescriptlang.org',
	},
	{
		node: <SiTailwindcss className="text-brand-50" />,
		title: 'Tailwind CSS',
		href: 'https://tailwindcss.com',
	},
]

export function SponsorsLoop() {
	return (
		<div
			className={[
				// wrapper styling
				'relative overflow-hidden rounded-2xl p-4',
				// responsive logo height var
				'[--lh:56px] sm:[--lh:72px] md:[--lh:96px] lg:[--lh:120px]',
				// responsive gap var (optional)
				'[--gg:24px] sm:[--gg:32px] md:[--gg:40px] lg:[--gg:56px]',
				// keep ~50px headroom around the row
				'h-[calc(var(--lh)+50px)]',
			].join(' ')}
		>
			<LogoLoop
				logos={techLogos}
				speed={80}
				direction="right"
				pauseOnHover
				scaleOnHover
				fadeOut={false}
				// override the component’s internal CSS vars with our responsive ones
				style={{
					'--logoloop-logoHeight': 'var(--lh)',
					'--logoloop-gap': 'var(--gg)',
				}}
			/>
		</div>
	)
}
