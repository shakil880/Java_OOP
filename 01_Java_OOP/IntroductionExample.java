// Introduction to OOP - Basic Example

// This is a Class - a blueprint for creating objects
class Animal {
    // Attributes (data/properties)
    String name;
    int age;
    String species;
    
    // Method (behavior/action)
    void makeSound() {
        System.out.println(name + " makes a sound!");
    }
    
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Species: " + species);
        System.out.println("Age: " + age + " years");
        System.out.println("-------------------");
    }
}

public class IntroductionExample {
    public static void main(String[] args) {
        System.out.println("=== Introduction to Java OOP ===\n");
        
        // Creating Objects (instances) from the Animal class
        Animal animal1 = new Animal();
        animal1.name = "Leo";
        animal1.species = "Lion";
        animal1.age = 5;
        
        Animal animal2 = new Animal();
        animal2.name = "Bella";
        animal2.species = "Dog";
        animal2.age = 3;
        
        // Using the objects
        System.out.println("Animal 1:");
        animal1.displayInfo();
        animal1.makeSound();
        
        System.out.println("\nAnimal 2:");
        animal2.displayInfo();
        animal2.makeSound();
        
        System.out.println("\n✓ This demonstrates the basic OOP concept:");
        System.out.println("  - Class (Animal) = Blueprint");
        System.out.println("  - Objects (animal1, animal2) = Instances");
        System.out.println("  - Attributes (name, age, species) = Data");
        System.out.println("  - Methods (makeSound, displayInfo) = Behavior");
    }
}
