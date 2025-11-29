# Java User Input

## Overview
Getting user input is essential for creating interactive programs. Java provides several ways to read input from users, with the `Scanner` class being the most common method.

## Scanner Class

The `Scanner` class is in `java.util` package and is used to read input from various sources including keyboard input.

### Import Scanner
```java
import java.util.Scanner;
```

### Create Scanner Object
```java
Scanner scanner = new Scanner(System.in);
```

### Close Scanner
```java
scanner.close();
```

## Reading Different Data Types

### Reading String (Single Word)
```java
Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = scanner.next();
System.out.println("Hello, " + name);
```

### Reading String (Whole Line)
```java
System.out.print("Enter your full name: ");
String fullName = scanner.nextLine();
```

### Reading Integer
```java
System.out.print("Enter your age: ");
int age = scanner.nextInt();
```

### Reading Double
```java
System.out.print("Enter price: ");
double price = scanner.nextDouble();
```

### Reading Boolean
```java
System.out.print("Are you a student? (true/false): ");
boolean isStudent = scanner.nextBoolean();
```

### Reading Character
```java
System.out.print("Enter grade: ");
char grade = scanner.next().charAt(0);
```

## Scanner Methods Summary

| Method | Description | Example |
|--------|-------------|---------|
| `next()` | Reads single word (until space) | "Hello" |
| `nextLine()` | Reads entire line | "Hello World" |
| `nextInt()` | Reads integer | 42 |
| `nextDouble()` | Reads double | 3.14 |
| `nextFloat()` | Reads float | 3.14f |
| `nextLong()` | Reads long | 123456789L |
| `nextBoolean()` | Reads boolean | true/false |
| `nextByte()` | Reads byte | 127 |
| `nextShort()` | Reads short | 32000 |

## Complete Example

```java
import java.util.Scanner;

public class UserInputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Get user information
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble();
        
        // Display information
        System.out.println("\n=== User Information ===");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        
        scanner.close();
    }
}
```

## Common Issues and Solutions

### Issue 1: nextLine() After nextInt()

**Problem:**
```java
int age = scanner.nextInt();
String name = scanner.nextLine();  // Skips input!
```

**Solution:**
```java
int age = scanner.nextInt();
scanner.nextLine();  // Consume newline
String name = scanner.nextLine();  // Now works correctly
```

### Issue 2: InputMismatchException

**Problem:** User enters wrong type
```java
int age = scanner.nextInt();  // User enters "abc"
// Throws InputMismatchException
```

**Solution:** Use try-catch
```java
try {
    int age = scanner.nextInt();
} catch (InputMismatchException e) {
    System.out.println("Please enter a valid number");
    scanner.next();  // Clear invalid input
}
```

### Issue 3: Not Closing Scanner

Always close scanner to prevent resource leak:
```java
scanner.close();
```

## Input Validation

### Validate Integer Input
```java
Scanner scanner = new Scanner(System.in);
int age;

while (true) {
    System.out.print("Enter age (1-120): ");
    if (scanner.hasNextInt()) {
        age = scanner.nextInt();
        if (age >= 1 && age <= 120) {
            break;
        } else {
            System.out.println("Age must be between 1 and 120");
        }
    } else {
        System.out.println("Please enter a valid number");
        scanner.next();  // Clear invalid input
    }
}
```

### Validate String Input
```java
System.out.print("Enter yes or no: ");
String response = scanner.nextLine().toLowerCase();

while (!response.equals("yes") && !response.equals("no")) {
    System.out.print("Invalid input. Enter yes or no: ");
    response = scanner.nextLine().toLowerCase();
}
```

## Reading Multiple Values

### Same Line, Space Separated
```java
System.out.print("Enter two numbers: ");
int num1 = scanner.nextInt();
int num2 = scanner.nextInt();
```

### Array of Values
```java
System.out.print("How many numbers? ");
int count = scanner.nextInt();

int[] numbers = new int[count];
System.out.println("Enter " + count + " numbers:");
for (int i = 0; i < count; i++) {
    numbers[i] = scanner.nextInt();
}
```

## Creating Interactive Programs

### Simple Calculator
```java
Scanner scanner = new Scanner(System.in);

System.out.print("Enter first number: ");
double num1 = scanner.nextDouble();

System.out.print("Enter operator (+, -, *, /): ");
char operator = scanner.next().charAt(0);

System.out.print("Enter second number: ");
double num2 = scanner.nextDouble();

double result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        System.out.println("Invalid operator");
        return;
}

System.out.println("Result: " + result);
scanner.close();
```

### Menu-Driven Program
```java
Scanner scanner = new Scanner(System.in);
boolean running = true;

while (running) {
    System.out.println("\n=== MENU ===");
    System.out.println("1. Option 1");
    System.out.println("2. Option 2");
    System.out.println("3. Option 3");
    System.out.println("4. Exit");
    System.out.print("Enter choice: ");
    
    int choice = scanner.nextInt();
    
    switch (choice) {
        case 1:
            System.out.println("You selected Option 1");
            break;
        case 2:
            System.out.println("You selected Option 2");
            break;
        case 3:
            System.out.println("You selected Option 3");
            break;
        case 4:
            running = false;
            System.out.println("Goodbye!");
            break;
        default:
            System.out.println("Invalid choice");
    }
}

scanner.close();
```

## Other Input Methods

### BufferedReader (Alternative)
```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
String name = reader.readLine();
```

### Console Class
```java
import java.io.Console;

Console console = System.console();
if (console != null) {
    String name = console.readLine("Enter name: ");
    char[] password = console.readPassword("Enter password: ");
}
```

## Best Practices

✅ Always close Scanner when done  
✅ Validate user input  
✅ Handle exceptions (try-catch)  
✅ Provide clear prompts  
✅ Give feedback on invalid input  
✅ Use nextLine() after numeric input to consume newline  
✅ Check hasNextXxx() before nextXxx()  

## Common Mistakes

❌ Not closing Scanner  
❌ Mixing nextLine() with other next methods  
❌ Not handling InputMismatchException  
❌ Not validating input range  
❌ Not clearing invalid input from buffer  

## Checking Available Input

```java
if (scanner.hasNext()) {
    // Input is available
}

if (scanner.hasNextInt()) {
    int number = scanner.nextInt();
}

if (scanner.hasNextDouble()) {
    double value = scanner.nextDouble();
}
```

## Examples in This Folder
- `ScannerBasics.java` - Basic Scanner usage
- `DifferentDataTypes.java` - Reading various data types
- `InputValidation.java` - Validating user input
- `InteractiveCalculator.java` - Calculator program
- `MenuDrivenProgram.java` - Menu-based application
