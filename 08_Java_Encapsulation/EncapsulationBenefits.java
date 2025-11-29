// Demonstrating encapsulation benefits with a real-world example

public class EncapsulationBenefits {
    // Private fields
    private String productId;
    private String productName;
    private double price;
    private int quantity;
    private double discount;
    private String category;
    
    // Constructor
    public EncapsulationBenefits(String productId, String productName, double price, int quantity) {
        this.productId = productId;
        this.productName = productName;
        setPrice(price);  // Use setter for validation
        setQuantity(quantity);  // Use setter for validation
        this.discount = 0.0;
        this.category = "General";
    }
    
    // Getters
    public String getProductId() {
        return productId;
    }
    
    public String getProductName() {
        return productName;
    }
    
    public double getPrice() {
        return price;
    }
    
    public int getQuantity() {
        return quantity;
    }
    
    public double getDiscount() {
        return discount;
    }
    
    public String getCategory() {
        return category;
    }
    
    // Setters with validation
    public void setProductName(String productName) {
        if (productName != null && !productName.trim().isEmpty()) {
            this.productName = productName;
        } else {
            System.out.println("Invalid product name!");
        }
    }
    
    public void setPrice(double price) {
        if (price >= 0) {
            this.price = price;
        } else {
            System.out.println("Price cannot be negative! Set to 0.");
            this.price = 0;
        }
    }
    
    public void setQuantity(int quantity) {
        if (quantity >= 0) {
            this.quantity = quantity;
            if (quantity == 0) {
                System.out.println("Warning: Product out of stock!");
            }
        } else {
            System.out.println("Quantity cannot be negative! Set to 0.");
            this.quantity = 0;
        }
    }
    
    public void setDiscount(double discount) {
        if (discount >= 0 && discount <= 100) {
            this.discount = discount;
            System.out.println("Discount set to " + discount + "%");
        } else {
            System.out.println("Invalid discount! Must be between 0 and 100%");
        }
    }
    
    public void setCategory(String category) {
        if (category != null && !category.trim().isEmpty()) {
            this.category = category;
        }
    }
    
    // Calculated field (derived from other fields)
    public double getFinalPrice() {
        return price * (1 - discount / 100);
    }
    
    // Business logic methods
    public void addStock(int amount) {
        if (amount > 0) {
            quantity += amount;
            System.out.println("Added " + amount + " units. New quantity: " + quantity);
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    public boolean removeStock(int amount) {
        if (amount > 0 && amount <= quantity) {
            quantity -= amount;
            System.out.println("Removed " + amount + " units. Remaining quantity: " + quantity);
            return true;
        } else {
            System.out.println("Cannot remove " + amount + " units. Current quantity: " + quantity);
            return false;
        }
    }
    
    public double calculateTotalValue() {
        return getFinalPrice() * quantity;
    }
    
    public boolean isInStock() {
        return quantity > 0;
    }
    
    public boolean isLowStock(int threshold) {
        return quantity > 0 && quantity <= threshold;
    }
    
    // Display product information
    public void displayProductInfo() {
        System.out.println("\n=== Product Information ===");
        System.out.println("ID: " + productId);
        System.out.println("Name: " + productName);
        System.out.println("Category: " + category);
        System.out.println("Original Price: $" + price);
        System.out.println("Discount: " + discount + "%");
        System.out.println("Final Price: $" + getFinalPrice());
        System.out.println("Quantity: " + quantity);
        System.out.println("Total Value: $" + calculateTotalValue());
        System.out.println("Status: " + (isInStock() ? "In Stock" : "Out of Stock"));
    }
    
    public static void main(String[] args) {
        System.out.println("=== Encapsulation Benefits Demo ===\n");
        
        // Create product
        EncapsulationBenefits product1 = new EncapsulationBenefits("P001", "Laptop", 999.99, 50);
        product1.setCategory("Electronics");
        product1.displayProductInfo();
        
        // Apply discount
        System.out.println("\n=== Applying Discount ===");
        product1.setDiscount(15);
        product1.displayProductInfo();
        
        // Stock operations
        System.out.println("\n=== Stock Operations ===");
        product1.addStock(20);
        product1.removeStock(30);
        product1.displayProductInfo();
        
        // Try invalid operations (validation works)
        System.out.println("\n=== Testing Validation ===");
        product1.setPrice(-500);  // Invalid
        product1.setQuantity(-10);  // Invalid
        product1.setDiscount(150);  // Invalid
        product1.removeStock(100);  // Not enough stock
        
        // Check stock status
        System.out.println("\n=== Stock Status ===");
        System.out.println("In stock? " + product1.isInStock());
        System.out.println("Low stock (threshold 50)? " + product1.isLowStock(50));
        
        // Create another product
        System.out.println("\n=== Another Product ===");
        EncapsulationBenefits product2 = new EncapsulationBenefits("P002", "Mouse", 29.99, 5);
        product2.setCategory("Electronics");
        product2.setDiscount(10);
        product2.displayProductInfo();
        
        System.out.println("\nLow stock (threshold 10)? " + product2.isLowStock(10));
        
        // Remove all stock
        System.out.println("\n=== Depleting Stock ===");
        product2.removeStock(5);
        product2.displayProductInfo();
        
        System.out.println("\n=== Benefits of Encapsulation ===");
        System.out.println("✓ Data validation (no negative prices/quantities)");
        System.out.println("✓ Controlled access (getters/setters)");
        System.out.println("✓ Business logic encapsulated (stock management)");
        System.out.println("✓ Easy to modify internal implementation");
        System.out.println("✓ Data integrity maintained");
    }
}
