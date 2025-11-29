// Basic Interface Implementation

// Interface definition
interface Animal {
    // Abstract methods (public and abstract by default)
    void makeSound();
    void eat();
    void sleep();
}

// Class implementing interface
class Dog implements Animal {
    private String name;
    
    public Dog(String name) {
        this.name = name;
    }
    
    // Must implement all interface methods
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping in the doghouse");
    }
}

class Cat implements Animal {
    private String name;
    
    public Cat(String name) {
        this.name = name;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow! Meow!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating cat food");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping on the couch");
    }
}

class Bird implements Animal {
    private String name;
    
    public Bird(String name) {
        this.name = name;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Tweet! Tweet!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating seeds");
    }
    
    @Override
    public void sleep() {
        System.out.println(name + " is sleeping in the nest");
    }
}

public class BasicInterface {
    public static void main(String[] args) {
        System.out.println("=== Basic Interface Demo ===\n");
        
        // Create objects
        Dog dog = new Dog("Buddy");
        Cat cat = new Cat("Whiskers");
        Bird bird = new Bird("Tweety");
        
        System.out.println("=== Dog ===");
        dog.makeSound();
        dog.eat();
        dog.sleep();
        
        System.out.println("\n=== Cat ===");
        cat.makeSound();
        cat.eat();
        cat.sleep();
        
        System.out.println("\n=== Bird ===");
        bird.makeSound();
        bird.eat();
        bird.sleep();
        
        // Polymorphism with interface
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Polymorphism with Interface ===\n");
        
        Animal[] animals = {
            new Dog("Max"),
            new Cat("Felix"),
            new Bird("Polly"),
            new Dog("Charlie")
        };
        
        for (Animal animal : animals) {
            animal.makeSound();
            animal.eat();
            animal.sleep();
            System.out.println();
        }
        
        System.out.println("=== Interface Features ===");
        System.out.println("✓ All methods are public and abstract by default");
        System.out.println("✓ Cannot be instantiated");
        System.out.println("✓ Class must implement all methods");
        System.out.println("✓ Supports multiple inheritance");
    }
}
