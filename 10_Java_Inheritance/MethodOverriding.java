// Demonstrating method overriding in inheritance

class Shape {
    protected String name;
    
    public Shape(String name) {
        this.name = name;
    }
    
    // Method to be overridden
    public double calculateArea() {
        System.out.println("Area calculation not implemented in Shape");
        return 0;
    }
    
    // Method to be overridden
    public double calculatePerimeter() {
        System.out.println("Perimeter calculation not implemented in Shape");
        return 0;
    }
    
    // Common method
    public void display() {
        System.out.println("Shape: " + name);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    
    // Override calculateArea
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    // Override calculatePerimeter
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }
    
    // Override calculateArea
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    // Override calculatePerimeter
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(double side1, double side2, double side3) {
        super("Triangle");
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
}

public class MethodOverriding {
    public static void main(String[] args) {
        System.out.println("=== Method Overriding Demo ===\n");
        
        // Create shapes
        Rectangle rect = new Rectangle(5, 3);
        Circle circle = new Circle(4);
        Triangle triangle = new Triangle(3, 4, 5);
        
        // Display each shape (calls overridden methods)
        System.out.println("Rectangle:");
        rect.display();
        
        System.out.println("\nCircle:");
        circle.display();
        
        System.out.println("\nTriangle:");
        triangle.display();
        
        // Polymorphism with method overriding
        System.out.println("\n=== Polymorphism ===");
        Shape[] shapes = {
            new Rectangle(6, 4),
            new Circle(5),
            new Triangle(6, 8, 10)
        };
        
        for (Shape shape : shapes) {
            shape.display();
            System.out.println();
        }
        
        System.out.println("=== Method Overriding Benefits ===");
        System.out.println("✓ Each child class provides its own implementation");
        System.out.println("✓ Same method name, different behavior");
        System.out.println("✓ Enables polymorphism");
        System.out.println("✓ Runtime method resolution");
    }
}
