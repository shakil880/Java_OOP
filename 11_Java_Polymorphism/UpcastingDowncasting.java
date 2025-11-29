// Upcasting and Downcasting demonstration

class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
    
    public void start() {
        System.out.println(brand + " vehicle starting");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
    }
}

class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, int numberOfDoors) {
        super(brand);
        this.numberOfDoors = numberOfDoors;
    }
    
    public void drive() {
        System.out.println("Driving " + brand + " car");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Type: Car");
    }
}

class Bike extends Vehicle {
    private boolean hasCarrier;
    
    public Bike(String brand, boolean hasCarrier) {
        super(brand);
        this.hasCarrier = hasCarrier;
    }
    
    public void pedal() {
        System.out.println("Pedaling " + brand + " bike");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Has Carrier: " + hasCarrier);
        System.out.println("Type: Bike");
    }
}

public class UpcastingDowncasting {
    public static void main(String[] args) {
        System.out.println("=== Upcasting and Downcasting Demo ===\n");
        
        // === UPCASTING (Implicit) ===
        System.out.println("=== UPCASTING (Child to Parent) ===");
        Car car = new Car("Toyota", 4);
        
        // Upcasting - child reference to parent type (implicit/automatic)
        Vehicle vehicle1 = car;  // Automatic upcasting
        
        System.out.println("After upcasting Car to Vehicle:");
        vehicle1.start();  // Can call Vehicle methods
        vehicle1.displayInfo();  // Calls overridden method in Car
        
        // Cannot call Car-specific methods through Vehicle reference
        // vehicle1.drive();  // ERROR! Vehicle doesn't have drive()
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === DOWNCASTING (Explicit) ===
        System.out.println("=== DOWNCASTING (Parent to Child) ===");
        
        Vehicle vehicle2 = new Car("Honda", 2);  // Upcasting
        
        // Downcasting - parent reference back to child type (explicit)
        if (vehicle2 instanceof Car) {
            Car downcastCar = (Car) vehicle2;  // Explicit downcasting
            System.out.println("Downcasting successful!");
            downcastCar.drive();  // Can now call Car methods
            downcastCar.displayInfo();
        }
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === instanceof OPERATOR ===
        System.out.println("=== instanceof Operator (Type Checking) ===");
        
        Vehicle v1 = new Car("BMW", 4);
        Vehicle v2 = new Bike("Trek", true);
        Vehicle v3 = new Vehicle("Generic");
        
        System.out.println("v1 instanceof Vehicle: " + (v1 instanceof Vehicle));
        System.out.println("v1 instanceof Car: " + (v1 instanceof Car));
        System.out.println("v1 instanceof Bike: " + (v1 instanceof Bike));
        
        System.out.println("\nv2 instanceof Vehicle: " + (v2 instanceof Vehicle));
        System.out.println("v2 instanceof Car: " + (v2 instanceof Car));
        System.out.println("v2 instanceof Bike: " + (v2 instanceof Bike));
        
        // Safe downcasting using instanceof
        System.out.println("\n=== Safe Downcasting ===");
        Vehicle[] vehicles = {
            new Car("Ford", 4),
            new Bike("Giant", false),
            new Car("Tesla", 2),
            new Bike("Schwinn", true)
        };
        
        for (Vehicle v : vehicles) {
            System.out.println("\nProcessing vehicle:");
            v.start();
            
            if (v instanceof Car) {
                Car c = (Car) v;
                c.drive();
                c.displayInfo();
            } else if (v instanceof Bike) {
                Bike b = (Bike) v;
                b.pedal();
                b.displayInfo();
            }
        }
        
        // === ClassCastException Example ===
        System.out.println("\n=== Unsafe Downcasting (Error) ===");
        try {
            Vehicle vehicle4 = new Bike("Mongoose", true);
            // Wrong downcasting - will throw ClassCastException
            Car wrongCast = (Car) vehicle4;  // Runtime error!
            wrongCast.drive();
        } catch (ClassCastException e) {
            System.out.println("Error: Cannot cast Bike to Car!");
            System.out.println("Exception: " + e.getMessage());
        }
        
        System.out.println("\n=== Best Practices ===");
        System.out.println("✓ Upcasting is automatic and safe");
        System.out.println("✓ Downcasting requires explicit cast");
        System.out.println("✓ Always use instanceof before downcasting");
        System.out.println("✓ Avoid unnecessary downcasting");
    }
}
