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
});

export const dataCardDivs = globalStyle('[data-card] div :is([data-description])', {
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	display: '-webkit-box',
	WebkitLineClamp: '3',
	WebkitBoxOrient: 'vertical',
});

export const dataCardDescription = globalStyle('[data-card-description]', {
	color: 'var(--text-1)',
});

export const dataCardContent = globalStyle('[data-card-content]', {
	display: 'flex',
	flexDirection: 'column',
	gap: 'var(--size-3)',
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

export const dataBadgeLink = globalStyle('[data-badge-link]', {
	position: 'absolute',
	left: 'var(--size-1)',
	bottom: 'var(--size-1)',
	backgroundColor: 'var(--surface-1)',
	maxWidth: 'calc(var(--size-content-1) - 1ch)',
});

export const dataBadgeLinkSpan = globalStyle('[data-badge-link] span', {
	color: 'var(--text-2)',
	fontSize: 'var(--font-size-0)',
	fontWeight: 'var(--font-weight-7)',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
});

export const dataMobile = globalStyle('[data-mobile]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: 'var(--size-fluid-2)',
});

export const dataImageLink = globalStyle('[data-image-link]', {
	marginBlock: '0',
	marginInline: '0',
	paddingBlock: '0',
	paddingInline: '0',
	position: 'relative',
});

export const moodBoard = globalStyle('[data-mood-board]', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
	gap: 'var(--size-3)',
	borderRadius: 'var(--radius-3)',
});

export const dataImageCover = globalStyle('[data-image-cover]', {
	width: '100%',
	height: '100%',
	borderRadius: 'var(--radius-3)',
	objectFit: 'cover',
	objectPosition: 'center',
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

export const dataBookMarkPage = globalStyle('[data-bookmark-page]', {
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

export const dataCardFooter = globalStyle('[data-card-footer]', {
	marginTop: 'auto',
});

export const dataBookmarkNav = globalStyle('[data-bookmark-nav]', {
	position: 'fixed',
	bottom: 0,
	width: '100%',
	zIndex: 1,
	backgroundColor: 'var(--surface-1)',
});

export const dataBookmarkNavList = globalStyle('[data-bookmark-nav] ul', {
	display: 'flex',
	flexWrap: 'nowrap',
	listStyle: 'none',
	overflowX: 'auto',
	gap: 'var(--size-5)',
	padding: 'var(--size-5) var(--size-3)',
});

export const dataBookmarkNavListItems = globalStyle('[data-bookmark-nav] ul li', {
	whiteSpace: 'nowrap',
});
