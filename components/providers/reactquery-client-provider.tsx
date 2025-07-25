// components/Providers.tsx (Client Component)
"use client";

import {
	HydrationBoundary,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

interface ProvidersProps {
	children: React.ReactNode;
	dehydratedState: unknown;
}

export const ReactQueryClientProvider = ({
	children,
	dehydratedState,
}: ProvidersProps) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
		</QueryClientProvider>
	);
};
