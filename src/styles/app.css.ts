import { globalFontFace, globalStyle } from "@vanilla-extract/css";

const geistSans = "GlobalGeistSans";
const geistMono = "GlobalGeistMono";

globalFontFace(geistSans, {
	src: 'local("GeistSans"), url("../../GeistVariableVF.woff2") format("woff2")',
	fontDisplay: "swap",
	fontWeight: "100 900",
	fontStyle: "normal",
});

globalFontFace(geistMono, {
	src: 'local("GeistMono"), url("../../GeistMonoVariableVF.woff2") format("woff2")',
	fontDisplay: "swap",
	fontWeight: "100 900",
	fontStyle: "normal",
});

globalStyle("body", {
	display: "flex",
	flexDirection: "column",
	gap: "var(--size-10)",
	backgroundColor: "var(--surface-2)",
});

globalStyle(":is(h1, h2, h3) ~ *, :is(*) ~ :is(h1, h2, h3)", {
	marginBlockStart: "var(--size-5)",
});

globalStyle("main", {
	display: "flex",
	flexDirection: "column",
	gap: "var(--size-5)",
	margin: "0 auto",
	padding: "var(--size-fluid-3)",
	maxWidth: "50rem",
	width: "100%",
});

globalStyle("footer", {
	display: "flex",
	margin: "auto auto 0 auto",
	textAlign: "center",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "center",
	gap: "var(--size-3)",
	paddingBlock:
		"var(--size-5) calc(var(--size-5) + env(safe-area-inset-bottom))",
	paddingInline: "var(--size-5)",
});

globalStyle("header", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: "var(--size-6)",
});

globalStyle("header div", {
	display: "flex",
	alignItems: "center",
});

globalStyle("nav", {
	display: "flex",
	gap: "var(--size-3)",
});
