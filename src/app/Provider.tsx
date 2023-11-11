'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (!mounted) setMounted(true);
	}, []);

	if (!mounted) return children;
	return <ThemeProvider attribute='class '>{children}</ThemeProvider>;
}
