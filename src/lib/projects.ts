import fs from 'fs';
import path from 'path';
import { ProjectSlug } from '@/types/project';

const projectsDirectory = 'src/projects/';

export function getAllProjectSlugs(): {
	params: {
		slug: string;
	};
}[] {
	const fileNames = fs.readdirSync(projectsDirectory);

	return fileNames.map(fileName => {
		return {
			params: {
				slug: fileName.replace(/\.json$/, ''),
			},
		};
	});
}

export function getProjectData(slug: string): ProjectSlug {
	const fullPath = path.join(projectsDirectory, `${slug}.json`);
	const fileContents = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

	// Use gray-matter to parse the post metadata section
	// const matterResult = matter(fileContents)

	// Combine the data with the id
	return {
		slug,
		...fileContents,
	};
}

export function getFeaturedProjects(): [ProjectSlug] {
	const featured = ['thesnapfuel', 'styra', 'memboro', 'library'];
	const returnValue: [ProjectSlug] = [] as any;
	featured.forEach(slug => {
		const projData = getProjectData(slug);
		returnValue.push(projData);
	});

	return returnValue;
}

export function getAllProjects(): [ProjectSlug] {
	const slugs = [
		'thesnapfuel',
		'styra',
		'memboro',
		'library',
		'resetmsm',
		'colorswitch',
		'rummy',
		'pixels',
	];
	const returnValue: [ProjectSlug] = [] as any;
	slugs.forEach(slug => {
		const projData = getProjectData(slug);
		returnValue.push(projData);
	});
	return returnValue;
}
