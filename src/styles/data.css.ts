import { globalStyle, style } from "@vanilla-extract/css";

export const dataTable = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
	gap: "var(--size-3)",
});

export const dataCard = style({
	backgroundColor: "var(--surface-1)",
	boxShadow: "var(--shadow-1)",
	color: "var(--text-1)",
	borderRadius: "var(--radius-3)",
	padding: "var(--size-5)",
});

export const dataCardDescription = style({
	color: "var(--text-1)",
});

export const dataCardContent = style({
	display: "flex",
	flexDirection: "column",
	gap: "var(--size-3)",
});

globalStyle(`${dataCardContent} p`, {
	textOverflow: "ellipsis",
	overflow: "hidden",
	display: "-webkit-box",
	WebkitLineClamp: "3",
	WebkitBoxOrient: "vertical",
});

export const dataBadge = style({
	display: "inline-flex",
	width: "fit-content",
	border: "1px solid var(--text-2)",
	borderRadius: "var(--radius-round)",
	padding: "var(--size-1) var(--size-2)",
	fontSize: "var(--font-size-0)",
	fontWeight: "var(--font-weight-7)",
});

export const dataBadgeLink = style({
	position: "absolute",
	left: "var(--size-1)",
	bottom: "var(--size-1)",
	backgroundColor: "var(--surface-1)",
	maxWidth: "calc(var(--size-content-1) - 1ch)",
});

globalStyle(`${dataBadgeLink} span`, {
	color: "var(--text-2)",
	fontSize: "var(--font-size-0)",
	fontWeight: "var(--font-weight-7)",
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap",
});

export const dataMobile = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
	gap: "var(--size-fluid-2)",
});

export const dataImageLink = style({
	marginBlock: "0",
	marginInline: "0",
	paddingBlock: "0",
	paddingInline: "0",
	position: "relative",
});

export const dataLogo = style({
	width: "var(--size-7)",
	height: "fit-content",
	fill: "var(--text-1)",
});

export const moodBoard = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
	gap: "var(--size-3)",
	borderRadius: "var(--radius-3)",
});

export const dataImageCover = style({
	width: "100%",
	height: "100%",
	borderRadius: "var(--radius-3)",
	objectFit: "cover",
	objectPosition: "center",
});

export const dataSidebar = style({
	position: "sticky",
	top: "0",
	height: "100vh",
	overflowY: "auto",
	"@media": {
		"screen and (max-width: 768px)": {
			position: "unset",
		},
	},
});

export const dataBookMarkPage = style({
	display: "flex",
	flexDirection: "column",
	"@media": {
		"screen and (min-width: 768px)": {
			flexDirection: "row",
		},
	},
});

export const dataBookmarksLayout = style({
	margin: 0,
	maxWidth: "100%",
});

export const dataCardFooter = style({
	marginTop: "auto",
});

export const dataBookmarkNav = style({
	position: "fixed",
	bottom: 0,
	width: "100%",
	zIndex: 1,
	backgroundColor: "var(--surface-1)",
});

globalStyle(`${dataBookmarkNav} ul`, {
	display: "flex",
	flexWrap: "nowrap",
	listStyle: "none",
	overflowX: "auto",
	gap: "var(--size-5)",
	padding: "var(--size-5) var(--size-3)",
});

globalStyle(`${dataBookmarkNav} ul li`, {
	whiteSpace: "nowrap",
});
