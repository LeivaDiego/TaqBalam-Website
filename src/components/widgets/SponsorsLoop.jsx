import { LogoLoop } from '@UI/logo-animation-loop'

// SVGs
import AgregadosSanJose from '@Images/Sponsors/AgregadosSanJose.svg'
import Alfredos from '@Images/Sponsors/Alfredos.svg'
import Amegua from '@Images/Sponsors/Amegua.svg'
import FibraFina from '@Images/Sponsors/FibraFina.svg'
import Shell from '@Images/Sponsors/Shell.svg'
import Uno from '@Images/Sponsors/Uno.svg'
import UVG from '@Images/Sponsors/UVG.svg'

// Reutilizable: logos como <img> para respetar colores y proporciones del SVG
const sponsorLogos = [
	{
		node: (
			<img
				src={AgregadosSanJose}
				alt="Agregados San José"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'Agregados San José',
		href: '',
	},
	{
		node: (
			<img
				src={Alfredos}
				alt="Alfredo’s"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'Alfredo’s',
		href: '',
	},
	{
		node: (
			<img
				src={Amegua}
				alt="AMEGUA"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'AMEGUA',
		href: '',
	},
	{
		node: (
			<img
				src={FibraFina}
				alt="Fibra Fina"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'Fibra Fina',
		href: '',
	},
	{
		node: (
			<img
				src={Shell}
				alt="Shell"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'Shell',
		href: '',
	},
	{
		node: (
			<img
				src={Uno}
				alt="UNO"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'UNO',
		href: '',
	},
	{
		node: (
			<img
				src={UVG}
				alt="UVG"
				className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
				loading="lazy"
			/>
		),
		title: 'UVG',
		href: '',
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
				logos={sponsorLogos}
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
