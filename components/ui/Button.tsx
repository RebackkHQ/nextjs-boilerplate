import React from 'react';
import { cloneElement } from '@/lib/utils';
import {
	button,
	buttonIcon as icon,
	type ButtonProps as ButtonVariantsProps,
	type ButtonIconProps
}
	from '@tailus/themer';

const isIconOnly = (child: React.ReactNode): child is React.ReactElement<IconProps> => {
	const isIcon = React.isValidElement(child) && child.type === Icon;
	return isIcon;
};

export type IRoot = typeof Root;
export type IIcon = typeof Icon;
export type ILabel = typeof Label;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, ButtonVariantsProps {
	disabled?: boolean;
	href?: string;
}

export interface IconProps extends React.HTMLAttributes<HTMLElement>, ButtonIconProps { }

export const Icon: React.FC<IconProps> = (({
	className,
	children,
	size = 'md',
	type = 'leading'
}) => (
	<>
		{
			cloneElement(children as React.ReactElement, icon({
				size,
				type,
				className
			}))
		}
	</>
));

export const Label = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({
	className,
	children,
	...props
}, forwardedRef) => (
	<span className={className} {...props} ref={forwardedRef}>{children}</span>
));

export const Root = React.forwardRef<
	HTMLButtonElement & HTMLAnchorElement, ButtonProps
>((
	{
		className,
		intent = 'primary',
		variant = 'solid',
		size = 'md',
		disabled,
		href,
		children,
		...props
	}, forwardedRef) => {
	const Component = href
		? 'a'
		: 'button';

	const iconOnly = React.Children.toArray(children).some(isIconOnly);

	const buttonSize = iconOnly
		? 'iconOnlyButtonSize'
		: 'size';

	return (
		<Component ref={forwardedRef} href={href} className={button[variant as keyof typeof button]({
			intent,
			[buttonSize]: size,
			className
		})} {...props} disabled={disabled}>
			{children}
		</Component>
	);
});

Root.displayName = 'Root';
Icon.displayName = 'Icon';
Label.displayName = 'Label';

export default {
	Root,
	Icon,
	Label,
};
