//تابعی بنویس که دو عدد گرفته و حاصل‌جمع، تفریق، ضرب و تقسیم آن‌ها را برگرداند.

let plural;
let minus;
let multiplication;
let division;

function mathematical(a, b) {
  plural = a + b;
  minus = a - b;
  multiplication = a * b;
  division = a / b;
  let operations = [plural, minus, multiplication, division];
    let operations2 = operations.map((operation) => console.log(operation));

//   return operations;
}
// console.log(mathematical(2, 8));
mathematical(2,4)

// تابعی بنویس که عددی بگیرد و تشخیص دهد زوج است یا فرد.

// function evenOrOdd(a) {
//   if (a / 2 === 0) {
//     console.log("This is a even number");
//   } else {
//     console.log("This is a odd number");
//   }
// }
