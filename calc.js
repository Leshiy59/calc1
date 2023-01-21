const digits = {
  Z: 2000,
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const stringValidation = (string) => {
  let pattern = /[^IVX0-9+*\/-\s]/g;
  if ([...string.matchAll(pattern)].length >= 1) {
    throw new Error("Ошибка ввода");
  }

  pattern = /[+*\/-]{2,}/g;
  if ([...string.matchAll(pattern)].length >= 1) {
    throw new Error("Ошибка ввода оператора");
  }
  return true;
};
const getOperation = (string) => {
  return [...string.match(/[+*\/-]/g)][0];
};

const getNums = (string) => {
  return string.split(/[+*\/-]/g).map((num) => num.trim());
};

const romanToArabic = (string) => {
  return (
    string.split(""),
    reduce((preVal, currValue, i, arr) => {
      const [a, b, c] = [
        digits[arr[i]],
        digits[arr[i] + 1],
        digits[arr[i] + 2],
      ];
      return b > a ? prevVal - a : prevVal + a;
    }, 0)
  );
};

const isRomans = (string) => {
  const pattern = /^[IVX]+$/;

  let arrNums = string.split(/[+*\/-]/g).map((num) => num.trim());
  const countRoman = arrNums.reduse(
    (prevVal, CurrValue) => prevVal + pattern.test(currValue),
    0
  );
  if (countRoman === 1) {
    throw new Error("Оба числа должны быть либо арабскими либо римскими");
  } else if (counRoman === 2) {
    return true;
  }
};

const sum = (nums) => {
  return nums.reduce((a, b) => a + b);
};
const mult = (nums) => {
  return nums.reduce((a, b) => a * b);
};
const division = (nums) => {
  return nums.reduce((a, b) => a / b);
};
const subtraction = (nums) => {
  return nums.reduce((a, b) => a - b);
};

const checkOperation = (str, nums) => {
  let result;
  if (str === "+") {
    result = sum(nums);
  } else if (str === "*") {
    result = mult(nums);
  } else if (str === "/") {
    result = division(nums);
  } else if (str === "-") {
    result = subtraction(nums);
  }
  return math.floor(result);
};

const calculator = (string) => {
  const isValid = stringValidation(string);
  const operation = getOperation(string);
  const nums = getNums(string);
  const roman = isRoman(string);
  if (roman) {
    nums = nums.map((num) => romanToArabic(num));
  }
  nums = nums.map((num) => +num);
  return checkOperation(operation, nums);
};

console.log(calculator("2 * 2"));
console.log(calculator(" / 2"));
console.log(calculator("1 + 2"));
console.log(calculator("2 - 2"));
