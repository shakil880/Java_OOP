# Java Abstraction

## Overview
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
### 2. Interfaces (100% abstraction)

## Abstract Classes

Class declared with `abstract` keyword:
- Cannot be instantiated (no objects)
- May contain abstract methods (no body)
- May contain concrete methods (with body)
- Can have constructors, fields, methods

### Syntax
```java
abstract class ClassName {
    // abstract method (no body)
    abstract void methodName();
    
    // concrete method (with body)
    void concreteMethod() {
        // implementation
    }
}
```

## Abstract Methods

Method declared without implementation:
```java
abstract void draw();  // No body
abstract int calculate(int x, int y);
```

**Rules:**
- Must be in abstract class
- Must be overridden by subclass
- Cannot be static, final, or private

## Concrete Methods in Abstract Class

```java
abstract class Animal {
    // Abstract method
    abstract void sound();
    
    // Concrete method
    void sleep() {
        System.out.println("Sleeping...");
    }
}
```

## Implementing Abstract Class

```java
abstract class Shape {
    abstract void draw();
    abstract double calculateArea();
}

class Circle extends Shape {
    double radius;
    
    Circle(double r) {
        radius = r;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
    
    @Override
    double calculateArea() {
        return 3.14 * radius * radius;
    }
}
```

## Abstract Class Characteristics

✅ Can have constructors  
✅ Can have static methods  
✅ Can have final methods  
✅ Can have instance variables  
✅ Can extend one class  
✅ Can implement multiple interfaces  
❌ Cannot create objects directly  
❌ Abstract methods cannot be private  

## When to Use Abstract Classes?

Use when:
- Classes share common behavior
- Want to provide default implementation
- Have state (instance variables)
- Need constructors
- Want to use access modifiers other than public

## Abstract Class vs Concrete Class

| Feature | Abstract Class | Concrete Class |
|---------|----------------|----------------|
| Instantiation | Cannot create objects | Can create objects |
| Abstract methods | May have | Cannot have |
| Purpose | Base class | Complete implementation |
| Keyword | `abstract` | None |

## Real-World Example

```java
abstract class BankAccount {
    protected double balance;
    
    BankAccount(double balance) {
        this.balance = balance;
    }
    
    // Abstract methods - must be implemented
    abstract void deposit(double amount);
    abstract void withdraw(double amount);
    
    // Concrete method - common to all accounts
    void displayBalance() {
        System.out.println("Balance: $" + balance);
    }
}

class SavingsAccount extends BankAccount {
    SavingsAccount(double balance) {
        super(balance);
    }
    
    @Override
    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
    }
    
    @Override
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        }
    }
}
```

## Constructor in Abstract Class

```java
abstract class Vehicle {
    String brand;
    
    // Constructor
    Vehicle(String brand) {
        this.brand = brand;
        System.out.println("Vehicle constructor");
    }
    
    abstract void start();
}

class Car extends Vehicle {
    Car(String brand) {
        super(brand);  // Call abstract class constructor
    }
    
    @Override
    void start() {
        System.out.println(brand + " car starting");
    }
}
```

## Multiple Levels of Abstraction

```java
abstract class Animal {
    abstract void sound();
}

abstract class Mammal extends Animal {
    abstract void feed();
}

class Dog extends Mammal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
    
    @Override
    void feed() {
        System.out.println("Feeding milk");
    }
}
```

## Benefits of Abstraction

✅ **Security**: Hide sensitive data  
✅ **Simplicity**: Show only relevant details  
✅ **Maintainability**: Change implementation without affecting users  
✅ **Code Reusability**: Share common code  
✅ **Flexibility**: Easy to extend  

## Abstract Class with All Concrete Methods

Valid but not recommended:
```java
abstract class MyClass {
    void method1() { }
    void method2() { }
}
// No abstract methods, but class is abstract
```

## final vs abstract

Cannot use together:
```java
// ERROR: Cannot be both
abstract final class MyClass { }

// ERROR: Cannot override
abstract class Parent {
    final abstract void method();  // ERROR
}
```

## Best Practices

✅ Use meaningful names for abstract classes  
✅ Keep abstract methods focused  
✅ Provide default implementations when possible  
✅ Document expected behavior  
✅ Use abstract class for "IS-A" relationships  
✅ Use interface for "CAN-DO" capabilities  

## Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Methods | Abstract + Concrete | Abstract (mostly) |
| Variables | Any type | public static final |
| Inheritance | Extends one | Implements multiple |
| Access Modifiers | Any | public only |
| Constructor | Yes | No |
| When to use | Common base | Contract/capability |

## Common Use Cases

1. **Template Method Pattern**
```java
abstract class Game {
    abstract void initialize();
    abstract void startPlay();
    abstract void endPlay();
    
    // Template method
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }
}
```

2. **Common Base Class**
```java
abstract class Employee {
    abstract double calculateSalary();
    // Common methods
}
```

3. **Partial Implementation**
```java
abstract class HttpServlet {
    // Some methods implemented
    // Some abstract for subclasses
}
```

## Examples in This Folder
- `AbstractClassBasics.java` - Basic abstract class usage
- `AbstractMethods.java` - Abstract and concrete methods
- `ShapeExample.java` - Shape hierarchy with abstraction
- `BankAccountExample.java` - Real-world banking system
- `TemplateMethodPattern.java` - Design pattern example
