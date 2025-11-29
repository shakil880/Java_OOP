// Demonstrating data hiding and validation in encapsulation

public class DataHiding {
    // Private fields (completely hidden from outside)
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;
    private boolean isActive;
    
    // Constructor with validation
    public DataHiding(String accountNumber, String accountHolder, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = 0.0;
        setPin(pin);  // Use setter for validation
        this.isActive = true;
    }
    
    // Getter for account number (read-only)
    public String getAccountNumber() {
        return accountNumber;
    }
    
    // Getter for account holder
    public String getAccountHolder() {
        return accountHolder;
    }
    
    // Getter for balance (controlled access)
    public double getBalance() {
        if (isActive) {
            return balance;
        } else {
            System.out.println("Account is inactive!");
            return 0.0;
        }
    }
    
    // Setter for PIN with validation
    public void setPin(String pin) {
        if (pin != null && pin.length() == 4 && pin.matches("\\d+")) {
            this.pin = pin;
            System.out.println("PIN set successfully");
        } else {
            System.out.println("Invalid PIN! Must be 4 digits.");
            this.pin = "0000";  // Default PIN
        }
    }
    
    // Method to verify PIN (doesn't expose actual PIN)
    public boolean verifyPin(String inputPin) {
        return this.pin.equals(inputPin);
    }
    
    // Deposit with validation
    public void deposit(double amount) {
        if (!isActive) {
            System.out.println("Cannot deposit. Account is inactive.");
            return;
        }
        
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New balance: $" + balance);
        } else {
            System.out.println("Invalid amount! Must be positive.");
        }
    }
    
    // Withdraw with validation and PIN check
    public void withdraw(double amount, String pin) {
        if (!isActive) {
            System.out.println("Cannot withdraw. Account is inactive.");
            return;
        }
        
        if (!verifyPin(pin)) {
            System.out.println("Invalid PIN! Transaction denied.");
            return;
        }
        
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("Remaining balance: $" + balance);
        } else if (amount > balance) {
            System.out.println("Insufficient balance!");
        } else {
            System.out.println("Invalid amount!");
        }
    }
    
    // Transfer to another account
    public void transfer(DataHiding targetAccount, double amount, String pin) {
        if (!verifyPin(pin)) {
            System.out.println("Invalid PIN! Transfer denied.");
            return;
        }
        
        if (amount > 0 && amount <= balance) {
            this.balance -= amount;
            targetAccount.balance += amount;
            System.out.println("Transferred $" + amount + " to " + targetAccount.accountHolder);
            System.out.println("Your new balance: $" + this.balance);
        } else {
            System.out.println("Transfer failed! Check amount and balance.");
        }
    }
    
    // Deactivate account
    public void deactivateAccount(String pin) {
        if (verifyPin(pin)) {
            isActive = false;
            System.out.println("Account deactivated successfully");
        } else {
            System.out.println("Invalid PIN! Cannot deactivate account.");
        }
    }
    
    // Activate account
    public void activateAccount(String pin) {
        if (verifyPin(pin)) {
            isActive = true;
            System.out.println("Account activated successfully");
        } else {
            System.out.println("Invalid PIN! Cannot activate account.");
        }
    }
    
    // Display safe information (hides sensitive data)
    public void displayAccountInfo() {
        System.out.println("\n=== Account Information ===");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: $" + (isActive ? balance : "[HIDDEN]"));
        System.out.println("Status: " + (isActive ? "Active" : "Inactive"));
        System.out.println("PIN: ****");  // Never show actual PIN
    }
    
    public static void main(String[] args) {
        System.out.println("=== Data Hiding and Validation Demo ===\n");
        
        // Create account
        DataHiding account1 = new DataHiding("ACC001", "Alice", "1234");
        account1.displayAccountInfo();
        
        // Deposit money
        System.out.println("\n=== Deposit Operations ===");
        account1.deposit(1000);
        account1.deposit(500);
        account1.deposit(-100);  // Invalid
        
        // Check balance
        System.out.println("\nCurrent balance: $" + account1.getBalance());
        
        // Withdraw with correct PIN
        System.out.println("\n=== Withdrawal Operations ===");
        account1.withdraw(200, "1234");
        account1.withdraw(100, "9999");  // Wrong PIN
        account1.withdraw(2000, "1234");  // Insufficient balance
        
        // Create second account
        System.out.println("\n=== Creating Second Account ===");
        DataHiding account2 = new DataHiding("ACC002", "Bob", "5678");
        account2.deposit(300);
        
        // Transfer between accounts
        System.out.println("\n=== Transfer Operation ===");
        account1.transfer(account2, 400, "1234");
        
        System.out.println("\nAccount 1 balance: $" + account1.getBalance());
        System.out.println("Account 2 balance: $" + account2.getBalance());
        
        // Try to change PIN
        System.out.println("\n=== Change PIN ===");
        account1.setPin("abcd");  // Invalid
        account1.setPin("12345");  // Invalid (5 digits)
        account1.setPin("4321");  // Valid
        
        // Deactivate account
        System.out.println("\n=== Deactivate Account ===");
        account1.deactivateAccount("1234");  // Wrong PIN (changed to 4321)
        account1.deactivateAccount("4321");  // Correct PIN
        
        // Try operations on inactive account
        System.out.println("\n=== Operations on Inactive Account ===");
        account1.deposit(100);
        account1.withdraw(50, "4321");
        System.out.println("Balance: $" + account1.getBalance());
        
        // Reactivate
        System.out.println("\n=== Reactivate Account ===");
        account1.activateAccount("4321");
        account1.displayAccountInfo();
        
        // Cannot access private fields directly
        // System.out.println(account1.balance);  // ERROR!
        // account1.pin = "0000";  // ERROR!
        System.out.println("\n✓ All sensitive data is protected through encapsulation!");
    }
}
