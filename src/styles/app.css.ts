import { globalStyle, style } from '@vanilla-extract/css';

export const bodyStyles = globalStyle('body', {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--size-10)',
});

export const logo = style({
	width: 'var(--size-7)',
	height: 'fit-content',
	fill: 'var(--text-1)',
});

export const layoutStyles = globalStyle('main', {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--size-5)',
	margin: '0 auto !important',
	padding: 'var(--size-fluid-3)',
});

export const footerStyles = globalStyle('footer', {
	display: 'flex',
	margin: 'auto auto 0 auto !important',
	textAlign: 'center',
	flexWrap: 'wrap',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 'var(--size-3)',
	paddingBlock: 'var(--size-5) calc(var(--size-5) + env(safe-area-inset-bottom))',
	paddingInline: 'var(--size-5)',
});

export const headerStyles = globalStyle('header', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 'var(--size-fluid-2)',
});

export const headerDivStyles = globalStyle('header div', {
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	gap: 'var(--size-2)',
});
