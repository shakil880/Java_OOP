// Basic Method Examples

class Calculator {
    // Void method - no return value
    void welcome() {
        System.out.println("╔════════════════════════════╗");
        System.out.println("║   Welcome to Calculator!   ║");
        System.out.println("╚════════════════════════════╝");
    }
    
    // Method with parameters
    void add(int a, int b) {
        int result = a + b;
        System.out.println(a + " + " + b + " = " + result);
    }
    
    void subtract(int a, int b) {
        int result = a - b;
        System.out.println(a + " - " + b + " = " + result);
    }
    
    // Method that performs action
    void printTable(int number) {
        System.out.println("Multiplication Table of " + number + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " × " + i + " = " + (number * i));
        }
    }
}

class Robot {
    String name;
    int batteryLevel;
    
    void introduce() {
        System.out.println("🤖 Hi! I'm " + name);
        System.out.println("   Battery: " + batteryLevel + "%");
    }
    
    void move(String direction) {
        if (batteryLevel > 0) {
            System.out.println("🚶 " + name + " moving " + direction + "...");
            batteryLevel -= 5;
        } else {
            System.out.println("⚠️  Low battery! Need recharge!");
        }
    }
    
    void recharge() {
        batteryLevel = 100;
        System.out.println("🔋 " + name + " fully recharged!");
    }
    
    void speak(String message) {
        System.out.println("💬 " + name + " says: " + message);
    }
}

public class MethodBasics {
    public static void main(String[] args) {
        System.out.println("=== Java Methods Example ===\n");
        
        // Calculator example
        Calculator calc = new Calculator();
        calc.welcome();
        System.out.println();
        
        calc.add(15, 25);
        calc.add(100, 50);
        calc.subtract(50, 20);
        System.out.println();
        
        calc.printTable(5);
        
        // Robot example
        System.out.println("\n\n--- Robot Operations ---\n");
        Robot robot = new Robot();
        robot.name = "R2D2";
        robot.batteryLevel = 100;
        
        robot.introduce();
        robot.speak("Hello, humans!");
        robot.move("forward");
        robot.move("right");
        robot.move("left");
        robot.introduce();
        
        System.out.println("\n✓ Methods define what objects CAN DO!");
    }
}
