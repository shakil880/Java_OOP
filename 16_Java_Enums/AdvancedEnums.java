// Advanced Enums with Fields, Constructors, and Methods

// Enum with constructor and fields
enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6),
    MARS(6.421e+23, 3.3972e6),
    JUPITER(1.9e+27, 7.1492e7),
    SATURN(5.688e+26, 6.0268e7),
    URANUS(8.686e+25, 2.5559e7),
    NEPTUNE(1.024e+26, 2.4746e7);
    
    private final double mass;   // in kilograms
    private final double radius; // in meters
    
    // Enum constructor (always private)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    public double getMass() {
        return mass;
    }
    
    public double getRadius() {
        return radius;
    }
    
    // Universal gravitational constant  (m3 kg-1 s-2)
    public static final double G = 6.67300E-11;
    
    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    
    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

// Enum for pizza orders
enum PizzaSize {
    SMALL("Small", 8, 8.99),
    MEDIUM("Medium", 10, 11.99),
    LARGE("Large", 12, 14.99),
    EXTRA_LARGE("Extra Large", 14, 17.99);
    
    private final String displayName;
    private final int diameter;
    private final double price;
    
    PizzaSize(String displayName, int diameter, double price) {
        this.displayName = displayName;
        this.diameter = diameter;
        this.price = price;
    }
    
    public String getDisplayName() {
        return displayName;
    }
    
    public int getDiameter() {
        return diameter;
    }
    
    public double getPrice() {
        return price;
    }
    
    public double calculateArea() {
        double radius = diameter / 2.0;
        return Math.PI * radius * radius;
    }
}

// Enum with abstract methods
enum Operation {
    ADD {
        public double apply(double x, double y) {
            return x + y;
        }
    },
    SUBTRACT {
        public double apply(double x, double y) {
            return x - y;
        }
    },
    MULTIPLY {
        public double apply(double x, double y) {
            return x * y;
        }
    },
    DIVIDE {
        public double apply(double x, double y) {
            return x / y;
        }
    };
    
    public abstract double apply(double x, double y);
}

public class AdvancedEnums {
    public static void main(String[] args) {
        System.out.println("=== Advanced Enums Demo ===\n");
        
        // Planet enum with calculations
        System.out.println("=== Planet Information ===");
        double earthWeight = 75; // kg
        
        for (Planet p : Planet.values()) {
            System.out.printf("%s: Mass=%.3e kg, Radius=%.3e m%n", 
                            p, p.getMass(), p.getRadius());
            double weight = p.surfaceWeight(earthWeight);
            System.out.printf("  Your weight on %s: %.2f kg%n", p, weight);
            System.out.println();
        }
        
        System.out.println("=".repeat(50) + "\n");
        
        // Pizza size enum
        System.out.println("=== Pizza Menu ===");
        for (PizzaSize size : PizzaSize.values()) {
            System.out.printf("%s Pizza:%n", size.getDisplayName());
            System.out.printf("  Diameter: %d inches%n", size.getDiameter());
            System.out.printf("  Price: $%.2f%n", size.getPrice());
            System.out.printf("  Area: %.2f sq in%n", size.calculateArea());
            System.out.println();
        }
        
        System.out.println("=".repeat(50) + "\n");
        
        // Operation enum with abstract methods
        System.out.println("=== Calculator Operations ===");
        double x = 10, y = 3;
        
        for (Operation op : Operation.values()) {
            double result = op.apply(x, y);
            System.out.printf("%s: %.2f %s %.2f = %.2f%n", 
                            op, x, op.name().toLowerCase(), y, result);
        }
        
        // Using specific operation
        System.out.println("\n=== Custom Calculations ===");
        double a = 15, b = 4;
        System.out.println("Addition: " + Operation.ADD.apply(a, b));
        System.out.println("Multiplication: " + Operation.MULTIPLY.apply(a, b));
        
        System.out.println("\n=== Advanced Enum Features ===");
        System.out.println("✓ Can have fields and constructors");
        System.out.println("✓ Can have methods");
        System.out.println("✓ Can have abstract methods");
        System.out.println("✓ Each constant can override methods");
    }
}
