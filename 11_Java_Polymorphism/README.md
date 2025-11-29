# Java Polymorphism

## Overview
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
```java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}
```

### 2. Runtime Polymorphism (Dynamic)
Resolved during execution.

#### Method Overriding
Subclass provides specific implementation of parent method.
```java
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Bark");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Meow");
    }
}
```

## Runtime Polymorphism Example

```java
Animal myAnimal;

myAnimal = new Dog();
myAnimal.sound();  // Outputs: Bark

myAnimal = new Cat();
myAnimal.sound();  // Outputs: Meow
```

**Same variable, different behaviors!**

## Upcasting

Child object referenced by parent variable:
```java
Animal a = new Dog();  // Upcasting (automatic)
a.sound();             // Calls Dog's sound()
```

## Downcasting

Parent reference to child type:
```java
Animal a = new Dog();
Dog d = (Dog) a;  // Downcasting (manual)
```

## Method Overriding Rules

✅ Same method name  
✅ Same parameters  
✅ Same or covariant return type  
✅ Cannot reduce access level  
✅ Use `@Override` annotation  

## `@Override` Annotation

Tells compiler you're overriding:
```java
@Override
public void methodName() {
    // implementation
}
```

Benefits:
- Compile-time checking
- Prevents typos
- Better documentation

## Dynamic Method Dispatch

JVM determines which method to call at runtime:
```java
class Shape {
    void draw() { }
}

class Circle extends Shape {
    void draw() { System.out.println("Drawing Circle"); }
}

class Rectangle extends Shape {
    void draw() { System.out.println("Drawing Rectangle"); }
}

Shape shape;
shape = new Circle();
shape.draw();     // Drawing Circle

shape = new Rectangle();
shape.draw();     // Drawing Rectangle
```

## Benefits of Polymorphism

✅ **Flexibility**: One interface, multiple implementations  
✅ **Extensibility**: Add new classes without changing existing code  
✅ **Maintainability**: Easier to update and manage  
✅ **Loose Coupling**: Reduced dependencies  
✅ **Code Reusability**: Use parent class references  

## Real-World Scenarios

### Payment System
```java
class Payment {
    void pay() { }
}

class CreditCard extends Payment {
    void pay() { /* credit card logic */ }
}

class PayPal extends Payment {
    void pay() { /* PayPal logic */ }
}

class Bitcoin extends Payment {
    void pay() { /* Bitcoin logic */ }
}

// Usage
Payment payment = new CreditCard();
payment.pay();  // Uses credit card payment
```

### Shape Drawing
```java
Shape[] shapes = {new Circle(), new Rectangle(), new Triangle()};

for (Shape shape : shapes) {
    shape.draw();  // Each shape draws differently
}
```

## Polymorphism vs Overloading vs Overriding

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Type | Compile-time | Runtime |
| Methods | Same name, different params | Same signature |
| Classes | Same class | Parent-child |
| Keyword | None | `@Override` |
| Performance | Faster | Slightly slower |

## instanceof Operator

Check object type before casting:
```java
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;
    dog.fetch();
}
```

## Covariant Return Type

Override method with subclass return type:
```java
class Animal {
    Animal getAnimal() { return new Animal(); }
}

class Dog extends Animal {
    @Override
    Dog getAnimal() { return new Dog(); }  // Covariant
}
```

## Best Practices

✅ Use polymorphism for behavior abstraction  
✅ Program to interfaces/superclasses  
✅ Use `@Override` annotation  
✅ Don't break parent class contracts  
✅ Keep inheritance hierarchies logical  

## Common Patterns

### Strategy Pattern
```java
interface PaymentStrategy {
    void pay(double amount);
}

// Different implementations
```

### Template Method
```java
abstract class Game {
    abstract void initialize();
    abstract void startPlay();
    abstract void endPlay();
    
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }
}
```

## Examples in This Folder
- `PolymorphismBasics.java` - Basic polymorphism concept
- `MethodOverloading.java` - Compile-time polymorphism
- `MethodOverriding.java` - Runtime polymorphism
- `DynamicMethodDispatch.java` - Runtime method resolution
- `RealWorldExample.java` - Practical polymorphism usage
