function calculateRectangleDiagonal(a, b) {
    const diagonal = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return diagonal;
}

// ตัวอย่างการใช้งานฟังก์ชัน
let sideA = 3; // ความยาวของด้าน a
let sideB = 4; // ความยาวของด้าน b
let rectangleDiagonal = calculateRectangleDiagonal(sideA, sideB);
console.log("เส้นทแยงมุมของสี่เหลี่ยมผืนผ้า :", rectangleDiagonal);
