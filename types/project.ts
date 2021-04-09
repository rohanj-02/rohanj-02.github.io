export type Project = {
	name: string;
	image: string;
	link: string;
	description: string;
	website?: string;
	github?: string;
};

export type ProjectSlug = Project & { slug: string };
