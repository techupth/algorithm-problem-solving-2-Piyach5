function findStudentIndex(students, searchStudent) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  const result = students.indexOf(searchStudent);
  return result;
}

const students = [
  "Andrew",
  "Bobby",
  "Diana",
  "George",
  "Hannah",
  "Isaac",
  "Jasmine",
  "John",
];

const searchStudent = "John";

console.log(findStudentIndex(students, searchStudent));

// ตอบคำถามตรงนี้จ้า

/* จากฟังค์ชั่น findStudentIndex ด้านบน BIG O จะมีค่าเท่ากับ 1 
เนื่องจากไม่ว่าข้อมูลจะมีขนาดเท่าไหร่ แต่ function
จะ execute เพียงหนึ่งครั้งในการหา index ของ searchStudent ด้วย indexOf()
ที่เป็น built-in function*/
