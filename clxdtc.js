function printClxDtc() {
  for (let i = 1; i <= 100; i++) {
    let result = i;
    if (i % 3 === 0 && i % 5 === 0) {
      result = 'CLXDTC';
    } 
    if (i % 5 === 0) {
      result = 'DTC';
    }
    if (i % 3 === 0) {
      result = 'CLX';
    } 
    console.log(result);
  }
}

// Refactor with ES6 arrow function syntax and string interpolation

// const printClxDtc = () => {
//   for (let i = 1; i <= 100; i++) {
//     let result = '';
//     if (i % 3 === 0) {
//       result += 'CLX';
//     } 
//     if (i % 5 === 0) {
//       result += 'DTC';
//     }
//     if (!result.length) {
//       result = i;
//     }
//     console.log(result);
//   }
// };

// Refactor with ES6 arrow function syntax, string interpolation and ternary operators

// const printClxDtc = () => {
//   for (let i = 1; i <= 100; i++) {
//     let result = '';
//     result += i % 3 === 0 ? 'CLX' : '';
//     result += i % 5 === 0 ? 'DTC' : '';
//     result = !result.length ? i : result;
//     console.log(result);
//   }
// };

return printClxDtc();
