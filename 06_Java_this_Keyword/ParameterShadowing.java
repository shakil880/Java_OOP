// Demonstrating how 'this' resolves parameter shadowing

public class ParameterShadowing {
    // Instance variables
    private String name;
    private int age;
    private String city;
    
    // Constructor with parameters that have same names as instance variables
    public ParameterShadowing(String name, int age, String city) {
        // Without 'this', parameters would shadow instance variables
        // 'this.name' refers to instance variable
        // 'name' refers to parameter
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    // Method showing parameter shadowing
    public void updateAge(int age) {
        // this.age = instance variable
        // age = parameter
        System.out.println("Old age (instance variable): " + this.age);
        System.out.println("New age (parameter): " + age);
        this.age = age;  // Update instance variable
        System.out.println("Updated age: " + this.age);
    }
    
    // Method without 'this' - can cause confusion
    public void setNameWithoutThis(String n) {
        name = n;  // Works but less clear
    }
    
    // Method with 'this' - more readable
    public void setNameWithThis(String name) {
        this.name = name;  // Clear distinction
    }
    
    public void displayInfo() {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
        System.out.println("City: " + this.city);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Parameter Shadowing Example ===\n");
        
        // Create object with constructor parameters
        ParameterShadowing person = new ParameterShadowing("Alice", 25, "New York");
        
        System.out.println("Initial information:");
        person.displayInfo();
        
        System.out.println("\n=== Updating Age ===");
        person.updateAge(26);
        
        System.out.println("\n=== Updating Name ===");
        person.setNameWithThis("Alice Johnson");
        person.displayInfo();
        
        System.out.println("\n=== Another Example ===");
        ParameterShadowing person2 = new ParameterShadowing("Bob", 30, "Los Angeles");
        person2.displayInfo();
    }
}
