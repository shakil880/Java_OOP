// Creating Multiple Objects from the Same Class

class Smartphone {
    String brand;
    String model;
    int storage;
    double price;
    
    void displaySpecs() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Storage: " + storage + "GB");
        System.out.println("Price: $" + price);
        System.out.println("-------------------");
    }
    
    void makeCall(String number) {
        System.out.println("📱 " + model + " calling " + number + "...");
    }
}

public class MultipleObjects {
    public static void main(String[] args) {
        System.out.println("=== Multiple Objects Example ===\n");
        
        // Creating first smartphone object
        Smartphone phone1 = new Smartphone();
        phone1.brand = "Apple";
        phone1.model = "iPhone 15";
        phone1.storage = 256;
        phone1.price = 999.99;
        
        // Creating second smartphone object
        Smartphone phone2 = new Smartphone();
        phone2.brand = "Samsung";
        phone2.model = "Galaxy S24";
        phone2.storage = 512;
        phone2.price = 899.99;
        
        // Creating third smartphone object
        Smartphone phone3 = new Smartphone();
        phone3.brand = "Google";
        phone3.model = "Pixel 8";
        phone3.storage = 128;
        phone3.price = 699.99;
        
        // Using the objects
        System.out.println("Phone 1 Specifications:");
        phone1.displaySpecs();
        
        System.out.println("Phone 2 Specifications:");
        phone2.displaySpecs();
        
        System.out.println("Phone 3 Specifications:");
        phone3.displaySpecs();
        
        // Calling methods on different objects
        phone1.makeCall("555-0101");
        phone2.makeCall("555-0102");
        phone3.makeCall("555-0103");
        
        System.out.println("\n✓ Each object is independent with its own data!");
    }
}
