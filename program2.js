function smallestMissingPositiveInteger(nums) {
  // Remove duplicates and negative numbers
  const filteredNums = nums.filter(num => num > 0);
  const uniqueNums = [...new Set(filteredNums)];

  // Find the smallest missing positive integer
  let smallestMissing = 1;
  while (uniqueNums.includes(smallestMissing)) {
      smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
function smallestMissingPositiveInteger(nums) {
  // Remove duplicates and negative numbers
  const filteredNums = nums.filter(num => num > 0);
  const uniqueNums = [...new Set(filteredNums)];

  // Find the smallest missing positive integer
  let smallestMissing = 1;
  while (uniqueNums.includes(smallestMissing)) {
      smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
