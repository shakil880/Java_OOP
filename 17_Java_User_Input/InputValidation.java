import java.util.Scanner;

// Input Validation and Error Handling

public class InputValidation {
    
    public static int readValidAge(Scanner scanner) {
        while (true) {
            System.out.print("Enter your age (1-120): ");
            
            if (scanner.hasNextInt()) {
                int age = scanner.nextInt();
                scanner.nextLine(); // Clear buffer
                
                if (age >= 1 && age <= 120) {
                    return age;
                } else {
                    System.out.println("❌ Age must be between 1 and 120!");
                }
            } else {
                System.out.println("❌ Please enter a valid number!");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    public static double readValidPrice(Scanner scanner) {
        while (true) {
            System.out.print("Enter price: $");
            
            if (scanner.hasNextDouble()) {
                double price = scanner.nextDouble();
                scanner.nextLine(); // Clear buffer
                
                if (price >= 0) {
                    return price;
                } else {
                    System.out.println("❌ Price cannot be negative!");
                }
            } else {
                System.out.println("❌ Please enter a valid price!");
                scanner.nextLine(); // Clear invalid input
            }
        }
    }
    
    public static String readNonEmptyString(Scanner scanner, String prompt) {
        while (true) {
            System.out.print(prompt);
            String input = scanner.nextLine().trim();
            
            if (!input.isEmpty()) {
                return input;
            } else {
                System.out.println("❌ Input cannot be empty!");
            }
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Input Validation Demo ===\n");
        
        // Validate age
        int age = readValidAge(scanner);
        System.out.println("✓ Valid age: " + age + "\n");
        
        // Validate name
        String name = readNonEmptyString(scanner, "Enter your name: ");
        System.out.println("✓ Valid name: " + name + "\n");
        
        // Validate price
        double price = readValidPrice(scanner);
        System.out.println("✓ Valid price: $" + price + "\n");
        
        // Menu system with validation
        System.out.println("=".repeat(50));
        System.out.println("\n=== Interactive Menu ===");
        
        boolean exit = false;
        
        while (!exit) {
            System.out.println("\n1. Add item");
            System.out.println("2. View items");
            System.out.println("3. Delete item");
            System.out.println("4. Exit");
            System.out.print("Enter your choice (1-4): ");
            
            if (scanner.hasNextInt()) {
                int choice = scanner.nextInt();
                scanner.nextLine(); // Clear buffer
                
                switch (choice) {
                    case 1:
                        System.out.println("✓ Add item selected");
                        String itemName = readNonEmptyString(scanner, "Enter item name: ");
                        double itemPrice = readValidPrice(scanner);
                        System.out.println("Item added: " + itemName + " - $" + itemPrice);
                        break;
                    case 2:
                        System.out.println("✓ View items selected");
                        break;
                    case 3:
                        System.out.println("✓ Delete item selected");
                        break;
                    case 4:
                        System.out.println("✓ Exiting...");
                        exit = true;
                        break;
                    default:
                        System.out.println("❌ Invalid choice! Please enter 1-4");
                }
            } else {
                System.out.println("❌ Invalid input! Please enter a number");
                scanner.nextLine(); // Clear invalid input
            }
        }
        
        // Password validation
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Password Validation ===\n");
        
        while (true) {
            System.out.print("Enter password (min 8 characters): ");
            String password = scanner.nextLine();
            
            if (password.length() >= 8) {
                System.out.println("✓ Valid password!");
                break;
            } else {
                System.out.println("❌ Password too short! Needs at least 8 characters");
            }
        }
        
        // Email validation
        System.out.println("\n=== Email Validation ===\n");
        
        while (true) {
            System.out.print("Enter email: ");
            String email = scanner.nextLine();
            
            if (email.contains("@") && email.contains(".")) {
                System.out.println("✓ Valid email format!");
                break;
            } else {
                System.out.println("❌ Invalid email! Must contain @ and .");
            }
        }
        
        scanner.close();
        
        System.out.println("\n=== Validation Best Practices ===");
        System.out.println("✓ Always validate user input");
        System.out.println("✓ Use hasNext methods to check type");
        System.out.println("✓ Handle invalid input gracefully");
        System.out.println("✓ Provide clear error messages");
        System.out.println("✓ Use loops for retry logic");
    }
}
