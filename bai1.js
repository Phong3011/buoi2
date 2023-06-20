const a = parseInt(prompt("Nhập giá trị a ( nhỏ hơn b):"));
const b = parseInt(prompt("Nhập giá trị b:"));
console.log("Tổng các số nguyên tố là");
let sum = 0;
for (let i = a; i <= b; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    sum += i;
    console.log(sum);
  }
}

