function smallestMissingPositiveInteger(nums) {


const numSet = new Set();
for (const num of uniqueNums){
  if (numm> 0){
    numSet.add(num);
  }
}

let smallestMissing = 1;
while (numSet.has(smallestMissing)){
  smallestMissing++
}
return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
