// Static vs Instance Methods

class MathUtil {
    // Static methods - belong to class
    static int square(int number) {
        return number * number;
    }
    
    static int cube(int number) {
        return number * number * number;
    }
    
    static double circleArea(double radius) {
        return 3.14159 * radius * radius;
    }
    
    static int max(int a, int b) {
        return (a > b) ? a : b;
    }
}

class Counter {
    // Static variable and method
    static int totalCount = 0;
    
    static void incrementTotal() {
        totalCount++;
        System.out.println("Total count: " + totalCount);
    }
    
    static int getTotalCount() {
        return totalCount;
    }
    
    // Instance variables and methods
    int instanceCount = 0;
    String name;
    
    Counter(String name) {
        this.name = name;
        totalCount++;
    }
    
    void increment() {
        instanceCount++;
        System.out.println(name + " count: " + instanceCount);
    }
    
    void display() {
        System.out.println(name + " - Instance: " + instanceCount + ", Total: " + totalCount);
    }
}

class Student {
    String name;
    int rollNumber;
    static String schoolName = "Java High School";
    
    // Instance method - needs object
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + rollNumber);
        System.out.println("School: " + schoolName);
        System.out.println("---");
    }
    
    // Static method - belongs to class
    static void displaySchoolInfo() {
        System.out.println("╔══════════════════════════╗");
        System.out.println("  School: " + schoolName);
        System.out.println("╚══════════════════════════╝");
    }
    
    static void changeSchool(String newName) {
        schoolName = newName;
        System.out.println("School changed to: " + schoolName);
    }
}

public class StaticMethods {
    public static void main(String[] args) {
        System.out.println("=== Static vs Instance Methods ===\n");
        
        // Using static methods - no object needed
        System.out.println("--- Static Methods (MathUtil) ---\n");
        System.out.println("Square of 5: " + MathUtil.square(5));
        System.out.println("Cube of 3: " + MathUtil.cube(3));
        System.out.println("Circle area (r=7): " + MathUtil.circleArea(7));
        System.out.println("Max(25, 18): " + MathUtil.max(25, 18));
        
        // Counter example
        System.out.println("\n--- Counter Example ---\n");
        
        Counter.incrementTotal();
        Counter.incrementTotal();
        
        Counter c1 = new Counter("Counter1");
        Counter c2 = new Counter("Counter2");
        
        c1.increment();
        c1.increment();
        c1.increment();
        
        c2.increment();
        c2.increment();
        
        c1.display();
        c2.display();
        
        System.out.println("\nTotal count: " + Counter.getTotalCount());
        
        // Student example
        System.out.println("\n--- Student Example ---\n");
        
        Student.displaySchoolInfo();
        System.out.println();
        
        Student s1 = new Student();
        s1.name = "Alice";
        s1.rollNumber = 101;
        
        Student s2 = new Student();
        s2.name = "Bob";
        s2.rollNumber = 102;
        
        s1.displayInfo();
        s2.displayInfo();
        
        System.out.println("\nChanging school name...\n");
        Student.changeSchool("Advanced Java Academy");
        System.out.println();
        
        s1.displayInfo();
        s2.displayInfo();
        
        System.out.println("\n✓ Static Methods:");
        System.out.println("  - Called using ClassName.methodName()");
        System.out.println("  - No object needed");
        System.out.println("  - Can't access instance variables");
        System.out.println("\n✓ Instance Methods:");
        System.out.println("  - Called using objectName.methodName()");
        System.out.println("  - Need object to call");
        System.out.println("  - Can access both instance and static members");
    }
}
