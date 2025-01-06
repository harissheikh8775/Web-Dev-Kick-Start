class Rectangle{
    constructor(length, width, color) {
        this.length = length;
        this.width = width;
        this.color = color;
    }
        
    area() {
        const area = this.length * this.width;
        return area;
    }
    paint() {
        console.log(`Painting with the color : ${this.color}`);
    }
}

const rect = new Rectangle(4, 5, "blue");
const area = rect.area();
const paint = rect.paint();
console.log(area);