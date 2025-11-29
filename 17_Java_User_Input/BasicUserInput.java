import java.util.Scanner;

// Basic User Input with Scanner

public class BasicUserInput {
    public static void main(String[] args) {
        // Create Scanner object for reading input
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Basic User Input Demo ===\n");
        
        // Reading String
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        // Reading int
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        // Reading double
        System.out.print("Enter your height (in meters): ");
        double height = scanner.nextDouble();
        
        // Clear the newline
        scanner.nextLine();
        
        // Reading String again
        System.out.print("Enter your city: ");
        String city = scanner.nextLine();
        
        // Display collected information
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Your Information ===");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age + " years");
        System.out.println("Height: " + height + " meters");
        System.out.println("City: " + city);
        
        // Reading boolean
        System.out.print("\nAre you a student? (true/false): ");
        boolean isStudent = scanner.nextBoolean();
        
        if (isStudent) {
            System.out.println("You are currently a student.");
        } else {
            System.out.println("You are not currently a student.");
        }
        
        // Different Scanner methods
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Scanner Methods Demo ===\n");
        
        scanner.nextLine(); // Clear buffer
        
        System.out.print("Enter a whole number: ");
        int number = scanner.nextInt();
        System.out.println("You entered: " + number);
        
        System.out.print("Enter a decimal number: ");
        double decimal = scanner.nextDouble();
        System.out.println("You entered: " + decimal);
        
        scanner.nextLine(); // Clear buffer
        
        System.out.print("Enter a single word: ");
        String word = scanner.next();
        System.out.println("You entered: " + word);
        
        scanner.nextLine(); // Clear remaining line
        
        System.out.print("Enter a full sentence: ");
        String sentence = scanner.nextLine();
        System.out.println("You entered: " + sentence);
        
        // Simple calculator
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Simple Calculator ===\n");
        
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        System.out.println("\nResults:");
        System.out.println(num1 + " + " + num2 + " = " + (num1 + num2));
        System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
        System.out.println(num1 + " * " + num2 + " = " + (num1 * num2));
        System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
        
        // Close the scanner
        scanner.close();
        
        System.out.println("\n=== Scanner Methods ===");
        System.out.println("✓ next() - reads a single word");
        System.out.println("✓ nextLine() - reads entire line");
        System.out.println("✓ nextInt() - reads integer");
        System.out.println("✓ nextDouble() - reads decimal");
        System.out.println("✓ nextBoolean() - reads boolean");
        System.out.println("✓ close() - closes scanner");
    }
}
