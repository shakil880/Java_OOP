# Java `super` Keyword

## Overview
The `super` keyword is a reference variable used to refer to the immediate parent class object. It's used to access parent class members (variables, methods, constructors) from the child class.

## Uses of `super` Keyword

### 1. Access Parent Class Variables
When child and parent have same variable name:
```java
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
```

### 2. Call Parent Class Methods
```java
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
```

### 3. Call Parent Class Constructor
```java
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
```

## super vs this

| Feature | `super` | `this` |
|---------|---------|--------|
| Refers to | Parent class | Current class |
| Variables | `super.variable` | `this.variable` |
| Methods | `super.method()` | `this.method()` |
| Constructor | `super()` | `this()` |

## Constructor Chaining

### Implicit super()
If not specified, Java automatically calls `super()`:
```java
class Child extends Parent {
    Child() {
        // super(); is automatically added here
        System.out.println("Child");
    }
}
```

### Explicit super()
Call specific parent constructor:
```java
class Parent {
    Parent(int x) {
        System.out.println("Parent: " + x);
    }
}

class Child extends Parent {
    Child() {
        super(10);  // Must be first line
        System.out.println("Child");
    }
}
```

## Important Rules

🔹 `super()` must be the first statement in constructor  
🔹 Cannot use `super` in static context  
🔹 `super` and `this()` cannot be used together in same constructor  
🔹 If parent has no no-arg constructor, child must call parameterized constructor  

## Method Overriding with super

```java
class Vehicle {
    void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    @Override
    void start() {
        super.start();  // Call parent implementation
        System.out.println("Car starting");
    }
}
```

## Access Parent's Parent

Can't directly access grandparent:
```java
class GrandParent {
    int value = 100;
}

class Parent extends GrandParent {
    int value = 50;
}

class Child extends Parent {
    int value = 25;
    
    void display() {
        System.out.println(value);        // 25 (child)
        System.out.println(super.value);  // 50 (parent)
        // Cannot access GrandParent directly
    }
}
```

## Real-World Example

```java
class Employee {
    String name;
    double salary;
    
    Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
    }
}

class Manager extends Employee {
    String department;
    
    Manager(String name, double salary, String dept) {
        super(name, salary);  // Initialize parent attributes
        this.department = dept;
    }
    
    @Override
    void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Department: " + department);
    }
}
```

## Benefits

✅ Avoid code duplication  
✅ Reuse parent class code  
✅ Maintain inheritance hierarchy  
✅ Extend parent functionality  
✅ Clear intention in code  

## Common Use Cases

### 1. Extending Functionality
```java
@Override
void method() {
    super.method();  // Do parent work
    // Add extra functionality
}
```

### 2. Constructor Initialization
```java
Child(int a, int b, int c) {
    super(a, b);  // Initialize parent part
    this.c = c;   // Initialize child part
}
```

### 3. Accessing Hidden Members
```java
void display() {
    System.out.println(super.hiddenVariable);
    super.hiddenMethod();
}
```

## Best Practices

✅ Use `super()` explicitly when parent has no no-arg constructor  
✅ Call `super.method()` when extending, not replacing  
✅ Document when using super for clarity  
✅ Keep constructor chains simple  

## Common Mistakes

❌ Forgetting `super()` as first statement  
❌ Using `super` in static methods  
❌ Trying to access grandparent directly  
❌ Using both `super()` and `this()` in same constructor  

## Examples in This Folder
- `SuperBasics.java` - Basic super keyword usage
- `SuperWithVariables.java` - Accessing parent variables
- `SuperWithMethods.java` - Calling parent methods
- `SuperWithConstructors.java` - Constructor chaining
- `RealWorldExample.java` - Practical super usage
