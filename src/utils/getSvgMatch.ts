export interface svg {
	id: number;
	title: string;
	category: string;
	route:
		| string
		| {
				dark: string;
				light: string;
		  };
	url: string;
}
const SVG_API_URL = "https://svgl.app/api/svgs";

export const loadSvgs = async (): Promise<svg[]> => {
	const response = await fetch(SVG_API_URL);
	return await response.json();
};

export const getSvgUrl = (
	itemTitle: string,
	svgs: svg[],
): string | undefined => {
	const arcSvg = svgs.find(
		(svg) => svg.category === "Browser" && svg.title === "Arc",
	);
	const svgMatch = svgs.find((svg) => svg.title === itemTitle);

	if (itemTitle === "Arc" && arcSvg) {
		return arcSvg.url;
	}

	return svgMatch?.url;
};
