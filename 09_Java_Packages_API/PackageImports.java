// Demonstrating importing and using packages

import mypackage.MyClass;
import mypackage.Helper;
import java.util.ArrayList;
import java.util.Scanner;
import java.time.LocalDate;

public class PackageImports {
    public static void main(String[] args) {
        System.out.println("=== Package Imports Demo ===\n");
        
        // Using custom package
        System.out.println("=== Custom Package (mypackage) ===");
        MyClass obj = new MyClass("Hello from custom package!");
        obj.displayMessage();
        MyClass.greet("Alice");
        
        System.out.println("\nUsing Helper class:");
        int sum = Helper.add(10, 20);
        int product = Helper.multiply(5, 6);
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
        Helper.printInfo();
        
        // Using java.util package
        System.out.println("\n=== Java.util Package ===");
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("JavaScript");
        System.out.println("Languages: " + list);
        
        // Using java.time package
        System.out.println("\n=== Java.time Package ===");
        LocalDate today = LocalDate.now();
        System.out.println("Today's date: " + today);
        
        // Using Scanner (java.util)
        System.out.println("\n=== Scanner Class ===");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.println("Welcome, " + name + "!");
        scanner.close();
    }
}
