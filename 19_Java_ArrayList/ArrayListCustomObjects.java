import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

// ArrayList with Custom Objects

class Student {
    private String name;
    private int age;
    private double gpa;
    
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    @Override
    public String toString() {
        return String.format("%-15s Age: %2d  GPA: %.2f", name, age, gpa);
    }
}

class Product {
    private String name;
    private double price;
    private int quantity;
    
    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    public String getName() {
        return name;
    }
    
    public double getPrice() {
        return price;
    }
    
    public int getQuantity() {
        return quantity;
    }
    
    public double getTotalValue() {
        return price * quantity;
    }
    
    @Override
    public String toString() {
        return String.format("%-15s $%6.2f x %3d = $%7.2f", 
                           name, price, quantity, getTotalValue());
    }
}

public class ArrayListCustomObjects {
    public static void main(String[] args) {
        System.out.println("=== ArrayList with Custom Objects ===\n");
        
        // ArrayList of Students
        System.out.println("=== Student Management ===\n");
        
        ArrayList<Student> students = new ArrayList<>();
        
        students.add(new Student("Alice", 20, 3.8));
        students.add(new Student("Bob", 22, 3.5));
        students.add(new Student("Charlie", 21, 3.9));
        students.add(new Student("Diana", 20, 3.7));
        students.add(new Student("Eve", 23, 3.6));
        
        System.out.println("All Students:");
        for (Student student : students) {
            System.out.println(student);
        }
        
        // Find student with highest GPA
        System.out.println("\n=== Finding Highest GPA ===");
        Student topStudent = students.get(0);
        for (Student student : students) {
            if (student.getGpa() > topStudent.getGpa()) {
                topStudent = student;
            }
        }
        System.out.println("Top student: " + topStudent);
        
        // Calculate average GPA
        double totalGpa = 0;
        for (Student student : students) {
            totalGpa += student.getGpa();
        }
        double avgGpa = totalGpa / students.size();
        System.out.println("Average GPA: " + String.format("%.2f", avgGpa));
        
        // Students with GPA > 3.7
        System.out.println("\n=== Students with GPA > 3.7 ===");
        for (Student student : students) {
            if (student.getGpa() > 3.7) {
                System.out.println(student);
            }
        }
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // Sort students
        System.out.println("=== Sorting Students ===\n");
        
        // Sort by name
        Collections.sort(students, new Comparator<Student>() {
            public int compare(Student s1, Student s2) {
                return s1.getName().compareTo(s2.getName());
            }
        });
        
        System.out.println("Sorted by name:");
        for (Student student : students) {
            System.out.println(student);
        }
        
        // Sort by GPA (descending)
        Collections.sort(students, new Comparator<Student>() {
            public int compare(Student s1, Student s2) {
                return Double.compare(s2.getGpa(), s1.getGpa());
            }
        });
        
        System.out.println("\nSorted by GPA (highest first):");
        for (Student student : students) {
            System.out.println(student);
        }
        
        System.out.println("\n" + "=".repeat(60) + "\n");
        
        // ArrayList of Products
        System.out.println("=== Product Inventory ===\n");
        
        ArrayList<Product> products = new ArrayList<>();
        
        products.add(new Product("Laptop", 999.99, 5));
        products.add(new Product("Mouse", 29.99, 50));
        products.add(new Product("Keyboard", 79.99, 30));
        products.add(new Product("Monitor", 299.99, 10));
        products.add(new Product("Headphones", 149.99, 25));
        
        System.out.println("All Products:");
        for (Product product : products) {
            System.out.println(product);
        }
        
        // Calculate total inventory value
        double totalValue = 0;
        for (Product product : products) {
            totalValue += product.getTotalValue();
        }
        System.out.println("\nTotal inventory value: $" + String.format("%.2f", totalValue));
        
        // Find most expensive product
        System.out.println("\n=== Most Expensive Product ===");
        Product mostExpensive = products.get(0);
        for (Product product : products) {
            if (product.getPrice() > mostExpensive.getPrice()) {
                mostExpensive = product;
            }
        }
        System.out.println(mostExpensive);
        
        // Products under $100
        System.out.println("\n=== Products Under $100 ===");
        for (Product product : products) {
            if (product.getPrice() < 100) {
                System.out.println(product);
            }
        }
        
        // Sort by price
        System.out.println("\n=== Sorted by Price ===");
        Collections.sort(products, new Comparator<Product>() {
            public int compare(Product p1, Product p2) {
                return Double.compare(p1.getPrice(), p2.getPrice());
            }
        });
        
        for (Product product : products) {
            System.out.println(product);
        }
        
        System.out.println("\n=== Custom Objects Benefits ===");
        System.out.println("✓ Store complex data structures");
        System.out.println("✓ Sort by any property");
        System.out.println("✓ Filter and search easily");
        System.out.println("✓ Calculate aggregate values");
    }
}
