import { Loader2Icon } from "lucide-react";

interface Props {
	size?: number;
}
export const Loader = ({ size = 35 }: Props) => {
	return (
		<div className="h-full w-full flex justify-center items-center">
			<Loader2Icon className="animate-spin" size={size} />
		</div>
	);
};
