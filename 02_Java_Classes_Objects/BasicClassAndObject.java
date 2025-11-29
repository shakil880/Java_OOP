// Basic Class and Object Example

class Person {
    // Attributes
    String name;
    int age;
    String city;
    
    // Methods
    void introduce() {
        System.out.println("Hello! My name is " + name);
        System.out.println("I am " + age + " years old");
        System.out.println("I live in " + city);
    }
    
    void celebrateBirthday() {
        age++;
        System.out.println("🎉 Happy Birthday! Now I'm " + age + " years old!");
    }
}

public class BasicClassAndObject {
    public static void main(String[] args) {
        System.out.println("=== Creating and Using Objects ===\n");
        
        // Creating an object
        Person person1 = new Person();
        
        // Setting attribute values
        person1.name = "Alice";
        person1.age = 25;
        person1.city = "New York";
        
        // Using the object
        person1.introduce();
        System.out.println();
        person1.celebrateBirthday();
        
        System.out.println("\n" + "=".repeat(40));
        System.out.println("Key Concepts Demonstrated:");
        System.out.println("1. Class Person is the blueprint");
        System.out.println("2. person1 is an object (instance)");
        System.out.println("3. name, age, city are attributes");
        System.out.println("4. introduce(), celebrateBirthday() are methods");
    }
}
