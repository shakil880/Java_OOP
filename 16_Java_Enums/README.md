# Java Enums

## Overview
An **enum** (enumeration) is a special type that represents a group of constants (unchangeable variables). Enums make code more readable, type-safe, and maintainable.

## What is an Enum?

An enum is a class that represents a fixed set of constants:
- Days of week (MONDAY, TUESDAY, ...)
- Months (JANUARY, FEBRUARY, ...)
- Directions (NORTH, SOUTH, EAST, WEST)
- Status (ACTIVE, INACTIVE, PENDING)

## Basic Enum Syntax

```java
enum Level {
    LOW,
    MEDIUM,
    HIGH
}
```

## Using Enums

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

public class Main {
    public static void main(String[] args) {
        Day today = Day.MONDAY;
        System.out.println(today);  // MONDAY
    }
}
```

## Enum in Switch Statement

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

Day day = Day.FRIDAY;

switch (day) {
    case MONDAY:
        System.out.println("Start of work week");
        break;
    case FRIDAY:
        System.out.println("Almost weekend!");
        break;
    case SATURDAY:
    case SUNDAY:
        System.out.println("Weekend!");
        break;
    default:
        System.out.println("Midweek");
}
```

## Enum with Variables and Methods

```java
enum Size {
    SMALL(28),
    MEDIUM(32),
    LARGE(36),
    EXTRALARGE(40);
    
    private int inches;
    
    // Constructor
    Size(int inches) {
        this.inches = inches;
    }
    
    // Method
    public int getInches() {
        return inches;
    }
}

// Usage
Size mySize = Size.MEDIUM;
System.out.println("Size: " + mySize.getInches() + " inches");
```

## Enum Characteristics

✅ Type-safe constants  
✅ Can have fields, constructors, methods  
✅ Can implement interfaces  
✅ Cannot extend other classes (extends Enum internally)  
✅ Cannot be instantiated with `new`  
✅ Implicitly `public static final`  
❌ Cannot be subclassed  

## Built-in Enum Methods

### values()
Returns array of all enum constants:
```java
enum Color {
    RED, GREEN, BLUE
}

for (Color color : Color.values()) {
    System.out.println(color);
}
// Output: RED, GREEN, BLUE
```

### valueOf()
Converts string to enum:
```java
Color color = Color.valueOf("RED");
System.out.println(color);  // RED
```

### ordinal()
Returns position (index) of enum constant:
```java
System.out.println(Color.RED.ordinal());    // 0
System.out.println(Color.GREEN.ordinal());  // 1
System.out.println(Color.BLUE.ordinal());   // 2
```

### name()
Returns name of enum constant:
```java
Color color = Color.RED;
System.out.println(color.name());  // RED
```

## Enum with Constructor

```java
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6);
    
    private final double mass;
    private final double radius;
    
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    public double getMass() {
        return mass;
    }
    
    public double getRadius() {
        return radius;
    }
    
    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }
}

// Usage
Planet earth = Planet.EARTH;
System.out.println("Earth's mass: " + earth.getMass());
System.out.println("Earth's gravity: " + earth.surfaceGravity());
```

## Enum Implementing Interface

```java
interface Printable {
    void print();
}

enum Status implements Printable {
    ACTIVE {
        public void print() {
            System.out.println("Status is ACTIVE");
        }
    },
    INACTIVE {
        public void print() {
            System.out.println("Status is INACTIVE");
        }
    },
    PENDING {
        public void print() {
            System.out.println("Status is PENDING");
        }
    }
}

// Usage
Status status = Status.ACTIVE;
status.print();  // Status is ACTIVE
```

## Enum with Abstract Method

```java
enum Operation {
    PLUS {
        public double apply(double x, double y) {
            return x + y;
        }
    },
    MINUS {
        public double apply(double x, double y) {
            return x - y;
        }
    },
    TIMES {
        public double apply(double x, double y) {
            return x * y;
        }
    },
    DIVIDE {
        public double apply(double x, double y) {
            return x / y;
        }
    };
    
    public abstract double apply(double x, double y);
}

// Usage
double result = Operation.PLUS.apply(5, 3);  // 8.0
```

## Comparing Enums

Use `==` or `.equals()`:
```java
Day day1 = Day.MONDAY;
Day day2 = Day.MONDAY;

if (day1 == day2) {
    System.out.println("Same day");
}

if (day1.equals(day2)) {
    System.out.println("Same day");
}
```

## EnumSet

Collection specifically for enums:
```java
import java.util.EnumSet;

enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

EnumSet<Day> weekDays = EnumSet.range(Day.MONDAY, Day.FRIDAY);
EnumSet<Day> weekend = EnumSet.of(Day.SATURDAY, Day.SUNDAY);
```

## EnumMap

Map with enum keys:
```java
import java.util.EnumMap;

enum Day {
    MONDAY, TUESDAY, WEDNESDAY
}

EnumMap<Day, String> schedule = new EnumMap<>(Day.class);
schedule.put(Day.MONDAY, "Meeting");
schedule.put(Day.TUESDAY, "Coding");
```

## Real-World Examples

### 1. Order Status
```java
enum OrderStatus {
    PENDING("Order received"),
    PROCESSING("Order being processed"),
    SHIPPED("Order shipped"),
    DELIVERED("Order delivered"),
    CANCELLED("Order cancelled");
    
    private String description;
    
    OrderStatus(String description) {
        this.description = description;
    }
    
    public String getDescription() {
        return description;
    }
}
```

### 2. Traffic Light
```java
enum TrafficLight {
    RED("Stop", 30),
    YELLOW("Caution", 5),
    GREEN("Go", 45);
    
    private String action;
    private int duration;
    
    TrafficLight(String action, int duration) {
        this.action = action;
        this.duration = duration;
    }
    
    public void display() {
        System.out.println(action + " for " + duration + " seconds");
    }
}
```

### 3. Card Deck
```java
enum Suit {
    CLUBS, DIAMONDS, HEARTS, SPADES
}

enum Rank {
    ACE(1), TWO(2), THREE(3), FOUR(4), FIVE(5), SIX(6),
    SEVEN(7), EIGHT(8), NINE(9), TEN(10), JACK(11), QUEEN(12), KING(13);
    
    private int value;
    
    Rank(int value) {
        this.value = value;
    }
    
    public int getValue() {
        return value;
    }
}
```

## Benefits of Enums

✅ **Type Safety**: Compiler checks valid values  
✅ **Readability**: Self-documenting code  
✅ **Maintainability**: All constants in one place  
✅ **Switch Support**: Works with switch statements  
✅ **Methods**: Can have behavior  
✅ **Namespace**: No constant name conflicts  

## Enum vs Constants

### Constants (Old Way)
```java
public static final int SMALL = 0;
public static final int MEDIUM = 1;
public static final int LARGE = 2;
// Type-unsafe, can use any int value
```

### Enum (Better Way)
```java
enum Size {
    SMALL, MEDIUM, LARGE
}
// Type-safe, only these values allowed
```

## Best Practices

✅ Use UPPERCASE names for enum constants  
✅ Use enums instead of int constants  
✅ Keep enums simple when possible  
✅ Add methods when enums need behavior  
✅ Use EnumSet and EnumMap for collections  
✅ Document complex enums  

## Common Use Cases

1. **Fixed set of constants**
2. **Status/State machines**
3. **Configuration options**
4. **Days, months, directions**
5. **Error codes**
6. **Priority levels**
7. **Menu options**

## Examples in This Folder
- `EnumBasics.java` - Basic enum usage
- `EnumWithMethods.java` - Enums with fields and methods
- `EnumInSwitch.java` - Using enum in switch
- `EnumConstructor.java` - Enum constructors
- `RealWorldExample.java` - Practical enum applications
