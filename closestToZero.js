// Decomposing the array with the first element as head and the rest as tail. Setting default values to empty array and zero.
const closestToZero = ([head, ...tail] = [], curr = 0) => {
	// If the array is empty, return current
	if (!head && (!tail || !tail.length)) return curr;
	
	// if both head and current exists and are not zeros/undefined
	if (head && curr) {
		// Setting absolute values in variables to reduce calls of the Math library
		const absHead = Math.abs(head);
		const absCurr = Math.abs(curr);
		
		// If their values are the same in absolute, check if one of them is negative and send the other one to the next recursive call
		if (absCurr === absHead) return closestToZero(tail, (head < 0 ? curr : head));
		// If they are not equal, send the lowest absolute signed
		return closestToZero(tail, absHead < absCurr ? head : curr);
	}
	// If current is null/undefined/equal to zero, send head. The opposite is also valid.
	return closestToZero(tail, !curr ? head : curr);
};

module.exports = closestToZero;
