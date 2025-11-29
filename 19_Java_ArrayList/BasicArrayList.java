import java.util.ArrayList;
import java.util.Collections;

// Basic ArrayList

public class BasicArrayList {
    public static void main(String[] args) {
        System.out.println("=== Basic ArrayList Demo ===\n");
        
        // Create ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        
        // Add elements
        System.out.println("=== Adding Elements ===");
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Mango");
        System.out.println("Fruits: " + fruits);
        
        // Add at specific index
        fruits.add(1, "Strawberry");
        System.out.println("After adding at index 1: " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Access elements
        System.out.println("=== Accessing Elements ===");
        System.out.println("First fruit: " + fruits.get(0));
        System.out.println("Third fruit: " + fruits.get(2));
        System.out.println("Last fruit: " + fruits.get(fruits.size() - 1));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Modify elements
        System.out.println("=== Modifying Elements ===");
        System.out.println("Before: " + fruits);
        fruits.set(0, "Pineapple");
        System.out.println("After changing index 0: " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Remove elements
        System.out.println("=== Removing Elements ===");
        System.out.println("Before: " + fruits);
        
        fruits.remove(1);  // Remove by index
        System.out.println("After removing index 1: " + fruits);
        
        fruits.remove("Orange");  // Remove by value
        System.out.println("After removing 'Orange': " + fruits);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // ArrayList size
        System.out.println("=== ArrayList Size ===");
        System.out.println("Size: " + fruits.size());
        System.out.println("Is empty? " + fruits.isEmpty());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Check if contains
        System.out.println("=== Contains Check ===");
        System.out.println("Contains 'Mango'? " + fruits.contains("Mango"));
        System.out.println("Contains 'Grape'? " + fruits.contains("Grape"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Loop through ArrayList
        System.out.println("=== Looping Through ArrayList ===");
        
        System.out.println("Using for-each:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
        
        System.out.println("\nUsing regular for:");
        for (int i = 0; i < fruits.size(); i++) {
            System.out.println(i + ": " + fruits.get(i));
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // ArrayList with Integer
        System.out.println("=== ArrayList with Integer ===");
        ArrayList<Integer> numbers = new ArrayList<>();
        
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        
        System.out.println("Numbers: " + numbers);
        
        // Calculate sum
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (sum / numbers.size()));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Sorting
        System.out.println("=== Sorting ArrayList ===");
        
        ArrayList<String> names = new ArrayList<>();
        names.add("John");
        names.add("Alice");
        names.add("Bob");
        names.add("Diana");
        names.add("Charlie");
        
        System.out.println("Before sorting: " + names);
        Collections.sort(names);
        System.out.println("After sorting: " + names);
        
        ArrayList<Integer> values = new ArrayList<>();
        values.add(45);
        values.add(12);
        values.add(78);
        values.add(23);
        values.add(56);
        
        System.out.println("\nBefore sorting: " + values);
        Collections.sort(values);
        System.out.println("After sorting: " + values);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Clear ArrayList
        System.out.println("=== Clear ArrayList ===");
        ArrayList<String> temp = new ArrayList<>();
        temp.add("Item1");
        temp.add("Item2");
        temp.add("Item3");
        
        System.out.println("Before clear: " + temp);
        System.out.println("Size: " + temp.size());
        
        temp.clear();
        System.out.println("After clear: " + temp);
        System.out.println("Size: " + temp.size());
        System.out.println("Is empty? " + temp.isEmpty());
        
        System.out.println("\n=== ArrayList Features ===");
        System.out.println("✓ Dynamic size");
        System.out.println("✓ Add, remove, modify elements");
        System.out.println("✓ Random access (get by index)");
        System.out.println("✓ Can store objects");
        System.out.println("✓ Allows duplicates");
    }
}
