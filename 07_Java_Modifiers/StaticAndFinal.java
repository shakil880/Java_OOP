// Demonstrating static and final modifiers

public class StaticAndFinal {
    // Static variable - shared by all instances
    public static int instanceCount = 0;
    
    // Static final constant - shared and cannot be changed
    public static final String COMPANY_NAME = "TechCorp";
    public static final double PI = 3.14159;
    public static final int MAX_USERS = 100;
    
    // Final instance variable - must be initialized and cannot be changed
    public final int id;
    
    // Non-static instance variables
    private String name;
    private static int nextId = 1;
    
    // Constructor
    public StaticAndFinal(String name) {
        this.name = name;
        this.id = nextId++;  // Assign unique ID
        instanceCount++;  // Increment static counter
        System.out.println("Created: " + name + " with ID: " + id);
    }
    
    // Static method - can be called without creating an object
    public static void displayCompanyInfo() {
        System.out.println("Company: " + COMPANY_NAME);
        System.out.println("Max Users: " + MAX_USERS);
        System.out.println("Total Instances Created: " + instanceCount);
        // System.out.println(name);  // ERROR! Cannot access non-static from static
    }
    
    // Static method for calculations
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }
    
    // Static method to get next ID
    public static int getNextId() {
        return nextId;
    }
    
    // Non-static method - requires an object
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Company: " + COMPANY_NAME);  // Can access static from non-static
    }
    
    // Final method - cannot be overridden in subclasses
    public final void displayId() {
        System.out.println("ID: " + id + " (This method cannot be overridden)");
    }
    
    // Method using final parameter
    public void processData(final String data) {
        System.out.println("Processing: " + data);
        // data = "Modified";  // ERROR! Final parameter cannot be changed
    }
    
    // Method with final local variable
    public void calculateTotal() {
        final int basePrice = 100;  // Final local variable
        int quantity = 5;
        
        // basePrice = 200;  // ERROR! Cannot modify final variable
        quantity = 10;  // OK - not final
        
        int total = basePrice * quantity;
        System.out.println("Total: " + total);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Static and Final Modifiers ===\n");
        
        // Access static members without creating object
        System.out.println("=== Static Access (No Object) ===");
        System.out.println("Company: " + StaticAndFinal.COMPANY_NAME);
        System.out.println("PI: " + StaticAndFinal.PI);
        System.out.println("Initial instance count: " + StaticAndFinal.instanceCount);
        
        // Call static method
        System.out.println("\n=== Static Method Call ===");
        StaticAndFinal.displayCompanyInfo();
        
        // Create instances
        System.out.println("\n=== Creating Instances ===");
        StaticAndFinal obj1 = new StaticAndFinal("Alice");
        StaticAndFinal obj2 = new StaticAndFinal("Bob");
        StaticAndFinal obj3 = new StaticAndFinal("Charlie");
        
        // Static variable is shared
        System.out.println("\n=== Static Variable Shared ===");
        System.out.println("Instance count after creating 3 objects: " + StaticAndFinal.instanceCount);
        System.out.println("Instance count via obj1: " + obj1.instanceCount);
        System.out.println("Instance count via obj2: " + obj2.instanceCount);
        
        // Each instance has its own final ID
        System.out.println("\n=== Final Instance Variables ===");
        obj1.displayInfo();
        System.out.println();
        obj2.displayInfo();
        System.out.println();
        obj3.displayInfo();
        
        // Trying to modify final constant
        System.out.println("\n=== Final Constants (Cannot Modify) ===");
        // COMPANY_NAME = "NewCorp";  // ERROR! Cannot modify final variable
        // PI = 3.14;  // ERROR! Cannot modify final variable
        // obj1.id = 999;  // ERROR! Cannot modify final variable
        System.out.println("Final constants cannot be modified!");
        
        // Static method usage
        System.out.println("\n=== Static Method Usage ===");
        double radius = 5.0;
        double area = StaticAndFinal.calculateCircleArea(radius);
        System.out.println("Circle area (radius " + radius + "): " + area);
        
        // Final method
        System.out.println("\n=== Final Method ===");
        obj1.displayId();
        
        // Final parameter and local variable
        System.out.println("\n=== Final Parameter/Local Variable ===");
        obj1.processData("Test Data");
        obj1.calculateTotal();
        
        // Get next ID
        System.out.println("\n=== Next Available ID ===");
        System.out.println("Next ID will be: " + StaticAndFinal.getNextId());
    }
}

// Final class - cannot be extended
final class FinalClassExample {
    public void display() {
        System.out.println("This is a final class - cannot be extended");
    }
}

// ERROR! Cannot extend final class
// class ExtendedClass extends FinalClassExample { }
