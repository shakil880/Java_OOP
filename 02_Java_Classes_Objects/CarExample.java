// Real-world example: Car dealership system

class Car {
    // Attributes
    String brand;
    String model;
    int year;
    String color;
    double price;
    int mileage;
    
    // Methods
    void startEngine() {
        System.out.println("🚗 " + brand + " " + model + " engine started: Vroom!");
    }
    
    void drive(int kilometers) {
        mileage += kilometers;
        System.out.println("Driving " + kilometers + " km...");
        System.out.println("Total mileage: " + mileage + " km");
    }
    
    void displayInfo() {
        System.out.println("========== CAR DETAILS ==========");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Price: $" + price);
        System.out.println("Mileage: " + mileage + " km");
        System.out.println("=================================");
    }
    
    void honk() {
        System.out.println("🔊 Beep! Beep!");
    }
    
    void repaint(String newColor) {
        System.out.println("Repainting from " + color + " to " + newColor);
        color = newColor;
        System.out.println("✓ Car repainted!");
    }
}

public class CarExample {
    public static void main(String[] args) {
        System.out.println("=== Car Dealership System ===\n");
        
        // Create first car
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.year = 2024;
        car1.color = "Silver";
        car1.price = 28000.00;
        car1.mileage = 0;
        
        // Create second car
        Car car2 = new Car();
        car2.brand = "BMW";
        car2.model = "M3";
        car2.year = 2024;
        car2.color = "Black";
        car2.price = 72000.00;
        car2.mileage = 100;
        
        // Display and use car1
        car1.displayInfo();
        car1.startEngine();
        car1.honk();
        car1.drive(50);
        System.out.println();
        
        // Display and use car2
        car2.displayInfo();
        car2.startEngine();
        car2.drive(30);
        car2.repaint("Blue");
        System.out.println();
        
        // Final display
        System.out.println("FINAL STATUS:\n");
        car1.displayInfo();
        System.out.println();
        car2.displayInfo();
    }
}
