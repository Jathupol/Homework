function calculateCircleCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

let radius = 5;
let circumference = calculateCircleCircumference(radius);
console.log("เส้นรอบวงวงกลม :", circumference);
