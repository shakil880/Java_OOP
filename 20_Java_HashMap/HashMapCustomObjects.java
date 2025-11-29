import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

// HashMap with Custom Objects

class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    // Must override equals and hashCode for use as HashMap key
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
    
    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

class Employee {
    private String id;
    private String name;
    private String department;
    private double salary;
    
    public Employee(String id, String name, String department, double salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    public String getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public double getSalary() {
        return salary;
    }
    
    @Override
    public String toString() {
        return String.format("%-10s %-15s %-12s $%.2f", 
                           id, name, department, salary);
    }
}

class ShoppingCart {
    private HashMap<String, Integer> items;
    private HashMap<String, Double> prices;
    
    public ShoppingCart() {
        items = new HashMap<>();
        prices = new HashMap<>();
        
        // Initialize some prices
        prices.put("Apple", 1.99);
        prices.put("Banana", 0.99);
        prices.put("Orange", 2.49);
        prices.put("Milk", 3.99);
        prices.put("Bread", 2.99);
    }
    
    public void addItem(String item, int quantity) {
        items.put(item, items.getOrDefault(item, 0) + quantity);
        System.out.println("Added " + quantity + " " + item + "(s)");
    }
    
    public void removeItem(String item) {
        if (items.containsKey(item)) {
            items.remove(item);
            System.out.println("Removed " + item + " from cart");
        } else {
            System.out.println(item + " not in cart");
        }
    }
    
    public void displayCart() {
        System.out.println("\n=== Shopping Cart ===");
        if (items.isEmpty()) {
            System.out.println("Cart is empty");
            return;
        }
        
        System.out.println(String.format("%-15s %-10s %-10s %s", 
                                       "Item", "Quantity", "Price", "Total"));
        System.out.println("=".repeat(50));
        
        double total = 0;
        for (Map.Entry<String, Integer> entry : items.entrySet()) {
            String item = entry.getKey();
            int quantity = entry.getValue();
            double price = prices.get(item);
            double itemTotal = price * quantity;
            
            System.out.println(String.format("%-15s %-10d $%-9.2f $%.2f", 
                                           item, quantity, price, itemTotal));
            total += itemTotal;
        }
        
        System.out.println("=".repeat(50));
        System.out.println(String.format("%37s $%.2f", "Total:", total));
    }
    
    public double getTotal() {
        double total = 0;
        for (Map.Entry<String, Integer> entry : items.entrySet()) {
            total += prices.get(entry.getKey()) * entry.getValue();
        }
        return total;
    }
}

public class HashMapCustomObjects {
    public static void main(String[] args) {
        System.out.println("=== HashMap with Custom Objects ===\n");
        
        // Person as key
        System.out.println("=== HashMap with Person Keys ===");
        
        HashMap<Person, String> personEmails = new HashMap<>();
        
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 30);
        Person p3 = new Person("Charlie", 28);
        
        personEmails.put(p1, "alice@email.com");
        personEmails.put(p2, "bob@email.com");
        personEmails.put(p3, "charlie@email.com");
        
        System.out.println("Emails:");
        for (Map.Entry<Person, String> entry : personEmails.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Lookup by person
        Person lookup = new Person("Alice", 25);
        System.out.println("\nLookup email for " + lookup + ": " + 
                         personEmails.get(lookup));
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Employee management
        System.out.println("=== Employee Database ===\n");
        
        HashMap<String, Employee> employees = new HashMap<>();
        
        employees.put("E001", new Employee("E001", "John Smith", "IT", 75000));
        employees.put("E002", new Employee("E002", "Jane Doe", "HR", 65000));
        employees.put("E003", new Employee("E003", "Bob Johnson", "IT", 80000));
        employees.put("E004", new Employee("E004", "Alice Brown", "Sales", 70000));
        employees.put("E005", new Employee("E005", "Charlie Wilson", "IT", 72000));
        
        System.out.println("All Employees:");
        System.out.println(String.format("%-10s %-15s %-12s %s", 
                                       "ID", "Name", "Department", "Salary"));
        System.out.println("=".repeat(60));
        for (Employee emp : employees.values()) {
            System.out.println(emp);
        }
        
        // Find employees in IT
        System.out.println("\n=== IT Department ===");
        for (Employee emp : employees.values()) {
            if (emp.getDepartment().equals("IT")) {
                System.out.println(emp);
            }
        }
        
        // Calculate average salary
        double totalSalary = 0;
        for (Employee emp : employees.values()) {
            totalSalary += emp.getSalary();
        }
        double avgSalary = totalSalary / employees.size();
        System.out.println("\nAverage salary: $" + String.format("%.2f", avgSalary));
        
        // Find highest paid employee
        Employee highestPaid = null;
        for (Employee emp : employees.values()) {
            if (highestPaid == null || emp.getSalary() > highestPaid.getSalary()) {
                highestPaid = emp;
            }
        }
        System.out.println("Highest paid: " + highestPaid);
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Shopping cart example
        System.out.println("=== Shopping Cart System ===\n");
        
        ShoppingCart cart = new ShoppingCart();
        
        cart.addItem("Apple", 5);
        cart.addItem("Banana", 3);
        cart.addItem("Milk", 2);
        cart.addItem("Bread", 1);
        cart.addItem("Apple", 2);  // Add more apples
        
        cart.displayCart();
        
        System.out.println("\nRemoving Banana...");
        cart.removeItem("Banana");
        
        cart.displayCart();
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Department salary summary
        System.out.println("=== Department Salary Summary ===\n");
        
        HashMap<String, Double> deptSalaries = new HashMap<>();
        HashMap<String, Integer> deptCounts = new HashMap<>();
        
        for (Employee emp : employees.values()) {
            String dept = emp.getDepartment();
            deptSalaries.put(dept, deptSalaries.getOrDefault(dept, 0.0) + emp.getSalary());
            deptCounts.put(dept, deptCounts.getOrDefault(dept, 0) + 1);
        }
        
        System.out.println(String.format("%-12s %-10s %-15s %s", 
                                       "Department", "Employees", "Total Salary", "Avg Salary"));
        System.out.println("=".repeat(60));
        
        for (String dept : deptSalaries.keySet()) {
            double total = deptSalaries.get(dept);
            int count = deptCounts.get(dept);
            double average = total / count;
            
            System.out.println(String.format("%-12s %-10d $%-14.2f $%.2f", 
                                           dept, count, total, average));
        }
        
        System.out.println("\n=== Custom Objects Benefits ===");
        System.out.println("✓ Use objects as keys or values");
        System.out.println("✓ Override equals() and hashCode()");
        System.out.println("✓ Store complex data structures");
        System.out.println("✓ Enable powerful data management");
    }
}
