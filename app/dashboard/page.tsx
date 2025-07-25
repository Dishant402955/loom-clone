import { afterRedirect } from "@/actions/user.actions";
import { redirect } from "next/navigation";

const CallbackPage = async () => {
	const auth = await afterRedirect();

	if (!auth.success) {
		return redirect("/sign-in");
	}

	return redirect(`/dashboard/workspace/${auth.data?.workspaces[0].id}`);
};

export default CallbackPage;
