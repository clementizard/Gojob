const closestToZeroGolfed = arr => (!arr || !arr.length) ? 0 : arr.reduce((acc, curr) => (acc && curr ? ((Math.abs(acc) === Math.abs(curr)) ? (acc > 0 ? acc : curr) : (Math.abs(acc) < Math.abs(curr) ? acc : curr))	: (!acc ? curr : acc)));

module.exports = closestToZeroGolfed;
