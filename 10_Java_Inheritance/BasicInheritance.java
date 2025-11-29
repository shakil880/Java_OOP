// Demonstrating basic inheritance

// Parent class (superclass)
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
        System.out.println("Animal constructor called");
    }
    
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

// Child class (subclass) inheriting from Animal
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
        System.out.println("Dog constructor called");
    }
    
    // Dog-specific method
    public void bark() {
        System.out.println(name + " is barking: Woof! Woof!");
    }
    
    // Override parent method
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Breed: " + breed);
        System.out.println("Type: Dog");
    }
}

// Another child class
class Cat extends Animal {
    private String color;
    
    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
        System.out.println("Cat constructor called");
    }
    
    // Cat-specific method
    public void meow() {
        System.out.println(name + " is meowing: Meow! Meow!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Color: " + color);
        System.out.println("Type: Cat");
    }
}

public class BasicInheritance {
    public static void main(String[] args) {
        System.out.println("=== Basic Inheritance Demo ===\n");
        
        // Create Dog object
        System.out.println("Creating Dog:");
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        System.out.println();
        
        dog.displayInfo();
        System.out.println();
        dog.eat();      // Inherited from Animal
        dog.sleep();    // Inherited from Animal
        dog.bark();     // Dog's own method
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        // Create Cat object
        System.out.println("Creating Cat:");
        Cat cat = new Cat("Whiskers", 2, "Orange");
        System.out.println();
        
        cat.displayInfo();
        System.out.println();
        cat.eat();      // Inherited from Animal
        cat.sleep();    // Inherited from Animal
        cat.meow();     // Cat's own method
        
        System.out.println("\n" + "=".repeat(40) + "\n");
        
        // Create another Dog
        Dog dog2 = new Dog("Max", 5, "German Shepherd");
        System.out.println();
        dog2.displayInfo();
        System.out.println();
        dog2.bark();
        
        System.out.println("\n=== Inheritance Benefits ===");
        System.out.println("✓ Code reuse (eat, sleep methods)");
        System.out.println("✓ Common behavior in parent class");
        System.out.println("✓ Specific behavior in child classes");
        System.out.println("✓ Easy to maintain and extend");
    }
}
