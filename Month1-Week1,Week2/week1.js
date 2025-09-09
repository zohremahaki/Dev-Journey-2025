//تابعی بنویس که دو عدد گرفته و حاصل‌جمع، تفریق، ضرب و تقسیم آن‌ها را برگرداند

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
mathematical(2, 4);

// تابعی بنویس که عددی بگیرد و تشخیص دهد زوج است یا فرد.

function evenOrOdd(a) {
  if (a % 2 === 0) {
    console.log("This is a even number");
  } else {
    console.log("This is a odd number");
  }
}
evenOrOdd(8);
evenOrOdd(7);
evenOrOdd(1);

// تابعی با Arrow Function بنویس که سه عدد گرفته و بزرگ‌ترین را برگرداند

const maxNumber = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};
console.log(`The max number is ${maxNumber(1, 2, 3)}`);
console.log(`The max number is ${maxNumber(10, 200, 36)}`);

// یک تابع factorial(n) با Arrow Function بساز (محاسبه فاکتوریل عدد).

const factorial = (n) => {
  for (let i = 1; i <= n; i++) {
    return n * (n - i);
  }
};

console.log(factorial(3));

// تابعی بساز که یک رشته بگیرد و تعداد حروف صدادار (a, e, i, o, u) آن را برگرداند.

let count = 0;
const vowels = (text) => {
  for (i = 0; i <= text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(vowels("hello world"));

// تابعی بساز که یک عدد بگیرد و اگر اول باشد true برگرداند.
// 2,3,5,....
const primeNumber = (n) => {
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(primeNumber(6));
console.log(primeNumber(4));
console.log(primeNumber(67));

// یک فانکشن بنویس که یک رشته گرفته و آن را برعکس برگرداند. مثلاً "hello" → "olleh".

const reversText = (text) => {
  let reversText = "";
  let i = text.toString().length;
  while (i > 0) {
    reversText += text[i - 1];
    i--;
  }
  return reversText;
};
console.log(reversText("zohre"));

const reversText2 = (text) => {
  textLength = text.toString().length;
  // return text.toString().split("").reverse().join("");
  // return [...text].reverse().join("");
  return text.split("").reverse().join("");
};
console.log(reversText2("hello"));

// فانکشن بساز که یک رشته گرفته و بررسی کند Palindrome هست یا نه (مثل "level").
const palindrome = (text) => {
  let reversText = "";
  let i = text.toString().length;
  while (i > 0) {
    reversText += text[i - 1];
    i--;
  }
  if (text === reversText) {
    console.log("Thi is a palindrome");
  } else {
    console.log("Thi isn't a palindrome");
  }
};
palindrome("madam");
palindrome("racecar");
palindrome("hello");

// فانکشنی بنویس که n را گرفته و مجموع اعداد ۱ تا n را برگرداند.
const sum = (n) => {
  for (i = 0; i < n; i++) {
    return (n += n - i);
  }
};
console.log(sum(5));

// تابعی بساز که یک عدد بگیرد و در خروجی جدول ضرب آن عدد را (۱ تا ۱۰) چاپ کند
const mult = (n) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
mult(5);
console.log("***************************************");
console.log("***************************************");

// یک آرایه اعداد داشته باش؛ با map همه عناصر را دو برابر کن.
const sampleNumbers = [5, 9, 3, 7, 6, 2];
const doubleNumbers = sampleNumbers.map((n) => n * 2);
console.log(sampleNumbers);
console.log(doubleNumbers);

// آرایه‌ای از اعداد بده؛ با filter فقط اعداد زوج را نگه دار.
const evenNumber = sampleNumbers.filter((n) => n % 2 === 0);
console.log(evenNumber);

// آرایه‌ای از اعداد بده؛ با reduce مجموع همه عناصر را محاسبه کن.

const sumWithReduce = sampleNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sumWithReduce);

// لیستی از اسامی داشته باش؛ با map همه را به حروف بزرگ تبدیل کن.
const bodies = ["zohre", "ahmad", "hadi", "saman"];
const uppercasebodies = bodies.map((b) => b.toUpperCase());
console.log(bodies);
console.log(uppercasebodies);

// آرایه‌ای از اشیاء دانش‌آموزان (name, score) بده؛ با filter فقط دانش‌آموزانی که بالای ۷۰ گرفتن را برگردان.
const students = [
  { name: "raha", score: 95 },
  { name: "melani", score: 39 },
  { name: "sarva", score: 80 },
  { name: "edward", score: 60 },
  { name: "mania", score: 73 },
];
const briliant = students.filter((s) => s.score >= 70);
console.log(students);
console.log(briliant);

// آرایه‌ای از اعداد بده؛ بزرگ‌ترین عدد را با reduce پیدا کن.
const sampleNumbers2 = [5, 9, 3, 7, 6, 2];
const maxNumberReduce = sampleNumbers2.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) {
    return accumulator;
  } else {
    accumulator = currentValue;
    return accumulator;
  }
}, 0);
console.log(maxNumberReduce);

// یک شیء مثل {name: "Ali", age: 25} داشته باش؛ با destructuring متغیر name و age را بگیر.
const users = { Fname: "Ali", age: 25 };
const { Fname, age } = users;
console.log(`Name:${Fname}, Age:${age}`);

// یک تابع بنویس که چندین آرایه بگیرد و با استفاده از Spread یک آرایه بزرگ بسازد.
const bigArray = (arr1, arr2, arr3, arr4) => {
  return [...arr1, ...arr2, ...arr3, ...arr4];
};
console.log(bigArray([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));

// یک آرایه از رشته‌ها داشته باش؛ با map تعداد کاراکتر هر رشته را حساب کن.
const arrtext = [
  "zohremahaki",
  "ahmadmoradifard",
  "samandarabi",
  "hadimohamadi",
];
const arrtextLength = arrtext.map((a) => a.length);
console.log(arrtext);
console.log(arrtextLength);

// لیستی از محصولات (name, price) بده؛ با reduce مجموع قیمت‌ها را حساب کن و خروجی بده.
const product = [
  { name: "product1", price: 100 },
  { name: "product2", price: 300 },
  { name: "product3", price: 100 },
  { name: "product4", price: 100 },
  { name: "product5", price: 100 },
];
const priceSum = product.reduce((accumulator, currentValue) => {
  return Number(accumulator) + Number(currentValue.price);
}, product[0].price);
console.log(priceSum);
