# Java `this` Keyword

## Overview
The `this` keyword is a reference variable that refers to the current object. It can be used to access instance variables, call methods, and call constructors of the current class.

## Uses of `this` Keyword

### 1. Refer to Instance Variables
When parameter names match attribute names:
```java
class Person {
    String name;
    
    Person(String name) {
        this.name = name;  // this.name is attribute, name is parameter
    }
}
```

### 2. Call Current Class Method
```java
class Calculator {
    void display() {
        this.show();  // Calls show() of current object
    }
    
    void show() {
        System.out.println("Hello");
    }
}
```

### 3. Call Current Class Constructor
```java
class Student {
    Student() {
        this(0);  // Calls parameterized constructor
    }
    
    Student(int id) {
        // Initialize
    }
}
```

### 4. Pass as Argument
```java
method(this);  // Pass current object
```

### 5. Return Current Object
```java
Student getStudent() {
    return this;
}
```

## Why Use `this`?

✅ **Clarity**: Makes code more readable  
✅ **Disambiguation**: Resolves naming conflicts  
✅ **Constructor Chaining**: Reduces code duplication  
✅ **Method Chaining**: Return current object for fluent APIs  

## Common Scenarios

### Resolving Ambiguity
```java
class Box {
    int width;
    
    void setWidth(int width) {
        this.width = width;  // Clear distinction
    }
}
```

### Constructor Chaining
```java
class Employee {
    Employee() {
        this("Unknown", 0);
    }
    
    Employee(String name, int id) {
        // Initialize
    }
}
```

## Important Rules

🔹 `this()` must be the first statement in constructor  
🔹 Cannot use `this` in static context  
🔹 `this` refers to the current object instance  
🔹 Every non-static method has implicit `this` parameter  

## Examples in This Folder
- `ThisBasics.java` - Basic usage of `this`
- `ThisInConstructor.java` - `this` in constructors
- `ConstructorChaining.java` - Constructor chaining with `this()`
- `MethodChaining.java` - Method chaining pattern
