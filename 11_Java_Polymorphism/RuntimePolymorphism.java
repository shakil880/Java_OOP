// Runtime Polymorphism demonstration

class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
    
    public void move() {
        System.out.println("Animal moves");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println("Dog runs on four legs");
    }
    
    public void fetch() {
        System.out.println("Dog fetches the ball");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows: Meow! Meow!");
    }
    
    @Override
    public void move() {
        System.out.println("Cat walks gracefully");
    }
    
    public void scratch() {
        System.out.println("Cat scratches");
    }
}

class Bird extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bird chirps: Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        System.out.println("Bird flies in the sky");
    }
    
    public void fly() {
        System.out.println("Bird is flying high");
    }
}

public class RuntimePolymorphism {
    public static void main(String[] args) {
        System.out.println("=== Runtime Polymorphism Demo ===\n");
        
        // Parent reference, child objects (Polymorphism)
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        Animal animal3 = new Bird();
        
        System.out.println("Animal 1 (Dog reference):");
        animal1.makeSound();  // Calls Dog's method (runtime binding)
        animal1.move();
        
        System.out.println("\nAnimal 2 (Cat reference):");
        animal2.makeSound();  // Calls Cat's method (runtime binding)
        animal2.move();
        
        System.out.println("\nAnimal 3 (Bird reference):");
        animal3.makeSound();  // Calls Bird's method (runtime binding)
        animal3.move();
        
        // Cannot call child-specific methods through parent reference
        // animal1.fetch();  // ERROR! Animal doesn't have fetch()
        
        // Polymorphism with arrays
        System.out.println("\n=== Array of Animals ===");
        Animal[] animals = {
            new Dog(),
            new Cat(),
            new Bird(),
            new Dog(),
            new Cat()
        };
        
        for (int i = 0; i < animals.length; i++) {
            System.out.println("\nAnimal " + (i + 1) + ":");
            animals[i].makeSound();  // Runtime polymorphism
            animals[i].move();
        }
        
        // Method that accepts parent type
        System.out.println("\n=== Polymorphic Method ===");
        playWithAnimal(new Dog());
        playWithAnimal(new Cat());
        playWithAnimal(new Bird());
        
        System.out.println("\n=== Runtime Polymorphism Benefits ===");
        System.out.println("✓ Same method call, different behavior");
        System.out.println("✓ Decided at runtime, not compile time");
        System.out.println("✓ Enables flexible and extensible code");
        System.out.println("✓ Write code that works with parent type");
    }
    
    // Polymorphic method - accepts Animal but works with any subclass
    public static void playWithAnimal(Animal animal) {
        System.out.println("\nPlaying with animal:");
        animal.makeSound();
        animal.move();
    }
}
