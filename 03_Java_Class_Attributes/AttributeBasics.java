// Basic Attribute Usage

class Laptop {
    // Instance attributes
    String brand;
    String model;
    int ram;
    int storage;
    double price;
    boolean isOn;
    
    void displaySpecs() {
        System.out.println("===== LAPTOP SPECIFICATIONS =====");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("RAM: " + ram + " GB");
        System.out.println("Storage: " + storage + " GB");
        System.out.println("Price: $" + price);
        System.out.println("Status: " + (isOn ? "ON" : "OFF"));
        System.out.println("================================");
    }
    
    void powerOn() {
        isOn = true;
        System.out.println("💻 " + brand + " " + model + " powered ON");
    }
    
    void powerOff() {
        isOn = false;
        System.out.println("💤 " + brand + " " + model + " powered OFF");
    }
}

public class AttributeBasics {
    public static void main(String[] args) {
        System.out.println("=== Java Class Attributes Example ===\n");
        
        // Creating laptop object
        Laptop myLaptop = new Laptop();
        
        // Setting attributes (state)
        myLaptop.brand = "Dell";
        myLaptop.model = "XPS 15";
        myLaptop.ram = 16;
        myLaptop.storage = 512;
        myLaptop.price = 1499.99;
        myLaptop.isOn = false;
        
        // Using the object
        myLaptop.displaySpecs();
        System.out.println();
        
        myLaptop.powerOn();
        myLaptop.displaySpecs();
        System.out.println();
        
        myLaptop.powerOff();
        
        // Accessing individual attributes
        System.out.println("\n--- Direct Attribute Access ---");
        System.out.println("Brand: " + myLaptop.brand);
        System.out.println("Price: $" + myLaptop.price);
        
        System.out.println("\n✓ Attributes represent the STATE of an object!");
    }
}
