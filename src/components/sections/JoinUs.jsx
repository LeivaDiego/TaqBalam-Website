// sections/JoinUs.jsx
import React from 'react'
import { Handshake, Globe, GraduationCap, Cpu, Leaf } from 'lucide-react'
import { CopyButton } from '@Buttons/CopyButton'
import { BackgroundGradient } from '@UI/background-gradient'
import { HoverBorderButton } from '@Buttons/HoverBorderButton'
import { Reveal } from '@UI/reveal'
import biLogo from '@Images/Sponsors/BancoIndustrial.svg'

export function JoinUs() {
	const bullets = [
		{
			title: 'Impacto social y ambiental',
			desc: 'Impulsa soluciones sostenibles que benefician a Guatemala y la región.',
			icon: <Leaf className="size-5 text-[color:var(--color-brand-300)]" />,
		},
		{
			title: 'Visibilidad internacional',
			desc: 'Proyección en competencias de alto nivel como la Shell Eco-Marathon Americas.',
			icon: <Globe className="size-5 text-[color:var(--color-brand-300)]" />,
		},
		{
			title: 'Desarrollo de talento',
			desc: 'Apoya la formación de futuros líderes en ingeniería, innovación y sostenibilidad.',
			icon: <GraduationCap className="size-5 text-[color:var(--color-brand-300)]" />,
		},
		{
			title: 'Innovación tecnológica',
			desc: 'Participa en prototipos con eficiencia energética y materiales ecológicos.',
			icon: <Cpu className="size-5 text-[color:var(--color-brand-300)]" />,
		},
		{
			title: 'Responsabilidad social empresarial (RSE)',
			desc: 'Refuerza el compromiso con educación, ambiente y comunidad.',
			icon: <Handshake className="size-5 text-[color:var(--color-brand-300)]" />,
		},
	]

	const formas = [
		'Patrocinio financiero',
		'Donación de materiales o equipos',
		'Asesoría técnica o empresarial',
		'Difusión y promoción del proyecto',
	]

	return (
		<section id="patrocinio" className="mx-auto max-w-6xl overflow-visible px-4 py-12">
			{/* Título + subtítulo */}
			<div className="mb-8 sm:mb-10">
				<Reveal dir="up" blur={10}>
					<h2
						className={`text-4xl font-semibold tracking-tight text-[color:var(--color-brand-50)]
							sm:text-5xl`}
					>
						Patrocina el futuro con Taq'Balam
					</h2>
				</Reveal>
				<Reveal dir="up" blur={10} amount={0.3}>
					<p className="mt-2 max-w-3xl text-lg opacity-90">
						En Taq'Balam buscamos patrocinadores visionarios que quieran impulsar la innovación, la
						sostenibilidad y el talento guatemalteco.
					</p>
				</Reveal>
			</div>

			<div className="grid grid-cols-12 items-stretch gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
				{/* Top-left */}
				<div className="relative z-0 col-span-12 min-w-0 overflow-visible md:col-span-6">
					<Reveal dir="up" blur={8} clip={false} className="overflow-visible">
						<BackgroundGradient
							containerClassName="overflow-visible"
							className="h-full rounded-[22px] bg-bg p-4 sm:p-10"
						>
							<div className="mb-5 flex items-center gap-2 text-[color:var(--color-brand-200)]">
								<Handshake className="size-5" />
								<h3 className="text-2xl font-bold text-[color:var(--color-brand-200)]">
									¿Por qué patrocinar a Taq Balam?
								</h3>
							</div>
							<ul className="space-y-3">
								{bullets.map((b, i) => (
									<li key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
										<div className="flex items-start gap-3">
											{b.icon}
											<div>
												<div className="font-semibold">{b.title}</div>
												<div className="text-sm opacity-90">{b.desc}</div>
											</div>
										</div>
									</li>
								))}
							</ul>
						</BackgroundGradient>
					</Reveal>
				</div>

				{/* Top-right */}
				<div className="relative z-0 col-span-12 min-w-0 overflow-visible md:col-span-6">
					<Reveal dir="up" blur={8} clip={false} className="overflow-visible">
						<BackgroundGradient
							containerClassName="overflow-visible"
							className="h-full rounded-[22px] bg-bg p-4 sm:p-10"
						>
							<h3 className="text-2xl font-bold text-[color:var(--color-brand-200)]">
								Formas de unirte
							</h3>
							<ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
								{formas.map((f, i) => (
									<li
										key={i}
										className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/5
										p-3`}
									>
										<span
											aria-hidden
											className={`mt-0.5 inline-block size-2 flex-none rounded-full
											bg-[color:var(--color-brand-300)]`}
										/>
										<span className="text-sm">{f}</span>
									</li>
								))}
							</ul>
							<div className="mt-5">
								<HoverBorderButton
									as="a"
									href="mailto:taqbalam1@gmail.com?subject=Inter%C3%A9s%20en%20patrocinio%20Taq%20Balam"
									label="Ser patrocinador"
									bgClassName="bg-primary"
									textClassName="text-primary-foreground"
									size="md"
								/>
							</div>
						</BackgroundGradient>
					</Reveal>
				</div>

				{/* Bottom: Donation spans both */}
				<div className="relative z-0 col-span-12 min-w-0 overflow-visible">
					<Reveal dir="up" blur={10} clip={false} className="overflow-visible">
						<BackgroundGradient
							containerClassName="overflow-visible"
							className="w-full rounded-[22px] bg-bg p-4 sm:p-10"
						>
							<h3 className="text-2xl font-bold text-[color:var(--color-brand-200)]">
								Donación por transferencia bancaria
							</h3>
							<p className="mt-2 max-w-3xl opacity-90">
								Si deseas apoyar nuestra misión de innovación sostenible, puedes realizar una
								donación por transferencia. Tu aporte impulsa a estudiantes guatemaltecos a
								construir tecnología con impacto social.
							</p>

							{/* Single Bank Block */}
							<div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
								<div className="flex items-center gap-3">
									<img src={biLogo} alt="Banco Industrial" className="h-10 w-auto" />
									<div className="font-medium">Banco Industrial</div>
								</div>
								<p className="text-sm opacity-90">
									Gracias por confiar en nuestro trabajo. Cada contribución nos acerca a la próxima
									meta.
								</p>

								<div className="grid gap-4 sm:grid-cols-3">
									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="text-xs opacity-70">Titular de la cuenta</div>
										<div className="font-semibold">Emanuel Alfredo Sandoval Yax</div>
									</div>

									<div className="rounded-lg border border-white/10 bg-white/5 p-3">
										<div className="text-xs opacity-70">Tipo de cuenta</div>
										<div className="font-semibold">Cuenta Monetaria</div>
									</div>

									<div
										className={`flex items-center justify-between rounded-lg border border-white/10
											bg-emerald-500/10 p-3`}
									>
										<div>
											<div className="text-xs tracking-wide text-emerald-300 uppercase">
												Número de cuenta
											</div>
											<div className="font-mono text-lg text-slate-100">0170156335</div>
										</div>
										<CopyButton text="0170156335" />
									</div>
								</div>
							</div>
						</BackgroundGradient>
					</Reveal>
				</div>
			</div>
		</section>
	)
}
