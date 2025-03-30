export const imageRegex = /[^\s]+(\.(jpg|png|gif|bmp|webp|jpeg))/g;
export const videoRegex = /[^\s]+(\.(mp4|avi|webm))/g;

export function isImagePath(filePath: string): boolean {
	const matches = filePath.match(imageRegex);
	return matches !== null && matches.length > 0;
}
export function isVideoPath(filePath: string): boolean {
	const matches = filePath.match(videoRegex);
	return matches !== null && matches.length > 0;
}
