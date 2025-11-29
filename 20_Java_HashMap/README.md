# Java HashMap

## Overview
A `HashMap` is a data structure that stores key-value pairs. It allows you to store and retrieve values using unique keys. HashMap is part of the Java Collections Framework and provides fast lookup operations.

## What is HashMap?

**HashMap** characteristics:
- Stores key-value pairs
- Part of `java.util` package
- Keys must be unique
- Values can be duplicated
- Keys can be null (only one)
- Values can be null (multiple)
- Unordered (no guaranteed order)
- Not synchronized (not thread-safe)

## HashMap vs Other Maps

| Feature | HashMap | TreeMap | LinkedHashMap |
|---------|---------|---------|---------------|
| Order | No order | Sorted by keys | Insertion order |
| Performance | O(1) | O(log n) | O(1) |
| Null keys | Allowed | Not allowed | Allowed |
| Use case | Fast lookup | Sorted data | Maintain order |

## Creating HashMap

```java
import java.util.HashMap;

// String keys, Integer values
HashMap<String, Integer> map = new HashMap<>();

// Integer keys, String values
HashMap<Integer, String> studentNames = new HashMap<>();

// With initial capacity
HashMap<String, Integer> map2 = new HashMap<>(16);

// From another map
HashMap<String, Integer> copy = new HashMap<>(map);
```

## Adding Elements

```java
HashMap<String, Integer> ages = new HashMap<>();

// Add key-value pairs
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

// Put will replace if key exists
ages.put("Alice", 26);  // Updates Alice's age to 26

// Put if absent (only if key doesn't exist)
ages.putIfAbsent("David", 32);
ages.putIfAbsent("Alice", 27);  // Won't update (Alice exists)

System.out.println(ages);  // {Alice=26, Bob=30, Charlie=28, David=32}
```

## Accessing Elements

```java
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);

// Get value by key
Integer aliceAge = ages.get("Alice");  // 25

// Get with default value if key doesn't exist
Integer eveAge = ages.getOrDefault("Eve", 0);  // 0 (Eve doesn't exist)

// Check if key exists
boolean hasAlice = ages.containsKey("Alice");  // true
boolean hasEve = ages.containsKey("Eve");  // false

// Check if value exists
boolean has30 = ages.containsValue(30);  // true
```

## Removing Elements

```java
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

// Remove by key
ages.remove("Bob");

// Remove only if key-value match
ages.remove("Alice", 20);  // Won't remove (age is 25, not 20)
ages.remove("Alice", 25);  // Will remove

// Clear all
ages.clear();
```

## HashMap Size

```java
HashMap<String, Integer> map = new HashMap<>();

// Get size
int size = map.size();

// Check if empty
boolean isEmpty = map.isEmpty();
```

## Iterating HashMap

### Using entrySet()
```java
HashMap<String, Integer> ages = new HashMap<>();
ages.put("Alice", 25);
ages.put("Bob", 30);
ages.put("Charlie", 28);

// Iterate over entries
for (Map.Entry<String, Integer> entry : ages.entrySet()) {
    System.out.println(entry.getKey() + " is " + entry.getValue() + " years old");
}
```

### Using keySet()
```java
// Iterate over keys only
for (String name : ages.keySet()) {
    System.out.println(name + " is " + ages.get(name) + " years old");
}
```

### Using values()
```java
// Iterate over values only
for (Integer age : ages.values()) {
    System.out.println("Age: " + age);
}
```

### Using forEach (Java 8+)
```java
// Lambda expression
ages.forEach((name, age) -> 
    System.out.println(name + " is " + age + " years old")
);
```

## Common HashMap Methods

| Method | Description | Example |
|--------|-------------|---------|
| `put(K key, V value)` | Add/update entry | `map.put("A", 1)` |
| `get(Object key)` | Get value | `map.get("A")` |
| `getOrDefault(K key, V default)` | Get with default | `map.getOrDefault("Z", 0)` |
| `remove(Object key)` | Remove by key | `map.remove("A")` |
| `containsKey(Object key)` | Check key exists | `map.containsKey("A")` |
| `containsValue(Object value)` | Check value exists | `map.containsValue(1)` |
| `keySet()` | Get all keys | `map.keySet()` |
| `values()` | Get all values | `map.values()` |
| `entrySet()` | Get all entries | `map.entrySet()` |
| `size()` | Get size | `map.size()` |
| `isEmpty()` | Check if empty | `map.isEmpty()` |
| `clear()` | Remove all | `map.clear()` |
| `putIfAbsent(K key, V value)` | Add if not exists | `map.putIfAbsent("A", 1)` |
| `replace(K key, V value)` | Replace value | `map.replace("A", 2)` |

## HashMap with Objects

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

HashMap<Integer, Student> students = new HashMap<>();
students.put(101, new Student("Alice", 20));
students.put(102, new Student("Bob", 22));
students.put(103, new Student("Charlie", 21));

// Access student
Student student = students.get(101);
System.out.println(student);  // Alice (20)
```

## Custom Objects as Keys

When using custom objects as keys, you MUST override `hashCode()` and `equals()`:

```java
class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && name.equals(person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

HashMap<Person, String> map = new HashMap<>();
map.put(new Person("Alice", 25), "Engineer");
map.put(new Person("Bob", 30), "Doctor");
```

## Computing Values

```java
HashMap<String, Integer> scores = new HashMap<>();

// Compute new value
scores.compute("Alice", (key, value) -> value == null ? 10 : value + 10);

// Compute if present
scores.computeIfPresent("Alice", (key, value) -> value + 5);

// Compute if absent
scores.computeIfAbsent("Bob", key -> 0);

// Merge (useful for counting)
HashMap<String, Integer> wordCount = new HashMap<>();
wordCount.merge("hello", 1, Integer::sum);  // Adds 1
wordCount.merge("hello", 1, Integer::sum);  // Now 2
```

## Replacing Values

```java
HashMap<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

// Replace value for key
map.replace("A", 10);

// Replace only if current value matches
map.replace("B", 2, 20);  // Will replace (current is 2)
map.replace("A", 5, 15);  // Won't replace (current is 10, not 5)

// Replace all values
map.replaceAll((key, value) -> value * 2);
```

## Practical Examples

### Phone Book
```java
HashMap<String, String> phoneBook = new HashMap<>();
phoneBook.put("Alice", "555-1234");
phoneBook.put("Bob", "555-5678");
phoneBook.put("Charlie", "555-9012");

// Look up number
String aliceNumber = phoneBook.get("Alice");
System.out.println("Alice's number: " + aliceNumber);

// Update number
phoneBook.put("Alice", "555-0000");

// List all contacts
System.out.println("\nPhone Book:");
phoneBook.forEach((name, number) -> 
    System.out.println(name + ": " + number)
);
```

### Word Counter
```java
String text = "hello world hello java world";
String[] words = text.split(" ");

HashMap<String, Integer> wordCount = new HashMap<>();
for (String word : words) {
    wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
}

System.out.println(wordCount);  // {hello=2, world=2, java=1}
```

### Student Grades
```java
HashMap<String, ArrayList<Integer>> studentGrades = new HashMap<>();

// Add grades
ArrayList<Integer> aliceGrades = new ArrayList<>();
aliceGrades.add(85);
aliceGrades.add(90);
aliceGrades.add(88);
studentGrades.put("Alice", aliceGrades);

ArrayList<Integer> bobGrades = new ArrayList<>();
bobGrades.add(78);
bobGrades.add(82);
bobGrades.add(80);
studentGrades.put("Bob", bobGrades);

// Calculate averages
for (Map.Entry<String, ArrayList<Integer>> entry : studentGrades.entrySet()) {
    String name = entry.getKey();
    ArrayList<Integer> grades = entry.getValue();
    
    double average = grades.stream().mapToInt(Integer::intValue).average().orElse(0);
    System.out.println(name + "'s average: " + average);
}
```

### Frequency Counter
```java
HashMap<Character, Integer> charFrequency = new HashMap<>();
String text = "hello";

for (char c : text.toCharArray()) {
    charFrequency.merge(c, 1, Integer::sum);
}

System.out.println(charFrequency);  // {h=1, e=1, l=2, o=1}
```

## Sorting HashMap

HashMap is unordered, but you can sort entries:

### Sort by Keys
```java
HashMap<String, Integer> map = new HashMap<>();
map.put("Charlie", 28);
map.put("Alice", 25);
map.put("Bob", 30);

// Sort by keys
map.entrySet()
   .stream()
   .sorted(Map.Entry.comparingByKey())
   .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
```

### Sort by Values
```java
map.entrySet()
   .stream()
   .sorted(Map.Entry.comparingByValue())
   .forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
```

## LinkedHashMap (Maintains Order)

```java
import java.util.LinkedHashMap;

LinkedHashMap<String, Integer> linkedMap = new LinkedHashMap<>();
linkedMap.put("C", 3);
linkedMap.put("A", 1);
linkedMap.put("B", 2);

System.out.println(linkedMap);  // {C=3, A=1, B=2} (insertion order)
```

## TreeMap (Sorted by Keys)

```java
import java.util.TreeMap;

TreeMap<String, Integer> treeMap = new TreeMap<>();
treeMap.put("C", 3);
treeMap.put("A", 1);
treeMap.put("B", 2);

System.out.println(treeMap);  // {A=1, B=2, C=3} (sorted by keys)
```

## Best Practices

✅ Use appropriate key type (String, Integer, etc.)  
✅ Override hashCode() and equals() for custom keys  
✅ Use getOrDefault() to avoid null checks  
✅ Use computeIfAbsent() for lazy initialization  
✅ Consider LinkedHashMap if order matters  
✅ Consider TreeMap if sorting needed  
✅ Use entrySet() for iterating key-value pairs  

## Common Mistakes

❌ Modifying keys after insertion  
❌ Not overriding hashCode()/equals() for custom keys  
❌ Assuming order is maintained  
❌ Using mutable objects as keys  
❌ Not checking for null  
❌ Confusing put() and putIfAbsent()  

## Performance

| Operation | Average Time | Worst Case |
|-----------|--------------|------------|
| get() | O(1) | O(n) |
| put() | O(1) | O(n) |
| remove() | O(1) | O(n) |
| containsKey() | O(1) | O(n) |

## Thread Safety

HashMap is NOT thread-safe. For concurrent access:

```java
import java.util.concurrent.ConcurrentHashMap;

ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
```

Or synchronize:
```java
Map<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());
```

## Examples in This Folder
- `HashMapBasics.java` - Creating and basic operations
- `HashMapMethods.java` - Common methods
- `HashMapIteration.java` - Different iteration methods
- `HashMapWithObjects.java` - HashMap with custom objects
- `PracticalExamples.java` - Real-world applications
