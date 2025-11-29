// Member Inner Class (Non-static nested class)

class OuterClass {
    private String outerField = "Outer Field";
    private int outerValue = 100;
    
    // Member inner class (non-static)
    class InnerClass {
        private String innerField = "Inner Field";
        
        public void display() {
            System.out.println("=== Inner Class Method ===");
            // Can access outer class members directly
            System.out.println("Outer field: " + outerField);
            System.out.println("Outer value: " + outerValue);
            System.out.println("Inner field: " + innerField);
        }
        
        public void modifyOuter() {
            // Can modify outer class members
            outerValue += 50;
            System.out.println("Modified outer value to: " + outerValue);
        }
    }
    
    public void demonstrateInner() {
        System.out.println("=== Outer Class Method ===");
        // Create inner class instance inside outer class
        InnerClass inner = new InnerClass();
        inner.display();
        inner.modifyOuter();
    }
}

public class MemberInnerClass {
    public static void main(String[] args) {
        System.out.println("=== Member Inner Class Demo ===\n");
        
        // Create outer class instance
        OuterClass outer = new OuterClass();
        
        // Access inner class through outer class
        outer.demonstrateInner();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create inner class instance from outside
        // Syntax: OuterClass.InnerClass inner = outer.new InnerClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.display();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create another outer instance with its own inner instance
        OuterClass outer2 = new OuterClass();
        OuterClass.InnerClass inner2 = outer2.new InnerClass();
        inner2.display();
        
        System.out.println("\n=== Member Inner Class Features ===");
        System.out.println("✓ Can access all members of outer class");
        System.out.println("✓ Requires outer class instance");
        System.out.println("✓ Cannot have static members (except final static)");
        System.out.println("✓ Useful for helper classes");
    }
}
