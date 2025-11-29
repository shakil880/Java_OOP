// Demonstrating method chaining by returning 'this'

public class ReturningThis {
    private String name;
    private int age;
    private String city;
    private String occupation;
    
    // Constructor
    public ReturningThis() {
        this.name = "Unknown";
        this.age = 0;
        this.city = "Unknown";
        this.occupation = "Unknown";
    }
    
    // Setter methods that return 'this' for method chaining
    public ReturningThis setName(String name) {
        this.name = name;
        return this;  // Return current object
    }
    
    public ReturningThis setAge(int age) {
        this.age = age;
        return this;  // Return current object
    }
    
    public ReturningThis setCity(String city) {
        this.city = city;
        return this;  // Return current object
    }
    
    public ReturningThis setOccupation(String occupation) {
        this.occupation = occupation;
        return this;  // Return current object
    }
    
    // Display method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("City: " + city);
        System.out.println("Occupation: " + occupation);
    }
    
    // Method that modifies and returns this
    public ReturningThis incrementAge() {
        this.age++;
        System.out.println("Age incremented to: " + this.age);
        return this;
    }
    
    // Compare with current object
    public boolean isSameCity(ReturningThis other) {
        return this.city.equals(other.city);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Method Chaining Example ===\n");
        
        // Without method chaining (traditional way)
        ReturningThis person1 = new ReturningThis();
        person1.setName("Alice");
        person1.setAge(25);
        person1.setCity("New York");
        person1.setOccupation("Engineer");
        
        System.out.println("Person 1 (traditional way):");
        person1.displayInfo();
        
        System.out.println("\n=== With Method Chaining ===\n");
        
        // With method chaining (fluent interface)
        ReturningThis person2 = new ReturningThis()
            .setName("Bob")
            .setAge(30)
            .setCity("Los Angeles")
            .setOccupation("Designer");
        
        System.out.println("Person 2 (method chaining):");
        person2.displayInfo();
        
        System.out.println("\n=== Chaining Multiple Operations ===\n");
        
        ReturningThis person3 = new ReturningThis()
            .setName("Charlie")
            .setAge(20)
            .setCity("Chicago")
            .incrementAge()  // Returns this
            .incrementAge()  // Can chain multiple times
            .setOccupation("Student");
        
        System.out.println("Person 3 (after chaining):");
        person3.displayInfo();
        
        System.out.println("\n=== Comparison Example ===");
        ReturningThis person4 = new ReturningThis()
            .setName("David")
            .setCity("New York");
        
        if (person1.isSameCity(person4)) {
            System.out.println(person1.name + " and " + person4.name + " are in the same city!");
        }
    }
}
