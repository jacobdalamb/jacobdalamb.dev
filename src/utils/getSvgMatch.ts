interface svg {
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

const response = await fetch("https://svgl.app/api/svgs");
export const svgs = await response.json();
const svgUrl = "https://svgl.app/library/";

export function getSvgMatch(itemTitle: string, svgs: svg[], svgUrl?: string) {
	const svgMatch = svgs.find((svg) => {
		if (svgUrl && itemTitle === "Arc") {
			return (
				svg.title === itemTitle && svg.route === `${svgUrl}arc_browser.svg`
			);
		}
		if (svgUrl && itemTitle === "Raycast") {
			return svg.title === itemTitle && svg.route === `${svgUrl}raycast.svg`;
		}
		return svg.title === itemTitle;
	});

	let route = "";
	if (svgMatch?.route) {
		if (typeof svgMatch.route === "string") {
			route = svgMatch.route;
		} else if (typeof svgMatch.route === "object") {
			route = svgMatch.route.light;
		}
	}

	return { svgMatch, route };
}
