'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

function Options() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			type='button'
			className='fixed right-4 top-6 md:right-6 md:top-8 lg:right-10 lg:top-10'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'light' ? (
				<MoonIcon className='w-8 h-8 fill-[#449399]' />
			) : (
				<SunIcon className='w-8 h-8 fill-[#449399]' />
			)}
		</button>
	);
}

Options.defaultProps = {};

export default Options;
