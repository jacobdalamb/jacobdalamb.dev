import { globalStyle, style } from '@vanilla-extract/css';

export const dataTable = globalStyle('[data-table]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
	gap: 'var(--size-3)',
});

export const dataCard = globalStyle('[data-card]', {
	display: 'flex',
	flexDirection: 'column',
});
