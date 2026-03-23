// Exercise #5: Concatenate the Alphabets

// สมมุติว่าเรามี Variable ตั้งต้น companyName ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp"
// ให้เขียนโปรแกรมที่บอกลำดับตัวอักษรภาษาอังกฤษแต่ละตัว ว่าเป็นตัวอักษรตัวที่เท่าไหร่
// โดยมีรูปแบบการเขียนแบบนี้ "Number <ลำดับ> character is <ตัวอักษร>"


let companyName = "TechUp";

for (const x in companyName){
    console.log(`Number ${Number(x) + 1} Character is ${companyName[x]}`)    

}

//Dev ส่วนมาก ใช้  for..of 
// let companyName = "TechUp";
// let index = 1;

// for (const char of companyName) {
//     console.log(`Number ${index} character is ${char}`);
//     index++;
// }