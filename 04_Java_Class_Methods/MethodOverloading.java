// Method Overloading - Same name, different parameters

class Printer {
    // Method 1: Print integer
    void print(int number) {
        System.out.println("Integer: " + number);
    }
    
    // Method 2: Print double
    void print(double number) {
        System.out.println("Double: " + number);
    }
    
    // Method 3: Print string
    void print(String text) {
        System.out.println("String: " + text);
    }
    
    // Method 4: Print boolean
    void print(boolean value) {
        System.out.println("Boolean: " + value);
    }
    
    // Method 5: Print two integers
    void print(int a, int b) {
        System.out.println("Two integers: " + a + ", " + b);
    }
}

class Calculator {
    // Add two integers
    int add(int a, int b) {
        System.out.print("Adding two ints: ");
        return a + b;
    }
    
    // Add three integers
    int add(int a, int b, int c) {
        System.out.print("Adding three ints: ");
        return a + b + c;
    }
    
    // Add two doubles
    double add(double a, double b) {
        System.out.print("Adding two doubles: ");
        return a + b;
    }
    
    // Add array of numbers
    int add(int[] numbers) {
        System.out.print("Adding array: ");
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}

class Display {
    // Display single value
    void show(String title) {
        System.out.println("═══ " + title + " ═══");
    }
    
    // Display with value
    void show(String title, int value) {
        System.out.println("═══ " + title + " ═══");
        System.out.println("Value: " + value);
    }
    
    // Display with multiple values
    void show(String title, int value1, int value2) {
        System.out.println("═══ " + title + " ═══");
        System.out.println("Value 1: " + value1);
        System.out.println("Value 2: " + value2);
    }
    
    // Display with description
    void show(String title, String description) {
        System.out.println("═══ " + title + " ═══");
        System.out.println(description);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        System.out.println("=== Method Overloading Example ===\n");
        
        // Printer example
        System.out.println("--- Printer (Different Types) ---\n");
        Printer printer = new Printer();
        printer.print(42);
        printer.print(3.14159);
        printer.print("Hello, Java!");
        printer.print(true);
        printer.print(10, 20);
        
        // Calculator example
        System.out.println("\n--- Calculator (Different Parameters) ---\n");
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 10));
        System.out.println(calc.add(5, 10, 15));
        System.out.println(calc.add(5.5, 10.7));
        
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(calc.add(numbers));
        
        // Display example
        System.out.println("\n--- Display (Different Combinations) ---\n");
        Display display = new Display();
        
        display.show("Welcome");
        System.out.println();
        
        display.show("Score", 95);
        System.out.println();
        
        display.show("Coordinates", 10, 20);
        System.out.println();
        
        display.show("About", "This is a Java OOP tutorial");
        
        System.out.println("\n✓ Method Overloading:");
        System.out.println("  - Same method name");
        System.out.println("  - Different parameters (number, type, or order)");
        System.out.println("  - Compile-time polymorphism");
    }
}
