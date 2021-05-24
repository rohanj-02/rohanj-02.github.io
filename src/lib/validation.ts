export const imageRegex = /[^\s]+(\.(jpg|png|gif|bmp|webp|jpeg))/g;
export const videoRegex = /[^\s]+(\.(mp4|avi|webm))/g;

export function isImagePath(filePath: string): boolean {
	return filePath.match(imageRegex)?.length > 0;
}
export function isVideoPath(filePath: string): boolean {
	return filePath.match(videoRegex)?.length > 0;
}
