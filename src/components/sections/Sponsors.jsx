// sections/Sponsors.jsx
import { ScrollReveal } from '@Text/ScrollReveal'
import { SponsorsLoop } from '@Widgets/SponsorsLoop'
import { Reveal } from '@UI/reveal'

export function Sponsors() {
	return (
		<section id="sponsors" className="relative py-10 sm:py-12">
			<div className="mx-auto max-w-6xl px-4">
				<ScrollReveal
					baseOpacity={0}
					enableBlur
					baseRotation={5}
					blurStrength={10}
					rotationEnd="+=300"
					wordAnimationEnd="+=300"
					containerClassName="mb-4"
					textClassName="font-semibold text-center" // centered
				>
					Patrocinadores
				</ScrollReveal>
			</div>

			{/* Auto height (no svh). Adjust if you want a fixed slim ribbon */}
			<div className="px-0">
				<Reveal dir="up" amount={0.3} blur={12}>
					{/* Option A: intrinsic height */}
					<SponsorsLoop />

					{/* Option B: slim fixed height (uncomment, and remove Option A) */}
					{/* <div className="h-32 sm:h-40 md:h-48">
               <SponsorsLoop />
             </div> */}
				</Reveal>
			</div>
		</section>
	)
}
