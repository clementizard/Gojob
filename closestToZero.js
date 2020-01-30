const closestToZero = (arr) => {
	// If array is empty return 0
	if (!arr || !arr.length) return 0;
	// return reduced array
	return arr.reduce((acc, curr) => {
		// If both accumulator and current exists
		if (acc && curr) {
			// Setting absolute values in variables to reduce calls of the Math library
			const accAbs = Math.abs(acc);
			const currAbs = Math.abs(curr);
			
			// If their values are the same in absolute, check if one of them is positive and send it
			if (accAbs === currAbs) return (acc > 0 ? acc : curr);
			// If they are not equal, send the lowest absolute signed
			return (accAbs < currAbs ? acc : curr);
		}
		// If accumulator is null/undefined/equal to zero, send current
		return (!acc ? curr : acc);
	});
};

module.exports = closestToZero;
