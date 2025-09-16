import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

export const Timeline = ({ data }) => {
	const ref = useRef(null)
	const containerRef = useRef(null)
	const [height, setHeight] = useState(0)

	useEffect(() => {
		if (!ref.current) return
		setHeight(ref.current.getBoundingClientRect().height)
	}, [])

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 10%', 'end 50%'],
	})

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

	return (
		<div className="w-full font-sans" ref={containerRef}>
			<div className="mx-auto max-w-7xl rounded-3xl bg-surface/70 backdrop-blur-md">
				{/* unpadded plane for bullets + spine */}
				<div
					ref={ref}
					className={`relative isolate z-0 pb-10 [--tl-pad:1rem] sm:[--tl-pad:1.25rem]
						md:[--tl-pad:2rem]`}
				>
					{/* inner padding wrapper */}
					<div className="px-[var(--tl-pad)] [&>div:first-child]:pt-6 md:[&>div:first-child]:pt-16">
						{data.map((item, index) => (
							<div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-40">
								<div
									className={`sticky top-40 z-10 flex max-w-xs flex-col items-center self-start
									md:w-full md:flex-row lg:max-w-sm`}
								>
									<div
										className={`absolute left-3 z-10 flex h-10 w-10 items-center justify-center
										rounded-full bg-white md:left-3 dark:bg-black`}
									>
										<div
											className={`h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2
											dark:border-neutral-700 dark:bg-neutral-800`}
										/>
									</div>
									<h3
										className={`hidden text-xl font-bold text-neutral-500 md:block md:pl-20
										md:text-5xl dark:text-neutral-500`}
									>
										{item.title}
									</h3>
								</div>

								<div className="relative w-full pr-4 pl-20 md:pl-4">
									<h3
										className={`mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden
										dark:text-neutral-500`}
									>
										{item.title}
									</h3>
									{item.content}
								</div>
							</div>
						))}
					</div>

					{/* spine aligned with padding */}
					<div
						style={{ height: `${height}px` }}
						className={`pointer-events-none absolute top-0 left-[calc(var(--tl-pad)+2rem)] z-0
							w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
							from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]
							[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
							dark:via-neutral-700`}
					>
						<motion.div
							style={{ height: heightTransform, opacity: opacityTransform }}
							className={`absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t
								from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent`}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
