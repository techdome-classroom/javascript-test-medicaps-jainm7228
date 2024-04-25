function smallestMissingPositiveInteger(nums) {
  // Remove negative numbers and zeros
  nums = nums.filter(num => num > 0);
  
  // Remove duplicates
  nums = [...new Set(nums)];
  
  // Iterate through the list and keep track of positive integers
  const seen = new Set();
  for (const num of nums) {
      seen.add(num);
  }
  
  // Find the smallest missing positive integer
  let smallestMissing = 1;
  while (seen.has(smallestMissing)) {
      smallestMissing++;
  }
  
  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
