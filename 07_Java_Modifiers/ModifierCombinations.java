// Comprehensive modifier combinations and usage examples

public class ModifierCombinations {
    
    // Public static final constant
    public static final String APP_NAME = "MyApp";
    
    // Private static variable
    private static int instanceCounter = 0;
    
    // Public final instance variable
    public final int id;
    
    // Private instance variables
    private String name;
    private int age;
    
    // Protected instance variable
    protected String status;
    
    // Public constructor
    public ModifierCombinations(String name, int age) {
        this.id = ++instanceCounter;
        this.name = name;
        this.age = age;
        this.status = "Active";
    }
    
    // Private constructor (for singleton pattern example)
    private ModifierCombinations() {
        this.id = ++instanceCounter;
        this.name = "Default";
        this.age = 0;
        this.status = "Inactive";
    }
    
    // Public static method
    public static int getInstanceCount() {
        return instanceCounter;
    }
    
    // Public static final method
    public static final void displayAppInfo() {
        System.out.println("Application: " + APP_NAME);
        System.out.println("Total instances: " + instanceCounter);
    }
    
    // Private method
    private void privateHelper() {
        System.out.println("This is a private helper method");
    }
    
    // Protected method
    protected void protectedMethod() {
        System.out.println("This is a protected method");
    }
    
    // Public final method (cannot be overridden)
    public final void displayId() {
        System.out.println("ID: " + id);
    }
    
    // Public method with final parameter
    public void processName(final String prefix) {
        // prefix = "Modified";  // ERROR! Cannot modify final parameter
        System.out.println(prefix + " " + name);
    }
    
    // Public synchronized method (thread-safe)
    public synchronized void updateStatus(String newStatus) {
        this.status = newStatus;
        System.out.println(name + " status updated to: " + status);
    }
    
    // Public method calling private method
    public void publicMethodCallingPrivate() {
        System.out.println("Public method calling private:");
        privateHelper();
    }
    
    // Public getters and setters
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    public String getStatus() {
        return status;
    }
    
    // Public method with all info
    public void displayFullInfo() {
        System.out.println("\n=== Object Information ===");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Status: " + status);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Modifier Combinations Demo ===\n");
        
        // Access static final constant
        System.out.println("Application: " + ModifierCombinations.APP_NAME);
        
        // Create objects
        ModifierCombinations obj1 = new ModifierCombinations("Alice", 25);
        ModifierCombinations obj2 = new ModifierCombinations("Bob", 30);
        ModifierCombinations obj3 = new ModifierCombinations("Charlie", 28);
        
        // Display instance count
        System.out.println("\n=== Instance Count ===");
        System.out.println("Total instances: " + ModifierCombinations.getInstanceCount());
        
        // Display app info (static method)
        System.out.println("\n=== Static Method ===");
        ModifierCombinations.displayAppInfo();
        
        // Display object information
        obj1.displayFullInfo();
        obj2.displayFullInfo();
        
        // Call final method
        System.out.println("\n=== Final Method ===");
        obj1.displayId();
        
        // Call method with final parameter
        System.out.println("\n=== Method with Final Parameter ===");
        obj1.processName("Dr.");
        
        // Call public method that calls private method
        System.out.println("\n=== Public Calling Private ===");
        obj1.publicMethodCallingPrivate();
        
        // Update status (synchronized method)
        System.out.println("\n=== Update Status ===");
        obj1.updateStatus("Premium");
        obj2.updateStatus("Standard");
        
        // Use getters and setters
        System.out.println("\n=== Getters and Setters ===");
        System.out.println("Bob's age: " + obj2.getAge());
        obj2.setAge(31);
        System.out.println("Bob's new age: " + obj2.getAge());
        
        // Final instance variable cannot be changed
        System.out.println("\n=== Final Instance Variable ===");
        System.out.println("Alice's ID: " + obj1.id);
        // obj1.id = 999;  // ERROR! Cannot modify final variable
        System.out.println("ID is final and cannot be changed!");
        
        // Demonstrate protected access
        System.out.println("\n=== Protected Member ===");
        System.out.println("Status (protected): " + obj3.status);
        obj3.protectedMethod();
    }
}

// Subclass to demonstrate inheritance with modifiers
class ExtendedClass extends ModifierCombinations {
    
    public ExtendedClass(String name, int age) {
        super(name, age);
    }
    
    // Can override protected method
    @Override
    protected void protectedMethod() {
        System.out.println("Overridden protected method in subclass");
    }
    
    // Cannot override final method
    // public void displayId() { }  // ERROR!
    
    public void testAccess() {
        System.out.println("\n=== Access from Subclass ===");
        // Can access public members
        System.out.println("Name: " + getName());
        
        // Can access protected members
        System.out.println("Status (protected): " + status);
        protectedMethod();
        
        // Cannot access private members
        // System.out.println(name);  // ERROR!
        // privateHelper();  // ERROR!
    }
}
