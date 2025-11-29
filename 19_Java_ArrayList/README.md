# Java ArrayList

## Overview
An `ArrayList` is a resizable array implementation in Java. Unlike regular arrays which have fixed size, ArrayLists can grow and shrink dynamically. It's part of the Java Collections Framework.

## What is ArrayList?

**ArrayList** is:
- Dynamic array (size changes automatically)
- Part of `java.util` package
- Can only store objects (not primitives)
- Allows duplicate elements
- Maintains insertion order

## ArrayList vs Array

| Feature | Array | ArrayList |
|---------|-------|-----------|
| Size | Fixed | Dynamic |
| Performance | Faster | Slightly slower |
| Type | Primitive + Object | Objects only |
| Methods | Limited | Many utility methods |
| Syntax | `int[] arr = new int[5]` | `ArrayList<Integer> list = new ArrayList<>()` |

## Creating ArrayList

```java
import java.util.ArrayList;

// String ArrayList
ArrayList<String> names = new ArrayList<>();

// Integer ArrayList
ArrayList<Integer> numbers = new ArrayList<>();

// With initial capacity
ArrayList<String> list = new ArrayList<>(10);

// From another collection
ArrayList<String> copy = new ArrayList<>(names);
```

## Adding Elements

```java
ArrayList<String> fruits = new ArrayList<>();

// Add at end
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Add at specific index
fruits.add(1, "Mango");  // [Apple, Mango, Banana, Orange]

// Add all from another collection
ArrayList<String> moreFruits = new ArrayList<>();
moreFruits.add("Grapes");
moreFruits.add("Watermelon");
fruits.addAll(moreFruits);
```

## Accessing Elements

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Get element at index
String first = fruits.get(0);  // Apple
String second = fruits.get(1);  // Banana

// Get first and last (Java 21+)
// String first = fruits.getFirst();
// String last = fruits.getLast();
```

## Modifying Elements

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Set element at index
fruits.set(1, "Mango");  // Replaces "Banana" with "Mango"
System.out.println(fruits);  // [Apple, Mango, Orange]
```

## Removing Elements

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");
fruits.add("Banana");

// Remove by index
fruits.remove(0);  // Removes "Apple"

// Remove by object (removes first occurrence)
fruits.remove("Banana");  // Removes first "Banana"

// Remove all
fruits.clear();  // Empty list

// Remove if condition matches (Java 8+)
fruits.removeIf(fruit -> fruit.startsWith("A"));
```

## ArrayList Size and Capacity

```java
ArrayList<String> list = new ArrayList<>();

// Size (number of elements)
int size = list.size();

// Check if empty
boolean isEmpty = list.isEmpty();

// Check if contains element
boolean hasApple = list.contains("Apple");
```

## Iterating ArrayList

### For Loop
```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

for (int i = 0; i < fruits.size(); i++) {
    System.out.println(fruits.get(i));
}
```

### Enhanced For Loop (For-Each)
```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

### forEach with Lambda (Java 8+)
```java
fruits.forEach(fruit -> System.out.println(fruit));

// Method reference
fruits.forEach(System.out::println);
```

### Iterator
```java
import java.util.Iterator;

Iterator<String> iterator = fruits.iterator();
while (iterator.hasNext()) {
    String fruit = iterator.next();
    System.out.println(fruit);
}
```

## Searching Elements

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Find index of element
int index = fruits.indexOf("Banana");  // 1

// Find last index (if duplicates)
int lastIndex = fruits.lastIndexOf("Banana");

// Check if contains
if (fruits.contains("Apple")) {
    System.out.println("Found Apple!");
}
```

## Sorting ArrayList

```java
import java.util.Collections;

ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.add(1);

// Sort ascending
Collections.sort(numbers);
System.out.println(numbers);  // [1, 2, 5, 8]

// Sort descending
Collections.sort(numbers, Collections.reverseOrder());
System.out.println(numbers);  // [8, 5, 2, 1]

// Sort strings
ArrayList<String> names = new ArrayList<>();
names.add("Charlie");
names.add("Alice");
names.add("Bob");
Collections.sort(names);  // [Alice, Bob, Charlie]
```

## Converting ArrayList

### To Array
```java
ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");

// To Object array
Object[] array1 = list.toArray();

// To String array
String[] array2 = list.toArray(new String[0]);
```

### From Array
```java
import java.util.Arrays;

String[] array = {"A", "B", "C"};
ArrayList<String> list = new ArrayList<>(Arrays.asList(array));
```

## ArrayList of Objects

```java
class Student {
    String name;
    int age;
    
    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String toString() {
        return name + " (" + age + ")";
    }
}

ArrayList<Student> students = new ArrayList<>();
students.add(new Student("Alice", 20));
students.add(new Student("Bob", 22));
students.add(new Student("Charlie", 21));

for (Student student : students) {
    System.out.println(student);
}
```

## Common ArrayList Methods

| Method | Description | Example |
|--------|-------------|---------|
| `add(E element)` | Add element | `list.add("A")` |
| `add(int index, E element)` | Add at index | `list.add(0, "A")` |
| `get(int index)` | Get element | `list.get(0)` |
| `set(int index, E element)` | Replace element | `list.set(0, "B")` |
| `remove(int index)` | Remove by index | `list.remove(0)` |
| `remove(Object o)` | Remove by object | `list.remove("A")` |
| `clear()` | Remove all | `list.clear()` |
| `size()` | Get size | `list.size()` |
| `isEmpty()` | Check if empty | `list.isEmpty()` |
| `contains(Object o)` | Check if contains | `list.contains("A")` |
| `indexOf(Object o)` | Find index | `list.indexOf("A")` |

## ArrayList with Generics

```java
// Type-safe ArrayList
ArrayList<String> strings = new ArrayList<>();  // Only strings
ArrayList<Integer> integers = new ArrayList<>();  // Only integers
ArrayList<Double> doubles = new ArrayList<>();  // Only doubles

// Without generics (old way - not recommended)
ArrayList list = new ArrayList();  // Can hold any type
list.add("String");
list.add(123);
list.add(true);
```

## Wrapper Classes

Primitives cannot be used directly, use wrapper classes:

| Primitive | Wrapper Class |
|-----------|---------------|
| int | Integer |
| double | Double |
| float | Float |
| long | Long |
| boolean | Boolean |
| char | Character |
| byte | Byte |
| short | Short |

```java
// Right way
ArrayList<Integer> numbers = new ArrayList<>();
numbers.add(10);  // Auto-boxing: int to Integer

int num = numbers.get(0);  // Auto-unboxing: Integer to int

// Wrong way
// ArrayList<int> numbers = new ArrayList<>();  // ERROR!
```

## Multidimensional ArrayList

```java
// 2D ArrayList
ArrayList<ArrayList<Integer>> matrix = new ArrayList<>();

// Add rows
ArrayList<Integer> row1 = new ArrayList<>();
row1.add(1);
row1.add(2);
row1.add(3);

ArrayList<Integer> row2 = new ArrayList<>();
row2.add(4);
row2.add(5);
row2.add(6);

matrix.add(row1);
matrix.add(row2);

// Access elements
int value = matrix.get(0).get(1);  // Gets 2 (row 0, column 1)

// Print matrix
for (ArrayList<Integer> row : matrix) {
    for (Integer value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}
```

## Best Practices

✅ Use generics for type safety  
✅ Initialize with estimated capacity if known  
✅ Use appropriate collection (ArrayList vs LinkedList)  
✅ Use for-each loop for iteration  
✅ Remove elements using iterator to avoid errors  
✅ Use `isEmpty()` instead of `size() == 0`  

## Common Mistakes

❌ Using primitive types directly  
❌ Modifying list while iterating (ConcurrentModificationException)  
❌ Comparing with `==` instead of `equals()`  
❌ Not checking for null  
❌ Assuming thread-safe (ArrayList is not)  

## Performance Considerations

| Operation | Time Complexity |
|-----------|-----------------|
| Add (end) | O(1) amortized |
| Add (middle) | O(n) |
| Get | O(1) |
| Remove (end) | O(1) |
| Remove (middle) | O(n) |
| Contains | O(n) |
| Size | O(1) |

## Real-World Examples

### Todo List
```java
ArrayList<String> todoList = new ArrayList<>();
todoList.add("Buy groceries");
todoList.add("Finish homework");
todoList.add("Call mom");

// Mark as done (remove)
todoList.remove("Buy groceries");

// Display remaining tasks
System.out.println("Todo List:");
for (int i = 0; i < todoList.size(); i++) {
    System.out.println((i + 1) + ". " + todoList.get(i));
}
```

### Grade Book
```java
ArrayList<Integer> grades = new ArrayList<>();
grades.add(85);
grades.add(90);
grades.add(78);
grades.add(92);

// Calculate average
double sum = 0;
for (Integer grade : grades) {
    sum += grade;
}
double average = sum / grades.size();
System.out.println("Average: " + average);
```

## Examples in This Folder
- `ArrayListBasics.java` - Creating and basic operations
- `ArrayListMethods.java` - Common methods
- `ArrayListIteration.java` - Different iteration methods
- `ArrayListOfObjects.java` - ArrayList with custom objects
- `PracticalExamples.java` - Real-world applications
