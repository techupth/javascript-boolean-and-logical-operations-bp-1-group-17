// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = true;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let firstCase = lastMonthPaidMoreThan4000 && isWeekday || !hasBoughtProductFromITCategory || !hasAttendedDiscountEvent;
let secondCase = isPlatinum;

let John =  !firstCase && !secondCase;

let hasPromotion = John && (firstCase || secondCase);

console.log(hasPromotion);
