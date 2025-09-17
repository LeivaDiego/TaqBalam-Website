// sections/Contact.jsx
import React from 'react'
import { Mail, Phone, MessageCircle, Camera, Music2, PlayCircle, ThumbsUp } from 'lucide-react'
import { HoverBorderButton } from '@Buttons/HoverBorderButton'
import { Reveal } from '@UI/reveal'

export function Contact() {
	const PHONE = '+50239046455'
	const WHATSAPP =
		'https://wa.me/50239046455?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20sobre%20Taq%20Balam.'

	const iconClass = 'size-5'

	const contactLinks = [
		{ href: WHATSAPP, label: 'WhatsApp', icon: <MessageCircle className={iconClass} />, ext: true },
		{ href: `tel:${PHONE}`, label: 'Llamar', icon: <Phone className={iconClass} /> },
		{
			href: 'mailto:taqbalam1@gmail.com?subject=Inter%C3%A9s%20en%20patrocinio%20Taq%20Balam',
			label: 'Correo',
			icon: <Mail className={iconClass} />,
		},
	]

	const socialLinks = [
		{
			href: 'https://www.instagram.com/taqbalam?utm_source=ig_web_button_share_sheet&igsh=MXZxcmNyd2xzNWk0eA==',
			label: 'Instagram',
			icon: <Camera className={iconClass} />,
			ext: true,
		},
		{
			href: 'https://www.tiktok.com/@taqbalamguatemala?is_from_webapp=1&sender_device=pc',
			label: 'TikTok',
			icon: <Music2 className={iconClass} />,
			ext: true,
		},
		{
			href: 'https://youtube.com/@taqbalam?si=i5aqE__7GAtBUkXf',
			label: 'YouTube',
			icon: <PlayCircle className={iconClass} />,
			ext: true,
		},
		{
			href: 'https://www.facebook.com/profile.php?id=61566337832030&sk',
			label: 'Facebook',
			icon: <ThumbsUp className={iconClass} />,
			ext: true,
		},
	]

	return (
		<section id="contacto" className="mx-auto max-w-6xl overflow-visible px-4 py-16">
			{/* Header */}
			<div className="mb-8 sm:mb-10">
				<Reveal dir="up" blur={10}>
					<h2
						className={`text-4xl font-semibold tracking-tight text-[color:var(--color-brand-50)]
							sm:text-5xl`}
					>
						Conéctate con Taq'Balam
					</h2>
				</Reveal>
				<Reveal dir="up" blur={10} amount={0.3}>
					<p className="mt-2 max-w-3xl text-[clamp(1.05rem,1.2vw+0.9rem,1.35rem)] opacity-90">
						¿Tienes preguntas o quieres ser parte del equipo? Contáctanos. Estamos aquí para
						ayudarte.
					</p>
				</Reveal>
			</div>

			{/* Two columns: Contact | Social */}
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{/* Contacto */}
				<Reveal dir="up" blur={8} clip={false} className="overflow-visible">
					<div>
						<h3 className="mb-3 text-xl font-semibold text-[color:var(--color-brand-200)]">
							Contáctanos
						</h3>
						<div className="flex flex-wrap gap-3">
							{contactLinks.map(({ href, label, icon, ext }, i) => (
								<HoverBorderButton
									key={i}
									as="a"
									href={href}
									{...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
									aria-label={label}
									label={label}
									icon={icon}
									bgClassName="bg-bg"
									textClassName="text-text"
									size="md"
								/>
							))}
						</div>
					</div>
				</Reveal>

				{/* Redes sociales */}
				<Reveal dir="up" blur={8} clip={false} className="overflow-visible">
					<div>
						<h3 className="mb-3 text-xl font-semibold text-[color:var(--color-brand-200)]">
							Síguenos
						</h3>
						<div className="flex flex-wrap gap-3">
							{socialLinks.map(({ href, label, icon }, i) => (
								<HoverBorderButton
									key={i}
									as="a"
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									label={label}
									icon={icon}
									bgClassName="bg-bg"
									textClassName="text-text"
									size="md"
								/>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}
