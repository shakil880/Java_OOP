// Multiple Interfaces and Default Methods

interface Flyable {
    void fly();
    
    default void takeOff() {
        System.out.println("Taking off...");
    }
    
    default void land() {
        System.out.println("Landing...");
    }
}

interface Swimmable {
    void swim();
    
    default void dive() {
        System.out.println("Diving into water...");
    }
}

interface Walkable {
    void walk();
}

// Class implementing multiple interfaces
class Duck implements Flyable, Swimmable, Walkable {
    private String name;
    
    public Duck(String name) {
        this.name = name;
    }
    
    @Override
    public void fly() {
        System.out.println(name + " is flying");
    }
    
    @Override
    public void swim() {
        System.out.println(name + " is swimming");
    }
    
    @Override
    public void walk() {
        System.out.println(name + " is walking");
    }
    
    // Can override default methods
    @Override
    public void takeOff() {
        System.out.println(name + " flaps wings and takes off!");
    }
}

class Fish implements Swimmable {
    private String name;
    
    public Fish(String name) {
        this.name = name;
    }
    
    @Override
    public void swim() {
        System.out.println(name + " is swimming gracefully");
    }
}

class Airplane implements Flyable {
    private String model;
    
    public Airplane(String model) {
        this.model = model;
    }
    
    @Override
    public void fly() {
        System.out.println(model + " is flying at high altitude");
    }
    
    @Override
    public void takeOff() {
        System.out.println(model + " accelerates on runway and takes off!");
    }
    
    @Override
    public void land() {
        System.out.println(model + " descends and lands on runway");
    }
}

public class MultipleInterfaces {
    public static void main(String[] args) {
        System.out.println("=== Multiple Interfaces Demo ===\n");
        
        // Duck can do everything
        Duck duck = new Duck("Donald");
        System.out.println("=== Duck ===");
        duck.walk();
        duck.takeOff();  // Overridden default method
        duck.fly();
        duck.land();  // Default method
        duck.dive();  // Default method
        duck.swim();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Fish can only swim
        Fish fish = new Fish("Nemo");
        System.out.println("=== Fish ===");
        fish.swim();
        fish.dive();  // Default method
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Airplane can fly
        Airplane plane = new Airplane("Boeing 747");
        System.out.println("=== Airplane ===");
        plane.takeOff();  // Overridden default method
        plane.fly();
        plane.land();  // Overridden default method
        
        // Polymorphism with interfaces
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Polymorphism with Flyable ===\n");
        
        Flyable[] flyingObjects = {
            new Duck("Daffy"),
            new Airplane("Airbus A380"),
            new Duck("Daisy")
        };
        
        for (Flyable obj : flyingObjects) {
            obj.takeOff();
            obj.fly();
            obj.land();
            System.out.println();
        }
        
        System.out.println("=== Swimmable Objects ===\n");
        Swimmable[] swimmingObjects = {
            new Duck("Huey"),
            new Fish("Dory")
        };
        
        for (Swimmable obj : swimmingObjects) {
            obj.dive();
            obj.swim();
            System.out.println();
        }
        
        System.out.println("=== Multiple Interfaces Benefits ===");
        System.out.println("✓ Class can implement multiple interfaces");
        System.out.println("✓ Solves multiple inheritance problem");
        System.out.println("✓ Default methods provide implementation");
        System.out.println("✓ Flexible and extensible design");
    }
}
