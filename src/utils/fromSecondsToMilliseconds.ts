/**
 * Seconds has 10 digits
 * Milliseconds should have 13 digits
 */
export const fromSecondsToMilliseconds = (
	seconds: number,
): number | { error: string } => {
	if (seconds < 999999999)
		return {
			error: `Input has not the expected length (10 digits): ${seconds}`,
		}
	return seconds * 1000
}
