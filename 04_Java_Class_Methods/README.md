# Java Class Methods

## Overview
Methods are blocks of code that perform specific tasks. They define the **behavior** of a class. Methods are also called **functions** or **member functions**.

## Method Syntax
```java
accessModifier returnType methodName(parameters) {
    // method body
    return value;  // if not void
}
```

## Components of a Method

1. **Access Modifier**: public, private, protected, or default
2. **Return Type**: Data type of value returned (or void)
3. **Method Name**: Identifier (use verbs)
4. **Parameters**: Input values (optional)
5. **Method Body**: Code to execute
6. **Return Statement**: Returns a value (if not void)

## Types of Methods

### 1. Void Methods (No Return)
```java
void displayMessage() {
    System.out.println("Hello!");
}
```

### 2. Methods with Return Value
```java
int add(int a, int b) {
    return a + b;
}
```

### 3. Methods with Parameters
```java
void greet(String name) {
    System.out.println("Hello, " + name);
}
```

### 4. Methods without Parameters
```java
void printMenu() {
    System.out.println("Menu");
}
```

## Static vs Instance Methods

### Instance Methods
- Belong to objects
- Need object to call
- Can access instance variables

```java
Car myCar = new Car();
myCar.drive();  // Instance method
```

### Static Methods
- Belong to class
- Called using class name
- Cannot access instance variables

```java
Math.sqrt(25);  // Static method
ClassName.methodName();
```

## Method Overloading

Multiple methods with same name but different parameters:

```java
int add(int a, int b) { }
double add(double a, double b) { }
int add(int a, int b, int c) { }
```

## Parameters vs Arguments

- **Parameters**: Variables in method declaration
- **Arguments**: Actual values passed when calling

```java
void greet(String name) { }  // name is parameter
greet("Alice");               // "Alice" is argument
```

## Calling Methods

### Instance Method Call
```java
objectName.methodName();
objectName.methodName(arguments);
```

### Static Method Call
```java
ClassName.methodName();
ClassName.methodName(arguments);
```

### Method Chaining
```java
object.method1().method2().method3();
```

## Return Statement

- Returns value to caller
- Exits method immediately
- Must match return type

```java
int multiply(int a, int b) {
    return a * b;  // Returns integer
}
```

## Best Practices

✅ Use verb names (calculate, display, get, set)  
✅ Keep methods short and focused  
✅ One method = One task  
✅ Use meaningful parameter names  
✅ Document complex methods  
✅ Avoid too many parameters  

## Common Method Patterns

### 1. Getter Methods
```java
String getName() {
    return name;
}
```

### 2. Setter Methods
```java
void setName(String name) {
    this.name = name;
}
```

### 3. Boolean Methods
```java
boolean isEmpty() {
    return size == 0;
}
```

### 4. Utility Methods
```java
void printDetails() {
    // Display information
}
```

## Method Benefits

🔹 **Code Reusability**: Write once, use many times  
🔹 **Organization**: Break complex tasks into smaller parts  
🔹 **Maintainability**: Easier to update and debug  
🔹 **Abstraction**: Hide implementation details  
🔹 **Testing**: Test individual methods separately  

## Important Points

- Methods define what an object **can do**
- Can access class attributes
- Can call other methods
- Can be overloaded
- Return type must match returned value
- void methods don't return anything

## Examples in This Folder
- `MethodBasics.java` - Basic method usage
- `MethodsWithParameters.java` - Parameters and arguments
- `ReturnMethods.java` - Methods that return values
- `MethodOverloading.java` - Multiple methods with same name
- `StaticMethods.java` - Static vs instance methods
