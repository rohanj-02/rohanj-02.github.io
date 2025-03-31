export const imageRegex = /[^\s]+(\.(jpg|png|gif|bmp|webp|jpeg))/g;
export const videoRegex = /[^\s]+(\.(mp4|avi|webm))/g;
export const docsRegex = /[^\s]+(\.(pdf|doc|docx|txt|md))/g;

export function isImagePath(filePath: string): boolean {
	if (filePath == null) {
		return false;
	}
	const matches = filePath.match(imageRegex);
	return matches !== null && matches.length > 0;
}

export function isVideoPath(filePath: string): boolean {
	if (filePath == null) {
		return false;
	}
	const matches = filePath.match(videoRegex);
	return matches !== null && matches.length > 0;
}

export function isDocsPath(filePath: string): boolean {
	if (filePath == null) {
		return false;
	}
	const matches = filePath.match(docsRegex);
	return matches !== null && matches.length > 0;
}
