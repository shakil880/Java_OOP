# Java Modifiers

## Overview
Modifiers are keywords that change the behavior of classes, methods, and variables. There are two types: **Access Modifiers** and **Non-Access Modifiers**.

## Access Modifiers

Control the visibility/accessibility of classes, methods, and variables.

### 1. `public`
- Accessible from anywhere
- No restrictions

```java
public class MyClass { }
public void myMethod() { }
```

### 2. `private`
- Accessible only within the same class
- Most restrictive

```java
private int age;
private void calculate() { }
```

### 3. `protected`
- Accessible within same package and subclasses
- Used for inheritance

```java
protected String name;
protected void display() { }
```

### 4. `default` (no modifier)
- Accessible only within same package
- Package-private

```java
class MyClass { }  // default access
int value;         // default access
```

## Access Levels Summary

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| public | ✓ | ✓ | ✓ | ✓ |
| protected | ✓ | ✓ | ✓ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| private | ✓ | ✗ | ✗ | ✗ |

## Non-Access Modifiers

Provide additional functionality without affecting accessibility.

### For Classes

#### `final`
- Cannot be inherited
```java
final class FinalClass { }
```

#### `abstract`
- Cannot be instantiated
- May contain abstract methods
```java
abstract class AbstractClass { }
```

### For Methods

#### `final`
- Cannot be overridden
```java
final void myMethod() { }
```

#### `abstract`
- No implementation
- Must be in abstract class
```java
abstract void myMethod();
```

#### `static`
- Belongs to class, not objects
```java
static void myMethod() { }
```

#### `synchronized`
- Thread-safe method
```java
synchronized void myMethod() { }
```

### For Variables

#### `final`
- Constant value (cannot change)
```java
final int MAX_SIZE = 100;
```

#### `static`
- Shared among all objects
```java
static int count = 0;
```

#### `transient`
- Not serialized
```java
transient String password;
```

#### `volatile`
- Thread-safe variable
```java
volatile boolean flag;
```

## Best Practices

✅ Make attributes `private` (encapsulation)  
✅ Make methods `public` if needed by other classes  
✅ Use `final` for constants  
✅ Use `static` for utility methods  
✅ Use `protected` for inheritance  
✅ Use `private` as default, relax as needed  

## Common Combinations

```java
public static final int MAX = 100;
private static int count = 0;
protected final String name = "Java";
public abstract void process();
```

## Examples in This Folder
- `AccessModifiers.java` - public, private, protected, default
- `NonAccessModifiers.java` - static, final, abstract
- `FinalKeyword.java` - Final classes, methods, variables
- `StaticKeyword.java` - Static members
