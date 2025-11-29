# Java Inheritance

## Overview
**Inheritance** is a mechanism where a new class (subclass/child) acquires properties and methods from an existing class (superclass/parent). It's a key principle of OOP that promotes code reusability.

## What is Inheritance?

Inheritance represents an "**IS-A**" relationship:
- Dog IS-A Animal
- Car IS-A Vehicle
- Student IS-A Person

### Syntax
```java
class Subclass extends Superclass {
    // additional features
}
```

## Terminology

- **Superclass/Parent/Base Class**: Class being inherited from
- **Subclass/Child/Derived Class**: Class that inherits
- **extends**: Keyword used to inherit

## Types of Inheritance

### 1. Single Inheritance
One class inherits from one superclass.
```java
class Animal { }
class Dog extends Animal { }
```

### 2. Multilevel Inheritance
Chain of inheritance.
```java
class Animal { }
class Mammal extends Animal { }
class Dog extends Mammal { }
```

### 3. Hierarchical Inheritance
Multiple classes inherit from one superclass.
```java
class Animal { }
class Dog extends Animal { }
class Cat extends Animal { }
```

**Note**: Java doesn't support multiple inheritance (one class extending multiple classes) to avoid ambiguity.

## What is Inherited?

✅ **Public members**: Accessible in subclass  
✅ **Protected members**: Accessible in subclass  
✅ **Default members**: If in same package  
❌ **Private members**: NOT inherited (but exist)  
❌ **Constructors**: NOT inherited  

## Benefits of Inheritance

✅ **Code Reusability**: Don't rewrite common code  
✅ **Method Overriding**: Change inherited behavior  
✅ **Extensibility**: Add new features easily  
✅ **Organization**: Logical class hierarchy  

## Example

```java
// Superclass
class Vehicle {
    String brand;
    
    void honk() {
        System.out.println("Beep beep!");
    }
}

// Subclass
class Car extends Vehicle {
    int doors = 4;
    
    void display() {
        System.out.println("Brand: " + brand);
        System.out.println("Doors: " + doors);
    }
}

// Usage
Car myCar = new Car();
myCar.brand = "Toyota";  // Inherited
myCar.honk();            // Inherited method
myCar.display();         // Own method
```

## Method Overriding

Subclass provides specific implementation of inherited method:

```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

## The `super` Keyword

Used to access superclass members:

```java
class Animal {
    String name = "Animal";
    
    void display() {
        System.out.println("I am an animal");
    }
}

class Dog extends Animal {
    String name = "Dog";
    
    void show() {
        System.out.println(name);        // Dog
        System.out.println(super.name);  // Animal
        super.display();                 // Calls parent method
    }
}
```

## Constructor in Inheritance

```java
class Animal {
    Animal() {
        System.out.println("Animal created");
    }
}

class Dog extends Animal {
    Dog() {
        super();  // Calls parent constructor (implicit if not written)
        System.out.println("Dog created");
    }
}
```

## `final` and Inheritance

### Final Class
Cannot be inherited.
```java
final class FinalClass { }
// class SubClass extends FinalClass { }  // ERROR
```

### Final Method
Cannot be overridden.
```java
class Parent {
    final void display() { }
}
```

## Best Practices

✅ Use inheritance for "IS-A" relationships  
✅ Favor composition over inheritance when appropriate  
✅ Keep inheritance hierarchies shallow  
✅ Use `@Override` annotation  
✅ Don't break parent class behavior  
✅ Make parent classes more general, children more specific  

## Common Mistakes

❌ Using inheritance for code reuse only (use composition)  
❌ Deep inheritance hierarchies (hard to maintain)  
❌ Violating Liskov Substitution Principle  
❌ Exposing too much in parent class  

## Real-World Examples

```
Vehicle
├── Car
├── Motorcycle
└── Truck

Animal
├── Mammal
│   ├── Dog
│   └── Cat
└── Bird
    ├── Sparrow
    └── Eagle

Shape
├── Circle
├── Rectangle
└── Triangle
```

## Examples in This Folder
- `InheritanceBasics.java` - Basic inheritance
- `MultilevelInheritance.java` - Chain of inheritance
- `MethodOverriding.java` - Overriding parent methods
- `SuperKeyword.java` - Using `super`
- `ConstructorInheritance.java` - Constructors in inheritance
