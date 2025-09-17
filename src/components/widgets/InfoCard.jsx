// widgets/InfoCard.jsx
import { HoverBorderGradient } from '@UI/hover-border-gradient'

export function InfoCard({ icon, title, text, titleClass = '' }) {
	return (
		<HoverBorderGradient
			as="div"
			duration={1.2}
			containerClassName="w-full rounded-2xl bg-transparent" // ← no shell bg, stretch
			className={`// ← stretch inner flex w-full flex-col !bg-white/5 !px-6 !py-6 backdrop-blur-sm
				md:!p-8`}
		>
			<div className="flex items-start gap-3">
				{icon}
				<div>
					<h3 className={`text-lg leading-tight font-semibold sm:text-xl ${titleClass}`}>
						{title}
					</h3>
					<p className="mt-2 text-base opacity-90 sm:text-lg">{text}</p>
				</div>
			</div>
		</HoverBorderGradient>
	)
}
