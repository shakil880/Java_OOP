# Java Interface

## Overview
An **interface** is a completely abstract class that contains only abstract methods. It's used to achieve 100% abstraction and multiple inheritance in Java. Interfaces define a contract that implementing classes must follow.

## What is an Interface?

An interface:
- Defines WHAT to do (not HOW)
- Contains method signatures (no body)
- Provides a contract for classes
- Enables multiple inheritance
- Achieves 100% abstraction

## Interface Syntax

```java
interface InterfaceName {
    // Abstract methods (implicitly public abstract)
    void method1();
    int method2(int x);
    
    // Constants (implicitly public static final)
    int MAX_VALUE = 100;
}
```

## Implementing an Interface

```java
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
```

## Interface Characteristics

**Implicit Modifiers:**
- Methods: `public abstract`
- Variables: `public static final`

**Rules:**
✅ Cannot be instantiated  
✅ All methods are public abstract (before Java 8)  
✅ All variables are constants  
✅ A class can implement multiple interfaces  
✅ An interface can extend multiple interfaces  
❌ Cannot have constructors  
❌ Cannot have instance variables  

## Multiple Inheritance

Class can implement multiple interfaces:
```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck swimming");
    }
}
```

## Interface Extending Interface

```java
interface Animal {
    void eat();
}

interface Mammal extends Animal {
    void breathe();
}

class Dog implements Mammal {
    public void eat() {
        System.out.println("Eating");
    }
    
    public void breathe() {
        System.out.println("Breathing");
    }
}
```

## Interface Variables

All variables are constants:
```java
interface Constants {
    int MAX_SIZE = 100;        // public static final
    String APP_NAME = "MyApp";
    double PI = 3.14159;
}

// Access
System.out.println(Constants.MAX_SIZE);
```

## Default Methods (Java 8+)

Methods with implementation in interface:
```java
interface Vehicle {
    // Abstract method
    void start();
    
    // Default method
    default void honk() {
        System.out.println("Beep beep!");
    }
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car starting");
    }
    // honk() is inherited, no need to override
}
```

## Static Methods (Java 8+)

```java
interface MathUtil {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
}

// Usage
int sum = MathUtil.add(5, 3);
```

## Private Methods (Java 9+)

Helper methods in interface:
```java
interface Calculator {
    default int addAndPrint(int a, int b) {
        int result = add(a, b);
        print(result);
        return result;
    }
    
    private int add(int a, int b) {
        return a + b;
    }
    
    private void print(int value) {
        System.out.println("Result: " + value);
    }
}
```

## Functional Interfaces

Interface with single abstract method:
```java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

// Used with lambda expressions
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
```

## Marker Interfaces

Empty interface (no methods):
```java
interface Serializable {
    // No methods - just a marker
}

class MyClass implements Serializable {
    // Now serializable
}
```

Common marker interfaces:
- `Serializable`
- `Cloneable`
- `Remote`

## Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|----------------|
| Methods | Abstract (mostly) | Abstract + Concrete |
| Variables | Constants only | Any type |
| Inheritance | Multiple | Single |
| Constructor | No | Yes |
| Access Modifiers | Public | Any |
| When to use | "CAN-DO" | "IS-A" |
| Abstraction | 100% | 0-100% |

## Real-World Examples

### 1. Payment System
```java
interface Payment {
    void processPayment(double amount);
    boolean validatePayment();
}

class CreditCardPayment implements Payment {
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via credit card");
    }
    
    public boolean validatePayment() {
        return true;  // Validation logic
    }
}

class PayPalPayment implements Payment {
    public void processPayment(double amount) {
        System.out.println("Processing $" + amount + " via PayPal");
    }
    
    public boolean validatePayment() {
        return true;
    }
}
```

### 2. Shape Hierarchy
```java
interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

class Circle implements Shape {
    double radius;
    
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}
```

## Benefits of Interfaces

✅ **Multiple Inheritance**: Implement many interfaces  
✅ **Loose Coupling**: Depend on abstraction  
✅ **Polymorphism**: One interface, many implementations  
✅ **Testability**: Easy to mock  
✅ **Flexibility**: Change implementation easily  
✅ **Contract**: Define what class must do  

## Common Interface Patterns

### 1. Comparable
```java
class Student implements Comparable<Student> {
    int marks;
    
    public int compareTo(Student other) {
        return this.marks - other.marks;
    }
}
```

### 2. Runnable
```java
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task running");
    }
}

Thread t = new Thread(new MyTask());
t.start();
```

### 3. ActionListener (GUI)
```java
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked");
    }
});
```

## When to Use Interface?

Use interface when:
- Unrelated classes implement same method
- Want multiple inheritance
- Specify behavior without implementation
- Create a contract
- Use with lambda expressions (functional interface)

## Best Practices

✅ Name interfaces with adjectives (Runnable, Serializable, Comparable)  
✅ Keep interfaces small and focused  
✅ Use for capabilities, not classification  
✅ Prefer interface over abstract class for flexibility  
✅ Use `@FunctionalInterface` for single method  
✅ Document expected behavior  

## Interface Segregation Principle

Split large interfaces into smaller ones:
```java
// Bad
interface Worker {
    void work();
    void eat();
    void sleep();
}

// Good
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

interface Sleepable {
    void sleep();
}
```

## Examples in This Folder
- `InterfaceBasics.java` - Basic interface usage
- `MultipleInheritance.java` - Implementing multiple interfaces
- `DefaultMethods.java` - Default and static methods
- `FunctionalInterface.java` - Functional interfaces and lambdas
- `RealWorldExample.java` - Payment system example
