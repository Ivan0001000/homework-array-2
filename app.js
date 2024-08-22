let arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// a
let positiveSum = 0;
let positiveCount = 0;

for (let num of arr) {
  if (num > 0) {
    positiveSum += num;
    positiveCount++;
  }
}

document.write("Сумма положительных элементов:", positiveSum + "<br>");
document.write("Количество положительных элементов:", positiveCount + "<br>");

// b
let minElement = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < minElement) {
    minElement = arr[i];
    minIndex = i;
  }
}
document.write(
  "Минимальный элемент:",
  minElement,
  "с индексом",
  minIndex + "<br>"
);

// c
let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxElement) {
    maxElement = arr[i];
    maxIndex = i;
  }
}
document.write(
  "Максимальный элемент:",
  maxElement,
  "с индексом",
  maxIndex + "<br>"
);

// d
let negativeCount = 0;

for (let num of arr) {
  if (num < 0) {
    negativeCount++;
  }
}
document.write("Количество отрицательных элементов:", negativeCount + "<br>");

// e
let oddPositiveCount = 0;

for (let num of arr) {
  if (num > 0 && num % 2 !== 0) {
    oddPositiveCount++;
  }
}
document.write(
  "Количество нечетных положительных элементов:",
  oddPositiveCount + "<br>"
);

// f
let evenPositiveCount = 0;

for (let num of arr) {
  if (num > 0 && num % 2 == 0) {
    evenPositiveCount++;
  }
}
document.write(
  "Количество четных положительных элементов:",
  evenPositiveCount + "<br>"
);

// g
let sumEvenPositive = 0;

for (let num of arr) {
  if (num > 0 && num % 2 == 0) {
    sumEvenPositive += num;
  }
}
document.write(
  "Сумма четных положительных элементов:",
  sumEvenPositive + "<br>"
);

// h
let sumOddPositive = 0;

for (let num of arr) {
  if (num > 0 && num % 2 !== 0) {
    sumOddPositive += num;
  }
}
document.write(
  "Сумма нечетных положительных элементов:",
  oddPositiveCount + "<br>"
);

// i
let positiveProduct = 1;

for (let num of arr) {
  if (num > 0) {
    positiveProduct *= num;
  }
}
document.write(
  "Произведение положительных элементов:",
  positiveProduct + "<br>"
);

//j
let maxElement2 = Math.max(...arr);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== maxElement2) {
    arr[i] = 0;
  }
}
document.write("Массив с обнуленными элементами, кроме максимального:", arr);
