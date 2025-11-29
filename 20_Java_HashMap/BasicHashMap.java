import java.util.HashMap;
import java.util.Map;

// Basic HashMap

public class BasicHashMap {
    public static void main(String[] args) {
        System.out.println("=== Basic HashMap Demo ===\n");
        
        // Create HashMap
        HashMap<String, String> countries = new HashMap<>();
        
        // Add key-value pairs
        System.out.println("=== Adding Elements ===");
        countries.put("USA", "Washington DC");
        countries.put("UK", "London");
        countries.put("France", "Paris");
        countries.put("Germany", "Berlin");
        countries.put("Japan", "Tokyo");
        
        System.out.println("Countries: " + countries);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Access values
        System.out.println("=== Accessing Values ===");
        System.out.println("Capital of USA: " + countries.get("USA"));
        System.out.println("Capital of France: " + countries.get("France"));
        System.out.println("Capital of India: " + countries.get("India"));  // null
        
        // getOrDefault
        System.out.println("\nUsing getOrDefault:");
        System.out.println("Capital of India: " + 
                         countries.getOrDefault("India", "Not found"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Check if key exists
        System.out.println("=== Checking Keys ===");
        System.out.println("Contains 'UK'? " + countries.containsKey("UK"));
        System.out.println("Contains 'Canada'? " + countries.containsKey("Canada"));
        
        // Check if value exists
        System.out.println("\n=== Checking Values ===");
        System.out.println("Contains 'Paris'? " + countries.containsValue("Paris"));
        System.out.println("Contains 'Rome'? " + countries.containsValue("Rome"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Size
        System.out.println("=== HashMap Size ===");
        System.out.println("Size: " + countries.size());
        System.out.println("Is empty? " + countries.isEmpty());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Update value
        System.out.println("=== Updating Values ===");
        System.out.println("Before: " + countries.get("USA"));
        countries.put("USA", "New York");  // Updates existing key
        System.out.println("After: " + countries.get("USA"));
        
        // Replace method
        countries.replace("USA", "Washington DC");
        System.out.println("After replace: " + countries.get("USA"));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Remove elements
        System.out.println("=== Removing Elements ===");
        System.out.println("Size before: " + countries.size());
        
        String removed = countries.remove("UK");
        System.out.println("Removed: " + removed);
        System.out.println("Size after: " + countries.size());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Loop through HashMap
        System.out.println("=== Looping Through HashMap ===");
        
        System.out.println("Using keySet():");
        for (String country : countries.keySet()) {
            System.out.println(country + " -> " + countries.get(country));
        }
        
        System.out.println("\nUsing values():");
        for (String capital : countries.values()) {
            System.out.println("Capital: " + capital);
        }
        
        System.out.println("\nUsing entrySet():");
        for (Map.Entry<String, String> entry : countries.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // HashMap with Integer values
        System.out.println("=== Student Grades ===");
        
        HashMap<String, Integer> grades = new HashMap<>();
        grades.put("Alice", 95);
        grades.put("Bob", 87);
        grades.put("Charlie", 92);
        grades.put("Diana", 88);
        grades.put("Eve", 90);
        
        System.out.println("All grades:");
        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Calculate average
        int total = 0;
        for (int grade : grades.values()) {
            total += grade;
        }
        double average = (double) total / grades.size();
        System.out.println("\nAverage grade: " + String.format("%.2f", average));
        
        // Find highest grade
        String topStudent = "";
        int highestGrade = 0;
        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
            if (entry.getValue() > highestGrade) {
                highestGrade = entry.getValue();
                topStudent = entry.getKey();
            }
        }
        System.out.println("Top student: " + topStudent + " with " + highestGrade);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Phone book example
        System.out.println("=== Phone Book ===");
        
        HashMap<String, String> phoneBook = new HashMap<>();
        phoneBook.put("John", "555-1234");
        phoneBook.put("Jane", "555-5678");
        phoneBook.put("Bob", "555-9012");
        phoneBook.put("Alice", "555-3456");
        
        System.out.println("Phone book:");
        for (Map.Entry<String, String> entry : phoneBook.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Search for number
        String searchName = "Jane";
        if (phoneBook.containsKey(searchName)) {
            System.out.println("\n" + searchName + "'s number: " + phoneBook.get(searchName));
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Word frequency counter
        System.out.println("=== Word Frequency ===");
        
        String text = "java is fun and java is powerful java java";
        String[] words = text.split(" ");
        
        HashMap<String, Integer> wordCount = new HashMap<>();
        for (String word : words) {
            wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
        }
        
        System.out.println("Word frequencies:");
        for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        System.out.println("\n=== HashMap Features ===");
        System.out.println("✓ Key-value pairs");
        System.out.println("✓ Fast lookup by key");
        System.out.println("✓ Unique keys (no duplicates)");
        System.out.println("✓ Allows one null key");
        System.out.println("✓ Unordered collection");
    }
}
