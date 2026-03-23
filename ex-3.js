// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0] ;
// Start coding here

for (let i =0 ; i < scores.length; i++){
    console.log(i);
    if (scores[i] < minScore ){
        minScore = scores[i];
    }
}


console.log(minScore);





// let studentScores = [100, 20, 3, 100];

// // สมมุติให้ตัวแรกเป็นค่าน้อยสุดก่อน
// let minScore = studentScores[0];

// // เริ่มวนจากตัวที่ 2 (index 1)
// for (let i = 1; i < studentScores.length; i++) {
//   // ถ้าค่าปัจจุบันน้อยกว่าค่าน้อยสุดที่เก็บไว้
//   if (studentScores[i] < minScore) {
//     // อัปเดตค่าน้อยสุด
//     minScore = studentScores[i];
//   }
// }

// // แสดงผลลัพธ์
// console.log(minScore);