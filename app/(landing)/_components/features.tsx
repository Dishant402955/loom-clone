import {
	CardDescription,
	CardTitle,
	HoverEffect,
} from "@/components/card-hover-effect";
import SpotlightCard from "@/components/spotlight-card";

export const Features = () => {
	const featureCards = [
		{
			title: "Instant Recording",
			description:
				"Start recording your screen with a single click. No setup, no delay.",
		},
		{
			title: "Instant Share",
			description:
				"Generate a link immediately after recording. Share without downloads.",
		},
		{
			title: "High-Quality Output",
			description: "Crystal-clear video and audio, optimized for clarity.",
		},
		{
			title: "Privacy Focused",
			description:
				"Your recordings are private by default. You decide who sees them.",
		},
		{
			title: "Lightweight",
			description:
				"No bloated apps. Just a fast, responsive experience built for the web.",
		},
		{
			title: "Collaborate Effortlessly",
			description: "Comment, react, and discuss recordings in clicks.",
		},
	];

	return (
		<section className="mt-24 max-w-6xl px-4 w-full">
			<h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-white">
				Why Boom?
			</h2>
			<HoverEffect
				items={featureCards.map(
					(
						{ title, description }: { title: string; description: string },
						index
					) => (
						<SpotlightCard className="size-full" key={index}>
							<CardTitle>{title}</CardTitle>
							<CardDescription>{description}</CardDescription>
						</SpotlightCard>
					)
				)}
			/>
		</section>
	);
};
