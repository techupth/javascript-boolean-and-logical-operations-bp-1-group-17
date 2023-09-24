// Exercise #1: Event Conditions

// Start coding here
let isOver18 = true;
let hasCriminalBlacklist = false;
let isThai = true;

let qualify = isOver18;

let James = isOver18 || (hasCriminalBlacklist && !isThai);

let isAllow = qualify && James;

console.log(isAllow);
