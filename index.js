//bai1
// const firstnumber = prompt('số thứ nhất là:');
// const secondnumber = prompt('số thứ hai là:');
// if (Number(firstnumber) > Number(secondnumber)){
//     console.log(`số thứ nhất${firstnumber} lớn hơn số thứ hai ${secondnumber}`)
// }
// else if (Number(secondnumber)>Number(firstnumber)){
//     console.log(`số thứ 2 :${secondnumber} lớn hơn số thứ nhất${firstnumber}`)
// }
// else{
//     console.log('cả hai số bằng nhau')
// }

//bai2
// const number = prompt('Nhập vào số a:');
// if (Number(number%3==0)){
//     console.log(`${number} chia hết cho 3`);
// }
// else {
//     console.log(`${number} không chia hết cho 3`)
// }

//bai 3
// const number = prompt("Nhập vào số a:");
// switch (Number(number)) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Febuary");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log('Vuợt quá số tháng')
//     break;
// }

//bai4
// const calculator = prompt('Nhập phép tính (+,-,*,/)');
// const firstnumber = prompt('Nhập số thứ nhất');
// const secondnumber = prompt('Nhập số thứ 2');
//cách 1
// if (calculator==='+'){
//     result = Number(firstnumber)+ Number(secondnumber);
//     console.log(`Kết quả của phép tính là ${result}`);
// }
// else if (calculator==='-'){
//     result = Number(firstnumber) - Number(secondnumber);
//     console.log(`Kết quả của phép tính là ${result}`);
// }
// else if ( calculator==='*'){
//     result = Number(firstnumber)* Number(secondnumber);
//     console.log(`Kết quả của phép tính là ${result}`);
// }
// else if ( calculator==='/'){
//     result = Number(firstnumber)/ Number(secondnumber);
//     console.log(`Kết quả của phép tính là ${result}`)
// }

//cách 2
// switch (calculator) {
//     case '+': result = Number(firstnumber)+ Number(secondnumber);
//         console.log(`Kết quả của phép tính là ${result}`);
//         break;
//     case '-': result = Number(firstnumber)- Number(secondnumber);
//         console.log(`Kết quả của phép tính là ${result}`);
//         break;
//     case '*': result = Number(firstnumber)* Number(secondnumber);
//         console.log(`Kết quả của phép tính là ${result}`);
//         break;
//     case '/': result = Number(firstnumber)/ Number(secondnumber);
//         console.log(`Kết quả của phép tính là ${result}`);
//         break;
// ``
//     default:
//         console.log('nhập sai phép toán')
//         break;
// }

//bài 5
// const a = prompt("Nhập số a bất kì :");
// if (a<2){
//     console.log('Không phải số nguyên tố')
// }
// for (let i = 2; i < a; i++) {
//   let dem = 0;
//   for (let j = 2; j < i; j++) {
//     if (Number(i % j === 0)) {
//       dem++;
//     }
//   }
//   if (dem === 0) {
//     console.log(i);
//   }
// }

//bai6
// const a = prompt('Nhập số a là:');
// const b = prompt('Nhập số b là:');
// const c = prompt('Nhập số c là:');
// let delta = null;
// let result_1 = null;
// let result_2 = null;
// if (a===0){
//   console.log(`Phương trình có 1 nghiệm duy nhất : ${-c/b}`);
// }
// else {
//   delta = (b**2-4*a*c);
//   if (delta < 0){
//     console.log('Phương trình vô nghiệm');
//   }
//   else if ( delta ===0){
//     console.log(`Phương trình có 1 nghiệm kép ${-b/(2*a)}`);
//   } 
//   else if (delta > 0){
//     result_1 = (-b+Math.sqrt(delta)) / (2*a);
//     result_2 = (-b-Math.sqrt(delta)) / (2*a);
//     console.log(`Phương trình có 2 nghiệm :${result_1} , ${result_2}`);
//   }
// }

//bai7
// const Month = prompt('nhập vào 1 só:')
// if (Month >0 && Month <=3){
//   console.log('Spring');
// }
// if (Month >3 && Month <=6){
//   console.log('Summer');
// }
// if (Month >6 && Month <=9){
//   console.log('Autumn');
// }
// if (Month >9 && Month <=12){
//   console.log('Winter');
// }