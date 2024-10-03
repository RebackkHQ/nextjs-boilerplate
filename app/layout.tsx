import '@/styles/index.css';
import React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Merriweather, Fira_Code } from 'next/font/google';

const sans = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

const serif = Merriweather({
	weight: ['300', '400', '700', '900'],
	subsets: ['latin'],
});

const mono = Fira_Code({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'My App',
	description: 'My app description',
};

export default function RootLayout({ children, }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`absolute inset-0 h-full w-full
          bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
          [background-size:16px_16px] ${sans.className} ${serif.className} ${mono.className}`}
			>
				<main className="px-10">
					{children}
				</main>
			</body>
		</html>
	);
}
