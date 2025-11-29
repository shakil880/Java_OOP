// Abstract Classes and Methods

// Abstract class
abstract class Animal {
    protected String name;
    protected int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Abstract methods (no implementation)
    public abstract void makeSound();
    public abstract void move();
    
    // Concrete method (with implementation)
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Concrete class implementing abstract class
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    // Must implement all abstract methods
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Breed: " + breed);
        System.out.println("Type: Dog");
    }
}

class Bird extends Animal {
    private boolean canFly;
    
    public Bird(String name, int age, boolean canFly) {
        super(name, age);
        this.canFly = canFly;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " chirps: Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        if (canFly) {
            System.out.println(name + " flies in the sky");
        } else {
            System.out.println(name + " walks on the ground");
        }
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Can fly: " + canFly);
        System.out.println("Type: Bird");
    }
}

public class AbstractClasses {
    public static void main(String[] args) {
        System.out.println("=== Abstract Classes Demo ===\n");
        
        // Cannot instantiate abstract class
        // Animal animal = new Animal("Generic", 5);  // ERROR!
        
        // Create concrete objects
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        Bird bird1 = new Bird("Tweety", 1, true);
        Bird bird2 = new Bird("Penguin", 5, false);
        
        System.out.println("=== Dog ===");
        dog.displayInfo();
        dog.makeSound();
        dog.move();
        dog.eat();  // Concrete method from abstract class
        dog.sleep();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("=== Bird 1 (Can Fly) ===");
        bird1.displayInfo();
        bird1.makeSound();
        bird1.move();
        bird1.eat();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("=== Bird 2 (Cannot Fly) ===");
        bird2.displayInfo();
        bird2.makeSound();
        bird2.move();
        
        // Polymorphism with abstract class
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Polymorphism with Abstract Class ===\n");
        
        Animal[] animals = {
            new Dog("Max", 5, "German Shepherd"),
            new Bird("Parrot", 2, true),
            new Dog("Charlie", 2, "Beagle")
        };
        
        for (Animal animal : animals) {
            animal.displayInfo();
            animal.makeSound();
            animal.move();
            System.out.println();
        }
        
        System.out.println("=== Abstract Class Features ===");
        System.out.println("✓ Cannot be instantiated");
        System.out.println("✓ Can have abstract and concrete methods");
        System.out.println("✓ Subclasses must implement abstract methods");
        System.out.println("✓ Used for common base functionality");
    }
}
