// Demonstrating passing 'this' as an argument to methods

class Printer {
    public void print(PassingThisAsArgument obj) {
        System.out.println("Printing object information:");
        obj.displayInfo();
    }
    
    public void printWithFormat(PassingThisAsArgument obj, String format) {
        System.out.println("\n" + format);
        obj.displayInfo();
        System.out.println("=".repeat(format.length()));
    }
}

class EventHandler {
    public void handleEvent(PassingThisAsArgument source) {
        System.out.println("\nEvent triggered by:");
        source.displayInfo();
        System.out.println("Event processed successfully!");
    }
}

public class PassingThisAsArgument {
    private String name;
    private int id;
    private String type;
    
    public PassingThisAsArgument(String name, int id, String type) {
        this.name = name;
        this.id = id;
        this.type = type;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Type: " + type);
    }
    
    // Method that passes 'this' to another object's method
    public void printDetails(Printer printer) {
        // Pass current object to printer
        printer.print(this);
    }
    
    // Method that passes 'this' with additional parameters
    public void printFormattedDetails(Printer printer, String format) {
        printer.printWithFormat(this, format);
    }
    
    // Method that triggers an event and passes 'this' as the source
    public void triggerEvent(EventHandler handler) {
        System.out.println("\nTriggering event...");
        handler.handleEvent(this);
    }
    
    // Method that compares current object with another
    public void compareWith(PassingThisAsArgument other) {
        System.out.println("\nComparing objects:");
        System.out.println("This object:");
        this.displayInfo();
        System.out.println("\nOther object:");
        other.displayInfo();
        
        if (this.type.equals(other.type)) {
            System.out.println("\nBoth objects are of the same type!");
        } else {
            System.out.println("\nObjects are of different types.");
        }
    }
    
    // Method that returns a modified copy using 'this'
    public PassingThisAsArgument createCopy() {
        // Pass current object's data to create a new object
        return new PassingThisAsArgument(this.name + " (Copy)", this.id + 1000, this.type);
    }
    
    public static void main(String[] args) {
        System.out.println("=== Passing 'this' as Argument ===\n");
        
        // Create objects
        PassingThisAsArgument item1 = new PassingThisAsArgument("Widget", 101, "Product");
        PassingThisAsArgument item2 = new PassingThisAsArgument("Gadget", 102, "Product");
        PassingThisAsArgument item3 = new PassingThisAsArgument("Service", 201, "Service");
        
        // Create printer and event handler
        Printer printer = new Printer();
        EventHandler handler = new EventHandler();
        
        // Example 1: Pass 'this' to printer
        System.out.println("=== Example 1: Basic Printing ===");
        item1.printDetails(printer);
        
        // Example 2: Pass 'this' with formatting
        System.out.println("\n=== Example 2: Formatted Printing ===");
        item2.printFormattedDetails(printer, "*** ITEM DETAILS ***");
        
        // Example 3: Pass 'this' to event handler
        System.out.println("\n=== Example 3: Event Handling ===");
        item1.triggerEvent(handler);
        
        // Example 4: Compare objects
        System.out.println("\n=== Example 4: Object Comparison ===");
        item1.compareWith(item2);
        item1.compareWith(item3);
        
        // Example 5: Create copy
        System.out.println("\n=== Example 5: Creating Copy ===");
        PassingThisAsArgument copy = item1.createCopy();
        System.out.println("Original:");
        item1.displayInfo();
        System.out.println("\nCopy:");
        copy.displayInfo();
    }
}
