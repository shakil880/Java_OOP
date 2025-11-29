# Java Class Attributes

## Overview
Attributes are variables declared inside a class. They represent the **state** or **properties** of an object. Attributes are also called **fields**, **properties**, or **instance variables**.

## Declaration Syntax
```java
class ClassName {
    dataType attributeName;
}
```

## Types of Attributes

### 1. Instance Variables (Non-Static)
- Belong to each object
- Each object has its own copy
- Different values for different objects

```java
class Person {
    String name;  // Instance variable
    int age;      // Instance variable
}
```

### 2. Static Variables (Class Variables)
- Belong to the class, not objects
- Shared among all objects
- Same value for all objects

```java
class Counter {
    static int count = 0;  // Static variable
}
```

## Default Values

If not initialized, attributes get default values:

| Data Type | Default Value |
|-----------|---------------|
| int, short, long | 0 |
| float, double | 0.0 |
| boolean | false |
| char | '\u0000' |
| Reference (Object) | null |

## Accessing Attributes

### Setting Values
```java
objectName.attributeName = value;
```

### Getting Values
```java
value = objectName.attributeName;
```

## Modifying Attributes

Attributes can be:
- Set when object is created
- Modified anytime during program execution
- Accessed by methods within the class

```java
Car myCar = new Car();
myCar.brand = "Toyota";  // Setting
String b = myCar.brand;  // Getting
myCar.brand = "Honda";   // Modifying
```

## Final Attributes

Use `final` keyword to create constants:
```java
class Circle {
    final double PI = 3.14159;  // Cannot be changed
}
```

## Best Practices

✅ Use meaningful attribute names  
✅ Follow naming conventions (camelCase)  
✅ Initialize attributes when possible  
✅ Make attributes private (encapsulation)  
✅ Use appropriate data types  

## Common Patterns

### 1. Attribute Initialization
```java
class Product {
    String name = "Unknown";  // Direct initialization
    int stock = 0;
}
```

### 2. Multiple Attributes of Same Type
```java
class Rectangle {
    int length, width, height;
}
```

### 3. Grouping Related Attributes
```java
class Employee {
    // Personal info
    String name;
    int age;
    
    // Work info
    String department;
    double salary;
}
```

## Important Points

🔹 Attributes define what an object **is** (state)  
🔹 Methods define what an object **does** (behavior)  
🔹 Each object has its own copy of instance attributes  
🔹 Static attributes are shared across all objects  
🔹 Uninitialized attributes get default values  
🔹 Attributes can be of any data type  

## Examples in This Folder
- `AttributeBasics.java` - Basic attribute usage
- `InstanceVsStatic.java` - Instance vs static attributes
- `DefaultValues.java` - Default attribute values
- `ModifyingAttributes.java` - Changing attribute values
