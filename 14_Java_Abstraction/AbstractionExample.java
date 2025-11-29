// Real-world Abstraction Example

abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract methods
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
    public abstract void draw();
    
    // Concrete methods
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    public void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
        draw();
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle with radius " + radius);
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " rectangle " + length + "x" + width);
    }
}

class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(String color, double side1, double side2, double side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " triangle with sides " + 
                         side1 + ", " + side2 + ", " + side3);
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        System.out.println("=== Abstraction Real-World Example ===\n");
        
        // Create shapes
        Shape circle = new Circle("Red", 5);
        Shape rectangle = new Rectangle("Blue", 4, 6);
        Shape triangle = new Triangle("Green", 3, 4, 5);
        
        System.out.println("=== Circle ===");
        circle.displayDetails();
        
        System.out.println("\n=== Rectangle ===");
        rectangle.displayDetails();
        
        System.out.println("\n=== Triangle ===");
        triangle.displayDetails();
        
        // Array of shapes
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Processing Multiple Shapes ===\n");
        
        Shape[] shapes = {
            new Circle("Yellow", 3),
            new Rectangle("Purple", 5, 8),
            new Triangle("Orange", 6, 8, 10),
            new Circle("Pink", 7)
        };
        
        double totalArea = 0;
        for (int i = 0; i < shapes.length; i++) {
            System.out.println("Shape " + (i + 1) + ":");
            shapes[i].displayDetails();
            totalArea += shapes[i].calculateArea();
            System.out.println();
        }
        
        System.out.println("=== Summary ===");
        System.out.println("Total shapes: " + shapes.length);
        System.out.println("Total area: " + totalArea);
        
        System.out.println("\n=== Benefits of Abstraction ===");
        System.out.println("✓ Hide complex implementation details");
        System.out.println("✓ Focus on what object does, not how");
        System.out.println("✓ Provide common interface");
        System.out.println("✓ Enable polymorphism");
    }
}
