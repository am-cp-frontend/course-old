class Rectangle {
    constructor (width, height) {
        this.width = width
        this.height = height
    }

    static area (rect) {
        return rect.width * rect.height
    }
}

const someRect = new Rectangle(5, 4)
Rectangle.area(someRect) // => 20