// Demonstrating access modifiers: public, private, protected, default

// Public class - accessible from anywhere
public class AccessModifiers {
    // Public variable - accessible from anywhere
    public String publicVar = "I am public";
    
    // Private variable - only accessible within this class
    private String privateVar = "I am private";
    
    // Protected variable - accessible in same package and subclasses
    protected String protectedVar = "I am protected";
    
    // Default (package-private) - accessible only in same package
    String defaultVar = "I am default (package-private)";
    
    // Public method - accessible from anywhere
    public void publicMethod() {
        System.out.println("Public method called");
        System.out.println("Can access all variables:");
        System.out.println("  - " + publicVar);
        System.out.println("  - " + privateVar);
        System.out.println("  - " + protectedVar);
        System.out.println("  - " + defaultVar);
    }
    
    // Private method - only accessible within this class
    private void privateMethod() {
        System.out.println("Private method called");
        System.out.println("This can only be called from within the class");
    }
    
    // Protected method - accessible in same package and subclasses
    protected void protectedMethod() {
        System.out.println("Protected method called");
    }
    
    // Default method - accessible only in same package
    void defaultMethod() {
        System.out.println("Default method called");
    }
    
    // Public method that calls private method
    public void callPrivateMethod() {
        System.out.println("\nCalling private method from public method:");
        privateMethod();
    }
    
    // Getter for private variable (encapsulation)
    public String getPrivateVar() {
        return privateVar;
    }
    
    // Setter for private variable (encapsulation)
    public void setPrivateVar(String value) {
        this.privateVar = value;
    }
    
    // Method to demonstrate access levels
    public void demonstrateAccess() {
        System.out.println("\n=== Access Within Same Class ===");
        System.out.println("Public: " + publicVar);
        System.out.println("Private: " + privateVar);
        System.out.println("Protected: " + protectedVar);
        System.out.println("Default: " + defaultVar);
        
        System.out.println("\nCalling all methods:");
        publicMethod();
        privateMethod();
        protectedMethod();
        defaultMethod();
    }
    
    public static void main(String[] args) {
        System.out.println("=== Access Modifiers Demo ===\n");
        
        AccessModifiers obj = new AccessModifiers();
        
        // Accessing public members
        System.out.println("From main (same class):");
        System.out.println("Public variable: " + obj.publicVar);
        System.out.println("Private variable: " + obj.privateVar);  // Works in same class
        System.out.println("Protected variable: " + obj.protectedVar);  // Works in same class
        System.out.println("Default variable: " + obj.defaultVar);  // Works in same class
        
        System.out.println("\n=== Calling Methods ===");
        obj.publicMethod();
        obj.callPrivateMethod();
        
        // Demonstrate all access levels
        obj.demonstrateAccess();
        
        // Using getter to access private variable
        System.out.println("\n=== Using Getter/Setter ===");
        System.out.println("Private var via getter: " + obj.getPrivateVar());
        obj.setPrivateVar("Modified private value");
        System.out.println("After setter: " + obj.getPrivateVar());
    }
}

// Another class in the same file to test access
class AccessTester {
    public void testAccess() {
        AccessModifiers obj = new AccessModifiers();
        
        System.out.println("\n=== Access from Different Class (Same File) ===");
        System.out.println("Public: " + obj.publicVar);  // Works
        // System.out.println("Private: " + obj.privateVar);  // ERROR! Cannot access
        System.out.println("Protected: " + obj.protectedVar);  // Works (same package)
        System.out.println("Default: " + obj.defaultVar);  // Works (same package)
        
        obj.publicMethod();  // Works
        // obj.privateMethod();  // ERROR! Cannot access
        obj.protectedMethod();  // Works (same package)
        obj.defaultMethod();  // Works (same package)
    }
}
