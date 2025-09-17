import React, { useLayoutEffect, useRef, useState } from 'react'
import { HoverBorderButton } from '@Widgets/HoverBorderButton'
import banner from '@Images/Taq2025/Banner.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function Hero() {
	const sectionRef = useRef(null)
	const vehiculosRef = useRef(null)
	const titleRef = useRef(null)
	const creandoRef = useRef(null)
	const ctasRef = useRef(null)
	const tintRef = useRef(null)
	const imgRef = useRef(null)

	// NEW: detectar portrait (width < height)
	const [isPortrait, setIsPortrait] = useState(false)
	useLayoutEffect(() => {
		const check = () => setIsPortrait(window.innerWidth < window.innerHeight)
		check()
		window.addEventListener('resize', check)
		return () => window.removeEventListener('resize', check)
	}, [])

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set([vehiculosRef.current, creandoRef.current, ctasRef.current], {
				opacity: 0,
				y: 20,
				filter: 'blur(8px)',
			})
			gsap.set(titleRef.current, { opacity: 0, y: 32, filter: 'blur(12px)' })
			gsap.set(tintRef.current, { opacity: 0.6 })
			gsap.set(imgRef.current, { scale: 1.05, opacity: 1 })

			gsap.to(titleRef.current, {
				opacity: 1,
				y: 0,
				filter: 'blur(0px)',
				duration: 0.7,
				delay: 0.15,
				ease: 'power2.out',
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top top',
					end: '+=140%',
					scrub: true,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
				},
				defaults: { ease: 'none' },
			})

			tl.to(imgRef.current, { scale: 1.0, opacity: 0.9 }, 0)
				.to(tintRef.current, { opacity: 0.35 }, 0)
				.to(vehiculosRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' }, 0.2)
				.to(creandoRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' }, 0.45)
				.to(ctasRef.current, { opacity: 1, y: 0, filter: 'blur(0px)' }, 0.7)
		}, sectionRef)
		return () => ctx.revert()
	}, [])

	return (
		<section ref={sectionRef} id="home" className="relative flex h-[100svh] items-end md:h-screen">
			<img
				ref={imgRef}
				src={banner}
				alt="Banner Taq'Balam 2025"
				// Nota: style gobierna el tamaño <640px.
				// En sm/md/lg, las clases de Tailwind sobre-escriben.
				style={{ objectPosition: isPortrait ? '75% 22%' : '50% 18%' }}
				className={`pointer-events-none absolute inset-0 h-full w-full object-cover
					sm:object-[50%_22%] md:object-[50%_32%] lg:object-[50%_35%]`}
				loading="eager"
				decoding="async"
				fetchPriority="high"
				sizes="100vw"
			/>

			<div
				className={`pointer-events-none absolute inset-0
					bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_35%,rgba(0,0,0,0.15)_65%,rgba(0,0,0,0)_100%)]`}
			/>
			<div ref={tintRef} className="pointer-events-none absolute inset-0 bg-black/60" />

			<div
				className={`relative z-10 w-full pr-6 pb-[calc(env(safe-area-inset-bottom)+3rem)] pl-6
					md:pl-12 lg:pl-20`}
			>
				<p
					ref={vehiculosRef}
					className={`text-[clamp(1.5rem,2.8vw,1.35rem)] font-medium
						text-[color:var(--color-brand-500)]`}
				>
					Vehículos eficientes e Innovación energética
				</p>
				<h1
					ref={titleRef}
					className={`font-cinzel mt-2 text-[clamp(2.2rem,7vw,5rem)] leading-[1.05]
						text-[color:var(--color-text)]`}
				>
					Taq&apos;Balam
				</h1>
				<p
					ref={creandoRef}
					className={`mt-4 max-w-[70ch] text-[clamp(1rem,2.4vw,1.4rem)]
						text-[color:var(--color-muted)]`}
				>
					Creando soluciones sostenibles en Guatemala.
				</p>
				<div ref={ctasRef} className="mt-8 flex flex-wrap gap-3">
					<HoverBorderButton
						as="a"
						href="#sponsors"
						label="Ser Patrocinador"
						bgClassName="bg-primary"
						textClassName="text-primary-foreground"
						className="text-sm md:text-base"
						size="md"
					/>
					<HoverBorderButton
						as="a"
						href="#contacto"
						label="Contáctanos"
						bgClassName="bg-surface"
						textClassName="text-text"
						className="text-sm md:text-base"
						size="md"
					/>
				</div>
			</div>
		</section>
	)
}
