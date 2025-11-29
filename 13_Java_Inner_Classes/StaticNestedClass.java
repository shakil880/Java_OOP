// Static Nested Class

class OuterClass {
    private static String staticOuterField = "Static Outer Field";
    private String instanceOuterField = "Instance Outer Field";
    private static int counter = 0;
    
    // Static nested class
    static class StaticNestedClass {
        private String nestedField = "Nested Field";
        
        public void display() {
            System.out.println("=== Static Nested Class ===");
            // Can access static members of outer class
            System.out.println("Static outer field: " + staticOuterField);
            System.out.println("Counter: " + counter);
            System.out.println("Nested field: " + nestedField);
            
            // Cannot access instance members directly
            // System.out.println(instanceOuterField);  // ERROR!
        }
        
        public void incrementCounter() {
            counter++;
            System.out.println("Counter incremented to: " + counter);
        }
        
        public static void staticMethod() {
            System.out.println("Static method in nested class");
            System.out.println("Can access: " + staticOuterField);
        }
    }
    
    public void demonstrateNested() {
        System.out.println("=== From Outer Class ===");
        StaticNestedClass nested = new StaticNestedClass();
        nested.display();
    }
}

public class StaticNestedClass {
    public static void main(String[] args) {
        System.out.println("=== Static Nested Class Demo ===\n");
        
        // Create static nested class instance WITHOUT outer class instance
        OuterClass.StaticNestedClass nested1 = new OuterClass.StaticNestedClass();
        nested1.display();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Call static method of nested class
        OuterClass.StaticNestedClass.staticMethod();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create multiple instances
        OuterClass.StaticNestedClass nested2 = new OuterClass.StaticNestedClass();
        nested1.incrementCounter();
        nested2.incrementCounter();
        nested1.display();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Can also access through outer class
        OuterClass outer = new OuterClass();
        outer.demonstrateNested();
        
        System.out.println("\n=== Static Nested Class Features ===");
        System.out.println("✓ No need for outer class instance");
        System.out.println("✓ Can access only static members of outer class");
        System.out.println("✓ Can have static members");
        System.out.println("✓ Like a static member of outer class");
    }
}
