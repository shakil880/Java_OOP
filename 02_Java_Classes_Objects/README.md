# Java Classes and Objects

## Overview
A **class** is a template or blueprint for creating objects. An **object** is an instance of a class. When a class is created, no memory is allocated until an object is instantiated.

## What is a Class?

A class is a user-defined data type that contains:
- **Attributes** (variables/fields): Define the state
- **Methods** (functions): Define the behavior

### Class Syntax
```java
class ClassName {
    // Attributes (fields)
    dataType attributeName;
    
    // Methods
    returnType methodName() {
        // method body
    }
}
```

## What is an Object?

An object is a real-world entity that has:
- **State**: Represented by attributes
- **Behavior**: Represented by methods
- **Identity**: Unique name/reference

### Creating Objects
```java
ClassName objectName = new ClassName();
```

**Parts of object creation:**
1. **ClassName**: Type of object
2. **objectName**: Reference variable
3. **new**: Keyword to allocate memory
4. **ClassName()**: Constructor call

## Accessing Members

### Accessing Attributes
```java
objectName.attributeName = value;  // Set
value = objectName.attributeName;   // Get
```

### Calling Methods
```java
objectName.methodName();
```

## Multiple Objects

You can create multiple objects from the same class. Each object has its own copy of attributes but shares the same methods.

```java
Car car1 = new Car();
Car car2 = new Car();
// car1 and car2 are independent objects
```

## Important Concepts

### 1. Class vs Object
- **Class**: Blueprint (like a house plan)
- **Object**: Instance (like an actual house)

### 2. Memory Allocation
- Class definition doesn't use memory
- Memory is allocated when object is created
- Each object gets its own memory space

### 3. Reference Variables
- Object variables store references (addresses)
- They don't store the actual object

### 4. Dot Operator (.)
- Used to access members of a class
- Syntax: `object.member`

## Real-World Examples

| Class | Objects | Attributes | Methods |
|-------|---------|------------|---------|
| Car | myCar, yourCar | brand, color, speed | drive(), brake() |
| Student | student1, student2 | name, age, grade | study(), attendClass() |
| Phone | iPhone, Samsung | model, price, color | call(), sendMessage() |

## Key Points to Remember

✅ A class is a blueprint, an object is an instance  
✅ Use `new` keyword to create objects  
✅ Each object has independent attribute values  
✅ Objects share class methods  
✅ Use dot operator to access members  
✅ You can create unlimited objects from one class  

## Common Mistakes to Avoid

❌ Forgetting `new` keyword when creating objects  
❌ Trying to use a class without creating an object  
❌ Confusing class name with object name  
❌ Not initializing attributes before use  

## Practice Tips

1. Create a class for a real-world entity
2. Add 3-4 relevant attributes
3. Add 2-3 meaningful methods
4. Create multiple objects and test them
5. Experiment with different values

## Examples in This Folder
- `BasicClassAndObject.java` - Simple class and object creation
- `MultipleObjects.java` - Creating multiple objects
- `CarExample.java` - Real-world car example
- `StudentManagement.java` - Student system example
