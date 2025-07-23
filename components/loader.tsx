import { Loader2Icon } from "lucide-react";

interface LoaderProps {
	size?: number;
}

export const Loader = ({ size = 35 }: LoaderProps) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<Loader2Icon size={size} className="animate-spin" />
		</div>
	);
};
