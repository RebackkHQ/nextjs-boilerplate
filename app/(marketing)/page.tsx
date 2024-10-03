import React from 'react';
import { Display } from '@/components/ui/typography';

/**
 * Functional component for the Home page.
 * Renders the Home page content with a Display component.
 */
export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<Display>
        Home
			</Display>
		</div>
	);
}
