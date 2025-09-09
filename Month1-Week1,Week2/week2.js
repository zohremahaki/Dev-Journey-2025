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

let resultObj=[];
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

// const resultObj = { 20: [{ name: "A", age: 20 }] };

// const { key, value } = resultObj;
// const classificationByAge = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (resultObj.includes(arr[i].age)) {
//     }
//   }
//   return;
// };
// Find Missing Number
// تابعی بنویس که یک آرایه از اعداد پشت‌سرهم مثل [1,2,3,5,6] بگیرد و عدد گمشده را پیدا کند (4).

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

// دوتا سؤال سطح مصاحبه میدلول ولی مرتبط با همین مباحث:

// این دوتا سؤال دقیقاً هفته ۱ و ۲ رو پوشش میدن و مصاحبه‌گر خیلی دوست داره ببینه کسی هم تفاوت‌های مفهومی مثل Scope و Hoistingرو می‌دونه، هم کار عملی با متدهای آرایه رو بلده.

// ❓ سؤال ۱:

// تفاوت‌های زیر رو توضیح بده و با مثال نشون بده:

// var، let، و const از نظر Scope و Hoisting

// چرا در کدهای واقعی معمولاً از let و const استفاده می‌کنیم و var توصیه نمیشه؟

// ❓ سؤال ۲:

// فرض کن این کد رو داریم:

// const numbers = [1, 2, 3, 4, 5];

// // الف) با استفاده از map آرایه‌ای بساز که همه اعداد در آن دو برابر شده باشند

// // ب) با filter فقط اعداد فرد را برگردان

// // ج) با reduce مجموع کل اعداد را حساب کن

// // د) با destructuring اولین و دومین عدد آرایه را در دو متغیر جدا ذخیره کن

// خروجی هر مرحله چه می‌شود و چرا؟

//  ۱۰ سؤال سطح سنیور (فقط از مطالب هفته ۱ و ۲)-این سؤال‌ها همگی از مفاهیم هفته ۱ و ۲ میاد، اما انتظار پاسخ خیلی دقیق و با مثال واقعی میره.
// مثلاً یه سنیور باید بدونه:
// •	TDZ دقیقاً کجاست.
// •	this در arrow vs function چطور bind میشه.
// •	reduce پشت صحنه چطور iteration انجام میده.
// •	چرا spread برای آبجکت تو در تو کار نمی‌کنه.

// Description
// Edit
// بخش ۱ – متغیرها و Scope

// **فرق var/let/const از نظر Hoisting دقیقاً چیه؟**چی میره بالا، چی undefined میشه، چی ReferenceError میده؟

// Temporal Dead Zone (TDZ) یعنی چی؟ میشه با مثال توضیح بدی که چطور let/const داخل TDZ قرار می‌گیرن؟

// در چه شرایطی استفاده از const به جای let باعث بهینه‌سازی در موتورهای JS (مثل V8) میشه؟

// 🔹 بخش ۲ – توابع و Arrow Function

// فرق this در فانکشن معمولی و Arrow Function چیه؟ چرا Arrow Function اصلاً this نداره و از کجا ارث‌بری میکنه؟

// اگه یه آبجکت داشته باشیم که داخلش متدی با Arrow Function تعریف شده باشه، چه تفاوتی در رفتار this با فانکشن معمولی داره؟

// فرق Arrow Function با فانکشن معمولی از نظر arguments object چیه؟آیا arguments داخل Arrow کار می‌کنه؟

// 🔹 بخش ۳ – Array Methods و Destructuring

// فرق map و forEach چیه؟ در چه شرایطی یکی رو انتخاب می‌کنی؟

// reduce چطور کار می‌کنه؟ اگه initialValue ندیم چه اتفاقی میفته؟ توضیح دقیق الگوریتم reduce

// با استفاده از reduce چطور میشه یک map یا filter رو شبیه‌سازی کرد؟

// فرق Shallow Copy و Deep Copy در جاوااسکریپت با مثال Array/Object. چرا spread (...) کافی نیست برای کپی عمیق؟
