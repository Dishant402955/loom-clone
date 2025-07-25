import { Loader2Icon } from "lucide-react";

const Loading = () => {
	return (
		<div className="flex flex-col items-center gap-y-2 h-full justify-center">
			<Loader2Icon size={35} className="animate-spin" />
			<p className="font-bold text-xl">Redirecting to Workspace ...</p>
		</div>
	);
};

export default Loading;
