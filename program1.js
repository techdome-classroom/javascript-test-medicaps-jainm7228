// program1.js
function longestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let maxLength = 0;
    let start = 0;
    let seen = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char in seen && start <= seen[char]) {
            start = seen[char] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        seen[char] = i;
    }

    return maxLength;
}

module.exports = { longestSubstring };


