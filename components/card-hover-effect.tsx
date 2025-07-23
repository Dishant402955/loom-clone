"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: React.ReactNode[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
				className
			)}
		>
			{items.map((Item, idx) => (
				<div
					className="relative group  block p-2 h-full w-full z-10"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
					key={idx}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-800 dark:bg-slate-800/[0.8] block  rounded-3xl -z-50"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					{Item}
				</div>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-40">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

const projects = [
	{
		title: "Stripe",
		description:
			"A technology company that builds economic infrastructure for the internet.",
	},
	{
		title: "Netflix",
		description:
			"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
	},
	{
		title: "Google",
		description:
			"A multinational technology company that specializes in Internet-related services and products.",
	},
	{
		title: "Meta",
		description:
			"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
	},
	{
		title: "Amazon",
		description:
			"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
	},
	{
		title: "Microsoft",
		description:
			"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
	},
];
export const Demo = () => {
	return (
		<div className="max-w-5xl mx-auto p-8 bg-blue-900">
			<HoverEffect
				items={projects.map((item, index) => {
					return (
						<div
							className="max-w-96 p-4 flex flex-col justify-start items-center truncate text-white"
							key={index}
						>
							<p>{item.title}</p>
							<p>{item.description}</p>
						</div>
					);
				})}
			/>
		</div>
	);
};
