import { ScrollReveal } from '@Text/ScrollReveal'
import { SponsorsLoop } from '@Widgets/SponsorsLoop'
import { Reveal } from '@UI/reveal'

export function Sponsors() {
	return (
		<section id="sponsors" className="relative flex min-h-[100svh] flex-col">
			{/* Título en flujo normal */}
			<div className="mx-auto mt-8 max-w-6xl px-4">
				<ScrollReveal
					baseOpacity={0}
					enableBlur
					baseRotation={5}
					blurStrength={10}
					rotationEnd="+=300"
					wordAnimationEnd="+=300"
					containerClassName="mb-8"
					textClassName="font-semibold text-left"
				>
					Patrocinadores
				</ScrollReveal>
			</div>

			{/* Loop expandido al resto de la pantalla */}
			<div className="flex-1">
				<Reveal dir="up" once={false} amount={0.3} blur={15}>
					<SponsorsLoop />
				</Reveal>
			</div>
		</section>
	)
}
