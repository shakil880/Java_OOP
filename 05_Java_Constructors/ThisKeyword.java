// Using 'this' Keyword in Constructors

class Person {
    String name;
    int age;
    String city;
    
    // Without 'this' - different parameter names
    Person(String personName, int personAge, String personCity) {
        name = personName;
        age = personAge;
        city = personCity;
    }
    
    void display() {
        System.out.println("Name: " + name + ", Age: " + age + ", City: " + city);
    }
}

class Car {
    String brand;
    String model;
    int year;
    double price;
    
    // With 'this' - same parameter names as attributes
    Car(String brand, String model, int year, double price) {
        this.brand = brand;  // this.brand refers to instance variable
        this.model = model;  // model refers to parameter
        this.year = year;
        this.price = price;
    }
    
    void displayInfo() {
        System.out.println(year + " " + brand + " " + model + " - $" + price);
    }
}

class Student {
    String name;
    int rollNumber;
    double gpa;
    
    // Constructor 1: Basic
    Student(String name) {
        this.name = name;
        this.rollNumber = 0;
        this.gpa = 0.0;
    }
    
    // Constructor 2: With roll number (calls Constructor 1)
    Student(String name, int rollNumber) {
        this(name);  // Constructor chaining - calls first constructor
        this.rollNumber = rollNumber;
    }
    
    // Constructor 3: All parameters (calls Constructor 2)
    Student(String name, int rollNumber, double gpa) {
        this(name, rollNumber);  // Calls second constructor
        this.gpa = gpa;
    }
    
    void display() {
        System.out.println("Student: " + name + ", Roll: " + rollNumber + ", GPA: " + gpa);
    }
}

class Rectangle {
    int length;
    int width;
    
    // Default constructor
    Rectangle() {
        this(1, 1);  // Calls parameterized constructor
        System.out.println("Default rectangle created (1×1)");
    }
    
    // Square constructor
    Rectangle(int side) {
        this(side, side);  // Calls two-parameter constructor
        System.out.println("Square created (" + side + "×" + side + ")");
    }
    
    // Full constructor
    Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
        System.out.println("Rectangle created (" + length + "×" + width + ")");
    }
    
    int getArea() {
        return this.length * this.width;  // 'this' is optional here
    }
    
    void display() {
        System.out.println("Dimensions: " + length + "×" + width);
        System.out.println("Area: " + getArea());
        System.out.println("---");
    }
}

public class ThisKeyword {
    public static void main(String[] args) {
        System.out.println("=== 'this' Keyword in Constructors ===\n");
        
        // Person without 'this' (different names)
        System.out.println("--- Person (without 'this') ---\n");
        Person person = new Person("John", 30, "New York");
        person.display();
        
        // Car with 'this' (same names)
        System.out.println("\n--- Car (with 'this') ---\n");
        Car car1 = new Car("Toyota", "Camry", 2024, 28000);
        Car car2 = new Car("BMW", "M3", 2023, 72000);
        car1.displayInfo();
        car2.displayInfo();
        
        // Student with constructor chaining
        System.out.println("\n--- Student (Constructor Chaining) ---\n");
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob", 101);
        Student s3 = new Student("Charlie", 102, 3.8);
        System.out.println();
        
        s1.display();
        s2.display();
        s3.display();
        
        // Rectangle with constructor chaining
        System.out.println("\n--- Rectangle (Constructor Chaining) ---\n");
        Rectangle r1 = new Rectangle();
        Rectangle r2 = new Rectangle(5);
        Rectangle r3 = new Rectangle(4, 6);
        System.out.println();
        
        r1.display();
        r2.display();
        r3.display();
        
        System.out.println("\n✓ 'this' Keyword:");
        System.out.println("  - Refers to current object");
        System.out.println("  - Resolves naming conflicts (parameter vs attribute)");
        System.out.println("  - this() calls another constructor (must be first statement)");
        System.out.println("  - Makes code more readable");
    }
}
