import { globalStyle, style } from '@vanilla-extract/css';

export const body = globalStyle('body', {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--size-10)',
});

export const titleContent = globalStyle(':is(h1, h2, h3) ~ *', {
	maxInlineSize: 'var(--size-content-2)',
	marginBlockStart: 'var(--size-5)',
});

export const logo = style({
	width: 'var(--size-7)',
	height: 'fit-content',
	fill: 'var(--text-1)',
});

export const layout = globalStyle('main', {
	display: 'flex',
	flexDirection: 'column',
	margin: '0 auto !important',
	padding: 'var(--size-fluid-3)',
});

export const footer = globalStyle('footer', {
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

export const header = globalStyle('header', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 'var(--size-fluid-2)',
});

export const headerDiv = globalStyle('header div', {
	display: 'flex',
	alignItems: 'center',
	width: '100%',
	gap: 'var(--size-2)',
});

export const dataTable = globalStyle('[data-table]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
	gap: 'var(--size-3)',
});

export const dataCard = globalStyle('[data-card]', {
	display: 'flex',
	flexDirection: 'column',
});
