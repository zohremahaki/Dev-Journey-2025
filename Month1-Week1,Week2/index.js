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
mult(5)


