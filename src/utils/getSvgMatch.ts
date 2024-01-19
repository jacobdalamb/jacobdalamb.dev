interface Svg {
	id: number;
	title: string;
	category: string;
	url: string;
}

const SVG_API_URL = "https://svgl.app/api/svgs";

export const loadSvgs = async (): Promise<Svg[]> => {
	const response = await fetch(SVG_API_URL);
	return await response.json();
};

export const getSvgUrl = (
	itemTitle: string,
	svgs: Svg[],
): string | undefined => {
	const svgMatch = svgs.find((svg) => svg.title === itemTitle);
	return svgMatch?.url;
};
