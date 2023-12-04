import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		publishedAt: z.date(),
		description: z.string().min(10).max(160),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		keywords: z.array(z.string()),
	}),
});

export const collections = {
	blog: blogCollection,
};
