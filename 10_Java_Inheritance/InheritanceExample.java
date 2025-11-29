// Complete Inheritance Example with Employee System

class Person {
    protected String name;
    protected int age;
    protected String address;
    
    public Person(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
    }
}

class Employee extends Person {
    protected String employeeId;
    protected String department;
    protected double salary;
    
    public Employee(String name, int age, String address, String employeeId, String department, double salary) {
        super(name, age, address);
        this.employeeId = employeeId;
        this.department = department;
        this.salary = salary;
    }
    
    public double calculateBonus() {
        return salary * 0.10;  // 10% bonus
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Employee ID: " + employeeId);
        System.out.println("Department: " + department);
        System.out.println("Salary: $" + salary);
        System.out.println("Bonus: $" + calculateBonus());
    }
}

class Manager extends Employee {
    private int teamSize;
    
    public Manager(String name, int age, String address, String employeeId, String department, double salary, int teamSize) {
        super(name, age, address, employeeId, department, salary);
        this.teamSize = teamSize;
    }
    
    @Override
    public double calculateBonus() {
        return salary * 0.20 + (teamSize * 100);  // 20% + team bonus
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Team Size: " + teamSize);
        System.out.println("Position: Manager");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        System.out.println("=== Complete Inheritance Example ===\n");
        
        Person person = new Person("John", 30, "123 Main St");
        System.out.println("Person Information:");
        person.displayInfo();
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        Employee employee = new Employee("Alice", 28, "456 Oak Ave", "E001", "IT", 60000);
        System.out.println("Employee Information:");
        employee.displayInfo();
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        Manager manager = new Manager("Bob", 35, "789 Pine Rd", "M001", "Engineering", 90000, 10);
        System.out.println("Manager Information:");
        manager.displayInfo();
    }
}
