export const asyncForEach = async <T>(array: T[], cb: (item: T, i: number, array: T[]) => void) => {
	for (let i = 0; i < array.length; i++) {
		await cb(array[i], i, array)
	}
}
