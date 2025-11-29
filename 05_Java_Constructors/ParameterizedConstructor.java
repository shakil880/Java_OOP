// Parameterized Constructors

class Student {
    String name;
    int rollNumber;
    double gpa;
    
    // Constructor with parameters
    Student(String studentName, int roll, double grade) {
        name = studentName;
        rollNumber = roll;
        gpa = grade;
        System.out.println("✓ Student created: " + name);
    }
    
    void displayInfo() {
        System.out.println("╔═══════════════════════════╗");
        System.out.println("  Name: " + name);
        System.out.println("  Roll: " + rollNumber);
        System.out.println("  GPA: " + gpa);
        System.out.println("╚═══════════════════════════╝");
    }
}

class Rectangle {
    int length;
    int width;
    
    // Parameterized constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
        System.out.println("📐 Rectangle created: " + length + "×" + width);
    }
    
    int calculateArea() {
        return length * width;
    }
    
    int calculatePerimeter() {
        return 2 * (length + width);
    }
    
    void display() {
        System.out.println("Dimensions: " + length + " × " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
        System.out.println("---");
    }
}

class BankAccount {
    String accountNumber;
    String holder;
    double balance;
    
    // Constructor with validation
    BankAccount(String accNum, String holderName, double initialBalance) {
        accountNumber = accNum;
        holder = holderName;
        
        // Validate balance
        if (initialBalance >= 0) {
            balance = initialBalance;
            System.out.println("✓ Account created for " + holder);
            System.out.println("  Initial balance: $" + balance);
        } else {
            balance = 0;
            System.out.println("⚠ Invalid balance! Set to $0");
        }
    }
    
    void displayAccount() {
        System.out.println("═══════════════════════════");
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + holder);
        System.out.println("Balance: $" + balance);
        System.out.println("═══════════════════════════");
    }
}

class Product {
    String name;
    double price;
    int quantity;
    
    // Multiple parameter constructor
    Product(String productName, double productPrice, int stock) {
        name = productName;
        price = productPrice;
        quantity = stock;
    }
    
    double getTotalValue() {
        return price * quantity;
    }
    
    void display() {
        System.out.println("Product: " + name);
        System.out.println("Price: $" + price);
        System.out.println("Stock: " + quantity);
        System.out.println("Total Value: $" + getTotalValue());
        System.out.println("---");
    }
}

public class ParameterizedConstructor {
    public static void main(String[] args) {
        System.out.println("=== Parameterized Constructors ===\n");
        
        // Creating students with different values
        System.out.println("--- Students ---\n");
        Student s1 = new Student("Alice Johnson", 101, 3.8);
        Student s2 = new Student("Bob Smith", 102, 3.5);
        Student s3 = new Student("Charlie Brown", 103, 3.9);
        System.out.println();
        
        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
        
        // Creating rectangles
        System.out.println("\n--- Rectangles ---\n");
        Rectangle rect1 = new Rectangle(5, 3);
        Rectangle rect2 = new Rectangle(10, 7);
        Rectangle rect3 = new Rectangle(8, 8);
        System.out.println();
        
        rect1.display();
        rect2.display();
        rect3.display();
        
        // Creating bank accounts
        System.out.println("\n--- Bank Accounts ---\n");
        BankAccount acc1 = new BankAccount("ACC001", "John Doe", 5000.0);
        BankAccount acc2 = new BankAccount("ACC002", "Jane Smith", 3000.0);
        BankAccount acc3 = new BankAccount("ACC003", "Invalid User", -500.0);
        System.out.println();
        
        acc1.displayAccount();
        acc2.displayAccount();
        acc3.displayAccount();
        
        // Creating products
        System.out.println("\n--- Products ---\n");
        Product p1 = new Product("Laptop", 999.99, 50);
        Product p2 = new Product("Mouse", 29.99, 200);
        Product p3 = new Product("Keyboard", 79.99, 150);
        
        p1.display();
        p2.display();
        p3.display();
        
        System.out.println("\n✓ Parameterized constructors allow:");
        System.out.println("  - Creating objects with custom initial values");
        System.out.println("  - Different objects with different data");
        System.out.println("  - Validation during object creation");
    }
}
