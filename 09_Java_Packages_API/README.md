# Java Packages and API

## Overview
A **package** in Java is a namespace that organizes related classes and interfaces. Packages help avoid naming conflicts and make code more maintainable.

## What are Packages?

Packages are like folders/directories for organizing Java classes:
- **Built-in Packages**: Provided by Java (e.g., `java.util`, `java.io`)
- **User-defined Packages**: Created by programmers

## Why Use Packages?

✅ **Organization**: Group related classes together  
✅ **Namespace Management**: Avoid class name conflicts  
✅ **Access Control**: Package-level access protection  
✅ **Reusability**: Easy to find and reuse classes  
✅ **Maintainability**: Better code structure  

## Creating a Package

### Syntax
```java
package packagename;

public class ClassName {
    // class body
}
```

### Example
```java
package com.mycompany.utils;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

## Using Packages

### Import Single Class
```java
import java.util.Scanner;
```

### Import All Classes
```java
import java.util.*;
```

### Fully Qualified Name (No Import)
```java
java.util.Scanner scanner = new java.util.Scanner(System.in);
```

## Built-in Java Packages

### Common Packages

| Package | Description | Example Classes |
|---------|-------------|-----------------|
| `java.lang` | Core classes (auto-imported) | String, Math, System |
| `java.util` | Utility classes | ArrayList, Scanner, Date |
| `java.io` | Input/Output | File, BufferedReader |
| `java.net` | Networking | URL, Socket |
| `java.sql` | Database | Connection, ResultSet |
| `java.awt` | GUI components | Button, Frame |
| `javax.swing` | Advanced GUI | JFrame, JButton |

## Package Naming Conventions

Follow reverse domain name convention:
```
com.company.project.module

Examples:
- com.google.android.app
- org.apache.commons.lang
- com.mycompany.myapp.models
```

## Package Directory Structure

```
src/
  └── com/
      └── mycompany/
          └── myapp/
              ├── Main.java
              ├── models/
              │   ├── User.java
              │   └── Product.java
              └── utils/
                  └── Calculator.java
```

## Access Levels with Packages

| Modifier | Same Class | Same Package | Subclass | Other |
|----------|------------|--------------|----------|-------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

## Java API (Application Programming Interface)

The Java API is a collection of pre-written classes and methods organized in packages.

### Important API Packages

#### java.lang (Auto-imported)
- **String**: Text manipulation
- **Math**: Mathematical operations
- **System**: System operations
- **Integer, Double**: Wrapper classes

#### java.util
- **Scanner**: Read input
- **ArrayList**: Dynamic arrays
- **HashMap**: Key-value pairs
- **Date, Calendar**: Date/time

#### java.io
- **File**: File operations
- **FileReader, FileWriter**: File I/O
- **BufferedReader**: Efficient reading

## Using Java API

### Example: java.util.Scanner
```java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
String name = input.nextLine();
```

### Example: java.util.ArrayList
```java
import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Java");
```

### Example: java.lang.Math
```java
// No import needed (java.lang)
double result = Math.sqrt(25);
int max = Math.max(10, 20);
```

## Creating Your Own Package

1. **Declare package**:
```java
package mypackage;

public class MyClass {
    public void display() {
        System.out.println("Hello from MyClass");
    }
}
```

2. **Use the package**:
```java
import mypackage.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.display();
    }
}
```

## Subpackages

Packages can contain subpackages:
```java
package com.mycompany.project.models;
package com.mycompany.project.utils;
package com.mycompany.project.controllers;
```

## Best Practices

✅ Use lowercase for package names  
✅ Follow reverse domain convention  
✅ One public class per file  
✅ Import only what you need  
✅ Organize related classes together  
✅ Use meaningful package names  

## Examples in This Folder
- `PackageBasics.java` - Creating and using packages
- `ImportExample.java` - Different import methods
- `JavaAPIExamples.java` - Using Java API classes
- `CustomPackageExample/` - Full package structure example
