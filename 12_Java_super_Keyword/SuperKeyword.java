// Demonstrating the super keyword

class Parent {
    protected String name = "Parent Class";
    protected int value = 100;
    
    public Parent() {
        System.out.println("Parent constructor called");
    }
    
    public Parent(String name) {
        this.name = name;
        System.out.println("Parent constructor with parameter: " + name);
    }
    
    public void display() {
        System.out.println("Display from Parent");
        System.out.println("Name: " + name);
        System.out.println("Value: " + value);
    }
    
    public void showMessage() {
        System.out.println("Message from Parent class");
    }
}

class Child extends Parent {
    private String name = "Child Class";  // Shadows parent's name
    private int value = 200;  // Shadows parent's value
    
    public Child() {
        super();  // Call parent's no-arg constructor
        System.out.println("Child constructor called");
    }
    
    public Child(String name) {
        super(name);  // Call parent's parameterized constructor
        System.out.println("Child constructor with parameter");
    }
    
    @Override
    public void display() {
        System.out.println("\n=== Demonstrating super keyword ===");
        
        // Access child's variables
        System.out.println("Child's name: " + this.name);
        System.out.println("Child's value: " + this.value);
        
        // Access parent's variables using super
        System.out.println("Parent's name: " + super.name);
        System.out.println("Parent's value: " + super.value);
    }
    
    @Override
    public void showMessage() {
        System.out.println("Message from Child class");
        super.showMessage();  // Call parent's method
    }
    
    public void demonstrateSuper() {
        System.out.println("\n=== Accessing Parent Members ===");
        
        // Call parent's method
        System.out.println("Calling parent's display():");
        super.display();
        
        System.out.println("\nCalling parent's showMessage():");
        super.showMessage();
    }
}

public class SuperKeyword {
    public static void main(String[] args) {
        System.out.println("=== super Keyword Demo ===\n");
        
        System.out.println("Creating Child object with no-arg constructor:");
        Child child1 = new Child();
        
        System.out.println("\n" + "=".repeat(50));
        
        System.out.println("\nCreating Child object with parameterized constructor:");
        Child child2 = new Child("Custom Parent Name");
        
        System.out.println("\n" + "=".repeat(50));
        
        // Call overridden methods
        child1.display();
        
        System.out.println("\n" + "=".repeat(50));
        
        child1.showMessage();
        
        System.out.println("\n" + "=".repeat(50));
        
        child1.demonstrateSuper();
        
        System.out.println("\n=== super Keyword Uses ===");
        System.out.println("✓ super() - Call parent constructor");
        System.out.println("✓ super.variable - Access parent's variable");
        System.out.println("✓ super.method() - Call parent's method");
    }
}
