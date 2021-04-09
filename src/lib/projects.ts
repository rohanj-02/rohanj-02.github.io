import fs from 'fs';
import path from 'path';
import { ProjectSlug } from '@/types/project';

const postsDirectory = 'src/projects/';

export function getAllProjectSlugs(): {
	params: {
		slug: string;
	};
}[] {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map(fileName => {
		return {
			params: {
				slug: fileName.replace(/\.json$/, ''),
			},
		};
	});
}

export function getProjectData(slug: string): ProjectSlug {
	const fullPath = path.join(postsDirectory, `${slug}.json`);
	const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

	// Use gray-matter to parse the post metadata section
	// const matterResult = matter(fileContents)

	// Combine the data with the id
	return {
		slug,
		...fileContents,
	};
}
