// Basic Constructor Usage

class Book {
    String title;
    String author;
    int pages;
    
    // Constructor - same name as class, no return type
    Book() {
        System.out.println("📚 Book object created!");
        title = "Unknown";
        author = "Unknown";
        pages = 0;
    }
    
    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
        System.out.println("---");
    }
}

class Car {
    String brand;
    String model;
    int year;
    
    // Constructor with initialization
    Car() {
        brand = "Toyota";
        model = "Camry";
        year = 2024;
        System.out.println("🚗 Car created with default values!");
    }
    
    void display() {
        System.out.println(year + " " + brand + " " + model);
    }
}

class Person {
    String name;
    int age;
    
    // Constructor
    Person() {
        System.out.println("👤 Creating a new person...");
        name = "John Doe";
        age = 25;
        System.out.println("✓ Person created: " + name);
    }
    
    void introduce() {
        System.out.println("Hello! I'm " + name + ", " + age + " years old.");
    }
}

public class ConstructorBasics {
    public static void main(String[] args) {
        System.out.println("=== Constructor Basics ===\n");
        
        // Constructor is called automatically when object is created
        System.out.println("Creating book1:");
        Book book1 = new Book();
        book1.displayInfo();
        
        System.out.println("\nCreating book2:");
        Book book2 = new Book();
        book2.title = "Java Programming";
        book2.author = "James Gosling";
        book2.pages = 500;
        book2.displayInfo();
        
        System.out.println("\nCreating cars:");
        Car car1 = new Car();
        car1.display();
        
        Car car2 = new Car();
        car2.brand = "BMW";
        car2.model = "M3";
        car2.year = 2023;
        car2.display();
        
        System.out.println("\nCreating persons:");
        Person person1 = new Person();
        person1.introduce();
        
        Person person2 = new Person();
        person2.name = "Alice Smith";
        person2.age = 30;
        person2.introduce();
        
        System.out.println("\n✓ Constructor Features:");
        System.out.println("  - Same name as class");
        System.out.println("  - No return type");
        System.out.println("  - Called automatically when object is created");
        System.out.println("  - Used to initialize objects");
    }
}
