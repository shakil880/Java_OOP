# Java Constructors

## Overview
A **constructor** is a special method that is automatically called when an object is created. It initializes the object's attributes and prepares the object for use.

## Key Characteristics

- Same name as the class
- No return type (not even void)
- Called automatically with `new` keyword
- Used to initialize objects
- Every class has a constructor

## Constructor Syntax
```java
class ClassName {
    // Constructor
    ClassName() {
        // initialization code
    }
}
```

## Types of Constructors

### 1. Default Constructor (No Parameters)
```java
class Car {
    Car() {
        System.out.println("Car created!");
    }
}
```

### 2. Parameterized Constructor
```java
class Car {
    String brand;
    
    Car(String b) {
        brand = b;
    }
}
```

### 3. No-Args Constructor (Provided by Java)
- If you don't write any constructor, Java provides one automatically
- Initializes attributes to default values

## Multiple Constructors (Overloading)

A class can have multiple constructors with different parameters:

```java
class Person {
    String name;
    int age;
    
    // Constructor 1
    Person() {
        name = "Unknown";
        age = 0;
    }
    
    // Constructor 2
    Person(String n) {
        name = n;
        age = 0;
    }
    
    // Constructor 3
    Person(String n, int a) {
        name = n;
        age = a;
    }
}
```

## Using `this` Keyword

`this` refers to the current object:

```java
class Student {
    String name;
    
    Student(String name) {
        this.name = name;  // this.name is attribute
    }
}
```

## Constructor Chaining

One constructor calling another:

```java
class Employee {
    String name;
    int id;
    
    Employee() {
        this("Unknown", 0);  // Calls parameterized constructor
    }
    
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
}
```

## Constructor vs Method

| Constructor | Method |
|-------------|--------|
| Same name as class | Any valid name |
| No return type | Has return type |
| Called automatically | Called explicitly |
| Initializes object | Performs action |
| Cannot be inherited | Can be inherited |

## Creating Objects with Constructors

```java
// Using default constructor
Car car1 = new Car();

// Using parameterized constructor
Car car2 = new Car("Toyota");
Car car3 = new Car("Honda", 2024);
```

## Default Values Without Constructor

If no constructor is defined:
- Numbers: 0
- Boolean: false
- Objects: null

## Best Practices

✅ Initialize all important attributes  
✅ Validate parameters if needed  
✅ Keep constructors simple  
✅ Use constructor overloading when helpful  
✅ Use `this` to avoid naming conflicts  
✅ Document complex initialization logic  

## Common Patterns

### 1. Initialization Pattern
```java
Person(String name, int age) {
    this.name = name;
    this.age = age;
}
```

### 2. Validation Pattern
```java
Person(int age) {
    if (age >= 0) {
        this.age = age;
    } else {
        this.age = 0;
    }
}
```

### 3. Default Values Pattern
```java
Car() {
    brand = "Unknown";
    year = 2024;
    price = 0.0;
}
```

## Important Points

🔹 Constructors initialize objects  
🔹 Called automatically when object is created  
🔹 No return type (not even void)  
🔹 Same name as class  
🔹 Can be overloaded  
🔹 Use `this` to refer to current object  
🔹 Java provides default constructor if none defined  

## When to Use Constructors

✓ Setting initial values for attributes  
✓ Validating input data  
✓ Allocating resources  
✓ Performing setup operations  
✓ Ensuring object is in valid state  

## Examples in This Folder
- `ConstructorBasics.java` - Basic constructor usage
- `ParameterizedConstructor.java` - Constructors with parameters
- `ConstructorOverloading.java` - Multiple constructors
- `ThisKeyword.java` - Using `this` in constructors
