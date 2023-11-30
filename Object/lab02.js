function Accumulator(startingValue) {
    this.currentValue = startingValue;

    this.read = function() {
        let userInput = Number(prompt("Enter a number to add:")); 
        this.currentValue += userInput;
    };
    this.show = function() {
        alert("Current Value: " + this.currentValue); // แสดงค่า currentValue ด้วย alert
    };
}

let accumulator = new Accumulator(10); // สร้าง Object จาก Constructor Function Accumulator โดยกำหนด startingValue เป็น 10
accumulator.read(); // ทดสอบ Method read() โดยให้ผู้ใช้กรอกค่าเพื่อบวกกับ currentValue
accumulator.show(); // แสดงค่า currentValue ผ่าน Method show()
