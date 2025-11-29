# Java Inner Classes

## Overview
An **inner class** is a class defined within another class. Inner classes are used to logically group classes that are only used in one place, increase encapsulation, and make code more readable and maintainable.

## Types of Inner Classes

### 1. Member Inner Class (Regular Inner Class)
Defined at member level of outer class:
```java
class Outer {
    class Inner {
        // inner class body
    }
}
```

### 2. Static Nested Class
Static class inside another class:
```java
class Outer {
    static class StaticNested {
        // static nested class
    }
}
```

### 3. Local Inner Class
Defined inside a method:
```java
class Outer {
    void method() {
        class LocalInner {
            // local inner class
        }
    }
}
```

### 4. Anonymous Inner Class
Class without a name:
```java
Interface obj = new Interface() {
    // implementation
};
```

## Member Inner Class

### Characteristics
- Has access to all members of outer class (even private)
- Cannot contain static members
- Instantiated through outer class object

### Syntax
```java
class Outer {
    private int x = 10;
    
    class Inner {
        void display() {
            System.out.println("x = " + x);  // Access outer member
        }
    }
}

// Usage
Outer outer = new Outer();
Outer.Inner inner = outer.new Inner();
inner.display();
```

## Static Nested Class

### Characteristics
- Can access only static members of outer class
- Can be instantiated without outer class instance
- Like a static member of outer class

### Syntax
```java
class Outer {
    static int x = 10;
    
    static class StaticNested {
        void display() {
            System.out.println("x = " + x);
        }
    }
}

// Usage
Outer.StaticNested nested = new Outer.StaticNested();
nested.display();
```

## Local Inner Class

### Characteristics
- Defined inside method/block
- Scope limited to that method/block
- Can access outer class members and method's final/effectively final variables

### Syntax
```java
class Outer {
    void method() {
        final int localVar = 20;
        
        class LocalInner {
            void display() {
                System.out.println(localVar);
            }
        }
        
        LocalInner inner = new LocalInner();
        inner.display();
    }
}
```

## Anonymous Inner Class

### Characteristics
- No name, defined and instantiated in one expression
- Used for one-time use classes
- Common with interfaces and abstract classes

### With Interface
```java
interface Greeting {
    void sayHello();
}

Greeting greeting = new Greeting() {
    public void sayHello() {
        System.out.println("Hello!");
    }
};

greeting.sayHello();
```

### With Abstract Class
```java
abstract class Animal {
    abstract void sound();
}

Animal dog = new Animal() {
    void sound() {
        System.out.println("Bark");
    }
};

dog.sound();
```

## Why Use Inner Classes?

✅ **Logical Grouping**: Group classes used in one place  
✅ **Encapsulation**: Hide implementation from outer world  
✅ **Readable Code**: Keep related code together  
✅ **Access to Outer Members**: Direct access to outer class  
✅ **Multiple Inheritance**: Indirectly achieve multiple inheritance  

## Access Modifiers

Inner classes can have any access modifier:
```java
class Outer {
    private class PrivateInner { }
    protected class ProtectedInner { }
    public class PublicInner { }
    class DefaultInner { }
}
```

## Real-World Examples

### 1. Iterator Pattern
```java
class MyList {
    private int[] items;
    
    class MyIterator {
        int index = 0;
        
        boolean hasNext() {
            return index < items.length;
        }
        
        int next() {
            return items[index++];
        }
    }
    
    MyIterator getIterator() {
        return new MyIterator();
    }
}
```

### 2. Event Handling (GUI)
```java
button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked");
    }
});
```

### 3. Helper Classes
```java
class LinkedList {
    private class Node {
        int data;
        Node next;
    }
    
    private Node head;
}
```

## Member vs Static Nested

| Feature | Member Inner | Static Nested |
|---------|--------------|---------------|
| Access outer members | All members | Only static |
| Instantiation | Through outer object | Independent |
| Static members | Not allowed | Allowed |
| Use case | Needs outer instance | Independent utility |

## Anonymous Class Use Cases

1. **Event Handlers**
2. **Thread creation**
```java
Thread t = new Thread(new Runnable() {
    public void run() {
        System.out.println("Running");
    }
});
```
3. **Comparators**
```java
Collections.sort(list, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});
```

## Best Practices

✅ Use for helper classes that won't be used elsewhere  
✅ Keep inner classes small and focused  
✅ Use static nested class if don't need outer instance  
✅ Use anonymous classes for simple one-time implementations  
✅ Consider lambdas instead of anonymous classes (Java 8+)  

## Common Mistakes

❌ Making inner class too complex  
❌ Using non-static inner class when static would work  
❌ Forgetting inner class has access to outer private members  
❌ Creating memory leaks with non-static inner classes  

## Lambda vs Anonymous Class (Java 8+)

Anonymous:
```java
Runnable r = new Runnable() {
    public void run() {
        System.out.println("Hello");
    }
};
```

Lambda:
```java
Runnable r = () -> System.out.println("Hello");
```

## Examples in This Folder
- `MemberInnerClass.java` - Regular inner class
- `StaticNestedClass.java` - Static nested class
- `LocalInnerClass.java` - Local inner class
- `AnonymousInnerClass.java` - Anonymous class
- `RealWorldExample.java` - Practical inner class usage
