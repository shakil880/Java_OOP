// Constructor chaining with super

class Grandparent {
    protected String familyName;
    
    public Grandparent() {
        this.familyName = "Unknown";
        System.out.println("Grandparent() - No-arg constructor");
    }
    
    public Grandparent(String familyName) {
        this.familyName = familyName;
        System.out.println("Grandparent(String) - Family: " + familyName);
    }
    
    public void showFamily() {
        System.out.println("Family Name: " + familyName);
    }
}

class Parent extends Grandparent {
    protected String parentName;
    
    public Parent() {
        super();  // Calls Grandparent()
        this.parentName = "Unknown Parent";
        System.out.println("Parent() - No-arg constructor");
    }
    
    public Parent(String familyName, String parentName) {
        super(familyName);  // Calls Grandparent(String)
        this.parentName = parentName;
        System.out.println("Parent(String, String) - Parent: " + parentName);
    }
    
    public void showInfo() {
        System.out.println("Family: " + familyName);
        System.out.println("Parent: " + parentName);
    }
}

class Child extends Parent {
    private String childName;
    
    public Child() {
        super();  // Calls Parent()
        this.childName = "Unknown Child";
        System.out.println("Child() - No-arg constructor");
    }
    
    public Child(String familyName, String parentName, String childName) {
        super(familyName, parentName);  // Calls Parent(String, String)
        this.childName = childName;
        System.out.println("Child(String, String, String) - Child: " + childName);
    }
    
    public void showFullInfo() {
        System.out.println("\n=== Full Information ===");
        System.out.println("Family Name: " + familyName);
        System.out.println("Parent Name: " + parentName);
        System.out.println("Child Name: " + childName);
    }
}

public class SuperConstructor {
    public static void main(String[] args) {
        System.out.println("=== Constructor Chaining with super ===\n");
        
        System.out.println("Example 1: No-arg constructors");
        System.out.println("-".repeat(40));
        Child child1 = new Child();
        child1.showFullInfo();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("Example 2: Parameterized constructors");
        System.out.println("-".repeat(40));
        Child child2 = new Child("Smith", "John Smith", "Emma Smith");
        child2.showFullInfo();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        System.out.println("Example 3: Another instance");
        System.out.println("-".repeat(40));
        Child child3 = new Child("Johnson", "Mary Johnson", "Tom Johnson");
        child3.showFullInfo();
        
        System.out.println("\n=== Constructor Chain ===");
        System.out.println("Child() → Parent() → Grandparent()");
        System.out.println("OR");
        System.out.println("Child(params) → Parent(params) → Grandparent(params)");
    }
}
