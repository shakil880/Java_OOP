# Java Encapsulation

## Overview
**Encapsulation** is the bundling of data (attributes) and methods that operate on that data within a single unit (class), while restricting direct access to some components. It's one of the four fundamental OOP principles.

## What is Encapsulation?

Encapsulation means:
1. **Hide** the internal state of an object
2. **Control** access through public methods
3. **Protect** data from invalid modifications

Think of it like a capsule/pill - the medicine (data) is wrapped inside, you can't access it directly.

## How to Achieve Encapsulation

### Step 1: Make attributes private
```java
class Person {
    private String name;  // Cannot access directly from outside
    private int age;
}
```

### Step 2: Provide public getter methods
```java
public String getName() {
    return name;
}

public int getAge() {
    return age;
}
```

### Step 3: Provide public setter methods
```java
public void setName(String name) {
    this.name = name;
}

public void setAge(int age) {
    if (age > 0) {  // Validation!
        this.age = age;
    }
}
```

## Benefits of Encapsulation

✅ **Data Hiding**: Internal representation is hidden  
✅ **Flexibility**: Can change implementation without affecting users  
✅ **Reusability**: Encapsulated code is modular and reusable  
✅ **Security**: Control how data is accessed and modified  
✅ **Maintainability**: Easier to maintain and modify code  
✅ **Validation**: Can validate data before setting  

## Getter and Setter Methods

### Getters (Accessors)
- Return the value of a private attribute
- Naming: `get` + AttributeName
- Example: `getName()`, `getAge()`

### Setters (Mutators)
- Set the value of a private attribute
- Naming: `set` + AttributeName
- Example: `setName()`, `setAge()`
- Can include validation logic

## Example Pattern

```java
public class BankAccount {
    private double balance;  // Private attribute
    
    // Getter
    public double getBalance() {
        return balance;
    }
    
    // Setter with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        }
    }
}
```

## Read-Only and Write-Only

### Read-Only (No Setter)
```java
class Student {
    private int id;
    
    public int getId() {  // Only getter
        return id;
    }
}
```

### Write-Only (No Getter)
```java
class User {
    private String password;
    
    public void setPassword(String pwd) {  // Only setter
        this.password = pwd;
    }
}
```

## Real-World Analogy

**TV Remote Control** is encapsulation:
- You can't directly access TV circuitry (private data)
- You use buttons (public methods) to control it
- Remote validates inputs (volume 0-100)
- Internal workings are hidden

## Best Practices

✅ Make all attributes private  
✅ Provide public getters and setters  
✅ Add validation in setters  
✅ Use meaningful method names  
✅ Return copies of mutable objects  
✅ Don't expose internal structure  

## Common Naming Conventions

| Attribute Type | Getter | Setter |
|----------------|--------|--------|
| `String name` | `getName()` | `setName(String name)` |
| `int age` | `getAge()` | `setAge(int age)` |
| `boolean active` | `isActive()` | `setActive(boolean active)` |

## Examples in This Folder
- `EncapsulationBasics.java` - Basic getter/setter usage
- `BankAccountExample.java` - Real-world encapsulation
- `ValidationExample.java` - Data validation in setters
- `ReadOnlyExample.java` - Read-only properties
