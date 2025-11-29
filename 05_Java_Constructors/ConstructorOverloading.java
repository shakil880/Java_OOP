// Constructor Overloading - Multiple Constructors

class Employee {
    String name;
    int id;
    String department;
    double salary;
    
    // Constructor 1: No parameters (default)
    Employee() {
        name = "Unknown";
        id = 0;
        department = "Unassigned";
        salary = 0.0;
        System.out.println("✓ Employee created with defaults");
    }
    
    // Constructor 2: Name only
    Employee(String empName) {
        name = empName;
        id = 0;
        department = "Unassigned";
        salary = 0.0;
        System.out.println("✓ Employee created: " + name);
    }
    
    // Constructor 3: Name and ID
    Employee(String empName, int empId) {
        name = empName;
        id = empId;
        department = "Unassigned";
        salary = 0.0;
        System.out.println("✓ Employee created: " + name + " (ID: " + id + ")");
    }
    
    // Constructor 4: All parameters
    Employee(String empName, int empId, String dept, double sal) {
        name = empName;
        id = empId;
        department = dept;
        salary = sal;
        System.out.println("✓ Employee created: " + name + " - " + dept);
    }
    
    void displayInfo() {
        System.out.println("╔══════════════════════════════╗");
        System.out.println("  Name: " + name);
        System.out.println("  ID: " + id);
        System.out.println("  Department: " + department);
        System.out.println("  Salary: $" + salary);
        System.out.println("╚══════════════════════════════╝");
    }
}

class Circle {
    double radius;
    String color;
    
    // Constructor 1: Default
    Circle() {
        radius = 1.0;
        color = "Red";
    }
    
    // Constructor 2: Radius only
    Circle(double r) {
        radius = r;
        color = "Red";
    }
    
    // Constructor 3: Radius and color
    Circle(double r, String c) {
        radius = r;
        color = c;
    }
    
    double getArea() {
        return 3.14159 * radius * radius;
    }
    
    void display() {
        System.out.println(color + " circle (r=" + radius + "), Area=" + getArea());
    }
}

class Box {
    int length;
    int width;
    int height;
    
    // Constructor 1: Cube (all sides equal)
    Box(int side) {
        length = width = height = side;
        System.out.println("Cube created: " + side + "×" + side + "×" + side);
    }
    
    // Constructor 2: Custom dimensions
    Box(int l, int w, int h) {
        length = l;
        width = w;
        height = h;
        System.out.println("Box created: " + l + "×" + w + "×" + h);
    }
    
    // Constructor 3: Copy constructor
    Box(Box other) {
        length = other.length;
        width = other.width;
        height = other.height;
        System.out.println("Box copied");
    }
    
    int getVolume() {
        return length * width * height;
    }
    
    void display() {
        System.out.println("Dimensions: " + length + "×" + width + "×" + height);
        System.out.println("Volume: " + getVolume());
        System.out.println("---");
    }
}

public class ConstructorOverloading {
    public static void main(String[] args) {
        System.out.println("=== Constructor Overloading ===\n");
        
        // Employee with different constructors
        System.out.println("--- Employees ---\n");
        Employee emp1 = new Employee();
        Employee emp2 = new Employee("Alice");
        Employee emp3 = new Employee("Bob", 101);
        Employee emp4 = new Employee("Charlie", 102, "IT", 75000.0);
        System.out.println();
        
        emp1.displayInfo();
        emp2.displayInfo();
        emp3.displayInfo();
        emp4.displayInfo();
        
        // Circles with different constructors
        System.out.println("\n--- Circles ---\n");
        Circle c1 = new Circle();
        Circle c2 = new Circle(5.0);
        Circle c3 = new Circle(7.5, "Blue");
        
        c1.display();
        c2.display();
        c3.display();
        
        // Boxes with different constructors
        System.out.println("\n--- Boxes ---\n");
        Box box1 = new Box(5);  // Cube
        Box box2 = new Box(3, 4, 5);  // Custom
        Box box3 = new Box(box2);  // Copy
        System.out.println();
        
        box1.display();
        box2.display();
        box3.display();
        
        System.out.println("\n✓ Constructor Overloading:");
        System.out.println("  - Multiple constructors in same class");
        System.out.println("  - Different parameters (number/type)");
        System.out.println("  - Provides flexibility in object creation");
    }
}
