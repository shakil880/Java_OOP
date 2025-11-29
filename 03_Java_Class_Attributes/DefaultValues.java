// Default Values of Attributes

class Product {
    // Numeric types default to 0
    int quantity;
    long barcode;
    double price;
    float discount;
    
    // Boolean defaults to false
    boolean available;
    
    // Reference types default to null
    String name;
    String category;
    
    // Char defaults to '\u0000' (null character)
    char grade;
    
    void display() {
        System.out.println("=== Product Details ===");
        System.out.println("Name: " + name);
        System.out.println("Category: " + category);
        System.out.println("Quantity: " + quantity);
        System.out.println("Barcode: " + barcode);
        System.out.println("Price: " + price);
        System.out.println("Discount: " + discount);
        System.out.println("Available: " + available);
        System.out.println("Grade: '" + grade + "'");
        System.out.println("======================\n");
    }
}

class InitializedProduct {
    // Attributes with initial values
    String name = "Generic Product";
    int stock = 10;
    double price = 9.99;
    boolean inStock = true;
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Stock: " + stock);
        System.out.println("Price: $" + price);
        System.out.println("In Stock: " + inStock);
        System.out.println("-------------------");
    }
}

public class DefaultValues {
    public static void main(String[] args) {
        System.out.println("=== Default Attribute Values ===\n");
        
        // Object with default values
        Product product1 = new Product();
        System.out.println("Product 1 (all defaults):");
        product1.display();
        
        // Object with some values set
        Product product2 = new Product();
        product2.name = "Wireless Mouse";
        product2.price = 29.99;
        product2.available = true;
        System.out.println("Product 2 (some values set):");
        product2.display();
        
        // Object with initialized attributes
        System.out.println("=== Initialized Attributes ===\n");
        InitializedProduct prod1 = new InitializedProduct();
        System.out.println("Product with initial values:");
        prod1.display();
        
        InitializedProduct prod2 = new InitializedProduct();
        prod2.name = "Mechanical Keyboard";
        prod2.price = 89.99;
        System.out.println("Modified product:");
        prod2.display();
        
        System.out.println("\n📋 Default Values Summary:");
        System.out.println("  int, long: 0");
        System.out.println("  double, float: 0.0");
        System.out.println("  boolean: false");
        System.out.println("  char: '\\u0000'");
        System.out.println("  Object references: null");
    }
}
