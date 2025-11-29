// Demonstrating abstract modifier

// Abstract class - cannot be instantiated
abstract class Shape {
    // Regular instance variable
    protected String color;
    
    // Regular method in abstract class
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    // Abstract method - no implementation
    public abstract double calculateArea();
    
    // Abstract method
    public abstract double calculatePerimeter();
    
    // Regular method with implementation
    public void displayInfo() {
        System.out.println("Shape color: " + color);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

// Concrete class extending abstract class
class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    // Must implement all abstract methods
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    public double getRadius() {
        return radius;
    }
}

// Another concrete class
class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    // Must implement all abstract methods
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

// Another concrete class
class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        // Using Heron's formula
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
}

public class AbstractModifier {
    public static void main(String[] args) {
        System.out.println("=== Abstract Modifier Demo ===\n");
        
        // Cannot instantiate abstract class
        // Shape shape = new Shape();  // ERROR!
        
        // Create concrete objects
        System.out.println("=== Circle ===");
        Circle circle = new Circle(5.0);
        circle.setColor("Red");
        circle.displayInfo();
        System.out.println("Radius: " + circle.getRadius());
        
        System.out.println("\n=== Rectangle ===");
        Rectangle rectangle = new Rectangle(4.0, 6.0);
        rectangle.setColor("Blue");
        rectangle.displayInfo();
        
        System.out.println("\n=== Triangle ===");
        Triangle triangle = new Triangle(3.0, 4.0, 5.0);
        triangle.setColor("Green");
        triangle.displayInfo();
        
        // Polymorphism with abstract class
        System.out.println("\n=== Polymorphism with Abstract Class ===");
        Shape[] shapes = {
            new Circle(3.0),
            new Rectangle(5.0, 8.0),
            new Triangle(6.0, 8.0, 10.0)
        };
        
        shapes[0].setColor("Yellow");
        shapes[1].setColor("Purple");
        shapes[2].setColor("Orange");
        
        for (int i = 0; i < shapes.length; i++) {
            System.out.println("\nShape " + (i + 1) + ":");
            shapes[i].displayInfo();
        }
        
        // Calculate total area
        System.out.println("\n=== Total Area Calculation ===");
        double totalArea = 0;
        for (Shape shape : shapes) {
            totalArea += shape.calculateArea();
        }
        System.out.println("Total area of all shapes: " + totalArea);
    }
}
