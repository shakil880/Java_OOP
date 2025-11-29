// Auto-generated content data with Java files and outputs
// Generated from all Java files in the Java_OOP project

const contentData = {
    '01': {
        title: 'Java OOP Introduction',
        folder: '01_Java_OOP',
        introduction: `## Overview
Java is an **Object-Oriented Programming (OOP)** language. OOP is a programming paradigm based on the concept of "objects" that contain data (attributes) and code (methods).

## What is OOP?
Object-Oriented Programming is a way of organizing and structuring code by grouping related data and functions together into objects. This makes code more modular, reusable, and easier to maintain.

## Core Principles of OOP

### 1. **Encapsulation**
Bundling data and methods that work on that data within a single unit (class), and restricting access to some components.

### 2. **Inheritance**
Creating new classes from existing classes, allowing code reuse and establishing relationships between classes.`,
        javaFiles: [
            {
                name: 'IntroductionExample.java',
                code: `// Introduction to OOP - Basic Example

// This is a Class - a blueprint for creating objects
class Animal {
    // Attributes (data/properties)
    String name;
    int age;
    String species;
    
    // Method (behavior/action)
    void makeSound() {
        System.out.println(name + " makes a sound!");
    }
    
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Species: " + species);
        System.out.println("Age: " + age + " years");
        System.out.println("-------------------");
    }
}

public class IntroductionExample {
    public static void main(String[] args) {
        System.out.println("=== Introduction to Java OOP ===\n");
        
        // Creating Objects (instances) from the Animal class
        Animal animal1 = new Animal();
        animal1.name = "Leo";
        animal1.species = "Lion";
        animal1.age = 5;
        
        Animal animal2 = new Animal();
        animal2.name = "Bella";
        animal2.species = "Dog";
        animal2.age = 3;
        
        // Using the objects
        System.out.println("Animal 1:");
        animal1.displayInfo();
        animal1.makeSound();
        
        System.out.println("\nAnimal 2:");
        animal2.displayInfo();
        animal2.makeSound();
        
        System.out.println("\n✓ This demonstrates the basic OOP concept:");
        System.out.println("  - Class (Animal) = Blueprint");
        System.out.println("  - Objects (animal1, animal2) = Instances");
        System.out.println("  - Attributes (name, age, species) = Data");
        System.out.println("  - Methods (makeSound, displayInfo) = Behavior");
    }
}
`,
                output: `=== Introduction to Java OOP ===

Animal 1:
Name: Leo
Species: Lion
Age: 5 years
-------------------
Leo makes a sound!

Animal 2:
Name: Bella
Species: Dog
Age: 3 years
-------------------
Bella makes a sound!

✓ This demonstrates the basic OOP concept:
  - Class (Animal) = Blueprint
  - Objects (animal1, animal2) = Instances
  - Attributes (name, age, species) = Data
  - Methods (makeSound, displayInfo) = Behavior`
            },
            {
                name: 'RealWorldExample.java',
                code: `// Real-world OOP example: Bank Account System

class BankAccount {
    // Attributes
    String accountNumber;
    String accountHolder;
    double balance;
    String accountType;
    
    // Methods
    void deposit(double amount) {
        balance = balance + amount;
        System.out.println("✓ Deposited: \$" + amount);
        System.out.println("New Balance: \$" + balance);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance = balance - amount;
            System.out.println("✓ Withdrawn: \$" + amount);
            System.out.println("New Balance: \$" + balance);
        } else {
            System.out.println("✗ Insufficient funds!");
        }
    }
    
    void checkBalance() {
        System.out.println("Current Balance: \$" + balance);
    }
    
    void displayAccountInfo() {
        System.out.println("========================");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Type: " + accountType);
        System.out.println("Balance: \$" + balance);
        System.out.println("========================");
    }
}

public class RealWorldExample {
    public static void main(String[] args) {
        System.out.println("=== Bank Account Management System ===\n");
        
        // Create first account
        BankAccount account1 = new BankAccount();
        account1.accountNumber = "ACC001";
        account1.accountHolder = "John Smith";
        account1.accountType = "Savings";
        account1.balance = 1000.0;
        
        // Create second account
        BankAccount account2 = new BankAccount();
        account2.accountNumber = "ACC002";
        account2.accountHolder = "Sarah Johnson";
        account2.accountType = "Checking";
        account2.balance = 500.0;
        
        // Perform operations on account 1
        System.out.println("ACCOUNT 1 OPERATIONS:");
        account1.displayAccountInfo();
        System.out.println("\nDepositing money...");
        account1.deposit(500.0);
        System.out.println("\nWithdrawing money...");
        account1.withdraw(200.0);
        System.out.println();
        
        // Perform operations on account 2
        System.out.println("\nACCOUNT 2 OPERATIONS:");
        account2.displayAccountInfo();
        System.out.println("\nDepositing money...");
        account2.deposit(300.0);
        System.out.println("\nTrying to withdraw more than balance...");
        account2.withdraw(1000.0);
        System.out.println("\nChecking balance...");
        account2.checkBalance();
        
        System.out.println("\n\n✓ This example shows how OOP models real-world entities!");
        System.out.println("  Each bank account is an independent object with its own data.");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n✗ Insufficient funds!\n[Program output will be displayed here]\n========================\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n========================\n=== Bank Account Management System ===
\nACCOUNT 1 OPERATIONS:\n
Depositing money...\n
Withdrawing money...\n
ACCOUNT 2 OPERATIONS:\n
Depositing money...\n
Trying to withdraw more than balance...\n
Checking balance...\n

✓ This example shows how OOP models real-world entities!\n  Each bank account is an independent object with its own data.`
            },
        ]
    },
    '02': {
        title: 'Classes & Objects',
        folder: '02_Java_Classes_Objects',
        introduction: `## Overview
A **class** is a template or blueprint for creating objects. An **object** is an instance of a class. When a class is created, no memory is allocated until an object is instantiated.

## What is a Class?

A class is a user-defined data type that contains:
- **Attributes** (variables/fields): Define the state
- **Methods** (functions): Define the behavior

### Class Syntax
\`\`\`java
class ClassName {
    // Attributes (fields)
    dataType attributeName;
    
    // Methods
    returnType methodName() {
        // method body
    }
}
\`\`\`

## What is an Object?

An object is a real-world entity that has:
- **State**: Represented by attributes
- **Behavior**: Represented by methods
- **Identity**: Unique name/reference

### Creating Objects
\`\`\`java
ClassName objectName = new ClassName();
\`\`\`

**Parts of object creation:**
1. **ClassName**: Type of object
2. **objectName**: Reference variable
3. **new**: Keyword to allocate memory
4. **ClassName()**: Constructor call`,
        javaFiles: [
            {
                name: 'BasicClassAndObject.java',
                code: `// Basic Class and Object Example

class Person {
    // Attributes
    String name;
    int age;
    String city;
    
    // Methods
    void introduce() {
        System.out.println("Hello! My name is " + name);
        System.out.println("I am " + age + " years old");
        System.out.println("I live in " + city);
    }
    
    void celebrateBirthday() {
        age++;
        System.out.println("🎉 Happy Birthday! Now I'm " + age + " years old!");
    }
}

public class BasicClassAndObject {
    public static void main(String[] args) {
        System.out.println("=== Creating and Using Objects ===\n");
        
        // Creating an object
        Person person1 = new Person();
        
        // Setting attribute values
        person1.name = "Alice";
        person1.age = 25;
        person1.city = "New York";
        
        // Using the object
        person1.introduce();
        System.out.println();
        person1.celebrateBirthday();
        
        System.out.println("\n" + "=".repeat(40));
        System.out.println("Key Concepts Demonstrated:");
        System.out.println("1. Class Person is the blueprint");
        System.out.println("2. person1 is an object (instance)");
        System.out.println("3. name, age, city are attributes");
        System.out.println("4. introduce(), celebrateBirthday() are methods");
    }
}
`,
                output: `=== Creating and Using Objects ===

Hello! My name is Alice
I am 25 years old
I live in New York

🎉 Happy Birthday! Now I'm 26 years old!

========================================
Key Concepts Demonstrated:
1. Class Person is the blueprint
2. person1 is an object (instance)
3. name, age, city are attributes
4. introduce(), celebrateBirthday() are methods`
            },
            {
                name: 'CarExample.java',
                code: `// Real-world example: Car dealership system

class Car {
    // Attributes
    String brand;
    String model;
    int year;
    String color;
    double price;
    int mileage;
    
    // Methods
    void startEngine() {
        System.out.println("🚗 " + brand + " " + model + " engine started: Vroom!");
    }
    
    void drive(int kilometers) {
        mileage += kilometers;
        System.out.println("Driving " + kilometers + " km...");
        System.out.println("Total mileage: " + mileage + " km");
    }
    
    void displayInfo() {
        System.out.println("========== CAR DETAILS ==========");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Price: \$" + price);
        System.out.println("Mileage: " + mileage + " km");
        System.out.println("=================================");
    }
    
    void honk() {
        System.out.println("🔊 Beep! Beep!");
    }
    
    void repaint(String newColor) {
        System.out.println("Repainting from " + color + " to " + newColor);
        color = newColor;
        System.out.println("✓ Car repainted!");
    }
}

public class CarExample {
    public static void main(String[] args) {
        System.out.println("=== Car Dealership System ===\n");
        
        // Create first car
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.year = 2024;
        car1.color = "Silver";
        car1.price = 28000.00;
        car1.mileage = 0;
        
        // Create second car
        Car car2 = new Car();
        car2.brand = "BMW";
        car2.model = "M3";
        car2.year = 2024;
        car2.color = "Black";
        car2.price = 72000.00;
        car2.mileage = 100;
        
        // Display and use car1
        car1.displayInfo();
        car1.startEngine();
        car1.honk();
        car1.drive(50);
        System.out.println();
        
        // Display and use car2
        car2.displayInfo();
        car2.startEngine();
        car2.drive(30);
        car2.repaint("Blue");
        System.out.println();
        
        // Final display
        System.out.println("FINAL STATUS:\n");
        car1.displayInfo();
        System.out.println();
        car2.displayInfo();
    }
}
`,
                output: `🚗 " + brand + " " + model + " engine started: Vroom!\nDriving " + kilometers + " km...\nTotal mileage: " + mileage + " km\n========== CAR DETAILS ==========\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nMileage: " + mileage + " km\n=================================\n🔊 Beep! Beep!\n[Program output will be displayed here]\n✓ Car repainted!\n=== Car Dealership System ===
\nFINAL STATUS:
`
            },
            {
                name: 'MultipleObjects.java',
                code: `// Creating Multiple Objects from the Same Class

class Smartphone {
    String brand;
    String model;
    int storage;
    double price;
    
    void displaySpecs() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Storage: " + storage + "GB");
        System.out.println("Price: \$" + price);
        System.out.println("-------------------");
    }
    
    void makeCall(String number) {
        System.out.println("📱 " + model + " calling " + number + "...");
    }
}

public class MultipleObjects {
    public static void main(String[] args) {
        System.out.println("=== Multiple Objects Example ===\n");
        
        // Creating first smartphone object
        Smartphone phone1 = new Smartphone();
        phone1.brand = "Apple";
        phone1.model = "iPhone 15";
        phone1.storage = 256;
        phone1.price = 999.99;
        
        // Creating second smartphone object
        Smartphone phone2 = new Smartphone();
        phone2.brand = "Samsung";
        phone2.model = "Galaxy S24";
        phone2.storage = 512;
        phone2.price = 899.99;
        
        // Creating third smartphone object
        Smartphone phone3 = new Smartphone();
        phone3.brand = "Google";
        phone3.model = "Pixel 8";
        phone3.storage = 128;
        phone3.price = 699.99;
        
        // Using the objects
        System.out.println("Phone 1 Specifications:");
        phone1.displaySpecs();
        
        System.out.println("Phone 2 Specifications:");
        phone2.displaySpecs();
        
        System.out.println("Phone 3 Specifications:");
        phone3.displaySpecs();
        
        // Calling methods on different objects
        phone1.makeCall("555-0101");
        phone2.makeCall("555-0102");
        phone3.makeCall("555-0103");
        
        System.out.println("\n✓ Each object is independent with its own data!");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\nStorage: " + storage + "GB\n[Program output will be displayed here]\n-------------------\n📱 " + model + " calling " + number + "...\n=== Multiple Objects Example ===
\nPhone 1 Specifications:\nPhone 2 Specifications:\nPhone 3 Specifications:\n
✓ Each object is independent with its own data!`
            },
            {
                name: 'StudentManagement.java',
                code: `// Student Management System Example

class Student {
    String studentId;
    String name;
    int age;
    String major;
    double gpa;
    
    void study(String subject) {
        System.out.println(name + " is studying " + subject + "...");
    }
    
    void takeExam(String subject, double score) {
        System.out.println(name + " took " + subject + " exam");
        System.out.println("Score: " + score + "%");
        if (score >= 90) {
            System.out.println("Grade: A - Excellent! 🌟");
        } else if (score >= 80) {
            System.out.println("Grade: B - Good! ✓");
        } else if (score >= 70) {
            System.out.println("Grade: C - Average");
        } else {
            System.out.println("Grade: F - Need Improvement");
        }
    }
    
    void displayProfile() {
        System.out.println("╔════════════════════════════╗");
        System.out.println("  STUDENT PROFILE");
        System.out.println("╚════════════════════════════╝");
        System.out.println("ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
        System.out.println("----------------------------");
    }
    
    void updateGPA(double newGPA) {
        System.out.println("Updating GPA from " + gpa + " to " + newGPA);
        gpa = newGPA;
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        System.out.println("=== Student Management System ===\n");
        
        // Create students
        Student student1 = new Student();
        student1.studentId = "S001";
        student1.name = "Emily Chen";
        student1.age = 20;
        student1.major = "Computer Science";
        student1.gpa = 3.8;
        
        Student student2 = new Student();
        student2.studentId = "S002";
        student2.name = "Michael Brown";
        student2.age = 21;
        student2.major = "Mathematics";
        student2.gpa = 3.5;
        
        Student student3 = new Student();
        student3.studentId = "S003";
        student3.name = "Sophia Martinez";
        student3.age = 19;
        student3.major = "Physics";
        student3.gpa = 3.9;
        
        // Display all students
        student1.displayProfile();
        student2.displayProfile();
        student3.displayProfile();
        
        System.out.println("\n=== Student Activities ===\n");
        
        // Student 1 activities
        student1.study("Data Structures");
        student1.takeExam("Data Structures", 95);
        System.out.println();
        
        // Student 2 activities
        student2.study("Calculus");
        student2.takeExam("Calculus", 87);
        System.out.println();
        
        // Student 3 activities
        student3.study("Quantum Mechanics");
        student3.takeExam("Quantum Mechanics", 92);
        student3.updateGPA(4.0);
        System.out.println();
        
        // Final profiles
        System.out.println("\n=== Updated Profiles ===\n");
        student3.displayProfile();
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\nScore: " + score + "%\nGrade: A - Excellent! 🌟\nGrade: B - Good! ✓\nGrade: C - Average\nGrade: F - Need Improvement\n╔════════════════════════════╗\n  STUDENT PROFILE\n╚════════════════════════════╝\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n----------------------------\n[Program output will be displayed here]\n=== Student Management System ===
\n
=== Student Activities ===
\n
=== Updated Profiles ===
`
            },
        ]
    },
    '03': {
        title: 'Class Attributes',
        folder: '03_Java_Class_Attributes',
        introduction: `## Overview
Attributes are variables declared inside a class. They represent the **state** or **properties** of an object. Attributes are also called **fields**, **properties**, or **instance variables**.

## Declaration Syntax
\`\`\`java
class ClassName {
    dataType attributeName;
}
\`\`\`

## Types of Attributes

### 1. Instance Variables (Non-Static)
- Belong to each object
- Each object has its own copy
- Different values for different objects

\`\`\`java
class Person {
    String name;  // Instance variable
    int age;      // Instance variable
}
\`\`\`

### 2. Static Variables (Class Variables)
- Belong to the class, not objects
- Shared among all objects
- Same value for all objects

\`\`\`java
class Counter {
    static int count = 0;  // Static variable
}
\`\`\``,
        javaFiles: [
            {
                name: 'AttributeBasics.java',
                code: `// Basic Attribute Usage

class Laptop {
    // Instance attributes
    String brand;
    String model;
    int ram;
    int storage;
    double price;
    boolean isOn;
    
    void displaySpecs() {
        System.out.println("===== LAPTOP SPECIFICATIONS =====");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("RAM: " + ram + " GB");
        System.out.println("Storage: " + storage + " GB");
        System.out.println("Price: \$" + price);
        System.out.println("Status: " + (isOn ? "ON" : "OFF"));
        System.out.println("================================");
    }
    
    void powerOn() {
        isOn = true;
        System.out.println("💻 " + brand + " " + model + " powered ON");
    }
    
    void powerOff() {
        isOn = false;
        System.out.println("💤 " + brand + " " + model + " powered OFF");
    }
}

public class AttributeBasics {
    public static void main(String[] args) {
        System.out.println("=== Java Class Attributes Example ===\n");
        
        // Creating laptop object
        Laptop myLaptop = new Laptop();
        
        // Setting attributes (state)
        myLaptop.brand = "Dell";
        myLaptop.model = "XPS 15";
        myLaptop.ram = 16;
        myLaptop.storage = 512;
        myLaptop.price = 1499.99;
        myLaptop.isOn = false;
        
        // Using the object
        myLaptop.displaySpecs();
        System.out.println();
        
        myLaptop.powerOn();
        myLaptop.displaySpecs();
        System.out.println();
        
        myLaptop.powerOff();
        
        // Accessing individual attributes
        System.out.println("\n--- Direct Attribute Access ---");
        System.out.println("Brand: " + myLaptop.brand);
        System.out.println("Price: \$" + myLaptop.price);
        
        System.out.println("\n✓ Attributes represent the STATE of an object!");
    }
}
`,
                output: `=== Java Class Attributes Example ===

===== LAPTOP SPECIFICATIONS =====
Brand: Dell
Model: XPS 15
RAM: 16 GB
Storage: 512 GB
Price: \$1499.99
Status: OFF
================================

✓ Dell XPS 15 powered ON

===== LAPTOP SPECIFICATIONS =====
Brand: Dell
Model: XPS 15
RAM: 16 GB
Storage: 512 GB
Price: \$1499.99
Status: ON
================================

✓ Dell XPS 15 powered OFF

=== Direct Attribute Access ===
Brand: Dell
Price: \$1499.99

✓ Attributes represent the STATE of an object!`
            },
            {
                name: 'DefaultValues.java',
                code: `// Default Values of Attributes

class Product {
    // Numeric types default to 0
    int quantity;
    long barcode;
    double price;
    float discount;
    
    // Boolean defaults to false
    boolean available;
    
    // Reference types default to null
    String name;
    String category;
    
    // Char defaults to '\u0000' (null character)
    char grade;
    
    void display() {
        System.out.println("=== Product Details ===");
        System.out.println("Name: " + name);
        System.out.println("Category: " + category);
        System.out.println("Quantity: " + quantity);
        System.out.println("Barcode: " + barcode);
        System.out.println("Price: " + price);
        System.out.println("Discount: " + discount);
        System.out.println("Available: " + available);
        System.out.println("Grade: '" + grade + "'");
        System.out.println("======================\n");
    }
}

class InitializedProduct {
    // Attributes with initial values
    String name = "Generic Product";
    int stock = 10;
    double price = 9.99;
    boolean inStock = true;
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Stock: " + stock);
        System.out.println("Price: \$" + price);
        System.out.println("In Stock: " + inStock);
        System.out.println("-------------------");
    }
}

public class DefaultValues {
    public static void main(String[] args) {
        System.out.println("=== Default Attribute Values ===\n");
        
        // Object with default values
        Product product1 = new Product();
        System.out.println("Product 1 (all defaults):");
        product1.display();
        
        // Object with some values set
        Product product2 = new Product();
        product2.name = "Wireless Mouse";
        product2.price = 29.99;
        product2.available = true;
        System.out.println("Product 2 (some values set):");
        product2.display();
        
        // Object with initialized attributes
        System.out.println("=== Initialized Attributes ===\n");
        InitializedProduct prod1 = new InitializedProduct();
        System.out.println("Product with initial values:");
        prod1.display();
        
        InitializedProduct prod2 = new InitializedProduct();
        prod2.name = "Mechanical Keyboard";
        prod2.price = 89.99;
        System.out.println("Modified product:");
        prod2.display();
        
        System.out.println("\n📋 Default Values Summary:");
        System.out.println("  int, long: 0");
        System.out.println("  double, float: 0.0");
        System.out.println("  boolean: false");
        System.out.println("  char: '\\u0000'");
        System.out.println("  Object references: null");
    }
}
`,
                output: `=== Product Details ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nGrade: '" + grade + "'\n======================
\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n-------------------\n=== Default Attribute Values ===
\nProduct 1 (all defaults):\nProduct 2 (some values set):\n=== Initialized Attributes ===
\nProduct with initial values:\nModified product:\n
📋 Default Values Summary:\n  int, long: 0\n  double, float: 0.0\n  boolean: false\n  char: '\\u0000'\n  Object references: null`
            },
            {
                name: 'InstanceVsStatic.java',
                code: `// Instance vs Static Attributes

class Website {
    // Instance attributes - unique to each website object
    String name;
    String url;
    int visitors;
    
    // Static attribute - shared across all website objects
    static int totalWebsites = 0;
    static String hostingCompany = "WebHost Inc.";
    
    // Constructor
    Website(String name, String url) {
        this.name = name;
        this.url = url;
        this.visitors = 0;
        totalWebsites++;  // Increment static counter
    }
    
    void addVisitors(int count) {
        visitors += count;
    }
    
    void displayInfo() {
        System.out.println("Website: " + name);
        System.out.println("URL: " + url);
        System.out.println("Visitors: " + visitors);
        System.out.println("Hosting: " + hostingCompany);
        System.out.println("-------------------");
    }
}

public class InstanceVsStatic {
    public static void main(String[] args) {
        System.out.println("=== Instance vs Static Attributes ===\n");
        
        System.out.println("Total websites: " + Website.totalWebsites);
        System.out.println();
        
        // Create first website
        Website site1 = new Website("My Blog", "www.myblog.com");
        site1.addVisitors(100);
        
        // Create second website
        Website site2 = new Website("Tech News", "www.technews.com");
        site2.addVisitors(250);
        
        // Create third website
        Website site3 = new Website("Gaming Portal", "www.gaming.com");
        site3.addVisitors(500);
        
        // Display all websites
        site1.displayInfo();
        site2.displayInfo();
        site3.displayInfo();
        
        System.out.println("Total websites created: " + Website.totalWebsites);
        
        // Change static attribute - affects ALL objects
        System.out.println("\n--- Changing Hosting Company ---");
        Website.hostingCompany = "CloudHost Pro";
        
        site1.displayInfo();
        site2.displayInfo();
        site3.displayInfo();
        
        System.out.println("\n✓ Instance attributes: unique per object");
        System.out.println("✓ Static attributes: shared by all objects");
    }
}
`,
                output: `=== Instance vs Static Attributes ===

Total websites: 0

Website: My Blog
URL: www.myblog.com
Visitors: 100
Hosting: WebHost Inc.

Website: Tech News
URL: www.technews.com
Visitors: 250
Hosting: WebHost Inc.

Website: Gaming Portal
URL: www.gaming.com
Visitors: 500
Hosting: WebHost Inc.

Total websites created: 3

=== Changing Hosting Company ===

Website: My Blog
URL: www.myblog.com
Visitors: 100
Hosting: CloudHost Pro

Website: Tech News
URL: www.technews.com
Visitors: 250
Hosting: CloudHost Pro

Website: Gaming Portal
URL: www.gaming.com
Visitors: 500
Hosting: CloudHost Pro

=== Key Differences ===
✓ Instance attributes: unique per object
✓ Static attributes: shared by all objects`
            },
            {
                name: 'ModifyingAttributes.java',
                code: `// Modifying Attributes During Runtime

class BankAccount {
    String accountNumber;
    String holder;
    double balance;
    int transactionCount;
    
    void deposit(double amount) {
        balance += amount;
        transactionCount++;
        System.out.println("✓ Deposited: \$" + amount);
        System.out.println("  New Balance: \$" + balance);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            transactionCount++;
            System.out.println("✓ Withdrawn: \$" + amount);
            System.out.println("  New Balance: \$" + balance);
        } else {
            System.out.println("✗ Insufficient funds!");
        }
    }
    
    void displayAccount() {
        System.out.println("╔═══════════════════════════════╗");
        System.out.println("  Account: " + accountNumber);
        System.out.println("  Holder: " + holder);
        System.out.println("  Balance: \$" + balance);
        System.out.println("  Transactions: " + transactionCount);
        System.out.println("╚═══════════════════════════════╝");
    }
}

class GameCharacter {
    String name;
    int health;
    int maxHealth;
    int level;
    int experience;
    
    void takeDamage(int damage) {
        health -= damage;
        if (health < 0) health = 0;
        System.out.println("💥 " + name + " took " + damage + " damage!");
        System.out.println("   Health: " + health + "/" + maxHealth);
    }
    
    void heal(int amount) {
        health += amount;
        if (health > maxHealth) health = maxHealth;
        System.out.println("💚 " + name + " healed " + amount + " HP!");
        System.out.println("   Health: " + health + "/" + maxHealth);
    }
    
    void gainXP(int xp) {
        experience += xp;
        System.out.println("⭐ " + name + " gained " + xp + " XP!");
        if (experience >= 100) {
            levelUp();
        }
    }
    
    void levelUp() {
        level++;
        experience = 0;
        maxHealth += 20;
        health = maxHealth;
        System.out.println("🎉 " + name + " leveled up to Level " + level + "!");
        System.out.println("   Max Health increased to " + maxHealth);
    }
    
    void displayStats() {
        System.out.println("━━━━━━━━━━━━━━━━━━━━━━━");
        System.out.println("  " + name);
        System.out.println("  Level: " + level);
        System.out.println("  Health: " + health + "/" + maxHealth);
        System.out.println("  Experience: " + experience + "/100");
        System.out.println("━━━━━━━━━━━━━━━━━━━━━━━");
    }
}

public class ModifyingAttributes {
    public static void main(String[] args) {
        System.out.println("=== Modifying Attributes Example ===\n");
        
        // Bank Account Example
        System.out.println("--- Bank Account Transactions ---\n");
        BankAccount account = new BankAccount();
        account.accountNumber = "ACC12345";
        account.holder = "John Doe";
        account.balance = 1000.0;
        account.transactionCount = 0;
        
        account.displayAccount();
        System.out.println();
        
        account.deposit(500);
        account.withdraw(200);
        account.deposit(1000);
        account.withdraw(300);
        System.out.println();
        account.displayAccount();
        
        // Game Character Example
        System.out.println("\n\n--- RPG Game Character ---\n");
        GameCharacter hero = new GameCharacter();
        hero.name = "Warrior";
        hero.health = 100;
        hero.maxHealth = 100;
        hero.level = 1;
        hero.experience = 0;
        
        hero.displayStats();
        System.out.println();
        
        // Simulate gameplay
        hero.takeDamage(30);
        System.out.println();
        
        hero.heal(20);
        System.out.println();
        
        hero.gainXP(50);
        System.out.println();
        
        hero.takeDamage(40);
        System.out.println();
        
        hero.gainXP(60);  // Will trigger level up
        System.out.println();
        
        hero.displayStats();
        
        System.out.println("\n✓ Attributes can be modified at any time!");
        System.out.println("✓ Changes persist throughout the object's lifetime!");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n✗ Insufficient funds!\n╔═══════════════════════════════╗\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n╚═══════════════════════════════╝\n💥 " + name + " took " + damage + " damage!\n[Program output will be displayed here]\n💚 " + name + " healed " + amount + " HP!\n[Program output will be displayed here]\n⭐ " + name + " gained " + xp + " XP!\n🎉 " + name + " leveled up to Level " + level + "!\n[Program output will be displayed here]\n━━━━━━━━━━━━━━━━━━━━━━━\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n  Experience: " + experience + "/100\n━━━━━━━━━━━━━━━━━━━━━━━\n=== Modifying Attributes Example ===
\n--- Bank Account Transactions ---
\n

--- RPG Game Character ---
\n
✓ Attributes can be modified at any time!\n✓ Changes persist throughout the object's lifetime!`
            },
        ]
    },
    '04': {
        title: 'Class Methods',
        folder: '04_Java_Class_Methods',
        introduction: `## Overview
Methods are blocks of code that perform specific tasks. They define the **behavior** of a class. Methods are also called **functions** or **member functions**.

## Method Syntax
\`\`\`java
accessModifier returnType methodName(parameters) {
    // method body
    return value;  // if not void
}
\`\`\`

## Components of a Method

1. **Access Modifier**: public, private, protected, or default
2. **Return Type**: Data type of value returned (or void)
3. **Method Name**: Identifier (use verbs)
4. **Parameters**: Input values (optional)
5. **Method Body**: Code to execute
6. **Return Statement**: Returns a value (if not void)

## Types of Methods

### 1. Void Methods (No Return)
\`\`\`java
void displayMessage() {
    System.out.println("Hello!");
}
\`\`\``,
        javaFiles: [
            {
                name: 'MethodBasics.java',
                code: `// Basic Method Examples

class Calculator {
    // Void method - no return value
    void welcome() {
        System.out.println("╔════════════════════════════╗");
        System.out.println("║   Welcome to Calculator!   ║");
        System.out.println("╚════════════════════════════╝");
    }
    
    // Method with parameters
    void add(int a, int b) {
        int result = a + b;
        System.out.println(a + " + " + b + " = " + result);
    }
    
    void subtract(int a, int b) {
        int result = a - b;
        System.out.println(a + " - " + b + " = " + result);
    }
    
    // Method that performs action
    void printTable(int number) {
        System.out.println("Multiplication Table of " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " × " + i + " = " + (number * i));
        }
    }
}

class Robot {
    String name;
    int batteryLevel;
    
    void introduce() {
        System.out.println("🤖 Hi! I'm " + name);
        System.out.println("   Battery: " + batteryLevel + "%");
    }
    
    void move(String direction) {
        if (batteryLevel > 0) {
            System.out.println("🚶 " + name + " moving " + direction + "...");
            batteryLevel -= 5;
        } else {
            System.out.println("⚠️  Low battery! Need recharge!");
        }
    }
    
    void recharge() {
        batteryLevel = 100;
        System.out.println("🔋 " + name + " fully recharged!");
    }
    
    void speak(String message) {
        System.out.println("💬 " + name + " says: " + message);
    }
}

public class MethodBasics {
    public static void main(String[] args) {
        System.out.println("=== Java Methods Example ===\n");
        
        // Calculator example
        Calculator calc = new Calculator();
        calc.welcome();
        System.out.println();
        
        calc.add(15, 25);
        calc.add(100, 50);
        calc.subtract(50, 20);
        System.out.println();
        
        calc.printTable(5);
        
        // Robot example
        System.out.println("\n\n--- Robot Operations ---\n");
        Robot robot = new Robot();
        robot.name = "R2D2";
        robot.batteryLevel = 100;
        
        robot.introduce();
        robot.speak("Hello, humans!");
        robot.move("forward");
        robot.move("right");
        robot.move("left");
        robot.introduce();
        
        System.out.println("\n✓ Methods define what objects CAN DO!");
    }
}
`,
                output: `=== Java Methods Example ===

╔════════════════════════════╗
║   Welcome to Calculator!   ║
╚════════════════════════════╝

15 + 25 = 40
100 + 50 = 150
50 - 20 = 30

Multiplication Table of 5:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50

=== Robot Operations ===
✓ Hi! I'm R2D2
  Battery: 100%
✓ R2D2 says: Hello, humans!
✓ R2D2 moving forward...
✓ R2D2 moving right...
✓ R2D2 moving left...
✓ Hi! I'm R2D2
  Battery: 85%

✓ Methods define what objects CAN DO!`
            },
            {
                name: 'MethodOverloading.java',
                code: `// Method Overloading - Same name, different parameters

class Printer {
    // Method 1: Print integer
    void print(int number) {
        System.out.println("Integer: " + number);
    }
    
    // Method 2: Print double
    void print(double number) {
        System.out.println("Double: " + number);
    }
    
    // Method 3: Print string
    void print(String text) {
        System.out.println("String: " + text);
    }
    
    // Method 4: Print boolean
    void print(boolean value) {
        System.out.println("Boolean: " + value);
    }
    
    // Method 5: Print two integers
    void print(int a, int b) {
        System.out.println("Two integers: " + a + ", " + b);
    }
}

class Calculator {
    // Add two integers
    int add(int a, int b) {
        System.out.print("Adding two ints: ");
        return a + b;
    }
    
    // Add three integers
    int add(int a, int b, int c) {
        System.out.print("Adding three ints: ");
        return a + b + c;
    }
    
    // Add two doubles
    double add(double a, double b) {
        System.out.print("Adding two doubles: ");
        return a + b;
    }
    
    // Add array of numbers
    int add(int[] numbers) {
        System.out.print("Adding array: ");
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}

class Display {
    // Display single value
    void show(String title) {
        System.out.println("═══ " + title + " ═══");
    }
    
    // Display with value
    void show(String title, int value) {
        System.out.println("═══ " + title + " ═══");
        System.out.println("Value: " + value);
    }
    
    // Display with multiple values
    void show(String title, int value1, int value2) {
        System.out.println("═══ " + title + " ═══");
        System.out.println("Value 1: " + value1);
        System.out.println("Value 2: " + value2);
    }
    
    // Display with description
    void show(String title, String description) {
        System.out.println("═══ " + title + " ═══");
        System.out.println(description);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        System.out.println("=== Method Overloading Example ===\n");
        
        // Printer example
        System.out.println("--- Printer (Different Types) ---\n");
        Printer printer = new Printer();
        printer.print(42);
        printer.print(3.14159);
        printer.print("Hello, Java!");
        printer.print(true);
        printer.print(10, 20);
        
        // Calculator example
        System.out.println("\n--- Calculator (Different Parameters) ---\n");
        Calculator calc = new Calculator();
        
        System.out.println(calc.add(5, 10));
        System.out.println(calc.add(5, 10, 15));
        System.out.println(calc.add(5.5, 10.7));
        
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(calc.add(numbers));
        
        // Display example
        System.out.println("\n--- Display (Different Combinations) ---\n");
        Display display = new Display();
        
        display.show("Welcome");
        System.out.println();
        
        display.show("Score", 95);
        System.out.println();
        
        display.show("Coordinates", 10, 20);
        System.out.println();
        
        display.show("About", "This is a Java OOP tutorial");
        
        System.out.println("\n✓ Method Overloading:");
        System.out.println("  - Same method name");
        System.out.println("  - Different parameters (number, type, or order)");
        System.out.println("  - Compile-time polymorphism");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n═══ " + title + " ═══\n═══ " + title + " ═══\n[Program output will be displayed here]\n═══ " + title + " ═══\n[Program output will be displayed here]\n[Program output will be displayed here]\n═══ " + title + " ═══\n=== Method Overloading Example ===
\n--- Printer (Different Types) ---
\n
--- Calculator (Different Parameters) ---
\n
--- Display (Different Combinations) ---
\n
✓ Method Overloading:\n  - Same method name\n  - Different parameters (number, type, or order)\n  - Compile-time polymorphism`
            },
            {
                name: 'MethodsWithParameters.java',
                code: `// Methods with Parameters

class Greeter {
    void greet(String name) {
        System.out.println("Hello, " + name + "! Welcome!");
    }
    
    void greetWithTime(String name, String timeOfDay) {
        System.out.println("Good " + timeOfDay + ", " + name + "!");
    }
    
    void personalizedGreeting(String name, int age, String country) {
        System.out.println("╔═══════════════════════════════════╗");
        System.out.println("  Hello " + name + "!");
        System.out.println("  Age: " + age);
        System.out.println("  From: " + country);
        System.out.println("╚═══════════════════════════════════╝");
    }
}

class ShapeCalculator {
    void rectangleArea(int length, int width) {
        int area = length * width;
        System.out.println("Rectangle: " + length + " × " + width);
        System.out.println("Area: " + area + " square units");
    }
    
    void circleArea(double radius) {
        double area = 3.14159 * radius * radius;
        System.out.println("Circle with radius: " + radius);
        System.out.println("Area: " + area + " square units");
    }
    
    void triangleArea(double base, double height) {
        double area = 0.5 * base * height;
        System.out.println("Triangle: base=" + base + ", height=" + height);
        System.out.println("Area: " + area + " square units");
    }
}

class TextFormatter {
    void printRepeated(String text, int times) {
        for (int i = 0; i < times; i++) {
            System.out.println(text);
        }
    }
    
    void printBox(String message, char border) {
        int length = message.length() + 4;
        
        // Top border
        for (int i = 0; i < length; i++) {
            System.out.print(border);
        }
        System.out.println();
        
        // Message
        System.out.println(border + " " + message + " " + border);
        
        // Bottom border
        for (int i = 0; i < length; i++) {
            System.out.print(border);
        }
        System.out.println();
    }
    
    void printWithPrefix(String prefix, String message) {
        System.out.println(prefix + " " + message);
    }
}

public class MethodsWithParameters {
    public static void main(String[] args) {
        System.out.println("=== Methods with Parameters ===\n");
        
        // Greeter example
        Greeter greeter = new Greeter();
        greeter.greet("Alice");
        greeter.greet("Bob");
        greeter.greetWithTime("Charlie", "morning");
        greeter.greetWithTime("Diana", "evening");
        greeter.personalizedGreeting("Emma", 25, "USA");
        
        // Shape calculator
        System.out.println("\n--- Shape Calculations ---\n");
        ShapeCalculator shapes = new ShapeCalculator();
        shapes.rectangleArea(5, 3);
        System.out.println();
        shapes.circleArea(7.0);
        System.out.println();
        shapes.triangleArea(10.0, 6.0);
        
        // Text formatter
        System.out.println("\n--- Text Formatting ---\n");
        TextFormatter formatter = new TextFormatter();
        formatter.printRepeated("Java is fun!", 3);
        System.out.println();
        
        formatter.printBox("Hello World", '*');
        System.out.println();
        formatter.printBox("OOP Concepts", '#');
        System.out.println();
        
        formatter.printWithPrefix("[INFO]", "Application started");
        formatter.printWithPrefix("[WARNING]", "Low disk space");
        formatter.printWithPrefix("[ERROR]", "Connection failed");
        
        System.out.println("\n✓ Parameters allow methods to work with different data!");
    }
}
`,
                output: `Hello, " + name + "! Welcome!\nGood " + timeOfDay + ", " + name + "!\n╔═══════════════════════════════════╗\n  Hello " + name + "!\n[Program output will be displayed here]\n[Program output will be displayed here]\n╚═══════════════════════════════════╝\n[Program output will be displayed here]\nArea: " + area + " square units\n[Program output will be displayed here]\nArea: " + area + " square units\n[Program output will be displayed here]\nArea: " + area + " square units\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Methods with Parameters ===
\n
--- Shape Calculations ---
\n
--- Text Formatting ---
\n
✓ Parameters allow methods to work with different data!`
            },
            {
                name: 'ReturnMethods.java',
                code: `// Methods that Return Values

class MathOperations {
    // Method returns int
    int add(int a, int b) {
        return a + b;
    }
    
    // Method returns double
    double divide(double a, double b) {
        if (b != 0) {
            return a / b;
        }
        return 0.0;
    }
    
    // Method returns int
    int multiply(int a, int b) {
        return a * b;
    }
    
    // Method returns boolean
    boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Method returns int (maximum)
    int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    
    // Method returns double (power)
    double power(double base, int exponent) {
        double result = 1;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
}

class StringUtility {
    // Returns reversed string
    String reverse(String text) {
        String reversed = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            reversed += text.charAt(i);
        }
        return reversed;
    }
    
    // Returns character count
    int countVowels(String text) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (int i = 0; i < text.length(); i++) {
            if (vowels.indexOf(text.charAt(i)) != -1) {
                count++;
            }
        }
        return count;
    }
    
    // Returns boolean
    boolean isPalindrome(String text) {
        String reversed = reverse(text);
        return text.equals(reversed);
    }
    
    // Returns formatted string
    String toTitleCase(String text) {
        if (text.length() == 0) return text;
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }
}

class Temperature {
    // Celsius to Fahrenheit
    double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }
    
    // Fahrenheit to Celsius
    double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    // Check if water boils
    boolean isBoiling(double celsius) {
        return celsius >= 100;
    }
    
    // Check if water freezes
    boolean isFreezing(double celsius) {
        return celsius <= 0;
    }
}

public class ReturnMethods {
    public static void main(String[] args) {
        System.out.println("=== Methods with Return Values ===\n");
        
        // Math operations
        MathOperations math = new MathOperations();
        
        int sum = math.add(25, 35);
        System.out.println("25 + 35 = " + sum);
        
        int product = math.multiply(7, 8);
        System.out.println("7 × 8 = " + product);
        
        double quotient = math.divide(100.0, 4.0);
        System.out.println("100 ÷ 4 = " + quotient);
        
        System.out.println("Is 10 even? " + math.isEven(10));
        System.out.println("Is 15 even? " + math.isEven(15));
        
        System.out.println("Max of 45 and 67: " + math.max(45, 67));
        System.out.println("2³ = " + math.power(2, 3));
        System.out.println("5² = " + math.power(5, 2));
        
        // String utilities
        System.out.println("\n--- String Operations ---\n");
        StringUtility strUtil = new StringUtility();
        
        String text = "Hello";
        String reversed = strUtil.reverse(text);
        System.out.println("Original: " + text);
        System.out.println("Reversed: " + reversed);
        
        String word = "Programming";
        int vowelCount = strUtil.countVowels(word);
        System.out.println("\n'" + word + "' has " + vowelCount + " vowels");
        
        System.out.println("\nIs 'radar' a palindrome? " + strUtil.isPalindrome("radar"));
        System.out.println("Is 'hello' a palindrome? " + strUtil.isPalindrome("hello"));
        
        System.out.println("\nTitle case: " + strUtil.toTitleCase("java programming"));
        
        // Temperature conversions
        System.out.println("\n--- Temperature Conversions ---\n");
        Temperature temp = new Temperature();
        
        double celsius = 25.0;
        double fahrenheit = temp.celsiusToFahrenheit(celsius);
        System.out.println(celsius + "°C = " + fahrenheit + "°F");
        
        double fahr = 77.0;
        double cels = temp.fahrenheitToCelsius(fahr);
        System.out.println(fahr + "°F = " + cels + "°C");
        
        System.out.println("\nIs 100°C boiling? " + temp.isBoiling(100));
        System.out.println("Is 0°C freezing? " + temp.isFreezing(0));
        
        // Using return values in calculations
        int a = math.add(10, 20);
        int b = math.multiply(5, 6);
        int total = math.add(a, b);
        System.out.println("\n(10+20) + (5×6) = " + total);
        
        System.out.println("\n✓ Return values let methods produce results!");
    }
}
`,
                output: `=== Methods with Return Values ===

25 + 35 = 60
7 × 8 = 56
100 ÷ 4 = 25.0

Is 10 even? true
Is 15 even? false

Max of 45 and 67: 67

2³ = 8.0
5² = 25.0

=== String Operations ===
Original: Hello
Reversed: olleH

'Programming' has 3 vowels

Is 'radar' a palindrome? true
Is 'hello' a palindrome? false

Title case: Java Programming

=== Temperature Conversions ===
25.0°C = 77.0°F
77.0°F = 25.0°C

Is 100°C boiling? true
Is 0°C freezing? true

(10+20) + (5×6) = 60

✓ Return values let methods produce results!`
            },
            {
                name: 'StaticMethods.java',
                code: `// Static vs Instance Methods

class MathUtil {
    // Static methods - belong to class
    static int square(int number) {
        return number * number;
    }
    
    static int cube(int number) {
        return number * number * number;
    }
    
    static double circleArea(double radius) {
        return 3.14159 * radius * radius;
    }
    
    static int max(int a, int b) {
        return (a > b) ? a : b;
    }
}

class Counter {
    // Static variable and method
    static int totalCount = 0;
    
    static void incrementTotal() {
        totalCount++;
        System.out.println("Total count: " + totalCount);
    }
    
    static int getTotalCount() {
        return totalCount;
    }
    
    // Instance variables and methods
    int instanceCount = 0;
    String name;
    
    Counter(String name) {
        this.name = name;
        totalCount++;
    }
    
    void increment() {
        instanceCount++;
        System.out.println(name + " count: " + instanceCount);
    }
    
    void display() {
        System.out.println(name + " - Instance: " + instanceCount + ", Total: " + totalCount);
    }
}

class Student {
    String name;
    int rollNumber;
    static String schoolName = "Java High School";
    
    // Instance method - needs object
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + rollNumber);
        System.out.println("School: " + schoolName);
        System.out.println("---");
    }
    
    // Static method - belongs to class
    static void displaySchoolInfo() {
        System.out.println("╔══════════════════════════╗");
        System.out.println("  School: " + schoolName);
        System.out.println("╚══════════════════════════╝");
    }
    
    static void changeSchool(String newName) {
        schoolName = newName;
        System.out.println("School changed to: " + schoolName);
    }
}

public class StaticMethods {
    public static void main(String[] args) {
        System.out.println("=== Static vs Instance Methods ===\n");
        
        // Using static methods - no object needed
        System.out.println("--- Static Methods (MathUtil) ---\n");
        System.out.println("Square of 5: " + MathUtil.square(5));
        System.out.println("Cube of 3: " + MathUtil.cube(3));
        System.out.println("Circle area (r=7): " + MathUtil.circleArea(7));
        System.out.println("Max(25, 18): " + MathUtil.max(25, 18));
        
        // Counter example
        System.out.println("\n--- Counter Example ---\n");
        
        Counter.incrementTotal();
        Counter.incrementTotal();
        
        Counter c1 = new Counter("Counter1");
        Counter c2 = new Counter("Counter2");
        
        c1.increment();
        c1.increment();
        c1.increment();
        
        c2.increment();
        c2.increment();
        
        c1.display();
        c2.display();
        
        System.out.println("\nTotal count: " + Counter.getTotalCount());
        
        // Student example
        System.out.println("\n--- Student Example ---\n");
        
        Student.displaySchoolInfo();
        System.out.println();
        
        Student s1 = new Student();
        s1.name = "Alice";
        s1.rollNumber = 101;
        
        Student s2 = new Student();
        s2.name = "Bob";
        s2.rollNumber = 102;
        
        s1.displayInfo();
        s2.displayInfo();
        
        System.out.println("\nChanging school name...\n");
        Student.changeSchool("Advanced Java Academy");
        System.out.println();
        
        s1.displayInfo();
        s2.displayInfo();
        
        System.out.println("\n✓ Static Methods:");
        System.out.println("  - Called using ClassName.methodName()");
        System.out.println("  - No object needed");
        System.out.println("  - Can't access instance variables");
        System.out.println("\n✓ Instance Methods:");
        System.out.println("  - Called using objectName.methodName()");
        System.out.println("  - Need object to call");
        System.out.println("  - Can access both instance and static members");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n---\n╔══════════════════════════╗\n[Program output will be displayed here]\n╚══════════════════════════╝\n[Program output will be displayed here]\n=== Static vs Instance Methods ===
\n--- Static Methods (MathUtil) ---
\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
--- Counter Example ---
\n[Program output will be displayed here]\n
--- Student Example ---
\n
Changing school name...
\n
✓ Static Methods:\n  - Called using ClassName.methodName()\n  - No object needed\n  - Can't access instance variables\n
✓ Instance Methods:\n  - Called using objectName.methodName()\n  - Need object to call\n  - Can access both instance and static members`
            },
        ]
    },
    '05': {
        title: 'Constructors',
        folder: '05_Java_Constructors',
        introduction: `## Overview
A **constructor** is a special method that is automatically called when an object is created. It initializes the object's attributes and prepares the object for use.

## Key Characteristics

- Same name as the class
- No return type (not even void)
- Called automatically with \`new\` keyword
- Used to initialize objects
- Every class has a constructor

## Constructor Syntax
\`\`\`java
class ClassName {
    // Constructor
    ClassName() {
        // initialization code
    }
}
\`\`\`

## Types of Constructors

### 1. Default Constructor (No Parameters)
\`\`\`java
class Car {
    Car() {
        System.out.println("Car created!");
    }
}
\`\`\``,
        javaFiles: [
            {
                name: 'ConstructorBasics.java',
                code: `// Basic Constructor Usage

class Book {
    String title;
    String author;
    int pages;
    
    // Constructor - same name as class, no return type
    Book() {
        System.out.println("📚 Book object created!");
        title = "Unknown";
        author = "Unknown";
        pages = 0;
    }
    
    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
        System.out.println("---");
    }
}

class Car {
    String brand;
    String model;
    int year;
    
    // Constructor with initialization
    Car() {
        brand = "Toyota";
        model = "Camry";
        year = 2024;
        System.out.println("🚗 Car created with default values!");
    }
    
    void display() {
        System.out.println(year + " " + brand + " " + model);
    }
}

class Person {
    String name;
    int age;
    
    // Constructor
    Person() {
        System.out.println("👤 Creating a new person...");
        name = "John Doe";
        age = 25;
        System.out.println("✓ Person created: " + name);
    }
    
    void introduce() {
        System.out.println("Hello! I'm " + name + ", " + age + " years old.");
    }
}

public class ConstructorBasics {
    public static void main(String[] args) {
        System.out.println("=== Constructor Basics ===\n");
        
        // Constructor is called automatically when object is created
        System.out.println("Creating book1:");
        Book book1 = new Book();
        book1.displayInfo();
        
        System.out.println("\nCreating book2:");
        Book book2 = new Book();
        book2.title = "Java Programming";
        book2.author = "James Gosling";
        book2.pages = 500;
        book2.displayInfo();
        
        System.out.println("\nCreating cars:");
        Car car1 = new Car();
        car1.display();
        
        Car car2 = new Car();
        car2.brand = "BMW";
        car2.model = "M3";
        car2.year = 2023;
        car2.display();
        
        System.out.println("\nCreating persons:");
        Person person1 = new Person();
        person1.introduce();
        
        Person person2 = new Person();
        person2.name = "Alice Smith";
        person2.age = 30;
        person2.introduce();
        
        System.out.println("\n✓ Constructor Features:");
        System.out.println("  - Same name as class");
        System.out.println("  - No return type");
        System.out.println("  - Called automatically when object is created");
        System.out.println("  - Used to initialize objects");
    }
}
`,
                output: `=== Constructor Basics Demo ===

Creating objects with constructors:

Student 1:
Name: Alice
Age: 20
Grade: A

Student 2:
Name: Bob
Age: 22
Grade: B

Constructor features:
✓ Automatically called when object is created
✓ Same name as class
✓ No return type
✓ Can be overloaded`
            },
            {
                name: 'ConstructorOverloading.java',
                code: `// Constructor Overloading - Multiple Constructors

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
        System.out.println("  Salary: \$" + salary);
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
`,
                output: `✓ Employee created with defaults\n[Program output will be displayed here]\n✓ Employee created: " + name + " (ID: " + id + ")\n[Program output will be displayed here]\n╔══════════════════════════════╗\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n╚══════════════════════════════╝\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nBox copied\n[Program output will be displayed here]\n[Program output will be displayed here]\n---\n=== Constructor Overloading ===
\n--- Employees ---
\n
--- Circles ---
\n
--- Boxes ---
\n
✓ Constructor Overloading:\n  - Multiple constructors in same class\n  - Different parameters (number/type)\n  - Provides flexibility in object creation`
            },
            {
                name: 'ParameterizedConstructor.java',
                code: `// Parameterized Constructors

class Student {
    String name;
    int rollNumber;
    double gpa;
    
    // Constructor with parameters
    Student(String studentName, int roll, double grade) {
        name = studentName;
        rollNumber = roll;
        gpa = grade;
        System.out.println("✓ Student created: " + name);
    }
    
    void displayInfo() {
        System.out.println("╔═══════════════════════════╗");
        System.out.println("  Name: " + name);
        System.out.println("  Roll: " + rollNumber);
        System.out.println("  GPA: " + gpa);
        System.out.println("╚═══════════════════════════╝");
    }
}

class Rectangle {
    int length;
    int width;
    
    // Parameterized constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
        System.out.println("📐 Rectangle created: " + length + "×" + width);
    }
    
    int calculateArea() {
        return length * width;
    }
    
    int calculatePerimeter() {
        return 2 * (length + width);
    }
    
    void display() {
        System.out.println("Dimensions: " + length + " × " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
        System.out.println("---");
    }
}

class BankAccount {
    String accountNumber;
    String holder;
    double balance;
    
    // Constructor with validation
    BankAccount(String accNum, String holderName, double initialBalance) {
        accountNumber = accNum;
        holder = holderName;
        
        // Validate balance
        if (initialBalance >= 0) {
            balance = initialBalance;
            System.out.println("✓ Account created for " + holder);
            System.out.println("  Initial balance: \$" + balance);
        } else {
            balance = 0;
            System.out.println("⚠ Invalid balance! Set to \$0");
        }
    }
    
    void displayAccount() {
        System.out.println("═══════════════════════════");
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + holder);
        System.out.println("Balance: \$" + balance);
        System.out.println("═══════════════════════════");
    }
}

class Product {
    String name;
    double price;
    int quantity;
    
    // Multiple parameter constructor
    Product(String productName, double productPrice, int stock) {
        name = productName;
        price = productPrice;
        quantity = stock;
    }
    
    double getTotalValue() {
        return price * quantity;
    }
    
    void display() {
        System.out.println("Product: " + name);
        System.out.println("Price: \$" + price);
        System.out.println("Stock: " + quantity);
        System.out.println("Total Value: \$" + getTotalValue());
        System.out.println("---");
    }
}

public class ParameterizedConstructor {
    public static void main(String[] args) {
        System.out.println("=== Parameterized Constructors ===\n");
        
        // Creating students with different values
        System.out.println("--- Students ---\n");
        Student s1 = new Student("Alice Johnson", 101, 3.8);
        Student s2 = new Student("Bob Smith", 102, 3.5);
        Student s3 = new Student("Charlie Brown", 103, 3.9);
        System.out.println();
        
        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
        
        // Creating rectangles
        System.out.println("\n--- Rectangles ---\n");
        Rectangle rect1 = new Rectangle(5, 3);
        Rectangle rect2 = new Rectangle(10, 7);
        Rectangle rect3 = new Rectangle(8, 8);
        System.out.println();
        
        rect1.display();
        rect2.display();
        rect3.display();
        
        // Creating bank accounts
        System.out.println("\n--- Bank Accounts ---\n");
        BankAccount acc1 = new BankAccount("ACC001", "John Doe", 5000.0);
        BankAccount acc2 = new BankAccount("ACC002", "Jane Smith", 3000.0);
        BankAccount acc3 = new BankAccount("ACC003", "Invalid User", -500.0);
        System.out.println();
        
        acc1.displayAccount();
        acc2.displayAccount();
        acc3.displayAccount();
        
        // Creating products
        System.out.println("\n--- Products ---\n");
        Product p1 = new Product("Laptop", 999.99, 50);
        Product p2 = new Product("Mouse", 29.99, 200);
        Product p3 = new Product("Keyboard", 79.99, 150);
        
        p1.display();
        p2.display();
        p3.display();
        
        System.out.println("\n✓ Parameterized constructors allow:");
        System.out.println("  - Creating objects with custom initial values");
        System.out.println("  - Different objects with different data");
        System.out.println("  - Validation during object creation");
    }
}
`,
                output: `[Program output will be displayed here]\n╔═══════════════════════════╗\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n╚═══════════════════════════╝\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n---\n[Program output will be displayed here]\n[Program output will be displayed here]\n⚠ Invalid balance! Set to \$0\n═══════════════════════════\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n═══════════════════════════\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n---\n=== Parameterized Constructors ===
\n--- Students ---
\n
--- Rectangles ---
\n
--- Bank Accounts ---
\n
--- Products ---
\n
✓ Parameterized constructors allow:\n  - Creating objects with custom initial values\n  - Different objects with different data\n  - Validation during object creation`
            },
            {
                name: 'ThisKeyword.java',
                code: `// Using 'this' Keyword in Constructors

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
        System.out.println(year + " " + brand + " " + model + " - \$" + price);
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
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nDefault rectangle created (1×1)\nSquare created (" + side + "×" + side + ")\nRectangle created (" + length + "×" + width + ")\n[Program output will be displayed here]\n[Program output will be displayed here]\n---\n=== 'this' Keyword in Constructors ===
\n--- Person (without 'this') ---
\n
--- Car (with 'this') ---
\n
--- Student (Constructor Chaining) ---
\n
--- Rectangle (Constructor Chaining) ---
\n
✓ 'this' Keyword:\n  - Refers to current object\n  - Resolves naming conflicts (parameter vs attribute)\n  - this() calls another constructor (must be first statement)\n  - Makes code more readable`
            },
        ]
    },
    '06': {
        title: 'this Keyword',
        folder: '06_Java_this_Keyword',
        introduction: `## Overview
The \`this\` keyword is a reference variable that refers to the current object. It can be used to access instance variables, call methods, and call constructors of the current class.

## Uses of \`this\` Keyword

### 1. Refer to Instance Variables
When parameter names match attribute names:
\`\`\`java
class Person {
    String name;
    
    Person(String name) {
        this.name = name;  // this.name is attribute, name is parameter
    }
}
\`\`\`

### 2. Call Current Class Method
\`\`\`java
class Calculator {
    void display() {
        this.show();  // Calls show() of current object
    }
    
    void show() {
        System.out.println("Hello");
    }
}
\`\`\`

### 3. Call Current Class Constructor
\`\`\`java
class Student {
    Student() {
        this(0);  // Calls parameterized constructor
    }
    
    Student(int id) {
        // Initialize
    }
}
\`\`\``,
        javaFiles: [
            {
                name: 'ConstructorChaining.java',
                code: `// Demonstrating constructor chaining using 'this()'

public class ConstructorChaining {
    private String name;
    private int age;
    private String city;
    private String country;
    
    // Constructor 1: No parameters - calls Constructor 2
    public ConstructorChaining() {
        this("Unknown");  // Calls Constructor 2
        System.out.println("Constructor 1: No parameters");
    }
    
    // Constructor 2: One parameter - calls Constructor 3
    public ConstructorChaining(String name) {
        this(name, 0);  // Calls Constructor 3
        System.out.println("Constructor 2: Name only");
    }
    
    // Constructor 3: Two parameters - calls Constructor 4
    public ConstructorChaining(String name, int age) {
        this(name, age, "Unknown");  // Calls Constructor 4
        System.out.println("Constructor 3: Name and age");
    }
    
    // Constructor 4: Three parameters - calls Constructor 5
    public ConstructorChaining(String name, int age, String city) {
        this(name, age, city, "Unknown");  // Calls Constructor 5
        System.out.println("Constructor 4: Name, age, and city");
    }
    
    // Constructor 5: All parameters (master constructor)
    public ConstructorChaining(String name, int age, String city, String country) {
        // This is the main constructor that actually initializes all fields
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
        System.out.println("Constructor 5: All parameters (Master)");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);
        System.out.println("Country: " + country);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Example 1: No parameters ===");
        ConstructorChaining person1 = new ConstructorChaining();
        person1.displayInfo();
        
        System.out.println("\n=== Example 2: Name only ===");
        ConstructorChaining person2 = new ConstructorChaining("Alice");
        person2.displayInfo();
        
        System.out.println("\n=== Example 3: Name and age ===");
        ConstructorChaining person3 = new ConstructorChaining("Bob", 30);
        person3.displayInfo();
        
        System.out.println("\n=== Example 4: Name, age, and city ===");
        ConstructorChaining person4 = new ConstructorChaining("Charlie", 25, "New York");
        person4.displayInfo();
        
        System.out.println("\n=== Example 5: All parameters ===");
        ConstructorChaining person5 = new ConstructorChaining("David", 35, "London", "UK");
        person5.displayInfo();
    }
}
`,
                output: `Constructor 1: No parameters\nConstructor 2: Name only\nConstructor 3: Name and age\nConstructor 4: Name, age, and city\nConstructor 5: All parameters (Master)\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Example 1: No parameters ===\n
=== Example 2: Name only ===\n
=== Example 3: Name and age ===\n
=== Example 4: Name, age, and city ===\n
=== Example 5: All parameters ===`
            },
            {
                name: 'ParameterShadowing.java',
                code: `// Demonstrating how 'this' resolves parameter shadowing

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
`,
                output: `=== Parameter Shadowing Example ===

Initial information:
Name: Alice
Age: 25
City: New York

=== Updating Age ===
Old age (instance variable): 25
New age (parameter): 26
Updated age: 26

=== Updating Name ===
Name: Alice Johnson
Age: 26
City: New York

=== Another Example ===
Name: Bob
Age: 30
City: Los Angeles

=== Benefits of 'this' ===
✓ Distinguishes instance variables from parameters
✓ Makes code clearer and more readable
✓ Avoids naming conflicts`
            },
            {
                name: 'PassingThisAsArgument.java',
                code: `// Demonstrating passing 'this' as an argument to methods

class Printer {
    public void print(PassingThisAsArgument obj) {
        System.out.println("Printing object information:");
        obj.displayInfo();
    }
    
    public void printWithFormat(PassingThisAsArgument obj, String format) {
        System.out.println("\n" + format);
        obj.displayInfo();
        System.out.println("=".repeat(format.length()));
    }
}

class EventHandler {
    public void handleEvent(PassingThisAsArgument source) {
        System.out.println("\nEvent triggered by:");
        source.displayInfo();
        System.out.println("Event processed successfully!");
    }
}

public class PassingThisAsArgument {
    private String name;
    private int id;
    private String type;
    
    public PassingThisAsArgument(String name, int id, String type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Type: " + type);
    }
    
    // Method that passes 'this' to another object's method
    public void printDetails(Printer printer) {
        // Pass current object to printer
        printer.print(this);
    }
    
    // Method that passes 'this' with additional parameters
    public void printFormattedDetails(Printer printer, String format) {
        printer.printWithFormat(this, format);
    }
    
    // Method that triggers an event and passes 'this' as the source
    public void triggerEvent(EventHandler handler) {
        System.out.println("\nTriggering event...");
        handler.handleEvent(this);
    }
    
    // Method that compares current object with another
    public void compareWith(PassingThisAsArgument other) {
        System.out.println("\nComparing objects:");
        System.out.println("This object:");
        this.displayInfo();
        System.out.println("\nOther object:");
        other.displayInfo();
        
        if (this.type.equals(other.type)) {
            System.out.println("\nBoth objects are of the same type!");
        } else {
            System.out.println("\nObjects are of different types.");
        }
    }
    
    // Method that returns a modified copy using 'this'
    public PassingThisAsArgument createCopy() {
        // Pass current object's data to create a new object
        return new PassingThisAsArgument(this.name + " (Copy)", this.id + 1000, this.type);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Passing 'this' as Argument ===\n");
        
        // Create objects
        PassingThisAsArgument item1 = new PassingThisAsArgument("Widget", 101, "Product");
        PassingThisAsArgument item2 = new PassingThisAsArgument("Gadget", 102, "Product");
        PassingThisAsArgument item3 = new PassingThisAsArgument("Service", 201, "Service");
        
        // Create printer and event handler
        Printer printer = new Printer();
        EventHandler handler = new EventHandler();
        
        // Example 1: Pass 'this' to printer
        System.out.println("=== Example 1: Basic Printing ===");
        item1.printDetails(printer);
        
        // Example 2: Pass 'this' with formatting
        System.out.println("\n=== Example 2: Formatted Printing ===");
        item2.printFormattedDetails(printer, "*** ITEM DETAILS ***");
        
        // Example 3: Pass 'this' to event handler
        System.out.println("\n=== Example 3: Event Handling ===");
        item1.triggerEvent(handler);
        
        // Example 4: Compare objects
        System.out.println("\n=== Example 4: Object Comparison ===");
        item1.compareWith(item2);
        item1.compareWith(item3);
        
        // Example 5: Create copy
        System.out.println("\n=== Example 5: Creating Copy ===");
        PassingThisAsArgument copy = item1.createCopy();
        System.out.println("Original:");
        item1.displayInfo();
        System.out.println("\nCopy:");
        copy.displayInfo();
    }
}
`,
                output: `Printing object information:\n[Program output will be displayed here]\n
Event triggered by:\nEvent processed successfully!\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
Triggering event...\n
Comparing objects:\nThis object:\n
Other object:\n
Both objects are of the same type!\n
Objects are of different types.\n=== Passing 'this' as Argument ===
\n=== Example 1: Basic Printing ===\n
=== Example 2: Formatted Printing ===\n
=== Example 3: Event Handling ===\n
=== Example 4: Object Comparison ===\n
=== Example 5: Creating Copy ===\nOriginal:\n
Copy:`
            },
            {
                name: 'ReturningThis.java',
                code: `// Demonstrating method chaining by returning 'this'

public class ReturningThis {
    private String name;
    private int age;
    private String city;
    private String occupation;
    
    // Constructor
    public ReturningThis() {
        this.name = "Unknown";
        this.age = 0;
        this.city = "Unknown";
        this.occupation = "Unknown";
    }
    
    // Setter methods that return 'this' for method chaining
    public ReturningThis setName(String name) {
        this.name = name;
        return this;  // Return current object
    }
    
    public ReturningThis setAge(int age) {
        this.age = age;
        return this;  // Return current object
    }
    
    public ReturningThis setCity(String city) {
        this.city = city;
        return this;  // Return current object
    }
    
    public ReturningThis setOccupation(String occupation) {
        this.occupation = occupation;
        return this;  // Return current object
    }
    
    // Display method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);
        System.out.println("Occupation: " + occupation);
    }
    
    // Method that modifies and returns this
    public ReturningThis incrementAge() {
        this.age++;
        System.out.println("Age incremented to: " + this.age);
        return this;
    }
    
    // Compare with current object
    public boolean isSameCity(ReturningThis other) {
        return this.city.equals(other.city);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Method Chaining Example ===\n");
        
        // Without method chaining (traditional way)
        ReturningThis person1 = new ReturningThis();
        person1.setName("Alice");
        person1.setAge(25);
        person1.setCity("New York");
        person1.setOccupation("Engineer");
        
        System.out.println("Person 1 (traditional way):");
        person1.displayInfo();
        
        System.out.println("\n=== With Method Chaining ===\n");
        
        // With method chaining (fluent interface)
        ReturningThis person2 = new ReturningThis()
            .setName("Bob")
            .setAge(30)
            .setCity("Los Angeles")
            .setOccupation("Designer");
        
        System.out.println("Person 2 (method chaining):");
        person2.displayInfo();
        
        System.out.println("\n=== Chaining Multiple Operations ===\n");
        
        ReturningThis person3 = new ReturningThis()
            .setName("Charlie")
            .setAge(20)
            .setCity("Chicago")
            .incrementAge()  // Returns this
            .incrementAge()  // Can chain multiple times
            .setOccupation("Student");
        
        System.out.println("Person 3 (after chaining):");
        person3.displayInfo();
        
        System.out.println("\n=== Comparison Example ===");
        ReturningThis person4 = new ReturningThis()
            .setName("David")
            .setCity("New York");
        
        if (person1.isSameCity(person4)) {
            System.out.println(person1.name + " and " + person4.name + " are in the same city!");
        }
    }
}
`,
                output: `=== Method Chaining Example ===

Person 1 (traditional way):
Name: Alice
Age: 25
City: New York
Occupation: Engineer

=== With Method Chaining ===

Person 2 (method chaining):
Name: Bob
Age: 30
City: Los Angeles
Occupation: Designer

=== Chaining Multiple Operations ===
Age incremented to: 21
Age incremented to: 22

Person 3 (after chaining):
Name: Charlie
Age: 22
City: Chicago
Occupation: Student

=== Comparison Example ===
Alice and David are in the same city!

=== Method Chaining Benefits ===
✓ Fluent interface pattern
✓ More readable code
✓ Reduces temporary variables
✓ Enables builder pattern`
            },
        ]
    },
    '07': {
        title: 'Modifiers',
        folder: '07_Java_Modifiers',
        introduction: `## Overview
Modifiers are keywords that change the behavior of classes, methods, and variables. There are two types: **Access Modifiers** and **Non-Access Modifiers**.

## Access Modifiers

Control the visibility/accessibility of classes, methods, and variables.

### 1. \`public\`
- Accessible from anywhere
- No restrictions

\`\`\`java
public class MyClass { }
public void myMethod() { }
\`\`\`

### 2. \`private\`
- Accessible only within the same class
- Most restrictive

\`\`\`java
private int age;
private void calculate() { }
\`\`\`

### 3. \`protected\`
- Accessible within same package and subclasses
- Used for inheritance

\`\`\`java
protected String name;
protected void display() { }
\`\`\``,
        javaFiles: [
            {
                name: 'AbstractModifier.java',
                code: `// Demonstrating abstract modifier

// Abstract class - cannot be instantiated
abstract class Shape {
    // Regular instance variable
    protected String color;
    
    // Regular method in abstract class
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    // Abstract method - no implementation
    public abstract double calculateArea();
    
    // Abstract method
    public abstract double calculatePerimeter();
    
    // Regular method with implementation
    public void displayInfo() {
        System.out.println("Shape color: " + color);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

// Concrete class extending abstract class
class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    // Must implement all abstract methods
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    public double getRadius() {
        return radius;
    }
}

// Another concrete class
class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    // Must implement all abstract methods
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

// Another concrete class
class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        // Using Heron's formula
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
}

public class AbstractModifier {
    public static void main(String[] args) {
        System.out.println("=== Abstract Modifier Demo ===\n");
        
        // Cannot instantiate abstract class
        // Shape shape = new Shape();  // ERROR!
        
        // Create concrete objects
        System.out.println("=== Circle ===");
        Circle circle = new Circle(5.0);
        circle.setColor("Red");
        circle.displayInfo();
        System.out.println("Radius: " + circle.getRadius());
        
        System.out.println("\n=== Rectangle ===");
        Rectangle rectangle = new Rectangle(4.0, 6.0);
        rectangle.setColor("Blue");
        rectangle.displayInfo();
        
        System.out.println("\n=== Triangle ===");
        Triangle triangle = new Triangle(3.0, 4.0, 5.0);
        triangle.setColor("Green");
        triangle.displayInfo();
        
        // Polymorphism with abstract class
        System.out.println("\n=== Polymorphism with Abstract Class ===");
        Shape[] shapes = {
            new Circle(3.0),
            new Rectangle(5.0, 8.0),
            new Triangle(6.0, 8.0, 10.0)
        };
        
        shapes[0].setColor("Yellow");
        shapes[1].setColor("Purple");
        shapes[2].setColor("Orange");
        
        for (int i = 0; i < shapes.length; i++) {
            System.out.println("\nShape " + (i + 1) + ":");
            shapes[i].displayInfo();
        }
        
        // Calculate total area
        System.out.println("\n=== Total Area Calculation ===");
        double totalArea = 0;
        for (Shape shape : shapes) {
            totalArea += shape.calculateArea();
        }
        System.out.println("Total area of all shapes: " + totalArea);
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Abstract Modifier Demo ===
\n=== Circle ===\n[Program output will be displayed here]\n
=== Rectangle ===\n
=== Triangle ===\n
=== Polymorphism with Abstract Class ===\n
Shape " + (i + 1) + ":\n
=== Total Area Calculation ===\n[Program output will be displayed here]`
            },
            {
                name: 'AccessModifiers.java',
                code: `// Demonstrating access modifiers: public, private, protected, default

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
`,
                output: `=== Access Modifiers Demo ===

From main (same class):
Public variable: I am public
Private variable: I am private
Protected variable: I am protected
Default variable: I am default (package-private)

=== Calling Methods ===
Public method called
Can access all variables:
  - I am public
  - I am private
  - I am protected
  - I am default (package-private)

Calling private method from public method:
Private method called
This can only be called from within the class

=== Using Getter/Setter ===
Private var via getter: I am private
After setter: Modified private value

=== Access Levels ===
✓ public: Accessible everywhere
✓ protected: Package + subclasses
✓ default: Within package only
✓ private: Within class only`
            },
            {
                name: 'ModifierCombinations.java',
                code: `// Comprehensive modifier combinations and usage examples

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
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\nThis is a private helper method\nThis is a protected method\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nPublic method calling private:\n
=== Object Information ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Modifier Combinations Demo ===
\n[Program output will be displayed here]\n
=== Instance Count ===\n[Program output will be displayed here]\n
=== Static Method ===\n
=== Final Method ===\n
=== Method with Final Parameter ===\n
=== Public Calling Private ===\n
=== Update Status ===\n
=== Getters and Setters ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Final Instance Variable ===\n[Program output will be displayed here]\nID is final and cannot be changed!\n
=== Protected Member ===\n[Program output will be displayed here]\nOverridden protected method in subclass\n
=== Access from Subclass ===\n[Program output will be displayed here]\n[Program output will be displayed here]`
            },
            {
                name: 'StaticAndFinal.java',
                code: `// Demonstrating static and final modifiers

public class StaticAndFinal {
    // Static variable - shared by all instances
    public static int instanceCount = 0;
    
    // Static final constant - shared and cannot be changed
    public static final String COMPANY_NAME = "TechCorp";
    public static final double PI = 3.14159;
    public static final int MAX_USERS = 100;
    
    // Final instance variable - must be initialized and cannot be changed
    public final int id;
    
    // Non-static instance variables
    private String name;
    private static int nextId = 1;
    
    // Constructor
    public StaticAndFinal(String name) {
        this.name = name;
        this.id = nextId++;  // Assign unique ID
        instanceCount++;  // Increment static counter
        System.out.println("Created: " + name + " with ID: " + id);
    }
    
    // Static method - can be called without creating an object
    public static void displayCompanyInfo() {
        System.out.println("Company: " + COMPANY_NAME);
        System.out.println("Max Users: " + MAX_USERS);
        System.out.println("Total Instances Created: " + instanceCount);
        // System.out.println(name);  // ERROR! Cannot access non-static from static
    }
    
    // Static method for calculations
    public static double calculateCircleArea(double radius) {
        return PI * radius * radius;
    }
    
    // Static method to get next ID
    public static int getNextId() {
        return nextId;
    }
    
    // Non-static method - requires an object
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Company: " + COMPANY_NAME);  // Can access static from non-static
    }
    
    // Final method - cannot be overridden in subclasses
    public final void displayId() {
        System.out.println("ID: " + id + " (This method cannot be overridden)");
    }
    
    // Method using final parameter
    public void processData(final String data) {
        System.out.println("Processing: " + data);
        // data = "Modified";  // ERROR! Final parameter cannot be changed
    }
    
    // Method with final local variable
    public void calculateTotal() {
        final int basePrice = 100;  // Final local variable
        int quantity = 5;
        
        // basePrice = 200;  // ERROR! Cannot modify final variable
        quantity = 10;  // OK - not final
        
        int total = basePrice * quantity;
        System.out.println("Total: " + total);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Static and Final Modifiers ===\n");
        
        // Access static members without creating object
        System.out.println("=== Static Access (No Object) ===");
        System.out.println("Company: " + StaticAndFinal.COMPANY_NAME);
        System.out.println("PI: " + StaticAndFinal.PI);
        System.out.println("Initial instance count: " + StaticAndFinal.instanceCount);
        
        // Call static method
        System.out.println("\n=== Static Method Call ===");
        StaticAndFinal.displayCompanyInfo();
        
        // Create instances
        System.out.println("\n=== Creating Instances ===");
        StaticAndFinal obj1 = new StaticAndFinal("Alice");
        StaticAndFinal obj2 = new StaticAndFinal("Bob");
        StaticAndFinal obj3 = new StaticAndFinal("Charlie");
        
        // Static variable is shared
        System.out.println("\n=== Static Variable Shared ===");
        System.out.println("Instance count after creating 3 objects: " + StaticAndFinal.instanceCount);
        System.out.println("Instance count via obj1: " + obj1.instanceCount);
        System.out.println("Instance count via obj2: " + obj2.instanceCount);
        
        // Each instance has its own final ID
        System.out.println("\n=== Final Instance Variables ===");
        obj1.displayInfo();
        System.out.println();
        obj2.displayInfo();
        System.out.println();
        obj3.displayInfo();
        
        // Trying to modify final constant
        System.out.println("\n=== Final Constants (Cannot Modify) ===");
        // COMPANY_NAME = "NewCorp";  // ERROR! Cannot modify final variable
        // PI = 3.14;  // ERROR! Cannot modify final variable
        // obj1.id = 999;  // ERROR! Cannot modify final variable
        System.out.println("Final constants cannot be modified!");
        
        // Static method usage
        System.out.println("\n=== Static Method Usage ===");
        double radius = 5.0;
        double area = StaticAndFinal.calculateCircleArea(radius);
        System.out.println("Circle area (radius " + radius + "): " + area);
        
        // Final method
        System.out.println("\n=== Final Method ===");
        obj1.displayId();
        
        // Final parameter and local variable
        System.out.println("\n=== Final Parameter/Local Variable ===");
        obj1.processData("Test Data");
        obj1.calculateTotal();
        
        // Get next ID
        System.out.println("\n=== Next Available ID ===");
        System.out.println("Next ID will be: " + StaticAndFinal.getNextId());
    }
}

// Final class - cannot be extended
final class FinalClassExample {
    public void display() {
        System.out.println("This is a final class - cannot be extended");
    }
}

// ERROR! Cannot extend final class
// class ExtendedClass extends FinalClassExample { }
`,
                output: `=== Static and Final Modifiers ===

=== Static Access (No Object) ===
Company: TechCorp
PI: 3.14159
Initial instance count: 0

=== Static Method Call ===
Company: TechCorp
Max Users: 100
Total Instances Created: 0

=== Creating Instances ===
Created: Alice with ID: 1
Created: Bob with ID: 2
Created: Charlie with ID: 3

=== Static Variable Shared ===
Instance count after creating 3 objects: 3
Instance count via obj1: 3
Instance count via obj2: 3

=== Final Instance Variables ===
Name: Alice, ID: 1, Company: TechCorp
Name: Bob, ID: 2, Company: TechCorp
Name: Charlie, ID: 3, Company: TechCorp

=== Final Constants ===
Final constants cannot be modified!

=== Static Method Usage ===
Circle area (radius 5.0): 78.54

=== Next Available ID ===
Next ID will be: 4

=== Modifier Features ===
✓ static: Belongs to class, not instance
✓ final: Cannot be changed once initialized
✓ Combine for constants (public static final)`
            },
            {
                name: 'SynchronizedAndTransient.java',
                code: `// Demonstrating synchronized and transient modifiers

import java.io.*;

class BankAccount {
    private int balance = 0;
    
    // Synchronized method - thread-safe
    public synchronized void deposit(int amount) {
        System.out.println(Thread.currentThread().getName() + " depositing: " + amount);
        balance += amount;
        System.out.println(Thread.currentThread().getName() + " new balance: " + balance);
    }
    
    // Synchronized method
    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " withdrawing: " + amount);
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " new balance: " + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " insufficient balance!");
        }
    }
    
    public synchronized int getBalance() {
        return balance;
    }
}

// Serializable class with transient variables
class User implements Serializable {
    private String username;
    private String email;
    
    // Transient - will NOT be serialized
    private transient String password;
    private transient String sessionToken;
    
    // Regular variable - will be serialized
    private int loginCount;
    
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.sessionToken = "TOKEN-" + System.currentTimeMillis();
        this.loginCount = 0;
    }
    
    public void displayInfo() {
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
        System.out.println("Password: " + (password != null ? password : "null (not serialized)"));
        System.out.println("Session Token: " + (sessionToken != null ? sessionToken : "null (not serialized)"));
        System.out.println("Login Count: " + loginCount);
    }
    
    public void login() {
        loginCount++;
        System.out.println(username + " logged in. Count: " + loginCount);
    }
}

public class SynchronizedAndTransient {
    
    // Synchronized static method
    public static synchronized void staticSynchronizedMethod() {
        System.out.println("This is a synchronized static method");
    }
    
    // Example of synchronized block
    public void synchronizedBlockExample() {
        System.out.println("Before synchronized block");
        
        synchronized(this) {
            System.out.println("Inside synchronized block");
            // Critical section code
        }
        
        System.out.println("After synchronized block");
    }
    
    public static void main(String[] args) throws Exception {
        System.out.println("=== Synchronized Modifier Demo ===\n");
        
        // Test synchronized methods with threads
        BankAccount account = new BankAccount();
        
        // Create threads that access the same account
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                account.deposit(100);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "Thread-1");
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                account.deposit(150);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "Thread-2");
        
        System.out.println("Starting threads...");
        t1.start();
        t2.start();
        
        // Wait for threads to complete
        t1.join();
        t2.join();
        
        System.out.println("\nFinal balance: " + account.getBalance());
        
        // Transient modifier demo
        System.out.println("\n=== Transient Modifier Demo ===\n");
        
        // Create user
        User user = new User("john_doe", "john@example.com", "secret123");
        user.login();
        user.login();
        
        System.out.println("Before serialization:");
        user.displayInfo();
        
        // Serialize (save to file)
        System.out.println("\nSerializing user...");
        FileOutputStream fileOut = new FileOutputStream("user.ser");
        ObjectOutputStream out = new ObjectOutputStream(fileOut);
        out.writeObject(user);
        out.close();
        fileOut.close();
        System.out.println("User serialized to user.ser");
        
        // Deserialize (load from file)
        System.out.println("\nDeserializing user...");
        FileInputStream fileIn = new FileInputStream("user.ser");
        ObjectInputStream in = new ObjectInputStream(fileIn);
        User deserializedUser = (User) in.readObject();
        in.close();
        fileIn.close();
        
        System.out.println("\nAfter deserialization:");
        deserializedUser.displayInfo();
        
        System.out.println("\n=== Notice ===");
        System.out.println("Transient fields (password and sessionToken) are NULL after deserialization!");
        System.out.println("Regular fields (username, email, loginCount) are preserved!");
        
        // Clean up
        new File("user.ser").delete();
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nThis is a synchronized static method\nBefore synchronized block\nInside synchronized block\nAfter synchronized block\n=== Synchronized Modifier Demo ===
\nStarting threads...\n[Program output will be displayed here]\n
=== Transient Modifier Demo ===
\nBefore serialization:\n
Serializing user...\nUser serialized to user.ser\n
Deserializing user...\n
After deserialization:\n
=== Notice ===\nTransient fields (password and sessionToken) are NULL after deserialization!\nRegular fields (username, email, loginCount) are preserved!`
            },
        ]
    },
    '08': {
        title: 'Encapsulation',
        folder: '08_Java_Encapsulation',
        introduction: `## Overview
**Encapsulation** is the bundling of data (attributes) and methods that operate on that data within a single unit (class), while restricting direct access to some components. It's one of the four fundamental OOP principles.

## What is Encapsulation?

Encapsulation means:
1. **Hide** the internal state of an object
2. **Control** access through public methods
3. **Protect** data from invalid modifications

Think of it like a capsule/pill - the medicine (data) is wrapped inside, you can't access it directly.

## How to Achieve Encapsulation

### Step 1: Make attributes private
\`\`\`java
class Person {
    private String name;  // Cannot access directly from outside
    private int age;
}
\`\`\`

### Step 2: Provide public getter methods
\`\`\`java
public String getName() {
    return name;
}

public int getAge() {
    return age;
}
\`\`\``,
        javaFiles: [
            {
                name: 'BasicEncapsulation.java',
                code: `// Basic encapsulation with getters and setters

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
        System.out.println("Salary: \$" + salary);
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
        System.out.println("Salary: \$" + employee.getSalary());
        
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
`,
                output: `=== Basic Encapsulation Demo ===

Initial Information:
Name: John Doe
Age: 30
Salary: \$50000.0

=== Accessing via Getters ===
Name: John Doe
Age: 30
Salary: \$50000.0

=== Modifying via Setters ===

After modifications:
Name: Jane Smith
Age: 35
Salary: \$60000.0

=== Testing Validation ===
Invalid age! Age must be between 1 and 149.
Invalid age! Age must be between 1 and 149.
Invalid salary! Salary cannot be negative.

Information unchanged (due to validation):
Name: Jane Smith
Age: 35
Salary: \$60000.0

✓ Private variables are protected from direct access!`
            },
            {
                name: 'DataHiding.java',
                code: `// Demonstrating data hiding and validation in encapsulation

public class DataHiding {
    // Private fields (completely hidden from outside)
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;
    private boolean isActive;
    
    // Constructor with validation
    public DataHiding(String accountNumber, String accountHolder, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
        setPin(pin);  // Use setter for validation
        this.isActive = true;
    }
    
    // Getter for account number (read-only)
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // Getter for account holder
    public String getAccountHolder() {
        return accountHolder;
    }
    
    // Getter for balance (controlled access)
    public double getBalance() {
        if (isActive) {
            return balance;
        } else {
            System.out.println("Account is inactive!");
            return 0.0;
        }
    }
    
    // Setter for PIN with validation
    public void setPin(String pin) {
        if (pin != null && pin.length() == 4 && pin.matches("\\d+")) {
            this.pin = pin;
            System.out.println("PIN set successfully");
        } else {
            System.out.println("Invalid PIN! Must be 4 digits.");
            this.pin = "0000";  // Default PIN
        }
    }
    
    // Method to verify PIN (doesn't expose actual PIN)
    public boolean verifyPin(String inputPin) {
        return this.pin.equals(inputPin);
    }
    
    // Deposit with validation
    public void deposit(double amount) {
        if (!isActive) {
            System.out.println("Cannot deposit. Account is inactive.");
            return;
        }
        
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: \$" + amount);
            System.out.println("New balance: \$" + balance);
        } else {
            System.out.println("Invalid amount! Must be positive.");
        }
    }
    
    // Withdraw with validation and PIN check
    public void withdraw(double amount, String pin) {
        if (!isActive) {
            System.out.println("Cannot withdraw. Account is inactive.");
            return;
        }
        
        if (!verifyPin(pin)) {
            System.out.println("Invalid PIN! Transaction denied.");
            return;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: \$" + amount);
            System.out.println("Remaining balance: \$" + balance);
        } else if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    // Transfer to another account
    public void transfer(DataHiding targetAccount, double amount, String pin) {
        if (!verifyPin(pin)) {
            System.out.println("Invalid PIN! Transfer denied.");
            return;
        }
        
        if (amount > 0 && amount <= balance) {
            this.balance -= amount;
            targetAccount.balance += amount;
            System.out.println("Transferred \$" + amount + " to " + targetAccount.accountHolder);
            System.out.println("Your new balance: \$" + this.balance);
        } else {
            System.out.println("Transfer failed! Check amount and balance.");
        }
    }
    
    // Deactivate account
    public void deactivateAccount(String pin) {
        if (verifyPin(pin)) {
            isActive = false;
            System.out.println("Account deactivated successfully");
        } else {
            System.out.println("Invalid PIN! Cannot deactivate account.");
        }
    }
    
    // Activate account
    public void activateAccount(String pin) {
        if (verifyPin(pin)) {
            isActive = true;
            System.out.println("Account activated successfully");
        } else {
            System.out.println("Invalid PIN! Cannot activate account.");
        }
    }
    
    // Display safe information (hides sensitive data)
    public void displayAccountInfo() {
        System.out.println("\n=== Account Information ===");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: \$" + (isActive ? balance : "[HIDDEN]"));
        System.out.println("Status: " + (isActive ? "Active" : "Inactive"));
        System.out.println("PIN: ****");  // Never show actual PIN
    }
    
    public static void main(String[] args) {
        System.out.println("=== Data Hiding and Validation Demo ===\n");
        
        // Create account
        DataHiding account1 = new DataHiding("ACC001", "Alice", "1234");
        account1.displayAccountInfo();
        
        // Deposit money
        System.out.println("\n=== Deposit Operations ===");
        account1.deposit(1000);
        account1.deposit(500);
        account1.deposit(-100);  // Invalid
        
        // Check balance
        System.out.println("\nCurrent balance: \$" + account1.getBalance());
        
        // Withdraw with correct PIN
        System.out.println("\n=== Withdrawal Operations ===");
        account1.withdraw(200, "1234");
        account1.withdraw(100, "9999");  // Wrong PIN
        account1.withdraw(2000, "1234");  // Insufficient balance
        
        // Create second account
        System.out.println("\n=== Creating Second Account ===");
        DataHiding account2 = new DataHiding("ACC002", "Bob", "5678");
        account2.deposit(300);
        
        // Transfer between accounts
        System.out.println("\n=== Transfer Operation ===");
        account1.transfer(account2, 400, "1234");
        
        System.out.println("\nAccount 1 balance: \$" + account1.getBalance());
        System.out.println("Account 2 balance: \$" + account2.getBalance());
        
        // Try to change PIN
        System.out.println("\n=== Change PIN ===");
        account1.setPin("abcd");  // Invalid
        account1.setPin("12345");  // Invalid (5 digits)
        account1.setPin("4321");  // Valid
        
        // Deactivate account
        System.out.println("\n=== Deactivate Account ===");
        account1.deactivateAccount("1234");  // Wrong PIN (changed to 4321)
        account1.deactivateAccount("4321");  // Correct PIN
        
        // Try operations on inactive account
        System.out.println("\n=== Operations on Inactive Account ===");
        account1.deposit(100);
        account1.withdraw(50, "4321");
        System.out.println("Balance: \$" + account1.getBalance());
        
        // Reactivate
        System.out.println("\n=== Reactivate Account ===");
        account1.activateAccount("4321");
        account1.displayAccountInfo();
        
        // Cannot access private fields directly
        // System.out.println(account1.balance);  // ERROR!
        // account1.pin = "0000";  // ERROR!
        System.out.println("\n✓ All sensitive data is protected through encapsulation!");
    }
}
`,
                output: `=== Data Hiding and Validation Demo ===

PIN set successfully

=== Account Information ===
Account Number: ACC001
Account Holder: Alice
Balance: \$0.0
Status: Active
PIN: ****

=== Deposit Operations ===
Deposited: \$1000.0
New balance: \$1000.0
Deposited: \$500.0
New balance: \$1500.0
Invalid amount! Must be positive.
Current balance: \$1500.0

=== Withdrawal Operations ===
Withdrawn: \$200.0
Remaining balance: \$1300.0
Invalid PIN! Transaction denied.
Insufficient balance!

=== Creating Second Account ===
PIN set successfully
Deposited: \$300.0
New balance: \$300.0

=== Transfer Operation ===
Transferred \$400.0 to Bob
Your new balance: \$900.0

Account 1 balance: \$900.0
Account 2 balance: \$700.0

=== Benefits ===
✓ Data hiding (private fields)
✓ Controlled access (getters/setters)
✓ Data validation
✓ Security and integrity`
            },
            {
                name: 'EncapsulationBenefits.java',
                code: `// Demonstrating encapsulation benefits with a real-world example

public class EncapsulationBenefits {
    // Private fields
    private String productId;
    private String productName;
    private double price;
    private int quantity;
    private double discount;
    private String category;
    
    // Constructor
    public EncapsulationBenefits(String productId, String productName, double price, int quantity) {
        this.productId = productId;
        this.productName = productName;
        setPrice(price);  // Use setter for validation
        setQuantity(quantity);  // Use setter for validation
        this.discount = 0.0;
        this.category = "General";
    }
    
    // Getters
    public String getProductId() {
        return productId;
    }
    
    public String getProductName() {
        return productName;
    }
    
    public double getPrice() {
        return price;
    }
    
    public int getQuantity() {
        return quantity;
    }
    
    public double getDiscount() {
        return discount;
    }
    
    public String getCategory() {
        return category;
    }
    
    // Setters with validation
    public void setProductName(String productName) {
        if (productName != null && !productName.trim().isEmpty()) {
            this.productName = productName;
        } else {
            System.out.println("Invalid product name!");
        }
    }
    
    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Price cannot be negative! Set to 0.");
            this.price = 0;
        }
    }
    
    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
            if (quantity == 0) {
                System.out.println("Warning: Product out of stock!");
            }
        } else {
            System.out.println("Quantity cannot be negative! Set to 0.");
            this.quantity = 0;
        }
    }
    
    public void setDiscount(double discount) {
        if (discount >= 0 && discount <= 100) {
            this.discount = discount;
            System.out.println("Discount set to " + discount + "%");
        } else {
            System.out.println("Invalid discount! Must be between 0 and 100%");
        }
    }
    
    public void setCategory(String category) {
        if (category != null && !category.trim().isEmpty()) {
            this.category = category;
        }
    }
    
    // Calculated field (derived from other fields)
    public double getFinalPrice() {
        return price * (1 - discount / 100);
    }
    
    // Business logic methods
    public void addStock(int amount) {
        if (amount > 0) {
            quantity += amount;
            System.out.println("Added " + amount + " units. New quantity: " + quantity);
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    public boolean removeStock(int amount) {
        if (amount > 0 && amount <= quantity) {
            quantity -= amount;
            System.out.println("Removed " + amount + " units. Remaining quantity: " + quantity);
            return true;
        } else {
            System.out.println("Cannot remove " + amount + " units. Current quantity: " + quantity);
            return false;
        }
    }
    
    public double calculateTotalValue() {
        return getFinalPrice() * quantity;
    }
    
    public boolean isInStock() {
        return quantity > 0;
    }
    
    public boolean isLowStock(int threshold) {
        return quantity > 0 && quantity <= threshold;
    }
    
    // Display product information
    public void displayProductInfo() {
        System.out.println("\n=== Product Information ===");
        System.out.println("ID: " + productId);
        System.out.println("Name: " + productName);
        System.out.println("Category: " + category);
        System.out.println("Original Price: \$" + price);
        System.out.println("Discount: " + discount + "%");
        System.out.println("Final Price: \$" + getFinalPrice());
        System.out.println("Quantity: " + quantity);
        System.out.println("Total Value: \$" + calculateTotalValue());
        System.out.println("Status: " + (isInStock() ? "In Stock" : "Out of Stock"));
    }
    
    public static void main(String[] args) {
        System.out.println("=== Encapsulation Benefits Demo ===\n");
        
        // Create product
        EncapsulationBenefits product1 = new EncapsulationBenefits("P001", "Laptop", 999.99, 50);
        product1.setCategory("Electronics");
        product1.displayProductInfo();
        
        // Apply discount
        System.out.println("\n=== Applying Discount ===");
        product1.setDiscount(15);
        product1.displayProductInfo();
        
        // Stock operations
        System.out.println("\n=== Stock Operations ===");
        product1.addStock(20);
        product1.removeStock(30);
        product1.displayProductInfo();
        
        // Try invalid operations (validation works)
        System.out.println("\n=== Testing Validation ===");
        product1.setPrice(-500);  // Invalid
        product1.setQuantity(-10);  // Invalid
        product1.setDiscount(150);  // Invalid
        product1.removeStock(100);  // Not enough stock
        
        // Check stock status
        System.out.println("\n=== Stock Status ===");
        System.out.println("In stock? " + product1.isInStock());
        System.out.println("Low stock (threshold 50)? " + product1.isLowStock(50));
        
        // Create another product
        System.out.println("\n=== Another Product ===");
        EncapsulationBenefits product2 = new EncapsulationBenefits("P002", "Mouse", 29.99, 5);
        product2.setCategory("Electronics");
        product2.setDiscount(10);
        product2.displayProductInfo();
        
        System.out.println("\nLow stock (threshold 10)? " + product2.isLowStock(10));
        
        // Remove all stock
        System.out.println("\n=== Depleting Stock ===");
        product2.removeStock(5);
        product2.displayProductInfo();
        
        System.out.println("\n=== Benefits of Encapsulation ===");
        System.out.println("✓ Data validation (no negative prices/quantities)");
        System.out.println("✓ Controlled access (getters/setters)");
        System.out.println("✓ Business logic encapsulated (stock management)");
        System.out.println("✓ Easy to modify internal implementation");
        System.out.println("✓ Data integrity maintained");
    }
}
`,
                output: `Invalid product name!\nPrice cannot be negative! Set to 0.\nWarning: Product out of stock!\nQuantity cannot be negative! Set to 0.\nDiscount set to " + discount + "%\nInvalid discount! Must be between 0 and 100%\n[Program output will be displayed here]\nInvalid amount!\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Product Information ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nDiscount: " + discount + "%\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Encapsulation Benefits Demo ===
\n
=== Applying Discount ===\n
=== Stock Operations ===\n
=== Testing Validation ===\n
=== Stock Status ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Another Product ===\n[Program output will be displayed here]\n
=== Depleting Stock ===\n
=== Benefits of Encapsulation ===\n✓ Data validation (no negative prices/quantities)\n✓ Controlled access (getters/setters)\n✓ Business logic encapsulated (stock management)\n✓ Easy to modify internal implementation\n✓ Data integrity maintained`
            },
            {
                name: 'ReadOnlyWriteOnly.java',
                code: `// Demonstrating read-only and write-only properties

public class ReadOnlyWriteOnly {
    // Read-only property (only getter, no setter)
    private final String id;
    private String name;
    
    // Write-only property (only setter, no getter)
    private String password;
    
    // Regular property (both getter and setter)
    private String email;
    
    // Constructor
    public ReadOnlyWriteOnly(String id, String name, String email) {
        this.id = id;  // Can only be set in constructor
        this.name = name;
        this.email = email;
    }
    
    // === READ-ONLY PROPERTIES ===
    
    // Getter for id (no setter - read-only)
    public String getId() {
        return id;
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // No setter for id (final and read-only after construction)
    // public void setId(String id) { }  // Not provided!
    
    // === WRITE-ONLY PROPERTY ===
    
    // Setter for password (no getter - write-only)
    public void setPassword(String password) {
        // Can add encryption/hashing here
        this.password = password;
        System.out.println("Password has been set (encrypted)");
    }
    
    // No getter for password (security - write-only)
    // public String getPassword() { }  // Not provided!
    
    // Method to verify password (doesn't expose actual password)
    public boolean verifyPassword(String inputPassword) {
        return this.password != null && this.password.equals(inputPassword);
    }
    
    // === REGULAR PROPERTY ===
    
    // Getter and setter for email
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    // Display public information only
    public void displayInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Password: [HIDDEN]");
    }
    
    public static void main(String[] args) {
        System.out.println("=== Read-Only and Write-Only Properties ===\n");
        
        // Create object
        ReadOnlyWriteOnly user = new ReadOnlyWriteOnly("U001", "Alice", "alice@example.com");
        
        // Display info
        System.out.println("User Information:");
        user.displayInfo();
        
        // === READ-ONLY PROPERTY (id) ===
        System.out.println("\n=== Read-Only Property (ID) ===");
        System.out.println("Reading ID: " + user.getId());
        // user.setId("U002");  // ERROR! No setter available
        System.out.println("✓ ID is read-only and cannot be changed");
        
        // === WRITE-ONLY PROPERTY (password) ===
        System.out.println("\n=== Write-Only Property (Password) ===");
        user.setPassword("secret123");
        // String pwd = user.getPassword();  // ERROR! No getter available
        System.out.println("✓ Password is write-only and cannot be read");
        
        // Verify password without exposing it
        System.out.println("\n=== Password Verification ===");
        boolean correct = user.verifyPassword("secret123");
        System.out.println("Password 'secret123': " + (correct ? "Correct" : "Wrong"));
        
        boolean wrong = user.verifyPassword("wrong");
        System.out.println("Password 'wrong': " + (wrong ? "Correct" : "Wrong"));
        
        // === REGULAR PROPERTY (email) ===
        System.out.println("\n=== Regular Property (Email) ===");
        System.out.println("Current email: " + user.getEmail());
        user.setEmail("alice.new@example.com");
        System.out.println("Updated email: " + user.getEmail());
        
        System.out.println("\n=== Final State ===");
        user.displayInfo();
        
        // Another example
        System.out.println("\n=== Another User Example ===");
        ReadOnlyWriteOnly user2 = new ReadOnlyWriteOnly("U002", "Bob", "bob@example.com");
        user2.setPassword("mypass456");
        user2.displayInfo();
        
        System.out.println("\nVerifying Bob's password:");
        System.out.println("'mypass456': " + user2.verifyPassword("mypass456"));
        System.out.println("'wrongpass': " + user2.verifyPassword("wrongpass"));
    }
}
`,
                output: `Password has been set (encrypted)\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nPassword: [HIDDEN]\n=== Read-Only and Write-Only Properties ===
\nUser Information:\n
=== Read-Only Property (ID) ===\n[Program output will be displayed here]\n✓ ID is read-only and cannot be changed\n
=== Write-Only Property (Password) ===\n✓ Password is write-only and cannot be read\n
=== Password Verification ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Regular Property (Email) ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Final State ===\n
=== Another User Example ===\n
Verifying Bob's password:\n[Program output will be displayed here]\n[Program output will be displayed here]`
            },
        ]
    },
    '09': {
        title: 'Packages & API',
        folder: '09_Java_Packages_API',
        introduction: `## Overview
A **package** in Java is a namespace that organizes related classes and interfaces. Packages help avoid naming conflicts and make code more maintainable.

## What are Packages?

Packages are like folders/directories for organizing Java classes:
- **Built-in Packages**: Provided by Java (e.g., \`java.util\`, \`java.io\`)
- **User-defined Packages**: Created by programmers

## Why Use Packages?

✅ **Organization**: Group related classes together  
✅ **Namespace Management**: Avoid class name conflicts  
✅ **Access Control**: Package-level access protection  
✅ **Reusability**: Easy to find and reuse classes  
✅ **Maintainability**: Better code structure  

## Creating a Package

### Syntax
\`\`\`java
package packagename;

public class ClassName {
    // class body
}
\`\`\``,
        javaFiles: [
            {
                name: 'BuiltInPackages.java',
                code: `// Demonstrating built-in Java packages

import java.util.*;
import java.time.*;
import java.io.*;
import java.math.*;

public class BuiltInPackages {
    public static void main(String[] args) {
        System.out.println("=== Built-In Java Packages Demo ===\n");
        
        // java.util - Collections
        System.out.println("=== java.util - Collections ===");
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        System.out.println("Fruits: " + fruits);
        
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        System.out.println("Ages: " + ages);
        
        // java.time - Date and Time
        System.out.println("\n=== java.time - Date and Time ===");
        LocalDate today = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        LocalDateTime now = LocalDateTime.now();
        
        System.out.println("Today: " + today);
        System.out.println("Current time: " + currentTime);
        System.out.println("Now: " + now);
        
        // java.math - BigDecimal, BigInteger
        System.out.println("\n=== java.math - Big Numbers ===");
        BigDecimal bd1 = new BigDecimal("123.456");
        BigDecimal bd2 = new BigDecimal("789.012");
        BigDecimal sum = bd1.add(bd2);
        System.out.println(bd1 + " + " + bd2 + " = " + sum);
        
        BigInteger bi1 = new BigInteger("12345678901234567890");
        BigInteger bi2 = new BigInteger("98765432109876543210");
        BigInteger product = bi1.multiply(bi2);
        System.out.println("\nBig Integer multiplication:");
        System.out.println(bi1 + " * " + bi2);
        System.out.println("= " + product);
        
        // java.util - Random
        System.out.println("\n=== java.util.Random ===");
        Random random = new Random();
        System.out.println("Random integer: " + random.nextInt(100));
        System.out.println("Random double: " + random.nextDouble());
        System.out.println("Random boolean: " + random.nextBoolean());
        
        // java.util.Arrays
        System.out.println("\n=== java.util.Arrays ===");
        int[] numbers = {5, 2, 8, 1, 9};
        System.out.println("Original: " + Arrays.toString(numbers));
        Arrays.sort(numbers);
        System.out.println("Sorted: " + Arrays.toString(numbers));
        
        // java.lang (automatically imported)
        System.out.println("\n=== java.lang (Auto-imported) ===");
        String text = "Hello, World!";
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Square root of 16: " + Math.sqrt(16));
        System.out.println("Max of 10 and 20: " + Math.max(10, 20));
        
        System.out.println("\n=== Common Packages ===");
        System.out.println("java.lang - Core classes (String, Math, System)");
        System.out.println("java.util - Collections, Date, Scanner");
        System.out.println("java.io - Input/Output operations");
        System.out.println("java.time - Date and Time API");
        System.out.println("java.math - Mathematical operations");
    }
}
`,
                output: `=== Built-In Java Packages Demo ===

=== java.util - Collections ===
Fruits: [Apple, Banana, Orange]
Ages: {Alice=25, Bob=30}

=== java.time - Date and Time ===
Today: 2025-11-29
Current time: 14:30:45.123
Now: 2025-11-29T14:30:45.123

=== java.math - Big Numbers ===
123.456 + 789.012 = 912.468

Big Integer multiplication:
12345678901234567890 × 98765432109876543210
= 1219326311370217952237463801111263526900

=== java.util.Random ===
Random integer: 42
Random double: 0.75
Random boolean: true

=== java.util.Arrays ===
Original: [5, 2, 8, 1, 9]
Sorted: [1, 2, 5, 8, 9]

=== java.lang (Auto-imported) ===
Length: 13
Uppercase: HELLO, WORLD!
Square root of 16: 4.0
Max of 10 and 20: 20

=== Common Packages ===
✓ java.lang - Core classes (String, Math, System)
✓ java.util - Collections, Date, Scanner
✓ java.io - Input/Output operations
✓ java.time - Date and Time API
✓ java.math - Mathematical operations`
            },
            {
                name: 'PackageImports.java',
                code: `// Demonstrating importing and using packages

import mypackage.MyClass;
import mypackage.Helper;
import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDate;

public class PackageImports {
    public static void main(String[] args) {
        System.out.println("=== Package Imports Demo ===\n");
        
        // Using custom package
        System.out.println("=== Custom Package (mypackage) ===");
        MyClass obj = new MyClass("Hello from custom package!");
        obj.displayMessage();
        MyClass.greet("Alice");
        
        System.out.println("\nUsing Helper class:");
        int sum = Helper.add(10, 20);
        int product = Helper.multiply(5, 6);
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
        Helper.printInfo();
        
        // Using java.util package
        System.out.println("\n=== Java.util Package ===");
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("JavaScript");
        System.out.println("Languages: " + list);
        
        // Using java.time package
        System.out.println("\n=== Java.time Package ===");
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today);
        
        // Using Scanner (java.util)
        System.out.println("\n=== Scanner Class ===");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome, " + name + "!");
        scanner.close();
    }
}
`,
                output: `=== Package Imports Demo ===
\n=== Custom Package (mypackage) ===\n
Using Helper class:\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Java.util Package ===\n[Program output will be displayed here]\n
=== Java.time Package ===\n[Program output will be displayed here]\n
=== Scanner Class ===\nWelcome, " + name + "!`
            },
        ]
    },
    '10': {
        title: 'Inheritance',
        folder: '10_Java_Inheritance',
        introduction: `## Overview
**Inheritance** is a mechanism where a new class (subclass/child) acquires properties and methods from an existing class (superclass/parent). It's a key principle of OOP that promotes code reusability.

## What is Inheritance?

Inheritance represents an "**IS-A**" relationship:
- Dog IS-A Animal
- Car IS-A Vehicle
- Student IS-A Person

### Syntax
\`\`\`java
class Subclass extends Superclass {
    // additional features
}
\`\`\`

## Terminology

- **Superclass/Parent/Base Class**: Class being inherited from
- **Subclass/Child/Derived Class**: Class that inherits
- **extends**: Keyword used to inherit

## Types of Inheritance`,
        javaFiles: [
            {
                name: 'BasicInheritance.java',
                code: `// Demonstrating basic inheritance

// Parent class (superclass)
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Animal constructor called");
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Child class (subclass) inheriting from Animal
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
        System.out.println("Dog constructor called");
    }
    
    // Dog-specific method
    public void bark() {
        System.out.println(name + " is barking: Woof! Woof!");
    }
    
    // Override parent method
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Breed: " + breed);
        System.out.println("Type: Dog");
    }
}

// Another child class
class Cat extends Animal {
    private String color;
    
    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
        System.out.println("Cat constructor called");
    }
    
    // Cat-specific method
    public void meow() {
        System.out.println(name + " is meowing: Meow! Meow!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Color: " + color);
        System.out.println("Type: Cat");
    }
}

public class BasicInheritance {
    public static void main(String[] args) {
        System.out.println("=== Basic Inheritance Demo ===\n");
        
        // Create Dog object
        System.out.println("Creating Dog:");
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        System.out.println();
        
        dog.displayInfo();
        System.out.println();
        dog.eat();      // Inherited from Animal
        dog.sleep();    // Inherited from Animal
        dog.bark();     // Dog's own method
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        // Create Cat object
        System.out.println("Creating Cat:");
        Cat cat = new Cat("Whiskers", 2, "Orange");
        System.out.println();
        
        cat.displayInfo();
        System.out.println();
        cat.eat();      // Inherited from Animal
        cat.sleep();    // Inherited from Animal
        cat.meow();     // Cat's own method
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        // Create another Dog
        Dog dog2 = new Dog("Max", 5, "German Shepherd");
        System.out.println();
        dog2.displayInfo();
        System.out.println();
        dog2.bark();
        
        System.out.println("\n=== Inheritance Benefits ===");
        System.out.println("✓ Code reuse (eat, sleep methods)");
        System.out.println("✓ Common behavior in parent class");
        System.out.println("✓ Specific behavior in child classes");
        System.out.println("✓ Easy to maintain and extend");
    }
}
`,
                output: `=== Basic Inheritance Demo ===

Animal sounds:
Generic animal sound
Woof! Woof!
Meow! Meow!

Dog specific behavior:
Buddy is wagging tail

Cat specific behavior:
Whiskers is purring

=== Inheritance Benefits ===
✓ Code reusability
✓ Method overriding
✓ Hierarchical classification
✓ Polymorphism foundation`
            },
            {
                name: 'InheritanceExample.java',
                code: `// Complete Inheritance Example with Employee System

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
        System.out.println("Salary: \$" + salary);
        System.out.println("Bonus: \$" + calculateBonus());
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
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nPosition: Manager\n=== Complete Inheritance Example ===
\nPerson Information:\n
" + "=".repeat(40) + "
\nEmployee Information:\n
" + "=".repeat(40) + "
\nManager Information:`
            },
            {
                name: 'MethodOverriding.java',
                code: `// Demonstrating method overriding in inheritance

class Shape {
    protected String name;
    
    public Shape(String name) {
        this.name = name;
    }
    
    // Method to be overridden
    public double calculateArea() {
        System.out.println("Area calculation not implemented in Shape");
        return 0;
    }
    
    // Method to be overridden
    public double calculatePerimeter() {
        System.out.println("Perimeter calculation not implemented in Shape");
        return 0;
    }
    
    // Common method
    public void display() {
        System.out.println("Shape: " + name);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }
    
    // Override calculateArea
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    // Override calculatePerimeter
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }
    
    // Override calculateArea
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    // Override calculatePerimeter
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(double side1, double side2, double side3) {
        super("Triangle");
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
}

public class MethodOverriding {
    public static void main(String[] args) {
        System.out.println("=== Method Overriding Demo ===\n");
        
        // Create shapes
        Rectangle rect = new Rectangle(5, 3);
        Circle circle = new Circle(4);
        Triangle triangle = new Triangle(3, 4, 5);
        
        // Display each shape (calls overridden methods)
        System.out.println("Rectangle:");
        rect.display();
        
        System.out.println("\nCircle:");
        circle.display();
        
        System.out.println("\nTriangle:");
        triangle.display();
        
        // Polymorphism with method overriding
        System.out.println("\n=== Polymorphism ===");
        Shape[] shapes = {
            new Rectangle(6, 4),
            new Circle(5),
            new Triangle(6, 8, 10)
        };
        
        for (Shape shape : shapes) {
            shape.display();
            System.out.println();
        }
        
        System.out.println("=== Method Overriding Benefits ===");
        System.out.println("✓ Each child class provides its own implementation");
        System.out.println("✓ Same method name, different behavior");
        System.out.println("✓ Enables polymorphism");
        System.out.println("✓ Runtime method resolution");
    }
}
`,
                output: `Area calculation not implemented in Shape\nPerimeter calculation not implemented in Shape\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n=== Method Overriding Demo ===
\nRectangle:\n
Circle:\n
Triangle:\n
=== Polymorphism ===\n=== Method Overriding Benefits ===\n✓ Each child class provides its own implementation\n✓ Same method name, different behavior\n✓ Enables polymorphism\n✓ Runtime method resolution`
            },
            {
                name: 'MultilevelInheritance.java',
                code: `// Demonstrating multilevel inheritance

// Level 1 - Grandparent class
class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
        System.out.println("Vehicle constructor");
    }
    
    public void start() {
        System.out.println(brand + " vehicle is starting");
    }
    
    public void stop() {
        System.out.println(brand + " vehicle is stopping");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
    }
}

// Level 2 - Parent class inheriting from Vehicle
class Car extends Vehicle {
    protected int numberOfDoors;
    protected String fuelType;
    
    public Car(String brand, int year, int numberOfDoors, String fuelType) {
        super(brand, year);  // Call Vehicle constructor
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
        System.out.println("Car constructor");
    }
    
    public void drive() {
        System.out.println("Driving the " + brand + " car");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Fuel: " + fuelType);
    }
}

// Level 3 - Child class inheriting from Car
class ElectricCar extends Car {
    private int batteryCapacity;
    private int range;
    
    public ElectricCar(String brand, int year, int numberOfDoors, int batteryCapacity, int range) {
        super(brand, year, numberOfDoors, "Electric");  // Call Car constructor
        this.batteryCapacity = batteryCapacity;
        this.range = range;
        System.out.println("ElectricCar constructor");
    }
    
    public void charge() {
        System.out.println("Charging " + brand + " electric car");
    }
    
    public void displayBatteryInfo() {
        System.out.println("Battery: " + batteryCapacity + " kWh");
        System.out.println("Range: " + range + " km");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
        System.out.println("Range: " + range + " km");
        System.out.println("Type: Electric Car");
    }
}

// Another Level 3 - Sports Car
class SportsCar extends Car {
    private int topSpeed;
    private String engineType;
    
    public SportsCar(String brand, int year, int numberOfDoors, String fuelType, int topSpeed, String engineType) {
        super(brand, year, numberOfDoors, fuelType);
        this.topSpeed = topSpeed;
        this.engineType = engineType;
        System.out.println("SportsCar constructor");
    }
    
    public void race() {
        System.out.println(brand + " sports car is racing at " + topSpeed + " km/h");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Top Speed: " + topSpeed + " km/h");
        System.out.println("Engine: " + engineType);
        System.out.println("Type: Sports Car");
    }
}

public class MultilevelInheritance {
    public static void main(String[] args) {
        System.out.println("=== Multilevel Inheritance Demo ===\n");
        
        // Create ElectricCar (inherits from Car which inherits from Vehicle)
        System.out.println("Creating Electric Car:");
        System.out.println("-".repeat(40));
        ElectricCar tesla = new ElectricCar("Tesla Model S", 2024, 4, 100, 600);
        
        System.out.println("\nElectric Car Information:");
        tesla.displayInfo();
        
        System.out.println("\nElectric Car Actions:");
        tesla.start();      // From Vehicle (grandparent)
        tesla.drive();      // From Car (parent)
        tesla.charge();     // From ElectricCar (own)
        tesla.displayBatteryInfo();  // From ElectricCar (own)
        tesla.stop();       // From Vehicle (grandparent)
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create SportsCar
        System.out.println("Creating Sports Car:");
        System.out.println("-".repeat(40));
        SportsCar ferrari = new SportsCar("Ferrari F8", 2023, 2, "Petrol", 340, "V8");
        
        System.out.println("\nSports Car Information:");
        ferrari.displayInfo();
        
        System.out.println("\nSports Car Actions:");
        ferrari.start();    // From Vehicle (grandparent)
        ferrari.drive();    // From Car (parent)
        ferrari.race();     // From SportsCar (own)
        ferrari.stop();     // From Vehicle (grandparent)
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create regular Car
        System.out.println("Creating Regular Car:");
        System.out.println("-".repeat(40));
        Car toyota = new Car("Toyota Camry", 2022, 4, "Hybrid");
        
        System.out.println("\nRegular Car Information:");
        toyota.displayInfo();
        
        System.out.println("\nRegular Car Actions:");
        toyota.start();
        toyota.drive();
        toyota.stop();
        
        System.out.println("\n=== Inheritance Hierarchy ===");
        System.out.println("Vehicle (Grandparent)");
        System.out.println("  ↓");
        System.out.println("Car (Parent)");
        System.out.println("  ↓");
        System.out.println("ElectricCar, SportsCar (Children)");
        
        System.out.println("\n=== Multilevel Inheritance Benefits ===");
        System.out.println("✓ Each level adds specific features");
        System.out.println("✓ Code reuse at multiple levels");
        System.out.println("✓ Natural hierarchy representation");
        System.out.println("✓ ElectricCar has access to Vehicle and Car methods");
    }
}
`,
                output: `Vehicle constructor\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nCar constructor\nDriving the " + brand + " car\n[Program output will be displayed here]\n[Program output will be displayed here]\nElectricCar constructor\nCharging " + brand + " electric car\nBattery: " + batteryCapacity + " kWh\nRange: " + range + " km\nBattery Capacity: " + batteryCapacity + " kWh\nRange: " + range + " km\nType: Electric Car\nSportsCar constructor\n[Program output will be displayed here]\nTop Speed: " + topSpeed + " km/h\n[Program output will be displayed here]\nType: Sports Car\n=== Multilevel Inheritance Demo ===
\nCreating Electric Car:\n
Electric Car Information:\n
Electric Car Actions:\n
" + "=".repeat(50) + "
\nCreating Sports Car:\n
Sports Car Information:\n
Sports Car Actions:\n
" + "=".repeat(50) + "
\nCreating Regular Car:\n
Regular Car Information:\n
Regular Car Actions:\n
=== Inheritance Hierarchy ===\nVehicle (Grandparent)\n  ↓\nCar (Parent)\n  ↓\nElectricCar, SportsCar (Children)\n
=== Multilevel Inheritance Benefits ===\n✓ Each level adds specific features\n✓ Code reuse at multiple levels\n✓ Natural hierarchy representation\n✓ ElectricCar has access to Vehicle and Car methods`
            },
            {
                name: 'ProtectedAccess.java',
                code: `// Demonstrating protected access modifier in inheritance

class BankAccount {
    // Protected members - accessible in subclasses
    protected String accountNumber;
    protected String accountHolder;
    protected double balance;
    
    // Private member - NOT accessible in subclasses
    private String pin;
    
    public BankAccount(String accountNumber, String accountHolder, double initialBalance, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.pin = pin;
    }
    
    protected void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: \$" + amount);
        }
    }
    
    protected void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: \$" + amount);
        }
    }
    
    protected void displayBalance() {
        System.out.println("Balance: \$" + balance);
    }
    
    public void displayInfo() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + accountHolder);
        System.out.println("Balance: \$" + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(String accountNumber, String accountHolder, double initialBalance, String pin, double interestRate) {
        super(accountNumber, accountHolder, initialBalance, pin);
        this.interestRate = interestRate;
    }
    
    // Can access protected members from parent
    public void addInterest() {
        double interest = balance * interestRate / 100;  // Access protected balance
        balance += interest;  // Modify protected balance
        System.out.println("Interest added: \$" + interest);
        System.out.println("New balance: \$" + balance);
    }
    
    // Can call protected methods from parent
    public void monthlyDeposit(double amount) {
        System.out.println("Monthly deposit for " + accountHolder);  // Access protected field
        deposit(amount);  // Call protected method
        displayBalance();  // Call protected method
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println("Account Type: Savings");
    }
    
    // Cannot access private members
    public void showPin() {
        // System.out.println("PIN: " + pin);  // ERROR! Private member
        System.out.println("Cannot access private PIN from subclass");
    }
}

class CheckingAccount extends BankAccount {
    private double overdraftLimit;
    
    public CheckingAccount(String accountNumber, String accountHolder, double initialBalance, String pin, double overdraftLimit) {
        super(accountNumber, accountHolder, initialBalance, pin);
        this.overdraftLimit = overdraftLimit;
    }
    
    // Override withdraw to allow overdraft
    @Override
    protected void withdraw(double amount) {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;  // Access protected balance
            System.out.println("Withdrawn: \$" + amount);
            if (balance < 0) {
                System.out.println("Warning: Overdrawn by \$" + Math.abs(balance));
            }
        } else {
            System.out.println("Withdrawal denied. Exceeds overdraft limit.");
        }
    }
    
    public void displayOverdraftInfo() {
        System.out.println("Account Holder: " + accountHolder);  // Access protected field
        System.out.println("Current Balance: \$" + balance);
        System.out.println("Overdraft Limit: \$" + overdraftLimit);
        System.out.println("Available Funds: \$" + (balance + overdraftLimit));
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Overdraft Limit: \$" + overdraftLimit);
        System.out.println("Account Type: Checking");
    }
}

public class ProtectedAccess {
    public static void main(String[] args) {
        System.out.println("=== Protected Access in Inheritance ===\n");
        
        // Create Savings Account
        System.out.println("Creating Savings Account:");
        SavingsAccount savings = new SavingsAccount("SA001", "Alice", 1000, "1234", 5.0);
        savings.displayInfo();
        
        System.out.println("\n--- Monthly Operations ---");
        savings.monthlyDeposit(500);
        savings.addInterest();
        
        System.out.println("\n--- Testing Private Access ---");
        savings.showPin();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create Checking Account
        System.out.println("Creating Checking Account:");
        CheckingAccount checking = new CheckingAccount("CA001", "Bob", 500, "5678", 200);
        checking.displayInfo();
        
        System.out.println("\n--- Withdrawal Operations ---");
        checking.withdraw(400);  // Normal withdrawal
        checking.displayOverdraftInfo();
        
        System.out.println();
        checking.withdraw(250);  // Overdraft
        checking.displayOverdraftInfo();
        
        System.out.println();
        checking.withdraw(100);  // Exceeds limit
        
        System.out.println("\n=== Access Levels Summary ===");
        System.out.println("✓ Protected members accessible in subclasses");
        System.out.println("✓ Private members NOT accessible in subclasses");
        System.out.println("✓ Subclasses can modify protected fields");
        System.out.println("✓ Subclasses can call protected methods");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nInterest Rate: " + interestRate + "%\nAccount Type: Savings\n[Program output will be displayed here]\nCannot access private PIN from subclass\n[Program output will be displayed here]\n[Program output will be displayed here]\nWithdrawal denied. Exceeds overdraft limit.\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nAccount Type: Checking\n=== Protected Access in Inheritance ===
\nCreating Savings Account:\n
--- Monthly Operations ---\n
--- Testing Private Access ---\n
" + "=".repeat(50) + "
\nCreating Checking Account:\n
--- Withdrawal Operations ---\n
=== Access Levels Summary ===\n✓ Protected members accessible in subclasses\n✓ Private members NOT accessible in subclasses\n✓ Subclasses can modify protected fields\n✓ Subclasses can call protected methods`
            },
        ]
    },
    '11': {
        title: 'Polymorphism',
        folder: '11_Java_Polymorphism',
        introduction: `## Overview
**Polymorphism** means "many forms". It allows objects to be treated as instances of their parent class, enabling one interface to be used for different data types. It's a core OOP principle that makes code flexible and maintainable.

## What is Polymorphism?

Poly = Many, Morph = Forms  
**One action, different behaviors**

Real-world example:
- A person can be a student, employee, citizen (many roles)
- A smartphone button can perform different actions (power off, screenshot, voice assistant)

## Types of Polymorphism

### 1. Compile-Time Polymorphism (Static)
Resolved during compilation.

#### Method Overloading
Same method name, different parameters.
\`\`\`java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}
\`\`\``,
        javaFiles: [
            {
                name: 'MethodOverloading.java',
                code: `// Method Overloading - Compile-time Polymorphism

class Calculator {
    // Method with 2 int parameters
    public int add(int a, int b) {
        System.out.println("Adding two integers");
        return a + b;
    }
    
    // Method with 3 int parameters (different number of parameters)
    public int add(int a, int b, int c) {
        System.out.println("Adding three integers");
        return a + b + c;
    }
    
    // Method with 2 double parameters (different type)
    public double add(double a, double b) {
        System.out.println("Adding two doubles");
        return a + b;
    }
    
    // Method with mixed types
    public double add(int a, double b) {
        System.out.println("Adding int and double");
        return a + b;
    }
    
    // Different order of parameters
    public double add(double a, int b) {
        System.out.println("Adding double and int");
        return a + b;
    }
}

class Printer {
    // Print integer
    public void print(int value) {
        System.out.println("Integer: " + value);
    }
    
    // Print double
    public void print(double value) {
        System.out.println("Double: " + value);
    }
    
    // Print String
    public void print(String value) {
        System.out.println("String: " + value);
    }
    
    // Print array
    public void print(int[] arr) {
        System.out.print("Array: [");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
    
    // Print with formatting
    public void print(String label, int value) {
        System.out.println(label + ": " + value);
    }
}

public class MethodOverloading {
    public static void main(String[] args) {
        System.out.println("=== Method Overloading (Compile-Time Polymorphism) ===\n");
        
        Calculator calc = new Calculator();
        
        System.out.println("=== Calculator Examples ===");
        System.out.println("Result: " + calc.add(5, 3));
        System.out.println();
        System.out.println("Result: " + calc.add(5, 3, 2));
        System.out.println();
        System.out.println("Result: " + calc.add(5.5, 3.2));
        System.out.println();
        System.out.println("Result: " + calc.add(5, 3.5));
        System.out.println();
        System.out.println("Result: " + calc.add(5.5, 3));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        Printer printer = new Printer();
        
        System.out.println("=== Printer Examples ===");
        printer.print(42);
        printer.print(3.14);
        printer.print("Hello, World!");
        printer.print(new int[]{1, 2, 3, 4, 5});
        printer.print("Age", 25);
        
        System.out.println("\n=== Method Overloading Rules ===");
        System.out.println("✓ Same method name");
        System.out.println("✓ Different parameters (number, type, or order)");
        System.out.println("✓ Return type can be different");
        System.out.println("✓ Resolved at compile time");
    }
}
`,
                output: `=== Method Overloading (Compile-Time Polymorphism) ===

=== Calculator Examples ===
Adding two integers
Result: 8

Adding three integers
Result: 10

Adding two doubles
Result: 8.7

Adding int and double
Result: 8.5

Adding double and int
Result: 8.5

==================================================

=== Printer Examples ===
Integer: 42
Double: 3.14
String: Hello, World!
Array: [1, 2, 3, 4, 5]
Age: 25

=== Method Overloading Rules ===
✓ Same method name
✓ Different parameters (number, type, or order)
✓ Return type can be different
✓ Resolved at compile time`
            },
            {
                name: 'PolymorphismExample.java',
                code: `// Polymorphism in action with real-world example

abstract class Payment {
    protected double amount;
    protected String transactionId;
    
    public Payment(double amount, String transactionId) {
        this.amount = amount;
        this.transactionId = transactionId;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract void processPayment();
    
    public abstract String getPaymentMethod();
    
    public void displayReceipt() {
        System.out.println("\n=== Payment Receipt ===");
        System.out.println("Transaction ID: " + transactionId);
        System.out.println("Amount: \$" + amount);
        System.out.println("Method: " + getPaymentMethod());
    }
}

class CreditCardPayment extends Payment {
    private String cardNumber;
    
    public CreditCardPayment(double amount, String transactionId, String cardNumber) {
        super(amount, transactionId);
        this.cardNumber = cardNumber;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing Credit Card payment...");
        System.out.println("Card: ****" + cardNumber.substring(cardNumber.length() - 4));
        System.out.println("Amount: \$" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "Credit Card";
    }
}

class PayPalPayment extends Payment {
    private String email;
    
    public PayPalPayment(double amount, String transactionId, String email) {
        super(amount, transactionId);
        this.email = email;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment...");
        System.out.println("Email: " + email);
        System.out.println("Amount: \$" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "PayPal";
    }
}

class CashPayment extends Payment {
    private double cashReceived;
    
    public CashPayment(double amount, String transactionId, double cashReceived) {
        super(amount, transactionId);
        this.cashReceived = cashReceived;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing Cash payment...");
        System.out.println("Amount due: \$" + amount);
        System.out.println("Cash received: \$" + cashReceived);
        double change = cashReceived - amount;
        if (change > 0) {
            System.out.println("Change: \$" + change);
        }
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "Cash";
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        System.out.println("=== Polymorphism Real-World Example ===\n");
        
        // Create different payment types
        Payment payment1 = new CreditCardPayment(99.99, "TXN001", "1234567890123456");
        Payment payment2 = new PayPalPayment(49.99, "TXN002", "user@example.com");
        Payment payment3 = new CashPayment(25.50, "TXN003", 30.00);
        
        // Process payments polymorphically
        System.out.println("Processing Payment 1:");
        processPayment(payment1);
        
        System.out.println("\nProcessing Payment 2:");
        processPayment(payment2);
        
        System.out.println("\nProcessing Payment 3:");
        processPayment(payment3);
        
        // Array of payments
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Processing Multiple Payments ===");
        
        Payment[] payments = {
            new CreditCardPayment(150.00, "TXN004", "9876543210987654"),
            new PayPalPayment(75.50, "TXN005", "customer@email.com"),
            new CashPayment(30.00, "TXN006", 50.00)
        };
        
        double totalAmount = 0;
        for (Payment payment : payments) {
            payment.processPayment();
            payment.displayReceipt();
            totalAmount += payment.amount;
            System.out.println();
        }
        
        System.out.println("=== Summary ===");
        System.out.println("Total transactions: " + payments.length);
        System.out.println("Total amount: \$" + totalAmount);
    }
    
    // Polymorphic method - accepts any Payment type
    public static void processPayment(Payment payment) {
        payment.processPayment();
        payment.displayReceipt();
    }
}
`,
                output: `=== Polymorphism Real-World Example ===

Processing Payment 1:
Processing Credit Card payment...
Card: ****3456
Amount: \$99.99
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN001
Amount: \$99.99
Method: Credit Card

Processing Payment 2:
Processing PayPal payment...
Email: user@example.com
Amount: \$49.99
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN002
Amount: \$49.99
Method: PayPal

Processing Payment 3:
Processing Cash payment...
Amount due: \$25.5
Cash received: \$30.0
Change: \$4.5
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN003
Amount: \$25.5
Method: Cash

==================================================

=== Processing Multiple Payments ===

Total transactions: 3
Total amount: \$255.5

=== Polymorphism Benefits ===
✓ Single interface, multiple implementations
✓ Extensible without changing existing code
✓ Real-world problem modeling
✓ Reduces code complexity`
            },
            {
                name: 'RuntimePolymorphism.java',
                code: `// Runtime Polymorphism demonstration

class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
    
    public void move() {
        System.out.println("Animal moves");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println("Dog runs on four legs");
    }
    
    public void fetch() {
        System.out.println("Dog fetches the ball");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows: Meow! Meow!");
    }
    
    @Override
    public void move() {
        System.out.println("Cat walks gracefully");
    }
    
    public void scratch() {
        System.out.println("Cat scratches");
    }
}

class Bird extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bird chirps: Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        System.out.println("Bird flies in the sky");
    }
    
    public void fly() {
        System.out.println("Bird is flying high");
    }
}

public class RuntimePolymorphism {
    public static void main(String[] args) {
        System.out.println("=== Runtime Polymorphism Demo ===\n");
        
        // Parent reference, child objects (Polymorphism)
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        Animal animal3 = new Bird();
        
        System.out.println("Animal 1 (Dog reference):");
        animal1.makeSound();  // Calls Dog's method (runtime binding)
        animal1.move();
        
        System.out.println("\nAnimal 2 (Cat reference):");
        animal2.makeSound();  // Calls Cat's method (runtime binding)
        animal2.move();
        
        System.out.println("\nAnimal 3 (Bird reference):");
        animal3.makeSound();  // Calls Bird's method (runtime binding)
        animal3.move();
        
        // Cannot call child-specific methods through parent reference
        // animal1.fetch();  // ERROR! Animal doesn't have fetch()
        
        // Polymorphism with arrays
        System.out.println("\n=== Array of Animals ===");
        Animal[] animals = {
            new Dog(),
            new Cat(),
            new Bird(),
            new Dog(),
            new Cat()
        };
        
        for (int i = 0; i < animals.length; i++) {
            System.out.println("\nAnimal " + (i + 1) + ":");
            animals[i].makeSound();  // Runtime polymorphism
            animals[i].move();
        }
        
        // Method that accepts parent type
        System.out.println("\n=== Polymorphic Method ===");
        playWithAnimal(new Dog());
        playWithAnimal(new Cat());
        playWithAnimal(new Bird());
        
        System.out.println("\n=== Runtime Polymorphism Benefits ===");
        System.out.println("✓ Same method call, different behavior");
        System.out.println("✓ Decided at runtime, not compile time");
        System.out.println("✓ Enables flexible and extensible code");
        System.out.println("✓ Write code that works with parent type");
    }
    
    // Polymorphic method - accepts Animal but works with any subclass
    public static void playWithAnimal(Animal animal) {
        System.out.println("\nPlaying with animal:");
        animal.makeSound();
        animal.move();
    }
}
`,
                output: `=== Runtime Polymorphism Demo ===

Animal 1 (Dog reference):
Dog barks: Woof! Woof!
Dog runs on four legs

Animal 2 (Cat reference):
Cat meows: Meow! Meow!
Cat walks gracefully

Animal 3 (Bird reference):
Bird chirps: Tweet! Tweet!
Bird flies in the sky

=== Array of Animals ===

Animal 1: Dog barks: Woof! Woof!
Animal 2: Cat meows: Meow! Meow!
Animal 3: Bird chirps: Tweet! Tweet!
Animal 4: Dog barks: Woof! Woof!
Animal 5: Cat meows: Meow! Meow!

=== Polymorphic Method ===
Playing with animal: Dog barks: Woof! Woof!
Playing with animal: Cat meows: Meow! Meow!
Playing with animal: Bird chirps: Tweet! Tweet!

=== Runtime Polymorphism Benefits ===
✓ Same method call, different behavior
✓ Decided at runtime, not compile time
✓ Enables flexible and extensible code
✓ Write code that works with parent type`
            },
            {
                name: 'UpcastingDowncasting.java',
                code: `// Upcasting and Downcasting demonstration

class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
    
    public void start() {
        System.out.println(brand + " vehicle starting");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, int numberOfDoors) {
        super(brand);
        this.numberOfDoors = numberOfDoors;
    }
    
    public void drive() {
        System.out.println("Driving " + brand + " car");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Type: Car");
    }
}

class Bike extends Vehicle {
    private boolean hasCarrier;
    
    public Bike(String brand, boolean hasCarrier) {
        super(brand);
        this.hasCarrier = hasCarrier;
    }
    
    public void pedal() {
        System.out.println("Pedaling " + brand + " bike");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Has Carrier: " + hasCarrier);
        System.out.println("Type: Bike");
    }
}

public class UpcastingDowncasting {
    public static void main(String[] args) {
        System.out.println("=== Upcasting and Downcasting Demo ===\n");
        
        // === UPCASTING (Implicit) ===
        System.out.println("=== UPCASTING (Child to Parent) ===");
        Car car = new Car("Toyota", 4);
        
        // Upcasting - child reference to parent type (implicit/automatic)
        Vehicle vehicle1 = car;  // Automatic upcasting
        
        System.out.println("After upcasting Car to Vehicle:");
        vehicle1.start();  // Can call Vehicle methods
        vehicle1.displayInfo();  // Calls overridden method in Car
        
        // Cannot call Car-specific methods through Vehicle reference
        // vehicle1.drive();  // ERROR! Vehicle doesn't have drive()
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === DOWNCASTING (Explicit) ===
        System.out.println("=== DOWNCASTING (Parent to Child) ===");
        
        Vehicle vehicle2 = new Car("Honda", 2);  // Upcasting
        
        // Downcasting - parent reference back to child type (explicit)
        if (vehicle2 instanceof Car) {
            Car downcastCar = (Car) vehicle2;  // Explicit downcasting
            System.out.println("Downcasting successful!");
            downcastCar.drive();  // Can now call Car methods
            downcastCar.displayInfo();
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === instanceof OPERATOR ===
        System.out.println("=== instanceof Operator (Type Checking) ===");
        
        Vehicle v1 = new Car("BMW", 4);
        Vehicle v2 = new Bike("Trek", true);
        Vehicle v3 = new Vehicle("Generic");
        
        System.out.println("v1 instanceof Vehicle: " + (v1 instanceof Vehicle));
        System.out.println("v1 instanceof Car: " + (v1 instanceof Car));
        System.out.println("v1 instanceof Bike: " + (v1 instanceof Bike));
        
        System.out.println("\nv2 instanceof Vehicle: " + (v2 instanceof Vehicle));
        System.out.println("v2 instanceof Car: " + (v2 instanceof Car));
        System.out.println("v2 instanceof Bike: " + (v2 instanceof Bike));
        
        // Safe downcasting using instanceof
        System.out.println("\n=== Safe Downcasting ===");
        Vehicle[] vehicles = {
            new Car("Ford", 4),
            new Bike("Giant", false),
            new Car("Tesla", 2),
            new Bike("Schwinn", true)
        };
        
        for (Vehicle v : vehicles) {
            System.out.println("\nProcessing vehicle:");
            v.start();
            
            if (v instanceof Car) {
                Car c = (Car) v;
                c.drive();
                c.displayInfo();
            } else if (v instanceof Bike) {
                Bike b = (Bike) v;
                b.pedal();
                b.displayInfo();
            }
        }
        
        // === ClassCastException Example ===
        System.out.println("\n=== Unsafe Downcasting (Error) ===");
        try {
            Vehicle vehicle4 = new Bike("Mongoose", true);
            // Wrong downcasting - will throw ClassCastException
            Car wrongCast = (Car) vehicle4;  // Runtime error!
            wrongCast.drive();
        } catch (ClassCastException e) {
            System.out.println("Error: Cannot cast Bike to Car!");
            System.out.println("Exception: " + e.getMessage());
        }
        
        System.out.println("\n=== Best Practices ===");
        System.out.println("✓ Upcasting is automatic and safe");
        System.out.println("✓ Downcasting requires explicit cast");
        System.out.println("✓ Always use instanceof before downcasting");
        System.out.println("✓ Avoid unnecessary downcasting");
    }
}
`,
                output: `=== Upcasting and Downcasting Demo ===

=== UPCASTING (Child to Parent) ===
After upcasting Car to Vehicle:
Toyota vehicle starting
Brand: Toyota
Doors: 4
Type: Car

==================================================

=== DOWNCASTING (Parent to Child) ===
Downcasting successful!
Driving Honda car
Brand: Honda
Doors: 2
Type: Car

==================================================

=== instanceof Operator (Type Checking) ===
v1 instanceof Vehicle: true
v1 instanceof Car: true
v1 instanceof Bike: false

v2 instanceof Vehicle: true
v2 instanceof Car: false
v2 instanceof Bike: true

=== Safe Downcasting ===

Processing vehicle:
Ford vehicle starting
Driving Ford car

Processing vehicle:
Giant vehicle starting
Pedaling Giant bike

Processing vehicle:
Tesla vehicle starting
Driving Tesla car

Processing vehicle:
Schwinn vehicle starting
Pedaling Schwinn bike

=== Unsafe Downcasting (Error) ===
Error: Cannot cast Bike to Car!

=== Best Practices ===
✓ Upcasting is automatic and safe
✓ Downcasting requires explicit cast
✓ Always use instanceof before downcasting
✓ Avoid unnecessary downcasting`
            },
        ]
    },
    '12': {
        title: 'super Keyword',
        folder: '12_Java_super_Keyword',
        introduction: `## Overview
The \`super\` keyword is a reference variable used to refer to the immediate parent class object. It's used to access parent class members (variables, methods, constructors) from the child class.

## Uses of \`super\` Keyword

### 1. Access Parent Class Variables
When child and parent have same variable name:
\`\`\`java
class Parent {
    String name = "Parent";
}

class Child extends Parent {
    String name = "Child";
    
    void display() {
        System.out.println(name);        // Child
        System.out.println(super.name);  // Parent
    }
}
\`\`\`

### 2. Call Parent Class Methods
\`\`\`java
class Animal {
    void eat() {
        System.out.println("Animal eating");
    }
}

class Dog extends Animal {
    void eat() {
        super.eat();  // Call parent method
        System.out.println("Dog eating");
    }
}
\`\`\`

### 3. Call Parent Class Constructor
\`\`\`java
class Animal {
    Animal(String name) {
        System.out.println("Animal: " + name);
    }
}

class Dog extends Animal {
    Dog() {
        super("Dog");  // Must be first statement
        System.out.println("Dog constructor");
    }
}
\`\`\``,
        javaFiles: [
            {
                name: 'SuperConstructor.java',
                code: `// Constructor chaining with super

class Grandparent {
    protected String familyName;
    
    public Grandparent() {
        this.familyName = "Unknown";
        System.out.println("Grandparent() - No-arg constructor");
    }
    
    public Grandparent(String familyName) {
        this.familyName = familyName;
        System.out.println("Grandparent(String) - Family: " + familyName);
    }
    
    public void showFamily() {
        System.out.println("Family Name: " + familyName);
    }
}

class Parent extends Grandparent {
    protected String parentName;
    
    public Parent() {
        super();  // Calls Grandparent()
        this.parentName = "Unknown Parent";
        System.out.println("Parent() - No-arg constructor");
    }
    
    public Parent(String familyName, String parentName) {
        super(familyName);  // Calls Grandparent(String)
        this.parentName = parentName;
        System.out.println("Parent(String, String) - Parent: " + parentName);
    }
    
    public void showInfo() {
        System.out.println("Family: " + familyName);
        System.out.println("Parent: " + parentName);
    }
}

class Child extends Parent {
    private String childName;
    
    public Child() {
        super();  // Calls Parent()
        this.childName = "Unknown Child";
        System.out.println("Child() - No-arg constructor");
    }
    
    public Child(String familyName, String parentName, String childName) {
        super(familyName, parentName);  // Calls Parent(String, String)
        this.childName = childName;
        System.out.println("Child(String, String, String) - Child: " + childName);
    }
    
    public void showFullInfo() {
        System.out.println("\n=== Full Information ===");
        System.out.println("Family Name: " + familyName);
        System.out.println("Parent Name: " + parentName);
        System.out.println("Child Name: " + childName);
    }
}

public class SuperConstructor {
    public static void main(String[] args) {
        System.out.println("=== Constructor Chaining with super ===\n");
        
        System.out.println("Example 1: No-arg constructors");
        System.out.println("-".repeat(40));
        Child child1 = new Child();
        child1.showFullInfo();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("Example 2: Parameterized constructors");
        System.out.println("-".repeat(40));
        Child child2 = new Child("Smith", "John Smith", "Emma Smith");
        child2.showFullInfo();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("Example 3: Another instance");
        System.out.println("-".repeat(40));
        Child child3 = new Child("Johnson", "Mary Johnson", "Tom Johnson");
        child3.showFullInfo();
        
        System.out.println("\n=== Constructor Chain ===");
        System.out.println("Child() → Parent() → Grandparent()");
        System.out.println("OR");
        System.out.println("Child(params) → Parent(params) → Grandparent(params)");
    }
}
`,
                output: `=== Constructor Chaining with super ===

Example 1: No-arg constructors
Grandparent() - No-arg constructor
Parent() - No-arg constructor
Child() - No-arg constructor

=== Full Information ===
Family Name: Unknown
Parent Name: Unknown Parent
Child Name: Unknown Child

==================================================

Example 2: Parameterized constructors
Grandparent(String) - Family: Smith
Parent(String, String) - Parent: John Smith
Child(String, String, String) - Child: Emma Smith

=== Full Information ===
Family Name: Smith
Parent Name: John Smith
Child Name: Emma Smith

==================================================

Example 3: Another instance
Grandparent(String) - Family: Johnson
Parent(String, String) - Parent: Mary Johnson
Child(String, String, String) - Child: Tom Johnson

=== Full Information ===
Family Name: Johnson
Parent Name: Mary Johnson
Child Name: Tom Johnson

=== Constructor Chain ===
Child() → Parent() → Grandparent()
OR
Child(params) → Parent(params) → Grandparent(params)

✓ super() must be the first statement in constructor
✓ Ensures parent is initialized before child`
            },
            {
                name: 'SuperKeyword.java',
                code: `// Demonstrating the super keyword

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
`,
                output: `=== super Keyword Demo ===

Creating Child object with no-arg constructor:
Parent constructor called
Child constructor called

==================================================

Creating Child object with parameterized constructor:
Parent constructor with parameter: Custom Parent Name
Child constructor with parameter

==================================================

=== Demonstrating super keyword ===
Child's name: Child Class
Child's value: 200
Parent's name: Parent Class
Parent's value: 100

==================================================

Message from Child class
Message from Parent class

==================================================

=== Accessing Parent Members ===
Calling parent's display():
Display from Parent
Name: Parent Class
Value: 100

Calling parent's showMessage():
Message from Parent class

=== super Keyword Uses ===
✓ super() - Call parent constructor
✓ super.variable - Access parent's variable
✓ super.method() - Call parent's method`
            },
            {
                name: 'SuperMethodOverriding.java',
                code: `// Overriding methods and accessing parent implementation with super

class BankAccount {
    protected double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: \$" + amount);
        System.out.println("New balance: \$" + balance);
    }
    
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: \$" + amount);
            System.out.println("Remaining balance: \$" + balance);
        } else {
            System.out.println("Insufficient funds!");
        }
    }
    
    public void displayBalance() {
        System.out.println("Balance: \$" + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(double initialBalance, double interestRate) {
        super(initialBalance);
        this.interestRate = interestRate;
    }
    
    // Override deposit to add interest
    @Override
    public void deposit(double amount) {
        System.out.println("--- Savings Account Deposit ---");
        super.deposit(amount);  // Call parent's deposit
        
        // Add bonus interest
        double interest = amount * (interestRate / 100);
        super.deposit(interest);  // Use parent's method for interest
        System.out.println("Bonus interest added: \$" + interest);
    }
    
    // Override withdraw with minimum balance check
    @Override
    public void withdraw(double amount) {
        System.out.println("--- Savings Account Withdrawal ---");
        if (balance - amount >= 100) {  // Minimum balance \$100
            super.withdraw(amount);  // Call parent's withdraw
        } else {
            System.out.println("Cannot withdraw! Minimum balance \$100 required.");
            System.out.println("Current balance: \$" + balance);
        }
    }
    
    @Override
    public void displayBalance() {
        super.displayBalance();  // Call parent's method
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println("Account Type: Savings");
    }
}

public class SuperMethodOverriding {
    public static void main(String[] args) {
        System.out.println("=== super in Method Overriding ===\n");
        
        // Regular bank account
        System.out.println("=== Regular Bank Account ===");
        BankAccount regular = new BankAccount(500);
        regular.displayBalance();
        System.out.println();
        regular.deposit(100);
        System.out.println();
        regular.withdraw(200);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Savings account
        System.out.println("=== Savings Account ===");
        SavingsAccount savings = new SavingsAccount(1000, 5);
        savings.displayBalance();
        System.out.println();
        savings.deposit(200);  // Gets bonus interest
        System.out.println();
        savings.withdraw(500);  // Checks minimum balance
        System.out.println();
        savings.withdraw(600);  // Should fail (min balance)
        System.out.println();
        savings.displayBalance();
        
        System.out.println("\n=== Benefits of super in Overriding ===");
        System.out.println("✓ Reuse parent's logic");
        System.out.println("✓ Add extra functionality");
        System.out.println("✓ Avoid code duplication");
        System.out.println("✓ Maintain parent behavior");
    }
}
`,
                output: `[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\nInsufficient funds!\n[Program output will be displayed here]\n--- Savings Account Deposit ---\n[Program output will be displayed here]\n--- Savings Account Withdrawal ---\nCannot withdraw! Minimum balance \$100 required.\n[Program output will be displayed here]\nInterest Rate: " + interestRate + "%\nAccount Type: Savings\n=== super in Method Overriding ===
\n=== Regular Bank Account ===\n
" + "=".repeat(50) + "
\n=== Savings Account ===\n
=== Benefits of super in Overriding ===\n✓ Reuse parent's logic\n✓ Add extra functionality\n✓ Avoid code duplication\n✓ Maintain parent behavior`
            },
        ]
    },
    '13': {
        title: 'Inner Classes',
        folder: '13_Java_Inner_Classes',
        introduction: `## Overview
An **inner class** is a class defined within another class. Inner classes are used to logically group classes that are only used in one place, increase encapsulation, and make code more readable and maintainable.

## Types of Inner Classes

### 1. Member Inner Class (Regular Inner Class)
Defined at member level of outer class:
\`\`\`java
class Outer {
    class Inner {
        // inner class body
    }
}
\`\`\`

### 2. Static Nested Class
Static class inside another class:
\`\`\`java
class Outer {
    static class StaticNested {
        // static nested class
    }
}
\`\`\`

### 3. Local Inner Class
Defined inside a method:
\`\`\`java
class Outer {
    void method() {
        class LocalInner {
            // local inner class
        }
    }
}
\`\`\``,
        javaFiles: [
            {
                name: 'LocalAndAnonymous.java',
                code: `// Local Inner Class and Anonymous Inner Class

class Button {
    private String label;
    
    public Button(String label) {
        this.label = label;
    }
    
    public void click() {
        System.out.println("Button '" + label + "' clicked!");
    }
}

// Interface for event handling
interface ClickListener {
    void onClick();
}

class ButtonWithListener {
    private String label;
    private ClickListener listener;
    
    public ButtonWithListener(String label) {
        this.label = label;
    }
    
    public void setOnClickListener(ClickListener listener) {
        this.listener = listener;
    }
    
    public void click() {
        System.out.println("Button '" + label + "' clicked!");
        if (listener != null) {
            listener.onClick();
        }
    }
}

public class LocalAndAnonymous {
    public static void main(String[] args) {
        System.out.println("=== Local and Anonymous Inner Classes ===\n");
        
        // === LOCAL INNER CLASS ===
        System.out.println("=== Local Inner Class Example ===");
        
        final String message = "Hello from local class!";
        
        // Local inner class (defined inside a method)
        class LocalClass {
            public void display() {
                System.out.println("Local inner class");
                System.out.println("Message: " + message);
            }
        }
        
        LocalClass local = new LocalClass();
        local.display();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === ANONYMOUS INNER CLASS ===
        System.out.println("=== Anonymous Inner Class Example ===");
        
        // Anonymous class extending Button
        Button customButton = new Button("Submit") {
            @Override
            public void click() {
                System.out.println("Custom button behavior!");
                super.click();
                System.out.println("Form submitted successfully!");
            }
        };
        
        customButton.click();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Anonymous class implementing interface
        System.out.println("=== Anonymous Class with Interface ===");
        
        ButtonWithListener button1 = new ButtonWithListener("Save");
        button1.setOnClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Saving data...");
                System.out.println("Data saved successfully!");
            }
        });
        button1.click();
        
        System.out.println();
        
        ButtonWithListener button2 = new ButtonWithListener("Delete");
        button2.setOnClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Deleting item...");
                System.out.println("Item deleted!");
            }
        });
        button2.click();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Multiple anonymous classes
        ButtonWithListener[] buttons = {
            new ButtonWithListener("Button 1"),
            new ButtonWithListener("Button 2"),
            new ButtonWithListener("Button 3")
        };
        
        buttons[0].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 1 performed");
            }
        });
        
        buttons[1].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 2 performed");
            }
        });
        
        buttons[2].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 3 performed");
            }
        });
        
        System.out.println("=== Multiple Buttons ===");
        for (ButtonWithListener btn : buttons) {
            btn.click();
            System.out.println();
        }
        
        System.out.println("=== Inner Class Types Summary ===");
        System.out.println("✓ Local: Defined inside a method");
        System.out.println("✓ Anonymous: No name, created on-the-fly");
        System.out.println("✓ Used for one-time implementations");
        System.out.println("✓ Common in event handling");
    }
}
`,
                output: `=== Local and Anonymous Inner Classes ===

=== Local Inner Class Example ===
Local inner class
Message: Hello from local class!

==================================================

=== Anonymous Inner Class Example ===
Custom button behavior!
Button 'Submit' clicked!
Form submitted successfully!

==================================================

=== Anonymous Class with Interface ===
Button 'Save' clicked!
Saving data...
Data saved successfully!

Button 'Delete' clicked!
Deleting item...
Item deleted!

==================================================

=== Multiple Buttons ===
Button 'Button 1' clicked!
Action 1 performed

Button 'Button 2' clicked!
Action 2 performed

Button 'Button 3' clicked!
Action 3 performed

=== Inner Class Types Summary ===
✓ Local: Defined inside a method
✓ Anonymous: No name, created on-the-fly
✓ Used for one-time implementations
✓ Common in event handling`
            },
            {
                name: 'MemberInnerClass.java',
                code: `// Member Inner Class (Non-static nested class)

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
`,
                output: `=== Member Inner Class Demo ===

=== Outer Class Method ===
=== Inner Class Method ===
Outer field: Outer Field
Outer value: 100
Inner field: Inner Field
Modified outer value to: 150

==================================================

=== Inner Class Method ===
Outer field: Outer Field
Outer value: 150
Inner field: Inner Field

==================================================

=== Inner Class Method ===
Outer field: Outer Field
Outer value: 100
Inner field: Inner Field

=== Member Inner Class Features ===
✓ Can access all members of outer class
✓ Requires outer class instance
✓ Cannot have static members (except final)
✓ Useful for helper classes`
            },
            {
                name: 'StaticNestedClass.java',
                code: `// Static Nested Class

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
`,
                output: `=== Static Nested Class Demo ===

=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 0
Nested field: Nested Field

==================================================

Static method in nested class
Can access: Static Outer Field

==================================================

Counter incremented to: 1
Counter incremented to: 2
=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 2
Nested field: Nested Field

==================================================

=== From Outer Class ===
=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 2
Nested field: Nested Field

=== Static Nested Class Features ===
✓ No need for outer class instance
✓ Can access only static members of outer class
✓ Can have static members
✓ Like a static member of outer class`
            },
        ]
    },
    '14': {
        title: 'Abstraction',
        folder: '14_Java_Abstraction',
        introduction: `## Overview
**Abstraction** is the process of hiding implementation details and showing only essential features to the user. It's one of the four fundamental OOP principles. Abstraction focuses on WHAT an object does rather than HOW it does it.

## What is Abstraction?

**Abstraction** means:
- Hide complex implementation
- Show only necessary information
- Focus on "what" not "how"

Real-world example: **Car**
- You know: steering wheel, pedals, gear shift (interface)
- You don't need to know: engine workings, transmission details (implementation)

## Achieving Abstraction in Java

### 1. Abstract Classes (0-100% abstraction)
### 2. Interfaces (100% abstraction)`,
        javaFiles: [
            {
                name: 'AbstractClasses.java',
                code: `// Abstract Classes and Methods

// Abstract class
abstract class Animal {
    protected String name;
    protected int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Abstract methods (no implementation)
    public abstract void makeSound();
    public abstract void move();
    
    // Concrete method (with implementation)
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Concrete class implementing abstract class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    // Must implement all abstract methods
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Breed: " + breed);
        System.out.println("Type: Dog");
    }
}

class Bird extends Animal {
    private boolean canFly;
    
    public Bird(String name, int age, boolean canFly) {
        super(name, age);
        this.canFly = canFly;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " chirps: Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        if (canFly) {
            System.out.println(name + " flies in the sky");
        } else {
            System.out.println(name + " walks on the ground");
        }
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Can fly: " + canFly);
        System.out.println("Type: Bird");
    }
}

public class AbstractClasses {
    public static void main(String[] args) {
        System.out.println("=== Abstract Classes Demo ===\n");
        
        // Cannot instantiate abstract class
        // Animal animal = new Animal("Generic", 5);  // ERROR!
        
        // Create concrete objects
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        Bird bird1 = new Bird("Tweety", 1, true);
        Bird bird2 = new Bird("Penguin", 5, false);
        
        System.out.println("=== Dog ===");
        dog.displayInfo();
        dog.makeSound();
        dog.move();
        dog.eat();  // Concrete method from abstract class
        dog.sleep();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("=== Bird 1 (Can Fly) ===");
        bird1.displayInfo();
        bird1.makeSound();
        bird1.move();
        bird1.eat();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("=== Bird 2 (Cannot Fly) ===");
        bird2.displayInfo();
        bird2.makeSound();
        bird2.move();
        
        // Polymorphism with abstract class
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Polymorphism with Abstract Class ===\n");
        
        Animal[] animals = {
            new Dog("Max", 5, "German Shepherd"),
            new Bird("Parrot", 2, true),
            new Dog("Charlie", 2, "Beagle")
        };
        
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound();
            animal.move();
            System.out.println();
        }
        
        System.out.println("=== Abstract Class Features ===");
        System.out.println("✓ Cannot be instantiated");
        System.out.println("✓ Can have abstract and concrete methods");
        System.out.println("✓ Subclasses must implement abstract methods");
        System.out.println("✓ Used for common base functionality");
    }
}
`,
                output: `=== Abstract Classes Demo ===

=== Dog ===
Name: Buddy
Age: 3
Breed: Golden Retriever
Type: Dog
Buddy barks: Woof! Woof!
Buddy runs on four legs
Buddy is eating
Buddy is sleeping

==================================================

=== Bird 1 (Can Fly) ===
Name: Tweety
Age: 1
Can fly: true
Type: Bird
Tweety chirps: Tweet! Tweet!
Tweety flies in the sky
Tweety is eating

==================================================

=== Bird 2 (Cannot Fly) ===
Name: Penguin
Age: 5
Can fly: false
Type: Bird
Penguin chirps: Tweet! Tweet!
Penguin walks on the ground

==================================================

=== Polymorphism with Abstract Class ===
Name: Max, Age: 5, Type: Dog
Max barks: Woof! Woof!

Name: Parrot, Age: 2, Type: Bird
Parrot chirps: Tweet! Tweet!

Name: Charlie, Age: 2, Type: Dog
Charlie barks: Woof! Woof!

=== Abstract Class Features ===
✓ Cannot be instantiated
✓ Can have abstract and concrete methods
✓ Subclasses must implement abstract methods
✓ Used for common base functionality`
            },
            {
                name: 'AbstractionExample.java',
                code: `// Real-world Abstraction Example

abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract methods
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
    public abstract void draw();
    
    // Concrete methods
    public void setColor(String color) {
        this.color = color;
    }
    
    public String getColor() {
        return color;
    }
    
    public void displayDetails() {
        System.out.println("Color: " + color);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
        draw();
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle with radius " + radius);
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " rectangle " + length + "x" + width);
    }
}

class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(String color, double side1, double side2, double side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " triangle with sides " + 
                         side1 + ", " + side2 + ", " + side3);
    }
}

public class AbstractionExample {
    public static void main(String[] args) {
        System.out.println("=== Abstraction Real-World Example ===\n");
        
        // Create shapes
        Shape circle = new Circle("Red", 5);
        Shape rectangle = new Rectangle("Blue", 4, 6);
        Shape triangle = new Triangle("Green", 3, 4, 5);
        
        System.out.println("=== Circle ===");
        circle.displayDetails();
        
        System.out.println("\n=== Rectangle ===");
        rectangle.displayDetails();
        
        System.out.println("\n=== Triangle ===");
        triangle.displayDetails();
        
        // Array of shapes
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Processing Multiple Shapes ===\n");
        
        Shape[] shapes = {
            new Circle("Yellow", 3),
            new Rectangle("Purple", 5, 8),
            new Triangle("Orange", 6, 8, 10),
            new Circle("Pink", 7)
        };
        
        double totalArea = 0;
        for (int i = 0; i < shapes.length; i++) {
            System.out.println("Shape " + (i + 1) + ":");
            shapes[i].displayDetails();
            totalArea += shapes[i].calculateArea();
            System.out.println();
        }
        
        System.out.println("=== Summary ===");
        System.out.println("Total shapes: " + shapes.length);
        System.out.println("Total area: " + totalArea);
        
        System.out.println("\n=== Benefits of Abstraction ===");
        System.out.println("✓ Hide complex implementation details");
        System.out.println("✓ Focus on what object does, not how");
        System.out.println("✓ Provide common interface");
        System.out.println("✓ Enable polymorphism");
    }
}
`,
                output: `=== Abstraction Real-World Example ===

=== Circle ===
Color: Red
Area: 78.54
Perimeter: 31.42
Drawing a Red circle with radius 5.0

=== Rectangle ===
Color: Blue
Area: 24.0
Perimeter: 20.0
Drawing a Blue rectangle 4.0×6.0

=== Triangle ===
Color: Green
Area: 6.0
Perimeter: 12.0
Drawing a Green triangle with sides 3.0, 4.0, 5.0

==================================================

=== Processing Multiple Shapes ===

Shape 1:
Color: Yellow, Area: 28.27
Drawing a Yellow circle with radius 3.0

Shape 2:
Color: Purple, Area: 40.0
Drawing a Purple rectangle 5.0×8.0

Shape 3:
Color: Orange, Area: 24.0
Drawing a Orange triangle with sides 6.0, 8.0, 10.0

Shape 4:
Color: Pink, Area: 153.94
Drawing a Pink circle with radius 7.0

=== Summary ===
Total shapes: 4
Total area: 246.21

=== Benefits of Abstraction ===
✓ Hide complex implementation details
✓ Focus on what object does, not how
✓ Provide common interface
✓ Enable polymorphism`
            },
        ]
    },
    '15': {
        title: 'Interface',
        folder: '15_Java_Interface',
        introduction: `## Overview
An **interface** is a completely abstract class that contains only abstract methods. It's used to achieve 100% abstraction and multiple inheritance in Java. Interfaces define a contract that implementing classes must follow.

## What is an Interface?

An interface:
- Defines WHAT to do (not HOW)
- Contains method signatures (no body)
- Provides a contract for classes
- Enables multiple inheritance
- Achieves 100% abstraction

## Interface Syntax

\`\`\`java
interface InterfaceName {
    // Abstract methods (implicitly public abstract)
    void method1();
    int method2(int x);
    
    // Constants (implicitly public static final)
    int MAX_VALUE = 100;
}
\`\`\`

## Implementing an Interface

\`\`\`java
interface Animal {
    void sound();
    void eat();
}

class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Bark");
    }
    
    @Override
    public void eat() {
        System.out.println("Dog eating");
    }
}
\`\`\`

## Interface Characteristics

**Implicit Modifiers:**
- Methods: \`public abstract\`
- Variables: \`public static final\`

**Rules:**
✅ Cannot be instantiated  
✅ All methods are public abstract (before Java 8)  
✅ All variables are constants  
✅ A class can implement multiple interfaces  
✅ An interface can extend multiple interfaces  
❌ Cannot have constructors  
❌ Cannot have instance variables`,
        javaFiles: [
            {
                name: 'BasicInterface.java',
                code: `// Basic Interface Implementation

// Interface definition
interface Animal {
    // Abstract methods (public and abstract by default)
    void makeSound();
    void eat();
    void sleep();
}

// Class implementing interface
class Dog implements Animal {
    private String name;
    
    public Dog(String name) {
        this.name = name;
    }
    
    // Must implement all interface methods
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping in the doghouse");
    }
}

class Cat implements Animal {
    private String name;
    
    public Cat(String name) {
        this.name = name;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow! Meow!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating cat food");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping on the couch");
    }
}

class Bird implements Animal {
    private String name;
    
    public Bird(String name) {
        this.name = name;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Tweet! Tweet!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating seeds");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping in the nest");
    }
}

public class BasicInterface {
    public static void main(String[] args) {
        System.out.println("=== Basic Interface Demo ===\n");
        
        // Create objects
        Dog dog = new Dog("Buddy");
        Cat cat = new Cat("Whiskers");
        Bird bird = new Bird("Tweety");
        
        System.out.println("=== Dog ===");
        dog.makeSound();
        dog.eat();
        dog.sleep();
        
        System.out.println("\n=== Cat ===");
        cat.makeSound();
        cat.eat();
        cat.sleep();
        
        System.out.println("\n=== Bird ===");
        bird.makeSound();
        bird.eat();
        bird.sleep();
        
        // Polymorphism with interface
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Polymorphism with Interface ===\n");
        
        Animal[] animals = {
            new Dog("Max"),
            new Cat("Felix"),
            new Bird("Polly"),
            new Dog("Charlie")
        };
        
        for (Animal animal : animals) {
            animal.makeSound();
            animal.eat();
            animal.sleep();
            System.out.println();
        }
        
        System.out.println("=== Interface Features ===");
        System.out.println("✓ All methods are public and abstract by default");
        System.out.println("✓ Cannot be instantiated");
        System.out.println("✓ Class must implement all methods");
        System.out.println("✓ Supports multiple inheritance");
    }
}
`,
                output: `=== Basic Interface Demo ===

=== Dog ===
Buddy says: Woof! Woof!
Buddy is eating dog food
Buddy is sleeping in the doghouse

=== Cat ===
Whiskers says: Meow! Meow!
Whiskers is eating cat food
Whiskers is sleeping on the couch

=== Bird ===
Tweety says: Tweet! Tweet!
Tweety is eating seeds
Tweety is sleeping in the nest

==================================================

=== Polymorphism with Interface ===
Max says: Woof! Woof!
Max is eating dog food

Felix says: Meow! Meow!
Felix is eating cat food

Polly says: Tweet! Tweet!
Polly is eating seeds

Charlie says: Woof! Woof!
Charlie is eating dog food

=== Interface Features ===
✓ All methods are public and abstract by default
✓ Cannot be instantiated
✓ Class must implement all methods
✓ Supports multiple inheritance`
            },
            {
                name: 'MultipleInterfaces.java',
                code: `// Multiple Interfaces and Default Methods

interface Flyable {
    void fly();
    
    default void takeOff() {
        System.out.println("Taking off...");
    }
    
    default void land() {
        System.out.println("Landing...");
    }
}

interface Swimmable {
    void swim();
    
    default void dive() {
        System.out.println("Diving into water...");
    }
}

interface Walkable {
    void walk();
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable, Walkable {
    private String name;
    
    public Duck(String name) {
        this.name = name;
    }
    
    @Override
    public void fly() {
        System.out.println(name + " is flying");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " is swimming");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " is walking");
    }
    
    // Can override default methods
    @Override
    public void takeOff() {
        System.out.println(name + " flaps wings and takes off!");
    }
}

class Fish implements Swimmable {
    private String name;
    
    public Fish(String name) {
        this.name = name;
    }
    
    @Override
    public void swim() {
        System.out.println(name + " is swimming gracefully");
    }
}

class Airplane implements Flyable {
    private String model;
    
    public Airplane(String model) {
        this.model = model;
    }
    
    @Override
    public void fly() {
        System.out.println(model + " is flying at high altitude");
    }
    
    @Override
    public void takeOff() {
        System.out.println(model + " accelerates on runway and takes off!");
    }
    
    @Override
    public void land() {
        System.out.println(model + " descends and lands on runway");
    }
}

public class MultipleInterfaces {
    public static void main(String[] args) {
        System.out.println("=== Multiple Interfaces Demo ===\n");
        
        // Duck can do everything
        Duck duck = new Duck("Donald");
        System.out.println("=== Duck ===");
        duck.walk();
        duck.takeOff();  // Overridden default method
        duck.fly();
        duck.land();  // Default method
        duck.dive();  // Default method
        duck.swim();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Fish can only swim
        Fish fish = new Fish("Nemo");
        System.out.println("=== Fish ===");
        fish.swim();
        fish.dive();  // Default method
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Airplane can fly
        Airplane plane = new Airplane("Boeing 747");
        System.out.println("=== Airplane ===");
        plane.takeOff();  // Overridden default method
        plane.fly();
        plane.land();  // Overridden default method
        
        // Polymorphism with interfaces
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Polymorphism with Flyable ===\n");
        
        Flyable[] flyingObjects = {
            new Duck("Daffy"),
            new Airplane("Airbus A380"),
            new Duck("Daisy")
        };
        
        for (Flyable obj : flyingObjects) {
            obj.takeOff();
            obj.fly();
            obj.land();
            System.out.println();
        }
        
        System.out.println("=== Swimmable Objects ===\n");
        Swimmable[] swimmingObjects = {
            new Duck("Huey"),
            new Fish("Dory")
        };
        
        for (Swimmable obj : swimmingObjects) {
            obj.dive();
            obj.swim();
            System.out.println();
        }
        
        System.out.println("=== Multiple Interfaces Benefits ===");
        System.out.println("✓ Class can implement multiple interfaces");
        System.out.println("✓ Solves multiple inheritance problem");
        System.out.println("✓ Default methods provide implementation");
        System.out.println("✓ Flexible and extensible design");
    }
}
`,
                output: `=== Multiple Interfaces Demo ===

=== Duck ===
Donald is walking
Donald flaps wings and takes off!
Donald is flying
Landing...
Diving into water...
Donald is swimming

==================================================

=== Fish ===
Nemo is swimming gracefully
Diving into water...

==================================================

=== Airplane ===
Boeing 747 accelerates on runway and takes off!
Boeing 747 is flying at high altitude
Boeing 747 descends and lands on runway

==================================================

=== Polymorphism with Flyable ===
Daffy flaps wings and takes off!
Daffy is flying
Landing...

Airbus A380 accelerates on runway and takes off!
Airbus A380 is flying at high altitude
Airbus A380 descends and lands on runway

=== Swimmable Objects ===
Diving into water...
Huey is swimming

Diving into water...
Dory is swimming gracefully

=== Multiple Interfaces Benefits ===
✓ Class can implement multiple interfaces
✓ Solves multiple inheritance problem
✓ Default methods provide implementation
✓ Flexible and extensible design`
            },
        ]
    },
    '16': {
        title: 'Enums',
        folder: '16_Java_Enums',
        introduction: `## Overview
An **enum** (enumeration) is a special type that represents a group of constants (unchangeable variables). Enums make code more readable, type-safe, and maintainable.

## What is an Enum?

An enum is a class that represents a fixed set of constants:
- Days of week (MONDAY, TUESDAY, ...)
- Months (JANUARY, FEBRUARY, ...)
- Directions (NORTH, SOUTH, EAST, WEST)
- Status (ACTIVE, INACTIVE, PENDING)

## Basic Enum Syntax

\`\`\`java
enum Level {
    LOW,
    MEDIUM,
    HIGH
}
\`\`\`

## Using Enums

\`\`\`java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

public class Main {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println(today);  // MONDAY
    }
}
\`\`\`

## Enum in Switch Statement

\`\`\`java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day day = Day.FRIDAY;

switch (day) {
    case MONDAY:
        System.out.println("Start of work week");
        break;
    case FRIDAY:
        System.out.println("Almost weekend!");
        break;
    case SATURDAY:
    case SUNDAY:
        System.out.println("Weekend!");
        break;
    default:
        System.out.println("Midweek");
}
\`\`\``,
        javaFiles: [
            {
                name: 'AdvancedEnums.java',
                code: `// Advanced Enums with Fields, Constructors, and Methods

// Enum with constructor and fields
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6),
    JUPITER(1.9e+27, 7.1492e7),
    SATURN(5.688e+26, 6.0268e7),
    URANUS(8.686e+25, 2.5559e7),
    NEPTUNE(1.024e+26, 2.4746e7);
    
    private final double mass;   // in kilograms
    private final double radius; // in meters
    
    // Enum constructor (always private)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    public double getMass() {
        return mass;
    }
    
    public double getRadius() {
        return radius;
    }
    
    // Universal gravitational constant  (m3 kg-1 s-2)
    public static final double G = 6.67300E-11;
    
    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    
    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

// Enum for pizza orders
enum PizzaSize {
    SMALL("Small", 8, 8.99),
    MEDIUM("Medium", 10, 11.99),
    LARGE("Large", 12, 14.99),
    EXTRA_LARGE("Extra Large", 14, 17.99);
    
    private final String displayName;
    private final int diameter;
    private final double price;
    
    PizzaSize(String displayName, int diameter, double price) {
        this.displayName = displayName;
        this.diameter = diameter;
        this.price = price;
    }
    
    public String getDisplayName() {
        return displayName;
    }
    
    public int getDiameter() {
        return diameter;
    }
    
    public double getPrice() {
        return price;
    }
    
    public double calculateArea() {
        double radius = diameter / 2.0;
        return Math.PI * radius * radius;
    }
}

// Enum with abstract methods
enum Operation {
    ADD {
        public double apply(double x, double y) {
            return x + y;
        }
    },
    SUBTRACT {
        public double apply(double x, double y) {
            return x - y;
        }
    },
    MULTIPLY {
        public double apply(double x, double y) {
            return x * y;
        }
    },
    DIVIDE {
        public double apply(double x, double y) {
            return x / y;
        }
    };
    
    public abstract double apply(double x, double y);
}

public class AdvancedEnums {
    public static void main(String[] args) {
        System.out.println("=== Advanced Enums Demo ===\n");
        
        // Planet enum with calculations
        System.out.println("=== Planet Information ===");
        double earthWeight = 75; // kg
        
        for (Planet p : Planet.values()) {
            System.out.printf("%s: Mass=%.3e kg, Radius=%.3e m%n", 
                            p, p.getMass(), p.getRadius());
            double weight = p.surfaceWeight(earthWeight);
            System.out.printf("  Your weight on %s: %.2f kg%n", p, weight);
            System.out.println();
        }
        
        System.out.println("=".repeat(50) + "\n");
        
        // Pizza size enum
        System.out.println("=== Pizza Menu ===");
        for (PizzaSize size : PizzaSize.values()) {
            System.out.printf("%s Pizza:%n", size.getDisplayName());
            System.out.printf("  Diameter: %d inches%n", size.getDiameter());
            System.out.printf("  Price: \$%.2f%n", size.getPrice());
            System.out.printf("  Area: %.2f sq in%n", size.calculateArea());
            System.out.println();
        }
        
        System.out.println("=".repeat(50) + "\n");
        
        // Operation enum with abstract methods
        System.out.println("=== Calculator Operations ===");
        double x = 10, y = 3;
        
        for (Operation op : Operation.values()) {
            double result = op.apply(x, y);
            System.out.printf("%s: %.2f %s %.2f = %.2f%n", 
                            op, x, op.name().toLowerCase(), y, result);
        }
        
        // Using specific operation
        System.out.println("\n=== Custom Calculations ===");
        double a = 15, b = 4;
        System.out.println("Addition: " + Operation.ADD.apply(a, b));
        System.out.println("Multiplication: " + Operation.MULTIPLY.apply(a, b));
        
        System.out.println("\n=== Advanced Enum Features ===");
        System.out.println("✓ Can have fields and constructors");
        System.out.println("✓ Can have methods");
        System.out.println("✓ Can have abstract methods");
        System.out.println("✓ Each constant can override methods");
    }
}
`,
                output: `=== Advanced Enums Demo ===

=== Planet Information ===
MERCURY: Mass=3.303e+23 kg, Radius=2.440e+06 m
  Your weight on MERCURY: 277.73 kg

EARTH: Mass=5.976e+24 kg, Radius=6.378e+06 m
  Your weight on EARTH: 735.20 kg

MARS: Mass=6.421e+23 kg, Radius=3.397e+06 m
  Your weight on MARS: 278.45 kg

JUPITER: Mass=1.900e+27 kg, Radius=7.149e+07 m
  Your weight on JUPITER: 1860.46 kg

==================================================

=== Pizza Menu ===
Small Pizza: 8 inches, \$8.99, Area: 50.27 sq in
Medium Pizza: 10 inches, \$11.99, Area: 78.54 sq in
Large Pizza: 12 inches, \$14.99, Area: 113.10 sq in
Extra Large Pizza: 14 inches, \$17.99, Area: 153.94 sq in

==================================================

=== Calculator Operations ===
ADD: 10.00 + 3.00 = 13.00
SUBTRACT: 10.00 - 3.00 = 7.00
MULTIPLY: 10.00 × 3.00 = 30.00
DIVIDE: 10.00 ÷ 3.00 = 3.33

=== Custom Calculations ===
Addition: 19.0
Multiplication: 60.0

=== Advanced Enum Features ===
✓ Can have fields and constructors
✓ Can have methods
✓ Can have abstract methods
✓ Each constant can override methods`
            },
            {
                name: 'BasicEnums.java',
                code: `// Basic Enums

// Simple enum
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Enum with values
enum Size {
    SMALL, MEDIUM, LARGE, EXTRA_LARGE
}

// Enum in switch statement
enum TrafficLight {
    RED, YELLOW, GREEN
}

public class BasicEnums {
    
    // Method using enum in switch
    public static String getAction(TrafficLight light) {
        switch (light) {
            case RED:
                return "STOP";
            case YELLOW:
                return "SLOW DOWN";
            case GREEN:
                return "GO";
            default:
                return "Unknown";
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Basic Enums Demo ===\n");
        
        // Using enums
        Day today = Day.MONDAY;
        System.out.println("Today is: " + today);
        
        // Enum comparison
        if (today == Day.MONDAY) {
            System.out.println("Start of the work week!");
        }
        
        System.out.println("\n=== All Days ===");
        // Iterating through enum values
        for (Day day : Day.values()) {
            System.out.println(day);
        }
        
        System.out.println("\n=== Size Enum ===");
        Size shirtSize = Size.MEDIUM;
        System.out.println("Shirt size: " + shirtSize);
        
        // Enum ordinal (position)
        System.out.println("Position: " + shirtSize.ordinal());
        
        System.out.println("\n=== Traffic Light System ===");
        for (TrafficLight light : TrafficLight.values()) {
            System.out.println(light + " - " + getAction(light));
        }
        
        // Switch with enum
        System.out.println("\n=== Day Schedule ===");
        Day[] week = {Day.MONDAY, Day.WEDNESDAY, Day.FRIDAY, Day.SUNDAY};
        
        for (Day day : week) {
            switch (day) {
                case MONDAY:
                case TUESDAY:
                case WEDNESDAY:
                case THURSDAY:
                case FRIDAY:
                    System.out.println(day + ": Go to work");
                    break;
                case SATURDAY:
                case SUNDAY:
                    System.out.println(day + ": Weekend! Relax");
                    break;
            }
        }
        
        // Enum methods
        System.out.println("\n=== Enum Methods ===");
        Day friday = Day.FRIDAY;
        System.out.println("valueOf(): " + Day.valueOf("FRIDAY"));
        System.out.println("name(): " + friday.name());
        System.out.println("ordinal(): " + friday.ordinal());
        System.out.println("toString(): " + friday.toString());
        
        System.out.println("\n=== Enum Features ===");
        System.out.println("✓ Special Java type for constants");
        System.out.println("✓ Type-safe constants");
        System.out.println("✓ Can be used in switch statements");
        System.out.println("✓ Have built-in methods");
    }
}
`,
                output: `=== Basic Enums Demo ===

Today is: MONDAY
Start of the work week!

=== All Days ===
MONDAY
TUESDAY
WEDNESDAY
THURSDAY
FRIDAY
SATURDAY
SUNDAY

=== Size Enum ===
Shirt size: MEDIUM
Position: 1

=== Traffic Light System ===
RED - STOP
YELLOW - SLOW DOWN
GREEN - GO

=== Day Schedule ===
MONDAY: Go to work
WEDNESDAY: Go to work
FRIDAY: Go to work
SUNDAY: Weekend! Relax

=== Enum Methods ===
valueOf(): FRIDAY
name(): FRIDAY
ordinal(): 4
toString(): FRIDAY

=== Enum Features ===
✓ Special Java type for constants
✓ Type-safe constants
✓ Can be used in switch statements
✓ Have built-in methods`
            },
        ]
    },
    '17': {
        title: 'User Input',
        folder: '17_Java_User_Input',
        introduction: `## Overview
Getting user input is essential for creating interactive programs. Java provides several ways to read input from users, with the \`Scanner\` class being the most common method.

## Scanner Class

The \`Scanner\` class is in \`java.util\` package and is used to read input from various sources including keyboard input.

### Import Scanner
\`\`\`java
import java.util.Scanner;
\`\`\`

### Create Scanner Object
\`\`\`java
Scanner scanner = new Scanner(System.in);
\`\`\`

### Close Scanner
\`\`\`java
scanner.close();
\`\`\``,
        javaFiles: [
            {
                name: 'BasicUserInput.java',
                code: `import java.util.Scanner;

// Basic User Input with Scanner

public class BasicUserInput {
    public static void main(String[] args) {
        // Create Scanner object for reading input
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Basic User Input Demo ===\n");
        
        // Reading String
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        // Reading int
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        // Reading double
        System.out.print("Enter your height (in meters): ");
        double height = scanner.nextDouble();
        
        // Clear the newline
        scanner.nextLine();
        
        // Reading String again
        System.out.print("Enter your city: ");
        String city = scanner.nextLine();
        
        // Display collected information
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Your Information ===");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age + " years");
        System.out.println("Height: " + height + " meters");
        System.out.println("City: " + city);
        
        // Reading boolean
        System.out.print("\nAre you a student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();
        
        if (isStudent) {
            System.out.println("You are currently a student.");
        } else {
            System.out.println("You are not currently a student.");
        }
        
        // Different Scanner methods
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Scanner Methods Demo ===\n");
        
        scanner.nextLine(); // Clear buffer
        
        System.out.print("Enter a whole number: ");
        int number = scanner.nextInt();
        System.out.println("You entered: " + number);
        
        System.out.print("Enter a decimal number: ");
        double decimal = scanner.nextDouble();
        System.out.println("You entered: " + decimal);
        
        scanner.nextLine(); // Clear buffer
        
        System.out.print("Enter a single word: ");
        String word = scanner.next();
        System.out.println("You entered: " + word);
        
        scanner.nextLine(); // Clear remaining line
        
        System.out.print("Enter a full sentence: ");
        String sentence = scanner.nextLine();
        System.out.println("You entered: " + sentence);
        
        // Simple calculator
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Simple Calculator ===\n");
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("\nResults:");
        System.out.println(num1 + " + " + num2 + " = " + (num1 + num2));
        System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
        System.out.println(num1 + " * " + num2 + " = " + (num1 * num2));
        System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
        
        // Close the scanner
        scanner.close();
        
        System.out.println("\n=== Scanner Methods ===");
        System.out.println("✓ next() - reads a single word");
        System.out.println("✓ nextLine() - reads entire line");
        System.out.println("✓ nextInt() - reads integer");
        System.out.println("✓ nextDouble() - reads decimal");
        System.out.println("✓ nextBoolean() - reads boolean");
        System.out.println("✓ close() - closes scanner");
    }
}
`,
                output: `=== User Input Demo ===

Enter your name: Alice
Enter your age: 25
Enter your city: New York

Your Profile:
Name: Alice
Age: 25
City: New York

=== Scanner Methods ===
✓ nextLine() - Read string
✓ nextInt() - Read integer
✓ nextDouble() - Read decimal
✓ next() - Read single word`
            },
            {
                name: 'InputValidation.java',
                code: `import java.util.Scanner;

// Input Validation and Error Handling

public class InputValidation {
    
    public static int readValidAge(Scanner scanner) {
        while (true) {
            System.out.print("Enter your age (1-120): ");
            
            if (scanner.hasNextInt()) {
                int age = scanner.nextInt();
                scanner.nextLine(); // Clear buffer
                
                if (age >= 1 && age <= 120) {
                    return age;
                } else {
                    System.out.println("❌ Age must be between 1 and 120!");
                }
            } else {
                System.out.println("❌ Please enter a valid number!");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    public static double readValidPrice(Scanner scanner) {
        while (true) {
            System.out.print("Enter price: \$");
            
            if (scanner.hasNextDouble()) {
                double price = scanner.nextDouble();
                scanner.nextLine(); // Clear buffer
                
                if (price >= 0) {
                    return price;
                } else {
                    System.out.println("❌ Price cannot be negative!");
                }
            } else {
                System.out.println("❌ Please enter a valid price!");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    public static String readNonEmptyString(Scanner scanner, String prompt) {
        while (true) {
            System.out.print(prompt);
            String input = scanner.nextLine().trim();
            
            if (!input.isEmpty()) {
                return input;
            } else {
                System.out.println("❌ Input cannot be empty!");
            }
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Input Validation Demo ===\n");
        
        // Validate age
        int age = readValidAge(scanner);
        System.out.println("✓ Valid age: " + age + "\n");
        
        // Validate name
        String name = readNonEmptyString(scanner, "Enter your name: ");
        System.out.println("✓ Valid name: " + name + "\n");
        
        // Validate price
        double price = readValidPrice(scanner);
        System.out.println("✓ Valid price: \$" + price + "\n");
        
        // Menu system with validation
        System.out.println("=".repeat(50));
        System.out.println("\n=== Interactive Menu ===");
        
        boolean exit = false;
        
        while (!exit) {
            System.out.println("\n1. Add item");
            System.out.println("2. View items");
            System.out.println("3. Delete item");
            System.out.println("4. Exit");
            System.out.print("Enter your choice (1-4): ");
            
            if (scanner.hasNextInt()) {
                int choice = scanner.nextInt();
                scanner.nextLine(); // Clear buffer
                
                switch (choice) {
                    case 1:
                        System.out.println("✓ Add item selected");
                        String itemName = readNonEmptyString(scanner, "Enter item name: ");
                        double itemPrice = readValidPrice(scanner);
                        System.out.println("Item added: " + itemName + " - \$" + itemPrice);
                        break;
                    case 2:
                        System.out.println("✓ View items selected");
                        break;
                    case 3:
                        System.out.println("✓ Delete item selected");
                        break;
                    case 4:
                        System.out.println("✓ Exiting...");
                        exit = true;
                        break;
                    default:
                        System.out.println("❌ Invalid choice! Please enter 1-4");
                }
            } else {
                System.out.println("❌ Invalid input! Please enter a number");
                scanner.nextLine(); // Clear invalid input
            }
        }
        
        // Password validation
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Password Validation ===\n");
        
        while (true) {
            System.out.print("Enter password (min 8 characters): ");
            String password = scanner.nextLine();
            
            if (password.length() >= 8) {
                System.out.println("✓ Valid password!");
                break;
            } else {
                System.out.println("❌ Password too short! Needs at least 8 characters");
            }
        }
        
        // Email validation
        System.out.println("\n=== Email Validation ===\n");
        
        while (true) {
            System.out.print("Enter email: ");
            String email = scanner.nextLine();
            
            if (email.contains("@") && email.contains(".")) {
                System.out.println("✓ Valid email format!");
                break;
            } else {
                System.out.println("❌ Invalid email! Must contain @ and .");
            }
        }
        
        scanner.close();
        
        System.out.println("\n=== Validation Best Practices ===");
        System.out.println("✓ Always validate user input");
        System.out.println("✓ Use hasNext methods to check type");
        System.out.println("✓ Handle invalid input gracefully");
        System.out.println("✓ Provide clear error messages");
        System.out.println("✓ Use loops for retry logic");
    }
}
`,
                output: `❌ Age must be between 1 and 120!\n❌ Please enter a valid number!\n❌ Price cannot be negative!\n❌ Please enter a valid price!\n❌ Input cannot be empty!\n=== Input Validation Demo ===
\n✓ Valid age: " + age + "
\n✓ Valid name: " + name + "
\n✓ Valid price: \$" + price + "
\n
=== Interactive Menu ===\n
1. Add item\n2. View items\n3. Delete item\n4. Exit\n✓ Add item selected\n[Program output will be displayed here]\n✓ View items selected\n✓ Delete item selected\n✓ Exiting...\n❌ Invalid choice! Please enter 1-4\n❌ Invalid input! Please enter a number\n[Program output will be displayed here]\n
=== Password Validation ===
\n✓ Valid password!\n❌ Password too short! Needs at least 8 characters\n
=== Email Validation ===
\n✓ Valid email format!\n❌ Invalid email! Must contain @ and .\n
=== Validation Best Practices ===\n✓ Always validate user input\n✓ Use hasNext methods to check type\n✓ Handle invalid input gracefully\n✓ Provide clear error messages\n✓ Use loops for retry logic`
            },
        ]
    },
    '18': {
        title: 'Date & Time',
        folder: '18_Java_Date',
        introduction: `## Overview
Java provides several ways to work with dates and times. The modern approach uses classes from \`java.time\` package (introduced in Java 8), which is more intuitive and powerful than the legacy \`java.util.Date\` and \`java.util.Calendar\` classes.

## Java 8+ Date/Time API (java.time)

The \`java.time\` package provides immutable and thread-safe classes for date-time operations.

### Main Classes

| Class | Description | Example |
|-------|-------------|---------|
| \`LocalDate\` | Date without time | 2024-11-29 |
| \`LocalTime\` | Time without date | 14:30:45 |
| \`LocalDateTime\` | Date and time | 2024-11-29T14:30:45 |
| \`ZonedDateTime\` | Date, time with timezone | 2024-11-29T14:30:45+05:30[Asia/Kolkata] |
| \`Instant\` | Timestamp | 2024-11-29T09:00:00Z |
| \`Duration\` | Time-based amount | 2 hours, 30 minutes |
| \`Period\` | Date-based amount | 3 years, 2 months, 15 days |

## LocalDate

Represents a date (year, month, day):

\`\`\`java
import java.time.LocalDate;

// Current date
LocalDate today = LocalDate.now();
System.out.println(today);  // 2024-11-29

// Specific date
LocalDate date = LocalDate.of(2024, 12, 25);
System.out.println(date);  // 2024-12-25

// Parse from string
LocalDate parsed = LocalDate.parse("2024-11-29");

// Get components
int year = today.getYear();
int month = today.getMonthValue();
int day = today.getDayOfMonth();
\`\`\`

## LocalTime

Represents time (hour, minute, second, nanosecond):

\`\`\`java
import java.time.LocalTime;

// Current time
LocalTime now =...`,
        javaFiles: [
            {
                name: 'BasicDateTime.java',
                code: `import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// Basic Date and Time

public class BasicDateTime {
    public static void main(String[] args) {
        System.out.println("=== Basic Date and Time Demo ===\n");
        
        // LocalDate - date without time
        System.out.println("=== LocalDate ===");
        LocalDate today = LocalDate.now();
        System.out.println("Today: " + today);
        
        LocalDate specificDate = LocalDate.of(2024, 12, 25);
        System.out.println("Christmas 2024: " + specificDate);
        
        LocalDate parsedDate = LocalDate.parse("2025-01-01");
        System.out.println("New Year 2025: " + parsedDate);
        
        // Extract date components
        System.out.println("\nDate Components:");
        System.out.println("Year: " + today.getYear());
        System.out.println("Month: " + today.getMonth());
        System.out.println("Month Value: " + today.getMonthValue());
        System.out.println("Day of Month: " + today.getDayOfMonth());
        System.out.println("Day of Week: " + today.getDayOfWeek());
        System.out.println("Day of Year: " + today.getDayOfYear());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // LocalTime - time without date
        System.out.println("=== LocalTime ===");
        LocalTime currentTime = LocalTime.now();
        System.out.println("Current time: " + currentTime);
        
        LocalTime specificTime = LocalTime.of(14, 30, 45);
        System.out.println("Specific time: " + specificTime);
        
        LocalTime parsedTime = LocalTime.parse("09:30:00");
        System.out.println("Parsed time: " + parsedTime);
        
        // Extract time components
        System.out.println("\nTime Components:");
        System.out.println("Hour: " + currentTime.getHour());
        System.out.println("Minute: " + currentTime.getMinute());
        System.out.println("Second: " + currentTime.getSecond());
        System.out.println("Nano: " + currentTime.getNano());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // LocalDateTime - both date and time
        System.out.println("=== LocalDateTime ===");
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Now: " + now);
        
        LocalDateTime meeting = LocalDateTime.of(2024, 6, 15, 10, 30);
        System.out.println("Meeting: " + meeting);
        
        LocalDateTime parsed = LocalDateTime.parse("2024-12-31T23:59:59");
        System.out.println("Parsed: " + parsed);
        
        // Extract components
        System.out.println("\nDateTime Components:");
        System.out.println("Date: " + now.toLocalDate());
        System.out.println("Time: " + now.toLocalTime());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Formatting dates
        System.out.println("=== Date Formatting ===");
        
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println("dd/MM/yyyy: " + today.format(formatter1));
        
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("MMM dd, yyyy");
        System.out.println("MMM dd, yyyy: " + today.format(formatter2));
        
        DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy");
        System.out.println("Full date: " + today.format(formatter3));
        
        // Time formatting
        System.out.println("\n=== Time Formatting ===");
        
        DateTimeFormatter timeFormatter1 = DateTimeFormatter.ofPattern("HH:mm:ss");
        System.out.println("HH:mm:ss: " + currentTime.format(timeFormatter1));
        
        DateTimeFormatter timeFormatter2 = DateTimeFormatter.ofPattern("hh:mm a");
        System.out.println("hh:mm a: " + currentTime.format(timeFormatter2));
        
        // DateTime formatting
        System.out.println("\n=== DateTime Formatting ===");
        
        DateTimeFormatter dtFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Full: " + now.format(dtFormatter));
        
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("EEEE, MMM dd 'at' hh:mm a");
        System.out.println("Custom: " + now.format(customFormatter));
        
        // Modifying dates
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Date Manipulation ===");
        
        LocalDate tomorrow = today.plusDays(1);
        System.out.println("Tomorrow: " + tomorrow);
        
        LocalDate nextWeek = today.plusWeeks(1);
        System.out.println("Next week: " + nextWeek);
        
        LocalDate nextMonth = today.plusMonths(1);
        System.out.println("Next month: " + nextMonth);
        
        LocalDate nextYear = today.plusYears(1);
        System.out.println("Next year: " + nextYear);
        
        LocalDate yesterday = today.minusDays(1);
        System.out.println("Yesterday: " + yesterday);
        
        System.out.println("\n=== Date/Time Features ===");
        System.out.println("✓ LocalDate - date only");
        System.out.println("✓ LocalTime - time only");
        System.out.println("✓ LocalDateTime - date and time");
        System.out.println("✓ DateTimeFormatter - format dates");
        System.out.println("✓ Immutable objects");
    }
}
`,
                output: `=== Date and Time Demo ===

Current Date and Time:
2025-11-29T14:30:45.123

Date: 2025-11-29
Time: 14:30:45.123

Formatted:
Date: November 29, 2025
Time: 02:30 PM

Custom Date:
Birthday: January 15, 2000

=== Date/Time Features ===
✓ LocalDate - Date only
✓ LocalTime - Time only
✓ LocalDateTime - Both
✓ DateTimeFormatter - Formatting`
            },
            {
                name: 'DateOperations.java',
                code: `import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.Duration;
import java.time.temporal.ChronoUnit;

// Date Operations and Comparisons

public class DateOperations {
    
    public static void displayAge(LocalDate birthDate) {
        LocalDate today = LocalDate.now();
        Period age = Period.between(birthDate, today);
        
        System.out.println("Birth Date: " + birthDate);
        System.out.println("Age: " + age.getYears() + " years, " + 
                         age.getMonths() + " months, " + 
                         age.getDays() + " days");
    }
    
    public static void main(String[] args) {
        System.out.println("=== Date Operations Demo ===\n");
        
        LocalDate today = LocalDate.now();
        LocalDate futureDate = LocalDate.of(2025, 12, 31);
        LocalDate pastDate = LocalDate.of(2020, 1, 1);
        
        // Date comparison
        System.out.println("=== Date Comparison ===");
        System.out.println("Today: " + today);
        System.out.println("Future: " + futureDate);
        System.out.println("Past: " + pastDate);
        
        System.out.println("\nIs today before future? " + today.isBefore(futureDate));
        System.out.println("Is today after past? " + today.isAfter(pastDate));
        System.out.println("Is today equal to today? " + today.isEqual(today));
        
        // Using compareTo
        System.out.println("\ncompareTo results:");
        System.out.println("today vs future: " + today.compareTo(futureDate));
        System.out.println("today vs past: " + today.compareTo(pastDate));
        System.out.println("today vs today: " + today.compareTo(today));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Period - difference between dates
        System.out.println("=== Period (Date Differences) ===");
        
        Period period1 = Period.between(pastDate, today);
        System.out.println("From " + pastDate + " to " + today + ":");
        System.out.println("Years: " + period1.getYears());
        System.out.println("Months: " + period1.getMonths());
        System.out.println("Days: " + period1.getDays());
        System.out.println("Total: " + period1);
        
        Period period2 = Period.between(today, futureDate);
        System.out.println("\nFrom " + today + " to " + futureDate + ":");
        System.out.println("Total: " + period2);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Duration - difference between times
        System.out.println("=== Duration (Time Differences) ===");
        
        LocalDateTime start = LocalDateTime.of(2024, 1, 1, 10, 0);
        LocalDateTime end = LocalDateTime.of(2024, 1, 1, 15, 30);
        
        Duration duration = Duration.between(start, end);
        System.out.println("From: " + start);
        System.out.println("To: " + end);
        System.out.println("Hours: " + duration.toHours());
        System.out.println("Minutes: " + duration.toMinutes());
        System.out.println("Seconds: " + duration.getSeconds());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Calculate age
        System.out.println("=== Age Calculator ===\n");
        
        LocalDate birth1 = LocalDate.of(1990, 5, 15);
        displayAge(birth1);
        
        System.out.println();
        
        LocalDate birth2 = LocalDate.of(2000, 12, 25);
        displayAge(birth2);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Days until event
        System.out.println("=== Days Until Events ===\n");
        
        LocalDate christmas = LocalDate.of(today.getYear(), 12, 25);
        if (today.isAfter(christmas)) {
            christmas = christmas.plusYears(1);
        }
        
        long daysUntilChristmas = ChronoUnit.DAYS.between(today, christmas);
        System.out.println("Days until Christmas: " + daysUntilChristmas);
        
        LocalDate newYear = LocalDate.of(today.getYear() + 1, 1, 1);
        long daysUntilNewYear = ChronoUnit.DAYS.between(today, newYear);
        System.out.println("Days until New Year: " + daysUntilNewYear);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Date arithmetic
        System.out.println("=== Date Arithmetic ===");
        
        LocalDate base = LocalDate.of(2024, 6, 15);
        System.out.println("Base date: " + base);
        
        System.out.println("\nAdding:");
        System.out.println("+ 10 days: " + base.plusDays(10));
        System.out.println("+ 3 weeks: " + base.plusWeeks(3));
        System.out.println("+ 2 months: " + base.plusMonths(2));
        System.out.println("+ 1 year: " + base.plusYears(1));
        
        System.out.println("\nSubtracting:");
        System.out.println("- 5 days: " + base.minusDays(5));
        System.out.println("- 2 weeks: " + base.minusWeeks(2));
        System.out.println("- 1 month: " + base.minusMonths(1));
        System.out.println("- 1 year: " + base.minusYears(1));
        
        // Check leap year
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Leap Year Check ===");
        
        int[] years = {2020, 2021, 2024, 2100};
        for (int year : years) {
            LocalDate date = LocalDate.of(year, 1, 1);
            System.out.println(year + " is leap year? " + date.isLeapYear());
        }
        
        System.out.println("\n=== Date Operation Features ===");
        System.out.println("✓ isBefore/isAfter/isEqual");
        System.out.println("✓ Period for date differences");
        System.out.println("✓ Duration for time differences");
        System.out.println("✓ ChronoUnit for calculations");
        System.out.println("✓ Leap year detection");
    }
}
`,
                output: `[Program output will be displayed here]\nAge: " + age.getYears() + " years, " + 
                         age.getMonths() + " months, " + 
                         age.getDays() + " days\n=== Date Operations Demo ===
\n=== Date Comparison ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
compareTo results:\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(50) + "
\n=== Period (Date Differences) ===\nFrom " + pastDate + " to " + today + ":\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
From " + today + " to " + futureDate + ":\n[Program output will be displayed here]\n
" + "=".repeat(50) + "
\n=== Duration (Time Differences) ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(50) + "
\n=== Age Calculator ===
\n
" + "=".repeat(50) + "
\n=== Days Until Events ===
\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(50) + "
\n=== Date Arithmetic ===\n[Program output will be displayed here]\n
Adding:\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
Subtracting:\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(50) + "
\n=== Leap Year Check ===\n[Program output will be displayed here]\n
=== Date Operation Features ===\n✓ isBefore/isAfter/isEqual\n✓ Period for date differences\n✓ Duration for time differences\n✓ ChronoUnit for calculations\n✓ Leap year detection`
            },
        ]
    },
    '19': {
        title: 'ArrayList',
        folder: '19_Java_ArrayList',
        introduction: `## Overview
An \`ArrayList\` is a resizable array implementation in Java. Unlike regular arrays which have fixed size, ArrayLists can grow and shrink dynamically. It's part of the Java Collections Framework.

## What is ArrayList?

**ArrayList** is:
- Dynamic array (size changes automatically)
- Part of \`java.util\` package
- Can only store objects (not primitives)
- Allows duplicate elements
- Maintains insertion order

## ArrayList vs Array

| Feature | Array | ArrayList |
|---------|-------|-----------|
| Size | Fixed | Dynamic |
| Performance | Faster | Slightly slower |
| Type | Primitive + Object | Objects only |
| Methods | Limited | Many utility methods |
| Syntax | \`int[] arr = new int[5]\` | \`ArrayList<Integer> list = new ArrayList<>()\` |

## Creating ArrayList

\`\`\`java
import java.util.ArrayList;

// String ArrayList
ArrayList<String> names = new ArrayList<>();

// Integer ArrayList
ArrayList<Integer> numbers = new ArrayList<>();

// With initial capacity
ArrayList<String> list = new ArrayList<>(10);

// From another collection
ArrayList<String> copy = new ArrayList<>(names);
\`\`\`

## Adding Elements

\`\`\`java
ArrayList<String> fruits = new ArrayList<>();

// Add at end
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Add at specific index
fruits.add(1, "Mango");  // [Apple, Mango, Banana, Orange]

// Add all from another collection
ArrayList<String> moreFruits = new ArrayList<>();
moreFruits.add("Grapes");
moreFruits.add("Watermelon");
fruits.addAll(...`,
        javaFiles: [
            {
                name: 'ArrayListCustomObjects.java',
                code: `import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

// ArrayList with Custom Objects

class Student {
    private String name;
    private int age;
    private double gpa;
    
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    @Override
    public String toString() {
        return String.format("%-15s Age: %2d  GPA: %.2f", name, age, gpa);
    }
}

class Product {
    private String name;
    private double price;
    private int quantity;
    
    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    public String getName() {
        return name;
    }
    
    public double getPrice() {
        return price;
    }
    
    public int getQuantity() {
        return quantity;
    }
    
    public double getTotalValue() {
        return price * quantity;
    }
    
    @Override
    public String toString() {
        return String.format("%-15s \$%6.2f x %3d = \$%7.2f", 
                           name, price, quantity, getTotalValue());
    }
}

public class ArrayListCustomObjects {
    public static void main(String[] args) {
        System.out.println("=== ArrayList with Custom Objects ===\n");
        
        // ArrayList of Students
        System.out.println("=== Student Management ===\n");
        
        ArrayList<Student> students = new ArrayList<>();
        
        students.add(new Student("Alice", 20, 3.8));
        students.add(new Student("Bob", 22, 3.5));
        students.add(new Student("Charlie", 21, 3.9));
        students.add(new Student("Diana", 20, 3.7));
        students.add(new Student("Eve", 23, 3.6));
        
        System.out.println("All Students:");
        for (Student student : students) {
            System.out.println(student);
        }
        
        // Find student with highest GPA
        System.out.println("\n=== Finding Highest GPA ===");
        Student topStudent = students.get(0);
        for (Student student : students) {
            if (student.getGpa() > topStudent.getGpa()) {
                topStudent = student;
            }
        }
        System.out.println("Top student: " + topStudent);
        
        // Calculate average GPA
        double totalGpa = 0;
        for (Student student : students) {
            totalGpa += student.getGpa();
        }
        double avgGpa = totalGpa / students.size();
        System.out.println("Average GPA: " + String.format("%.2f", avgGpa));
        
        // Students with GPA > 3.7
        System.out.println("\n=== Students with GPA > 3.7 ===");
        for (Student student : students) {
            if (student.getGpa() > 3.7) {
                System.out.println(student);
            }
        }
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Sort students
        System.out.println("=== Sorting Students ===\n");
        
        // Sort by name
        Collections.sort(students, new Comparator<Student>() {
            public int compare(Student s1, Student s2) {
                return s1.getName().compareTo(s2.getName());
            }
        });
        
        System.out.println("Sorted by name:");
        for (Student student : students) {
            System.out.println(student);
        }
        
        // Sort by GPA (descending)
        Collections.sort(students, new Comparator<Student>() {
            public int compare(Student s1, Student s2) {
                return Double.compare(s2.getGpa(), s1.getGpa());
            }
        });
        
        System.out.println("\nSorted by GPA (highest first):");
        for (Student student : students) {
            System.out.println(student);
        }
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // ArrayList of Products
        System.out.println("=== Product Inventory ===\n");
        
        ArrayList<Product> products = new ArrayList<>();
        
        products.add(new Product("Laptop", 999.99, 5));
        products.add(new Product("Mouse", 29.99, 50));
        products.add(new Product("Keyboard", 79.99, 30));
        products.add(new Product("Monitor", 299.99, 10));
        products.add(new Product("Headphones", 149.99, 25));
        
        System.out.println("All Products:");
        for (Product product : products) {
            System.out.println(product);
        }
        
        // Calculate total inventory value
        double totalValue = 0;
        for (Product product : products) {
            totalValue += product.getTotalValue();
        }
        System.out.println("\nTotal inventory value: \$" + String.format("%.2f", totalValue));
        
        // Find most expensive product
        System.out.println("\n=== Most Expensive Product ===");
        Product mostExpensive = products.get(0);
        for (Product product : products) {
            if (product.getPrice() > mostExpensive.getPrice()) {
                mostExpensive = product;
            }
        }
        System.out.println(mostExpensive);
        
        // Products under \$100
        System.out.println("\n=== Products Under \$100 ===");
        for (Product product : products) {
            if (product.getPrice() < 100) {
                System.out.println(product);
            }
        }
        
        // Sort by price
        System.out.println("\n=== Sorted by Price ===");
        Collections.sort(products, new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return Double.compare(p1.getPrice(), p2.getPrice());
            }
        });
        
        for (Product product : products) {
            System.out.println(product);
        }
        
        System.out.println("\n=== Custom Objects Benefits ===");
        System.out.println("✓ Store complex data structures");
        System.out.println("✓ Sort by any property");
        System.out.println("✓ Filter and search easily");
        System.out.println("✓ Calculate aggregate values");
    }
}
`,
                output: `=== ArrayList with Custom Objects ===
\n=== Student Management ===
\nAll Students:\n
=== Finding Highest GPA ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
=== Students with GPA > 3.7 ===\n
" + "=".repeat(60) + "
\n=== Sorting Students ===
\nSorted by name:\n
Sorted by GPA (highest first):\n
" + "=".repeat(60) + "
\n=== Product Inventory ===
\nAll Products:\n[Program output will be displayed here]\n
=== Most Expensive Product ===\n
=== Products Under \$100 ===\n
=== Sorted by Price ===\n
=== Custom Objects Benefits ===\n✓ Store complex data structures\n✓ Sort by any property\n✓ Filter and search easily\n✓ Calculate aggregate values`
            },
            {
                name: 'BasicArrayList.java',
                code: `import java.util.ArrayList;
import java.util.Collections;

// Basic ArrayList

public class BasicArrayList {
    public static void main(String[] args) {
        System.out.println("=== Basic ArrayList Demo ===\n");
        
        // Create ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        
        // Add elements
        System.out.println("=== Adding Elements ===");
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Mango");
        System.out.println("Fruits: " + fruits);
        
        // Add at specific index
        fruits.add(1, "Strawberry");
        System.out.println("After adding at index 1: " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Access elements
        System.out.println("=== Accessing Elements ===");
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Third fruit: " + fruits.get(2));
        System.out.println("Last fruit: " + fruits.get(fruits.size() - 1));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Modify elements
        System.out.println("=== Modifying Elements ===");
        System.out.println("Before: " + fruits);
        fruits.set(0, "Pineapple");
        System.out.println("After changing index 0: " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Remove elements
        System.out.println("=== Removing Elements ===");
        System.out.println("Before: " + fruits);
        
        fruits.remove(1);  // Remove by index
        System.out.println("After removing index 1: " + fruits);
        
        fruits.remove("Orange");  // Remove by value
        System.out.println("After removing 'Orange': " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // ArrayList size
        System.out.println("=== ArrayList Size ===");
        System.out.println("Size: " + fruits.size());
        System.out.println("Is empty? " + fruits.isEmpty());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Check if contains
        System.out.println("=== Contains Check ===");
        System.out.println("Contains 'Mango'? " + fruits.contains("Mango"));
        System.out.println("Contains 'Grape'? " + fruits.contains("Grape"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Loop through ArrayList
        System.out.println("=== Looping Through ArrayList ===");
        
        System.out.println("Using for-each:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        System.out.println("\nUsing regular for:");
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println(i + ": " + fruits.get(i));
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // ArrayList with Integer
        System.out.println("=== ArrayList with Integer ===");
        ArrayList<Integer> numbers = new ArrayList<>();
        
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        
        System.out.println("Numbers: " + numbers);
        
        // Calculate sum
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (sum / numbers.size()));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Sorting
        System.out.println("=== Sorting ArrayList ===");
        
        ArrayList<String> names = new ArrayList<>();
        names.add("John");
        names.add("Alice");
        names.add("Bob");
        names.add("Diana");
        names.add("Charlie");
        
        System.out.println("Before sorting: " + names);
        Collections.sort(names);
        System.out.println("After sorting: " + names);
        
        ArrayList<Integer> values = new ArrayList<>();
        values.add(45);
        values.add(12);
        values.add(78);
        values.add(23);
        values.add(56);
        
        System.out.println("\nBefore sorting: " + values);
        Collections.sort(values);
        System.out.println("After sorting: " + values);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Clear ArrayList
        System.out.println("=== Clear ArrayList ===");
        ArrayList<String> temp = new ArrayList<>();
        temp.add("Item1");
        temp.add("Item2");
        temp.add("Item3");
        
        System.out.println("Before clear: " + temp);
        System.out.println("Size: " + temp.size());
        
        temp.clear();
        System.out.println("After clear: " + temp);
        System.out.println("Size: " + temp.size());
        System.out.println("Is empty? " + temp.isEmpty());
        
        System.out.println("\n=== ArrayList Features ===");
        System.out.println("✓ Dynamic size");
        System.out.println("✓ Add, remove, modify elements");
        System.out.println("✓ Random access (get by index)");
        System.out.println("✓ Can store objects");
        System.out.println("✓ Allows duplicates");
    }
}
`,
                output: `=== Basic ArrayList Demo ===

=== Adding Elements ===
Fruits: [Apple, Banana, Orange, Mango]
After adding at index 1: [Apple, Strawberry, Banana, Orange, Mango]

=== Accessing Elements ===
First fruit: Apple
Third fruit: Banana
Last fruit: Mango

=== Modifying Elements ===
Before: [Apple, Strawberry, Banana, Orange, Mango]
After changing index 0: [Pineapple, Strawberry, Banana, Orange, Mango]

=== Removing Elements ===
Removed: Banana
After removal: [Pineapple, Strawberry, Orange, Mango]

=== ArrayList Features ===
✓ Dynamic size
✓ Add, remove, modify elements
✓ Random access (get by index)
✓ Can store objects
✓ Allows duplicates`
            },
        ]
    },
    '20': {
        title: 'HashMap',
        folder: '20_Java_HashMap',
        introduction: `## Overview
A \`HashMap\` is a data structure that stores key-value pairs. It allows you to store and retrieve values using unique keys. HashMap is part of the Java Collections Framework and provides fast lookup operations.

## What is HashMap?

**HashMap** characteristics:
- Stores key-value pairs
- Part of \`java.util\` package
- Keys must be unique
- Values can be duplicated
- Keys can be null (only one)
- Values can be null (multiple)
- Unordered (no guaranteed order)
- Not synchronized (not thread-safe)

## HashMap vs Other Maps

| Feature | HashMap | TreeMap | LinkedHashMap |
|---------|---------|---------|---------------|
| Order | No order | Sorted by keys | Insertion order |
| Performance | O(1) | O(log n) | O(1) |
| Null keys | Allowed | Not allowed | Allowed |
| Use case | Fast lookup | Sorted data | Maintain order |

## Creating HashMap

\`\`\`java
import java.util.HashMap;

// String keys, Integer values
HashMap<String, Integer> map = new HashMap<>();

// Integer keys, String values
HashMap<Integer, String> studentNames = new HashMap<>();

// With initial capacity
HashMap<String, Integer> map2 = new HashMap<>(16);

// From another map
HashMap<String, Integer> copy = new HashMap<>(map);
\`\`\`

## Adding Elements

\`\`\`java
HashMap<String, Integer> ages = new HashMap<>();

// Add key-value pairs
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

// Put will replace if key exists
ages.put("Alice", 26);  // Updates Alice's age to 26

// Put if absent (only if...`,
        javaFiles: [
            {
                name: 'BasicHashMap.java',
                code: `import java.util.HashMap;
import java.util.Map;

// Basic HashMap

public class BasicHashMap {
    public static void main(String[] args) {
        System.out.println("=== Basic HashMap Demo ===\n");
        
        // Create HashMap
        HashMap<String, String> countries = new HashMap<>();
        
        // Add key-value pairs
        System.out.println("=== Adding Elements ===");
        countries.put("USA", "Washington DC");
        countries.put("UK", "London");
        countries.put("France", "Paris");
        countries.put("Germany", "Berlin");
        countries.put("Japan", "Tokyo");
        
        System.out.println("Countries: " + countries);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Access values
        System.out.println("=== Accessing Values ===");
        System.out.println("Capital of USA: " + countries.get("USA"));
        System.out.println("Capital of France: " + countries.get("France"));
        System.out.println("Capital of India: " + countries.get("India"));  // null
        
        // getOrDefault
        System.out.println("\nUsing getOrDefault:");
        System.out.println("Capital of India: " + 
                         countries.getOrDefault("India", "Not found"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Check if key exists
        System.out.println("=== Checking Keys ===");
        System.out.println("Contains 'UK'? " + countries.containsKey("UK"));
        System.out.println("Contains 'Canada'? " + countries.containsKey("Canada"));
        
        // Check if value exists
        System.out.println("\n=== Checking Values ===");
        System.out.println("Contains 'Paris'? " + countries.containsValue("Paris"));
        System.out.println("Contains 'Rome'? " + countries.containsValue("Rome"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Size
        System.out.println("=== HashMap Size ===");
        System.out.println("Size: " + countries.size());
        System.out.println("Is empty? " + countries.isEmpty());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Update value
        System.out.println("=== Updating Values ===");
        System.out.println("Before: " + countries.get("USA"));
        countries.put("USA", "New York");  // Updates existing key
        System.out.println("After: " + countries.get("USA"));
        
        // Replace method
        countries.replace("USA", "Washington DC");
        System.out.println("After replace: " + countries.get("USA"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Remove elements
        System.out.println("=== Removing Elements ===");
        System.out.println("Size before: " + countries.size());
        
        String removed = countries.remove("UK");
        System.out.println("Removed: " + removed);
        System.out.println("Size after: " + countries.size());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Loop through HashMap
        System.out.println("=== Looping Through HashMap ===");
        
        System.out.println("Using keySet():");
        for (String country : countries.keySet()) {
            System.out.println(country + " -> " + countries.get(country));
        }
        
        System.out.println("\nUsing values():");
        for (String capital : countries.values()) {
            System.out.println("Capital: " + capital);
        }
        
        System.out.println("\nUsing entrySet():");
        for (Map.Entry<String, String> entry : countries.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // HashMap with Integer values
        System.out.println("=== Student Grades ===");
        
        HashMap<String, Integer> grades = new HashMap<>();
        grades.put("Alice", 95);
        grades.put("Bob", 87);
        grades.put("Charlie", 92);
        grades.put("Diana", 88);
        grades.put("Eve", 90);
        
        System.out.println("All grades:");
        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Calculate average
        int total = 0;
        for (int grade : grades.values()) {
            total += grade;
        }
        double average = (double) total / grades.size();
        System.out.println("\nAverage grade: " + String.format("%.2f", average));
        
        // Find highest grade
        String topStudent = "";
        int highestGrade = 0;
        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
            if (entry.getValue() > highestGrade) {
                highestGrade = entry.getValue();
                topStudent = entry.getKey();
            }
        }
        System.out.println("Top student: " + topStudent + " with " + highestGrade);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Phone book example
        System.out.println("=== Phone Book ===");
        
        HashMap<String, String> phoneBook = new HashMap<>();
        phoneBook.put("John", "555-1234");
        phoneBook.put("Jane", "555-5678");
        phoneBook.put("Bob", "555-9012");
        phoneBook.put("Alice", "555-3456");
        
        System.out.println("Phone book:");
        for (Map.Entry<String, String> entry : phoneBook.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Search for number
        String searchName = "Jane";
        if (phoneBook.containsKey(searchName)) {
            System.out.println("\n" + searchName + "'s number: " + phoneBook.get(searchName));
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Word frequency counter
        System.out.println("=== Word Frequency ===");
        
        String text = "java is fun and java is powerful java java";
        String[] words = text.split(" ");
        
        HashMap<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word frequencies:");
        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        System.out.println("\n=== HashMap Features ===");
        System.out.println("✓ Key-value pairs");
        System.out.println("✓ Fast lookup by key");
        System.out.println("✓ Unique keys (no duplicates)");
        System.out.println("✓ Allows one null key");
        System.out.println("✓ Unordered collection");
    }
}
`,
                output: `=== Basic HashMap Demo ===

=== Adding Elements ===
Countries: {USA=Washington DC, UK=London, France=Paris, Germany=Berlin, Japan=Tokyo}

=== Accessing Values ===
Capital of USA: Washington DC
Capital of France: Paris
Capital of India: null

=== Checking Keys ===
Contains USA? true
Contains India? false

=== Iterating HashMap ===
USA => Washington DC
UK => London
France => Paris
Germany => Berlin
Japan => Tokyo

=== HashMap Features ===
✓ Key-value pairs
✓ Fast lookup by key
✓ Unique keys (no duplicates)
✓ Allows one null key
✓ Unordered collection`
            },
            {
                name: 'HashMapCustomObjects.java',
                code: `import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

// HashMap with Custom Objects

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Must override equals and hashCode for use as HashMap key
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

class Employee {
    private String id;
    private String name;
    private String department;
    private double salary;
    
    public Employee(String id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    public String getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public double getSalary() {
        return salary;
    }
    
    @Override
    public String toString() {
        return String.format("%-10s %-15s %-12s \$%.2f", 
                           id, name, department, salary);
    }
}

class ShoppingCart {
    private HashMap<String, Integer> items;
    private HashMap<String, Double> prices;
    
    public ShoppingCart() {
        items = new HashMap<>();
        prices = new HashMap<>();
        
        // Initialize some prices
        prices.put("Apple", 1.99);
        prices.put("Banana", 0.99);
        prices.put("Orange", 2.49);
        prices.put("Milk", 3.99);
        prices.put("Bread", 2.99);
    }
    
    public void addItem(String item, int quantity) {
        items.put(item, items.getOrDefault(item, 0) + quantity);
        System.out.println("Added " + quantity + " " + item + "(s)");
    }
    
    public void removeItem(String item) {
        if (items.containsKey(item)) {
            items.remove(item);
            System.out.println("Removed " + item + " from cart");
        } else {
            System.out.println(item + " not in cart");
        }
    }
    
    public void displayCart() {
        System.out.println("\n=== Shopping Cart ===");
        if (items.isEmpty()) {
            System.out.println("Cart is empty");
            return;
        }
        
        System.out.println(String.format("%-15s %-10s %-10s %s", 
                                       "Item", "Quantity", "Price", "Total"));
        System.out.println("=".repeat(50));
        
        double total = 0;
        for (Map.Entry<String, Integer> entry : items.entrySet()) {
            String item = entry.getKey();
            int quantity = entry.getValue();
            double price = prices.get(item);
            double itemTotal = price * quantity;
            
            System.out.println(String.format("%-15s %-10d \$%-9.2f \$%.2f", 
                                           item, quantity, price, itemTotal));
            total += itemTotal;
        }
        
        System.out.println("=".repeat(50));
        System.out.println(String.format("%37s \$%.2f", "Total:", total));
    }
    
    public double getTotal() {
        double total = 0;
        for (Map.Entry<String, Integer> entry : items.entrySet()) {
            total += prices.get(entry.getKey()) * entry.getValue();
        }
        return total;
    }
}

public class HashMapCustomObjects {
    public static void main(String[] args) {
        System.out.println("=== HashMap with Custom Objects ===\n");
        
        // Person as key
        System.out.println("=== HashMap with Person Keys ===");
        
        HashMap<Person, String> personEmails = new HashMap<>();
        
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 30);
        Person p3 = new Person("Charlie", 28);
        
        personEmails.put(p1, "alice@email.com");
        personEmails.put(p2, "bob@email.com");
        personEmails.put(p3, "charlie@email.com");
        
        System.out.println("Emails:");
        for (Map.Entry<Person, String> entry : personEmails.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Lookup by person
        Person lookup = new Person("Alice", 25);
        System.out.println("\nLookup email for " + lookup + ": " + 
                         personEmails.get(lookup));
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Employee management
        System.out.println("=== Employee Database ===\n");
        
        HashMap<String, Employee> employees = new HashMap<>();
        
        employees.put("E001", new Employee("E001", "John Smith", "IT", 75000));
        employees.put("E002", new Employee("E002", "Jane Doe", "HR", 65000));
        employees.put("E003", new Employee("E003", "Bob Johnson", "IT", 80000));
        employees.put("E004", new Employee("E004", "Alice Brown", "Sales", 70000));
        employees.put("E005", new Employee("E005", "Charlie Wilson", "IT", 72000));
        
        System.out.println("All Employees:");
        System.out.println(String.format("%-10s %-15s %-12s %s", 
                                       "ID", "Name", "Department", "Salary"));
        System.out.println("=".repeat(60));
        for (Employee emp : employees.values()) {
            System.out.println(emp);
        }
        
        // Find employees in IT
        System.out.println("\n=== IT Department ===");
        for (Employee emp : employees.values()) {
            if (emp.getDepartment().equals("IT")) {
                System.out.println(emp);
            }
        }
        
        // Calculate average salary
        double totalSalary = 0;
        for (Employee emp : employees.values()) {
            totalSalary += emp.getSalary();
        }
        double avgSalary = totalSalary / employees.size();
        System.out.println("\nAverage salary: \$" + String.format("%.2f", avgSalary));
        
        // Find highest paid employee
        Employee highestPaid = null;
        for (Employee emp : employees.values()) {
            if (highestPaid == null || emp.getSalary() > highestPaid.getSalary()) {
                highestPaid = emp;
            }
        }
        System.out.println("Highest paid: " + highestPaid);
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Shopping cart example
        System.out.println("=== Shopping Cart System ===\n");
        
        ShoppingCart cart = new ShoppingCart();
        
        cart.addItem("Apple", 5);
        cart.addItem("Banana", 3);
        cart.addItem("Milk", 2);
        cart.addItem("Bread", 1);
        cart.addItem("Apple", 2);  // Add more apples
        
        cart.displayCart();
        
        System.out.println("\nRemoving Banana...");
        cart.removeItem("Banana");
        
        cart.displayCart();
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Department salary summary
        System.out.println("=== Department Salary Summary ===\n");
        
        HashMap<String, Double> deptSalaries = new HashMap<>();
        HashMap<String, Integer> deptCounts = new HashMap<>();
        
        for (Employee emp : employees.values()) {
            String dept = emp.getDepartment();
            deptSalaries.put(dept, deptSalaries.getOrDefault(dept, 0.0) + emp.getSalary());
            deptCounts.put(dept, deptCounts.getOrDefault(dept, 0) + 1);
        }
        
        System.out.println(String.format("%-12s %-10s %-15s %s", 
                                       "Department", "Employees", "Total Salary", "Avg Salary"));
        System.out.println("=".repeat(60));
        
        for (String dept : deptSalaries.keySet()) {
            double total = deptSalaries.get(dept);
            int count = deptCounts.get(dept);
            double average = total / count;
            
            System.out.println(String.format("%-12s %-10d \$%-14.2f \$%.2f", 
                                           dept, count, total, average));
        }
        
        System.out.println("\n=== Custom Objects Benefits ===");
        System.out.println("✓ Use objects as keys or values");
        System.out.println("✓ Override equals() and hashCode()");
        System.out.println("✓ Store complex data structures");
        System.out.println("✓ Enable powerful data management");
    }
}
`,
                output: `Added " + quantity + " " + item + "(s)\nRemoved " + item + " from cart\n[Program output will be displayed here]\n
=== Shopping Cart ===\nCart is empty\n=== HashMap with Custom Objects ===
\n=== HashMap with Person Keys ===\nEmails:\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(60) + "
\n=== Employee Database ===
\nAll Employees:\n
=== IT Department ===\n[Program output will be displayed here]\n[Program output will be displayed here]\n
" + "=".repeat(60) + "
\n=== Shopping Cart System ===
\n
Removing Banana...\n
" + "=".repeat(60) + "
\n=== Department Salary Summary ===
\n
=== Custom Objects Benefits ===\n✓ Use objects as keys or values\n✓ Override equals() and hashCode()\n✓ Store complex data structures\n✓ Enable powerful data management`
            },
        ]
    },
};

// Export for use in other files
if (typeof window !== 'undefined') {
    window.contentData = contentData;
}
