// Local Inner Class and Anonymous Inner Class

class Button {
    private String label;
    
    public Button(String label) {
        this.label = label;
    }
    
    public void click() {
        System.out.println("Button '" + label + "' clicked!");
    }
}

// Interface for event handling
interface ClickListener {
    void onClick();
}

class ButtonWithListener {
    private String label;
    private ClickListener listener;
    
    public ButtonWithListener(String label) {
        this.label = label;
    }
    
    public void setOnClickListener(ClickListener listener) {
        this.listener = listener;
    }
    
    public void click() {
        System.out.println("Button '" + label + "' clicked!");
        if (listener != null) {
            listener.onClick();
        }
    }
}

public class LocalAndAnonymous {
    public static void main(String[] args) {
        System.out.println("=== Local and Anonymous Inner Classes ===\n");
        
        // === LOCAL INNER CLASS ===
        System.out.println("=== Local Inner Class Example ===");
        
        final String message = "Hello from local class!";
        
        // Local inner class (defined inside a method)
        class LocalClass {
            public void display() {
                System.out.println("Local inner class");
                System.out.println("Message: " + message);
            }
        }
        
        LocalClass local = new LocalClass();
        local.display();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // === ANONYMOUS INNER CLASS ===
        System.out.println("=== Anonymous Inner Class Example ===");
        
        // Anonymous class extending Button
        Button customButton = new Button("Submit") {
            @Override
            public void click() {
                System.out.println("Custom button behavior!");
                super.click();
                System.out.println("Form submitted successfully!");
            }
        };
        
        customButton.click();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Anonymous class implementing interface
        System.out.println("=== Anonymous Class with Interface ===");
        
        ButtonWithListener button1 = new ButtonWithListener("Save");
        button1.setOnClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Saving data...");
                System.out.println("Data saved successfully!");
            }
        });
        button1.click();
        
        System.out.println();
        
        ButtonWithListener button2 = new ButtonWithListener("Delete");
        button2.setOnClickListener(new ClickListener() {
            @Override
            public void onClick() {
                System.out.println("Deleting item...");
                System.out.println("Item deleted!");
            }
        });
        button2.click();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Multiple anonymous classes
        ButtonWithListener[] buttons = {
            new ButtonWithListener("Button 1"),
            new ButtonWithListener("Button 2"),
            new ButtonWithListener("Button 3")
        };
        
        buttons[0].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 1 performed");
            }
        });
        
        buttons[1].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 2 performed");
            }
        });
        
        buttons[2].setOnClickListener(new ClickListener() {
            public void onClick() {
                System.out.println("Action 3 performed");
            }
        });
        
        System.out.println("=== Multiple Buttons ===");
        for (ButtonWithListener btn : buttons) {
            btn.click();
            System.out.println();
        }
        
        System.out.println("=== Inner Class Types Summary ===");
        System.out.println("✓ Local: Defined inside a method");
        System.out.println("✓ Anonymous: No name, created on-the-fly");
        System.out.println("✓ Used for one-time implementations");
        System.out.println("✓ Common in event handling");
    }
}
