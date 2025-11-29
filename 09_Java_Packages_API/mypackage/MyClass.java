// Example demonstrating package creation and usage
// This file should be in: mypackage/MyClass.java

package mypackage;

public class MyClass {
    private String message;
    
    public MyClass(String message) {
        this.message = message;
    }
    
    public void displayMessage() {
        System.out.println("Message from mypackage: " + message);
    }
    
    public String getMessage() {
        return message;
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + " from mypackage!");
    }
}
