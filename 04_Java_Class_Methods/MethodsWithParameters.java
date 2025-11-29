// Methods with Parameters

class Greeter {
    void greet(String name) {
        System.out.println("Hello, " + name + "! Welcome!");
    }
    
    void greetWithTime(String name, String timeOfDay) {
        System.out.println("Good " + timeOfDay + ", " + name + "!");
    }
    
    void personalizedGreeting(String name, int age, String country) {
        System.out.println("╔═══════════════════════════════════╗");
        System.out.println("  Hello " + name + "!");
        System.out.println("  Age: " + age);
        System.out.println("  From: " + country);
        System.out.println("╚═══════════════════════════════════╝");
    }
}

class ShapeCalculator {
    void rectangleArea(int length, int width) {
        int area = length * width;
        System.out.println("Rectangle: " + length + " × " + width);
        System.out.println("Area: " + area + " square units");
    }
    
    void circleArea(double radius) {
        double area = 3.14159 * radius * radius;
        System.out.println("Circle with radius: " + radius);
        System.out.println("Area: " + area + " square units");
    }
    
    void triangleArea(double base, double height) {
        double area = 0.5 * base * height;
        System.out.println("Triangle: base=" + base + ", height=" + height);
        System.out.println("Area: " + area + " square units");
    }
}

class TextFormatter {
    void printRepeated(String text, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(text);
        }
    }
    
    void printBox(String message, char border) {
        int length = message.length() + 4;
        
        // Top border
        for (int i = 0; i < length; i++) {
            System.out.print(border);
        }
        System.out.println();
        
        // Message
        System.out.println(border + " " + message + " " + border);
        
        // Bottom border
        for (int i = 0; i < length; i++) {
            System.out.print(border);
        }
        System.out.println();
    }
    
    void printWithPrefix(String prefix, String message) {
        System.out.println(prefix + " " + message);
    }
}

public class MethodsWithParameters {
    public static void main(String[] args) {
        System.out.println("=== Methods with Parameters ===\n");
        
        // Greeter example
        Greeter greeter = new Greeter();
        greeter.greet("Alice");
        greeter.greet("Bob");
        greeter.greetWithTime("Charlie", "morning");
        greeter.greetWithTime("Diana", "evening");
        greeter.personalizedGreeting("Emma", 25, "USA");
        
        // Shape calculator
        System.out.println("\n--- Shape Calculations ---\n");
        ShapeCalculator shapes = new ShapeCalculator();
        shapes.rectangleArea(5, 3);
        System.out.println();
        shapes.circleArea(7.0);
        System.out.println();
        shapes.triangleArea(10.0, 6.0);
        
        // Text formatter
        System.out.println("\n--- Text Formatting ---\n");
        TextFormatter formatter = new TextFormatter();
        formatter.printRepeated("Java is fun!", 3);
        System.out.println();
        
        formatter.printBox("Hello World", '*');
        System.out.println();
        formatter.printBox("OOP Concepts", '#');
        System.out.println();
        
        formatter.printWithPrefix("[INFO]", "Application started");
        formatter.printWithPrefix("[WARNING]", "Low disk space");
        formatter.printWithPrefix("[ERROR]", "Connection failed");
        
        System.out.println("\n✓ Parameters allow methods to work with different data!");
    }
}
