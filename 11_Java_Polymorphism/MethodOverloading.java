// Method Overloading - Compile-time Polymorphism

class Calculator {
    // Method with 2 int parameters
    public int add(int a, int b) {
        System.out.println("Adding two integers");
        return a + b;
    }
    
    // Method with 3 int parameters (different number of parameters)
    public int add(int a, int b, int c) {
        System.out.println("Adding three integers");
        return a + b + c;
    }
    
    // Method with 2 double parameters (different type)
    public double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }
    
    // Method with mixed types
    public double add(int a, double b) {
        System.out.println("Adding int and double");
        return a + b;
    }
    
    // Different order of parameters
    public double add(double a, int b) {
        System.out.println("Adding double and int");
        return a + b;
    }
}

class Printer {
    // Print integer
    public void print(int value) {
        System.out.println("Integer: " + value);
    }
    
    // Print double
    public void print(double value) {
        System.out.println("Double: " + value);
    }
    
    // Print String
    public void print(String value) {
        System.out.println("String: " + value);
    }
    
    // Print array
    public void print(int[] arr) {
        System.out.print("Array: [");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
    
    // Print with formatting
    public void print(String label, int value) {
        System.out.println(label + ": " + value);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        System.out.println("=== Method Overloading (Compile-Time Polymorphism) ===\n");
        
        Calculator calc = new Calculator();
        
        System.out.println("=== Calculator Examples ===");
        System.out.println("Result: " + calc.add(5, 3));
        System.out.println();
        System.out.println("Result: " + calc.add(5, 3, 2));
        System.out.println();
        System.out.println("Result: " + calc.add(5.5, 3.2));
        System.out.println();
        System.out.println("Result: " + calc.add(5, 3.5));
        System.out.println();
        System.out.println("Result: " + calc.add(5.5, 3));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        Printer printer = new Printer();
        
        System.out.println("=== Printer Examples ===");
        printer.print(42);
        printer.print(3.14);
        printer.print("Hello, World!");
        printer.print(new int[]{1, 2, 3, 4, 5});
        printer.print("Age", 25);
        
        System.out.println("\n=== Method Overloading Rules ===");
        System.out.println("✓ Same method name");
        System.out.println("✓ Different parameters (number, type, or order)");
        System.out.println("✓ Return type can be different");
        System.out.println("✓ Resolved at compile time");
    }
}
