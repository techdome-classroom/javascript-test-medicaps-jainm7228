function smallestMissingPositiveInteger(nums) {
  // Create a set to store positive integers
  const numSet = new Set();

  // Iterate through the array and add positive integers to the set
  for (const num of nums) {
      if (num > 0) {
          numSet.add(num);
      }
  }

  // Find the smallest missing positive integer
  let smallestMissing = 1;
  while (numSet.has(smallestMissing)) {
      smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
