// console.log( 2>1);
// console.log( 2 != 1);
// // console.log( 2 < 1);

// console.log("2" > 1); //->true
// console.log("02" > 1); //->true

// we must make it a rule to not write different 
// types of values in a comparison operator, as it
// might lead to unexpected results, and therefore typescript
// has been introduced, to remove such discrepancies

console.log(null == 0); //false
console.log(null > 0); // false
console.log(null >= 0); //->true, here there is a type conversion

// strict check -> ===
// this takes into account the data types of 
// operands on which comparison is performed

console.log("2" === 2); //-> false, data types different

