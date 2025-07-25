import { afterAuthentication } from "@/actions/user.actions";
import { redirect } from "next/navigation";

const CallbackPage = async () => {
	const auth = await afterAuthentication();

	if (!auth.success) {
		return redirect("/sign-in");
	}

	return redirect(`/dashboard`);
};

export default CallbackPage;
