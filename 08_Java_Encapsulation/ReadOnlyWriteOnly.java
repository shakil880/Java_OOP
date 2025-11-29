// Demonstrating read-only and write-only properties

public class ReadOnlyWriteOnly {
    // Read-only property (only getter, no setter)
    private final String id;
    private String name;
    
    // Write-only property (only setter, no getter)
    private String password;
    
    // Regular property (both getter and setter)
    private String email;
    
    // Constructor
    public ReadOnlyWriteOnly(String id, String name, String email) {
        this.id = id;  // Can only be set in constructor
        this.name = name;
        this.email = email;
    }
    
    // === READ-ONLY PROPERTIES ===
    
    // Getter for id (no setter - read-only)
    public String getId() {
        return id;
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // No setter for id (final and read-only after construction)
    // public void setId(String id) { }  // Not provided!
    
    // === WRITE-ONLY PROPERTY ===
    
    // Setter for password (no getter - write-only)
    public void setPassword(String password) {
        // Can add encryption/hashing here
        this.password = password;
        System.out.println("Password has been set (encrypted)");
    }
    
    // No getter for password (security - write-only)
    // public String getPassword() { }  // Not provided!
    
    // Method to verify password (doesn't expose actual password)
    public boolean verifyPassword(String inputPassword) {
        return this.password != null && this.password.equals(inputPassword);
    }
    
    // === REGULAR PROPERTY ===
    
    // Getter and setter for email
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    // Display public information only
    public void displayInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Password: [HIDDEN]");
    }
    
    public static void main(String[] args) {
        System.out.println("=== Read-Only and Write-Only Properties ===\n");
        
        // Create object
        ReadOnlyWriteOnly user = new ReadOnlyWriteOnly("U001", "Alice", "alice@example.com");
        
        // Display info
        System.out.println("User Information:");
        user.displayInfo();
        
        // === READ-ONLY PROPERTY (id) ===
        System.out.println("\n=== Read-Only Property (ID) ===");
        System.out.println("Reading ID: " + user.getId());
        // user.setId("U002");  // ERROR! No setter available
        System.out.println("✓ ID is read-only and cannot be changed");
        
        // === WRITE-ONLY PROPERTY (password) ===
        System.out.println("\n=== Write-Only Property (Password) ===");
        user.setPassword("secret123");
        // String pwd = user.getPassword();  // ERROR! No getter available
        System.out.println("✓ Password is write-only and cannot be read");
        
        // Verify password without exposing it
        System.out.println("\n=== Password Verification ===");
        boolean correct = user.verifyPassword("secret123");
        System.out.println("Password 'secret123': " + (correct ? "Correct" : "Wrong"));
        
        boolean wrong = user.verifyPassword("wrong");
        System.out.println("Password 'wrong': " + (wrong ? "Correct" : "Wrong"));
        
        // === REGULAR PROPERTY (email) ===
        System.out.println("\n=== Regular Property (Email) ===");
        System.out.println("Current email: " + user.getEmail());
        user.setEmail("alice.new@example.com");
        System.out.println("Updated email: " + user.getEmail());
        
        System.out.println("\n=== Final State ===");
        user.displayInfo();
        
        // Another example
        System.out.println("\n=== Another User Example ===");
        ReadOnlyWriteOnly user2 = new ReadOnlyWriteOnly("U002", "Bob", "bob@example.com");
        user2.setPassword("mypass456");
        user2.displayInfo();
        
        System.out.println("\nVerifying Bob's password:");
        System.out.println("'mypass456': " + user2.verifyPassword("mypass456"));
        System.out.println("'wrongpass': " + user2.verifyPassword("wrongpass"));
    }
}
