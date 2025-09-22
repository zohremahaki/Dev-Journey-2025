// تمرین‌های سخت (هفته ۱+۲ ترکیبی)
// تابعی بنویس که یک آرایه تو در تو (nested array) مثل [1,[2,[3,4],5]] بگیرد و آن را به شکل تخت [1,2,3,4,5] برگرداند.
const flatten = (arr) => {
  console.log(arr.flat(Infinity));
};
flatten([1, [2, [3, 4], 5]]);

// تابعی بساز که یک رشته طولانی بگیرد و تعداد تکرار هر کلمه را به صورت یک آبجکت برگرداند.
// مثلاً "ali ali reza" → {ali: 2, reza: 1}.

const objFromText = {};

const repeatedWord = (longText) => {
  const arrFromText = longText.split(" ");

  const arrFromTextLength = arrFromText.length - 1;

  for (let i = 0; i < arrFromTextLength; i++) {
    if (!([arrFromText[i]] in objFromText)) {
      //برای تعریف key چالش داشتم باید داخل براکت میذاشتم
      objFromText[arrFromText[i]] = 1;
    } else {
      objFromText[arrFromText[i]] += 1;
    }
  }
  return objFromText;
};

const text2 =
  "hi, my name is zohre , i like my name , the meaning of zohre is Love , and Love is great. ";
console.log(repeatedWord(text2));

// تابعی بنویس که یک آرایه با مقادیر تکراری بگیرد و فقط مقادیر یکتا برگرداند بدون Set استفاده کن، فقط با reduce یا filter.

const sampleArray = [
  1,
  6,
  8,
  9,
  36,
  15,
  6,
  9,
  7,
  1,
  "zohre",
  "zohre",
  "ahmad",
  1,
  69,
  17,
];

const uniqueArray2 = (arr) => {
  return arr.reduce((acc, curr) => {
    //returnرو یادم رفته بود
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
};
console.log(uniqueArray2(sampleArray));

// Group By Property
// تابعی بساز که یک آرایه از اشیاء مثل [{name:"A", age:20}, {name:"B", age:20}, {name:"C", age:25}] بگیرد و آن‌ها را بر اساس مقدار age گروه‌بندی کند.
// خروجی: {20:[{…},{…}], 25:[{…}]}.
//////////////////////////
////////////////////////////
//////////////////////////////////
let resultObj = [];
const members = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 25 },
  { name: "D", age: 25 },
  { name: "E", age: 22 },
  { name: "F", age: 20 },
];

const uniqages = members.reduce((acc, curr) => {
  if (!acc.includes(curr.age)) {
    acc.push(curr.age);
  }
  return acc;
}, []);
console.log(members);
console.log(uniqages);
console.log(uniqages.length);
for (i = 0; i < uniqages.length; i++) {
  // resultObj.push({ i: members.filter((item) => i === members.age) });
}
console.log(resultObj);

// تابعی بنویس که یک آرایه از اعداد پشت‌سرهم مثل [1,2,3,5,6] بگیرد و عدد گمشده را پیدا کند (4).

const sampleArray2 = [1, 2, 3, 5, 6];
const sampleArray3 = [6, 7, 9, 10];
const missedNumber = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      console.log(arr[i]);
    } else {
      console.log(arr[i]);

      console.log(`Missed Number=${arr[i] + 1}`);
    }
  }
};

missedNumber(sampleArray2);
missedNumber(sampleArray3);

// Anagram Checker
// تابعی بساز که دو رشته بگیرد و بررسی کند آیا آن‌ها Anagram هستند یا نه یعنی حروفشان یکی است با ترتیب متفاوت، مثل "listen" و "silent".

// Deep Clone
// تابعی بنویس که یک آبجکت تو در تو بگیرد و یک کپی کامل (deep clone) از آن برگرداند (نه فقط سطحی).

// Longest Substring Without Repeating Characters
// تابعی بنویس که یک رشته بگیرد و طول بلندترین substring بدون حروف تکراری را برگرداند.
// مثال: "abcabcbb" → 3 زیررشته "abc".

// Array Intersection
// تابعی بساز که دو آرایه بگیرد و عناصر مشترک را برگرداند.
// مثلاً [1,2,3,4] و [2,4,6] → [2,4].

// Implement map
// تابعی به اسم myMap بنویس که دقیقاً مثل متد map عمل کند آرایه و یک callback بگیرد و آرایه جدید برگرداند
