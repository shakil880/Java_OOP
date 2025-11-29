// Demonstrating multilevel inheritance

// Level 1 - Grandparent class
class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
        System.out.println("Vehicle constructor");
    }
    
    public void start() {
        System.out.println(brand + " vehicle is starting");
    }
    
    public void stop() {
        System.out.println(brand + " vehicle is stopping");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
    }
}

// Level 2 - Parent class inheriting from Vehicle
class Car extends Vehicle {
    protected int numberOfDoors;
    protected String fuelType;
    
    public Car(String brand, int year, int numberOfDoors, String fuelType) {
        super(brand, year);  // Call Vehicle constructor
        this.numberOfDoors = numberOfDoors;
        this.fuelType = fuelType;
        System.out.println("Car constructor");
    }
    
    public void drive() {
        System.out.println("Driving the " + brand + " car");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Fuel: " + fuelType);
    }
}

// Level 3 - Child class inheriting from Car
class ElectricCar extends Car {
    private int batteryCapacity;
    private int range;
    
    public ElectricCar(String brand, int year, int numberOfDoors, int batteryCapacity, int range) {
        super(brand, year, numberOfDoors, "Electric");  // Call Car constructor
        this.batteryCapacity = batteryCapacity;
        this.range = range;
        System.out.println("ElectricCar constructor");
    }
    
    public void charge() {
        System.out.println("Charging " + brand + " electric car");
    }
    
    public void displayBatteryInfo() {
        System.out.println("Battery: " + batteryCapacity + " kWh");
        System.out.println("Range: " + range + " km");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
        System.out.println("Range: " + range + " km");
        System.out.println("Type: Electric Car");
    }
}

// Another Level 3 - Sports Car
class SportsCar extends Car {
    private int topSpeed;
    private String engineType;
    
    public SportsCar(String brand, int year, int numberOfDoors, String fuelType, int topSpeed, String engineType) {
        super(brand, year, numberOfDoors, fuelType);
        this.topSpeed = topSpeed;
        this.engineType = engineType;
        System.out.println("SportsCar constructor");
    }
    
    public void race() {
        System.out.println(brand + " sports car is racing at " + topSpeed + " km/h");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Top Speed: " + topSpeed + " km/h");
        System.out.println("Engine: " + engineType);
        System.out.println("Type: Sports Car");
    }
}

public class MultilevelInheritance {
    public static void main(String[] args) {
        System.out.println("=== Multilevel Inheritance Demo ===\n");
        
        // Create ElectricCar (inherits from Car which inherits from Vehicle)
        System.out.println("Creating Electric Car:");
        System.out.println("-".repeat(40));
        ElectricCar tesla = new ElectricCar("Tesla Model S", 2024, 4, 100, 600);
        
        System.out.println("\nElectric Car Information:");
        tesla.displayInfo();
        
        System.out.println("\nElectric Car Actions:");
        tesla.start();      // From Vehicle (grandparent)
        tesla.drive();      // From Car (parent)
        tesla.charge();     // From ElectricCar (own)
        tesla.displayBatteryInfo();  // From ElectricCar (own)
        tesla.stop();       // From Vehicle (grandparent)
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create SportsCar
        System.out.println("Creating Sports Car:");
        System.out.println("-".repeat(40));
        SportsCar ferrari = new SportsCar("Ferrari F8", 2023, 2, "Petrol", 340, "V8");
        
        System.out.println("\nSports Car Information:");
        ferrari.displayInfo();
        
        System.out.println("\nSports Car Actions:");
        ferrari.start();    // From Vehicle (grandparent)
        ferrari.drive();    // From Car (parent)
        ferrari.race();     // From SportsCar (own)
        ferrari.stop();     // From Vehicle (grandparent)
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create regular Car
        System.out.println("Creating Regular Car:");
        System.out.println("-".repeat(40));
        Car toyota = new Car("Toyota Camry", 2022, 4, "Hybrid");
        
        System.out.println("\nRegular Car Information:");
        toyota.displayInfo();
        
        System.out.println("\nRegular Car Actions:");
        toyota.start();
        toyota.drive();
        toyota.stop();
        
        System.out.println("\n=== Inheritance Hierarchy ===");
        System.out.println("Vehicle (Grandparent)");
        System.out.println("  ↓");
        System.out.println("Car (Parent)");
        System.out.println("  ↓");
        System.out.println("ElectricCar, SportsCar (Children)");
        
        System.out.println("\n=== Multilevel Inheritance Benefits ===");
        System.out.println("✓ Each level adds specific features");
        System.out.println("✓ Code reuse at multiple levels");
        System.out.println("✓ Natural hierarchy representation");
        System.out.println("✓ ElectricCar has access to Vehicle and Car methods");
    }
}
