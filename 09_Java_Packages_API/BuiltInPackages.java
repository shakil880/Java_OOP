// Demonstrating built-in Java packages

import java.util.*;
import java.time.*;
import java.io.*;
import java.math.*;

public class BuiltInPackages {
    public static void main(String[] args) {
        System.out.println("=== Built-In Java Packages Demo ===\n");
        
        // java.util - Collections
        System.out.println("=== java.util - Collections ===");
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        System.out.println("Fruits: " + fruits);
        
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        System.out.println("Ages: " + ages);
        
        // java.time - Date and Time
        System.out.println("\n=== java.time - Date and Time ===");
        LocalDate today = LocalDate.now();
        LocalTime currentTime = LocalTime.now();
        LocalDateTime now = LocalDateTime.now();
        
        System.out.println("Today: " + today);
        System.out.println("Current time: " + currentTime);
        System.out.println("Now: " + now);
        
        // java.math - BigDecimal, BigInteger
        System.out.println("\n=== java.math - Big Numbers ===");
        BigDecimal bd1 = new BigDecimal("123.456");
        BigDecimal bd2 = new BigDecimal("789.012");
        BigDecimal sum = bd1.add(bd2);
        System.out.println(bd1 + " + " + bd2 + " = " + sum);
        
        BigInteger bi1 = new BigInteger("12345678901234567890");
        BigInteger bi2 = new BigInteger("98765432109876543210");
        BigInteger product = bi1.multiply(bi2);
        System.out.println("\nBig Integer multiplication:");
        System.out.println(bi1 + " * " + bi2);
        System.out.println("= " + product);
        
        // java.util - Random
        System.out.println("\n=== java.util.Random ===");
        Random random = new Random();
        System.out.println("Random integer: " + random.nextInt(100));
        System.out.println("Random double: " + random.nextDouble());
        System.out.println("Random boolean: " + random.nextBoolean());
        
        // java.util.Arrays
        System.out.println("\n=== java.util.Arrays ===");
        int[] numbers = {5, 2, 8, 1, 9};
        System.out.println("Original: " + Arrays.toString(numbers));
        Arrays.sort(numbers);
        System.out.println("Sorted: " + Arrays.toString(numbers));
        
        // java.lang (automatically imported)
        System.out.println("\n=== java.lang (Auto-imported) ===");
        String text = "Hello, World!";
        System.out.println("Length: " + text.length());
        System.out.println("Uppercase: " + text.toUpperCase());
        System.out.println("Square root of 16: " + Math.sqrt(16));
        System.out.println("Max of 10 and 20: " + Math.max(10, 20));
        
        System.out.println("\n=== Common Packages ===");
        System.out.println("java.lang - Core classes (String, Math, System)");
        System.out.println("java.util - Collections, Date, Scanner");
        System.out.println("java.io - Input/Output operations");
        System.out.println("java.time - Date and Time API");
        System.out.println("java.math - Mathematical operations");
    }
}
