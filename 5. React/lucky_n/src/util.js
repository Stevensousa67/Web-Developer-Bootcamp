// Generate random number from 1 to 6
function r6() {
    return Math.floor(Math.random() * 6) + 1;
}

// Get n rolls
function getRolls(n) {
    return Array.from({ length: n }, () => r6());
}

// Get sum of nums
function sum(nums) {
    return nums.reduce((prev, curr) => prev + curr, 0);
}

export { r6, getRolls, sum };