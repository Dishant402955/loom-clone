import { LampContainer } from "@/components/lamp-effect";
import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<LampContainer className="bg-background text-foreground">
			<motion.h1
				initial={{ opacity: 0, y: 150 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeInOut" }}
				className="mt-8 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-7xl"
			>
				Capture. Share. <br /> In one click.
			</motion.h1>
		</LampContainer>
	);
};
