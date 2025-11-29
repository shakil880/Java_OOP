// Demonstrating constructor chaining using 'this()'

public class ConstructorChaining {
    private String name;
    private int age;
    private String city;
    private String country;
    
    // Constructor 1: No parameters - calls Constructor 2
    public ConstructorChaining() {
        this("Unknown");  // Calls Constructor 2
        System.out.println("Constructor 1: No parameters");
    }
    
    // Constructor 2: One parameter - calls Constructor 3
    public ConstructorChaining(String name) {
        this(name, 0);  // Calls Constructor 3
        System.out.println("Constructor 2: Name only");
    }
    
    // Constructor 3: Two parameters - calls Constructor 4
    public ConstructorChaining(String name, int age) {
        this(name, age, "Unknown");  // Calls Constructor 4
        System.out.println("Constructor 3: Name and age");
    }
    
    // Constructor 4: Three parameters - calls Constructor 5
    public ConstructorChaining(String name, int age, String city) {
        this(name, age, city, "Unknown");  // Calls Constructor 5
        System.out.println("Constructor 4: Name, age, and city");
    }
    
    // Constructor 5: All parameters (master constructor)
    public ConstructorChaining(String name, int age, String city, String country) {
        // This is the main constructor that actually initializes all fields
        this.name = name;
        this.age = age;
        this.city = city;
        this.country = country;
        System.out.println("Constructor 5: All parameters (Master)");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);
        System.out.println("Country: " + country);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Example 1: No parameters ===");
        ConstructorChaining person1 = new ConstructorChaining();
        person1.displayInfo();
        
        System.out.println("\n=== Example 2: Name only ===");
        ConstructorChaining person2 = new ConstructorChaining("Alice");
        person2.displayInfo();
        
        System.out.println("\n=== Example 3: Name and age ===");
        ConstructorChaining person3 = new ConstructorChaining("Bob", 30);
        person3.displayInfo();
        
        System.out.println("\n=== Example 4: Name, age, and city ===");
        ConstructorChaining person4 = new ConstructorChaining("Charlie", 25, "New York");
        person4.displayInfo();
        
        System.out.println("\n=== Example 5: All parameters ===");
        ConstructorChaining person5 = new ConstructorChaining("David", 35, "London", "UK");
        person5.displayInfo();
    }
}
