import React from 'react'
import { Sparkles, Leaf } from 'lucide-react'
import { GradientCard } from '@Widgets/GradientCard'
import { InfoCard } from '@Widgets/InfoCard'
import { MotionConfig, motion } from 'motion/react'
import videoSrc from '@Videos/TaqBalam2025 Video.mp4'
import videoPoster from '@Images/TaqBalam-Logo-Color.svg'

const container = {
	hidden: { opacity: 1 },
	show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}
const text = {
	hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
	show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5 } },
}
const leftDiag = {
	hidden: { opacity: 0, x: -48, y: 24, filter: 'blur(10px)' },
	show: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
}
const rightDiag = {
	hidden: { opacity: 0, x: 48, y: -24, filter: 'blur(10px)' },
	show: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', transition: { duration: 0.6 } },
}

export function About() {
	return (
		<MotionConfig reducedMotion="never">
			<motion.section
				id="about"
				className="mx-auto max-w-7xl px-4 py-16 sm:py-20"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.35 }} // animate in AND out
			>
				<div className="grid grid-cols-12 items-stretch gap-8">
					{/* Left column */}
					<div className="col-span-12 flex h-full flex-col justify-between md:col-span-6">
						<motion.div className="space-y-4" variants={container}>
							<motion.h2
								variants={text}
								className="text-4xl font-semibold tracking-tight sm:text-5xl"
							>
								Nosotros
							</motion.h2>

							<motion.p
								variants={text}
								className="text-lg leading-relaxed opacity-90 sm:text-xl"
								style={{ textAlign: 'justify' }}
							>
								<strong>Taq’Balam</strong> es un proyecto de la UVG que desarrolla un prototipo
								eléctrico para investigación y sostenibilidad. Desde 2010, con apoyo del Instituto
								de Investigaciones y Química UVG, representamos a Guatemala como el único equipo
								centroamericano en competencias internacionales, demostrando que la movilidad
								eléctrica puede impulsar un futuro sostenible en la región.
							</motion.p>
						</motion.div>

						<motion.div className="mt-8 grid grid-cols-1 gap-4" variants={container}>
							<motion.div variants={leftDiag}>
								<InfoCard
									icon={
										<Sparkles className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />
									}
									title="Misión"
									titleClass="text-[color:var(--color-brand-200)]"
									text="Ser un equipo competitivo, organizado y multidisciplinario que impulse la innovación en movilidad eléctrica y genere impacto positivo en la sociedad."
								/>
							</motion.div>

							<motion.div variants={leftDiag}>
								<InfoCard
									icon={<Leaf className="size-6 shrink-0 text-[color:var(--color-brand-300)]" />}
									title="Visión"
									titleClass="text-[color:var(--color-brand-200)]"
									text="Consolidarnos como referente en Latinoamérica por prototipos eléctricos eficientes, modernos y sostenibles que contribuyan al bienestar social y ambiental."
								/>
							</motion.div>
						</motion.div>
					</div>

					{/* Right column: video */}
					<div className="col-span-12 flex md:col-span-6">
						<motion.div className="flex w-full" variants={rightDiag}>
							<GradientCard borderWidth={4} padding="p-4 sm:p-6" className="h-full w-full">
								<div className="flex h-full w-full overflow-hidden rounded-xl">
									<video
										className="h-auto max-h-full w-full self-end rounded-xl"
										src={videoSrc}
										poster={videoPoster}
										autoPlay
										muted
										loop
										playsInline
										preload="auto"
									/>
								</div>
							</GradientCard>
						</motion.div>
					</div>
				</div>
			</motion.section>
		</MotionConfig>
	)
}
