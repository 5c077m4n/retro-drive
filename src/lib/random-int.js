export function getRandomInt(min = 0, max = Infinity) {
	const n = Math.ceil(min);
	const m = Math.floor(max);
	return Math.floor(Math.random() * (m - n + 1)) + n;
}
