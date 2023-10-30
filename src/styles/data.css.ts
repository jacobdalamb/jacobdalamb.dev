import { globalStyle, style } from '@vanilla-extract/css';

export const dataTable = globalStyle('[data-table]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
	gap: 'var(--size-3)',
});

export const dataCard = globalStyle('[data-card]', {
	backgroundColor: 'var(--surface-1)',
	boxShadow: 'var(--shadow-1)',
	color: 'var(--text-1)',
	borderRadius: 'var(--radius-3)',
	padding: 'var(--size-5)',
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--size-3)',
});

export const dataCardDivs = globalStyle('[data-card] div h3', {
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	display: '-webkit-box',
	WebkitLineClamp: '2',
	WebkitBoxOrient: 'vertical',
});
export const dataCardDescription = globalStyle('[data-card-description]', {
	color: 'var(--text-1)',
});

export const dataBadge = globalStyle('[data-badge]', {
	display: 'inline-flex',
	width: 'fit-content',
	border: '1px solid var(--text-2)',
	borderRadius: 'var(--radius-round)',
	padding: 'var(--size-1) var(--size-2)',
	fontSize: 'var(--font-size-0)',
	fontWeight: 'var(--font-weight-7)',
});

export const dataMobile = globalStyle('[data-mobile]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: 'var(--size-fluid-2)',
});

export const dataBookmarks = globalStyle('[data-bookmarks]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gridTemplateRows: 'subgrid',
	gap: 'var(--size-3)',
});

export const dataImageCover = globalStyle('[data-image-cover]', {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderTopLeftRadius: 'calc(var(--radius-3) - var(--size-1))',
	borderTopRightRadius: 'calc(var(--radius-3) - var(--size-1))',
	backgroundColor: 'var(--surface-3)',
});

export const dataFullBleed = globalStyle('[data-full-bleed]', {
	margin: 'calc(var(--size-5) * -1)',
	width: 'calc(100% + var(--size-5) * 2)',
});

export const dataSidebar = globalStyle('[data-sidebar]', {
	position: 'sticky',
	top: '0',
	height: '100vh',
	overflowY: 'auto',
	'@media': {
		'screen and (max-width: 768px)': {
			position: 'unset',
		},
	},
});

export const dataSome = globalStyle('[data-bookmark-page]', {
	display: 'flex',
	flexDirection: 'column',
	'@media': {
		'screen and (min-width: 768px)': {
			flexDirection: 'row',
		},
	},
});

export const dataBookmarksLayout = globalStyle('[data-bookmarks-layout]', {
	margin: 0,
	maxWidth: '100%',
});
