import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Details = () => {
	return (
		<>
			<section className="mt-16 w-full max-w-4xl px-4 text-center">
				<TypewriterEffect
					words={[
						{ text: "Record" },
						{ text: "anything," },
						{ text: "anytime," },
						{ text: "anywhere.", className: "text-blue-500" },
					]}
				/>
				<p className="mt-4 text-muted-foreground text-base md:text-lg">
					Whether it&apos;s a bug report, product demo, or onboarding —
					we&apos;ve got you covered.
				</p>
			</section>

			<section className="mt-6 max-w-3xl px-6">
				<TextGenerateEffect
					words="Boom lets you skip the unnecessary steps — just record, share, and move forward. No installs. No clutter. Just speed and clarity."
					className="text-center text-lg md:text-xl"
					duration={0.6}
				/>
			</section>
		</>
	);
};
