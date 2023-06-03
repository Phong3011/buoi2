//read
// const i = prompt(`Nhap mon ban muon an:`);
// let food = ["Fried Rice" ,"Pho" , "Com" , "Mi" ,"Banh cuon"];
// if (i<1 || i > food.length){
//     console.log('Moi ban chon mon lai');
// }
// else{
//     console.log(`Mon ban chon la` , food[i-1]);
// }

//Create
// let player = ['Ronaldo' , 'Messi' , 'Neymar'];
// const ask = prompt('Do you want to add more football player? "Y" or "N"')
// switch (ask) {
//     case "Y":
//         let newplayer = prompt('Nhap cau thu ban muon them')
//         player.push(newplayer);
//         console.log(player);
//         break;
//     case "N":
//         console.log(`Thanks`);
//     default:
//         break;
// }

//update
// let player = ["Ronaldo" , "Messi" , "Neymar"];
// for( let i = 0 ; i < player.length ; i++){
//     console.log(`Vi tri ${i+1}:` , player[i])
// }
// let  updateplayer = prompt('Ban co muon thay doi cau thu khong? "Y" or "N"');
// switch (updateplayer) {
//     case "Y":
//         let updatevitri = prompt('Nhap vi tri cau thu ');
//         let updatename = prompt('Nhap ten cau thu moi');
//         if (player(updatevitri - 1) === undefined){
//             console.log('Try again');
//         }
//         else{
//             player[updatevitri - 1] = updatename;
//             console.log(player);
//         }
//         break;
//     case "N":
//         console.log('Thanks');
//         break;
//     default:
//         break;
// }

//delete
// let player = ["Ronaldo" , "Messi" , "Neymar"];
// for ( let i = 0 ; i < player.length ; i++){
//     console.log(`vitri ${i+1}`, player[i]);
// }
// let deletePlayer = prompt('Ban co muon xoa cau thu nao khong "y" or "n"');
// switch (deletePlayer) {
//     case "y":
//         let xoavitri = prompt('Nhap vi tri ban muon xoa');
//         if (player[xoavitri - 1] === undefined){
//             console.log('Xin thu lai');
//         }
//         else{
//             player.splice(xoavitri - 1 , 1);
//             console.log(player);
//         }
//         break;
//     case "n" :
//         console.log('Thanks');
//     default:
//         break;
// }