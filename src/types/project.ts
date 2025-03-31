export type Project = {
	name: string;
	images: string[];
	link: string;
	description: string;
	website?: string;
	github?: string;
	technologies?: string[];
	docs: string[];
};

export type ProjectSlug = Project & { slug: string };
