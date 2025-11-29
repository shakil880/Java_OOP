// Basic encapsulation with getters and setters

public class BasicEncapsulation {
    // Private variables (hidden from outside)
    private String name;
    private int age;
    private double salary;
    
    // Constructor
    public BasicEncapsulation(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // Setter for name
    public void setName(String name) {
        this.name = name;
    }
    
    // Getter for age
    public int getAge() {
        return age;
    }
    
    // Setter for age with validation
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age! Age must be between 1 and 149.");
        }
    }
    
    // Getter for salary
    public double getSalary() {
        return salary;
    }
    
    // Setter for salary with validation
    public void setSalary(double salary) {
        if (salary >= 0) {
            this.salary = salary;
        } else {
            System.out.println("Invalid salary! Salary cannot be negative.");
        }
    }
    
    // Method to display information
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Basic Encapsulation Demo ===\n");
        
        // Create object
        BasicEncapsulation employee = new BasicEncapsulation("John Doe", 30, 50000);
        
        // Display initial info
        System.out.println("Initial Information:");
        employee.displayInfo();
        
        // Access through getters
        System.out.println("\n=== Accessing via Getters ===");
        System.out.println("Name: " + employee.getName());
        System.out.println("Age: " + employee.getAge());
        System.out.println("Salary: $" + employee.getSalary());
        
        // Modify through setters
        System.out.println("\n=== Modifying via Setters ===");
        employee.setName("Jane Smith");
        employee.setAge(35);
        employee.setSalary(60000);
        
        System.out.println("\nAfter modifications:");
        employee.displayInfo();
        
        // Try invalid values (validation in setters)
        System.out.println("\n=== Testing Validation ===");
        employee.setAge(200);  // Invalid
        employee.setAge(-5);   // Invalid
        employee.setSalary(-1000);  // Invalid
        
        System.out.println("\nInformation unchanged (due to validation):");
        employee.displayInfo();
        
        // Cannot access private variables directly
        // System.out.println(employee.name);  // ERROR!
        // employee.age = 25;  // ERROR!
        System.out.println("\n✓ Private variables are protected from direct access!");
    }
}
