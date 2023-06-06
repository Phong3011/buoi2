//bai1
// let person1 = {
//   id: 1,
//   name: "Nguyen Van A",
//   age: 15,
// };

// let person2 = {
//   id: 2,
//   name: "Nguyen Van B",
//   age: 16,
// };

// let person3 = {
//   id: 3,
//   name: "Nguyen Van C",
//   age: 17,
// };

// let person4 = {
//   id: 4,
//   name: "Nguyen Van D",
//   age: 18,
// };

// console.log("STT:" , person1.id, "- Họ và tên" ,person1.name, person1.age ,"tuổi");
// console.log("STT:" , person2.id, "- Họ và tên" ,person2.name, person2.age ,"tuổi");
// console.log("STT:" , person3.id, "- Họ và tên" ,person3.name, person3.age ,"tuổi");
// console.log("STT:" , person4.id, "- Họ và tên" ,person4.name, person4.age ,"tuổi");

//bai2
// console.log(person1.name.toUpperCase());
// console.log(person2.name.toUpperCase());
// console.log(person3.name.toUpperCase());
// console.log(person4.name.toUpperCase());

//bai3
// let cars = ['Honda', 'Mazda', 'Mercedes'];
// let result = cars.join("-");
// console.log(result);

//bai4
// let animal =  ['Monkey', 'Tiger', 'Elephant'];
// let result = animal[animal.length -1]
// console.log(animal);
// console.log(result);

//bai5
// let animal =  ['Monkey', 'Tiger', 'Elephant'];
// console.log(animal);
// console.log(`${animal[0]}`);

//bai6
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// sports.sort((a,b)=>a.like-b.like);
// console.log(sports);
// let mostFavouriteSport = sports[sports.length -1]
// console.log(mostFavouriteSport);

//bai7
// let sports = [
//   {
//     name: "Bơi lội",
//     gold: 11,
//   },
//   {
//     name: "Boxing",
//     gold: 3,
//   },
//   {
//     name: "Đạp xe",
//     gold: 4,
//   },
//   {
//     name: "Đấu kiếm",
//     gold: 5,
//   },
// ];
// function getTotalGold(array) {
//   let totalGold = 0;
//   for (let i = 0; i < array.length; i++) {
//     totalGold = totalGold + array[i].gold;
//   }
//   return totalGold;
// }
// console.log(getTotalGold(sports));

//bai8
// let listStudent = [
//     { id: 1, name: "Nguyen Van A", age: 15 },
//     { id: 2, name: "Nguyen Van B", age: 13 },
//     { id: 3, name: "Nguyen Van C", age: 18 },
//     { id: 4, name: "Nguyen Van D", age: 14 },
// ];
// listStudent.sort((a,b)=> a.age -b.age);
// console.log(listStudent);
