import { separator, type SeparatorProps } from '@tailus/themer';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import React from 'react';

interface SeparatorVariantProps
	extends React.ComponentProps<typeof SeparatorPrimitive.Root>,
	Pick<SeparatorProps, 'fancy' | 'dashed'> { }

const SeparatorRoot = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	SeparatorVariantProps
>(({ fancy, dashed, className, orientation = 'horizontal', ...props }, ref) => {
	if (fancy && dashed) {
		throw new Error('A separator cannot be both fancy and dashed');
	}

	return (
		<SeparatorPrimitive.Root
			className={separator({
				fancy,
				dashed,
				orientation,
				className,
			})}
			ref={ref}
			{...props} // Spread props after ref to maintain order
		/>
	);
});

SeparatorRoot.displayName = 'Separator';
export default SeparatorRoot;
