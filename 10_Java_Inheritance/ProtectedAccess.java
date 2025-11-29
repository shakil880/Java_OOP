// Demonstrating protected access modifier in inheritance

class BankAccount {
    // Protected members - accessible in subclasses
    protected String accountNumber;
    protected String accountHolder;
    protected double balance;
    
    // Private member - NOT accessible in subclasses
    private String pin;
    
    public BankAccount(String accountNumber, String accountHolder, double initialBalance, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.pin = pin;
    }
    
    protected void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        }
    }
    
    protected void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        }
    }
    
    protected void displayBalance() {
        System.out.println("Balance: $" + balance);
    }
    
    public void displayInfo() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(String accountNumber, String accountHolder, double initialBalance, String pin, double interestRate) {
        super(accountNumber, accountHolder, initialBalance, pin);
        this.interestRate = interestRate;
    }
    
    // Can access protected members from parent
    public void addInterest() {
        double interest = balance * interestRate / 100;  // Access protected balance
        balance += interest;  // Modify protected balance
        System.out.println("Interest added: $" + interest);
        System.out.println("New balance: $" + balance);
    }
    
    // Can call protected methods from parent
    public void monthlyDeposit(double amount) {
        System.out.println("Monthly deposit for " + accountHolder);  // Access protected field
        deposit(amount);  // Call protected method
        displayBalance();  // Call protected method
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println("Account Type: Savings");
    }
    
    // Cannot access private members
    public void showPin() {
        // System.out.println("PIN: " + pin);  // ERROR! Private member
        System.out.println("Cannot access private PIN from subclass");
    }
}

class CheckingAccount extends BankAccount {
    private double overdraftLimit;
    
    public CheckingAccount(String accountNumber, String accountHolder, double initialBalance, String pin, double overdraftLimit) {
        super(accountNumber, accountHolder, initialBalance, pin);
        this.overdraftLimit = overdraftLimit;
    }
    
    // Override withdraw to allow overdraft
    @Override
    protected void withdraw(double amount) {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;  // Access protected balance
            System.out.println("Withdrawn: $" + amount);
            if (balance < 0) {
                System.out.println("Warning: Overdrawn by $" + Math.abs(balance));
            }
        } else {
            System.out.println("Withdrawal denied. Exceeds overdraft limit.");
        }
    }
    
    public void displayOverdraftInfo() {
        System.out.println("Account Holder: " + accountHolder);  // Access protected field
        System.out.println("Current Balance: $" + balance);
        System.out.println("Overdraft Limit: $" + overdraftLimit);
        System.out.println("Available Funds: $" + (balance + overdraftLimit));
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Overdraft Limit: $" + overdraftLimit);
        System.out.println("Account Type: Checking");
    }
}

public class ProtectedAccess {
    public static void main(String[] args) {
        System.out.println("=== Protected Access in Inheritance ===\n");
        
        // Create Savings Account
        System.out.println("Creating Savings Account:");
        SavingsAccount savings = new SavingsAccount("SA001", "Alice", 1000, "1234", 5.0);
        savings.displayInfo();
        
        System.out.println("\n--- Monthly Operations ---");
        savings.monthlyDeposit(500);
        savings.addInterest();
        
        System.out.println("\n--- Testing Private Access ---");
        savings.showPin();
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Create Checking Account
        System.out.println("Creating Checking Account:");
        CheckingAccount checking = new CheckingAccount("CA001", "Bob", 500, "5678", 200);
        checking.displayInfo();
        
        System.out.println("\n--- Withdrawal Operations ---");
        checking.withdraw(400);  // Normal withdrawal
        checking.displayOverdraftInfo();
        
        System.out.println();
        checking.withdraw(250);  // Overdraft
        checking.displayOverdraftInfo();
        
        System.out.println();
        checking.withdraw(100);  // Exceeds limit
        
        System.out.println("\n=== Access Levels Summary ===");
        System.out.println("✓ Protected members accessible in subclasses");
        System.out.println("✓ Private members NOT accessible in subclasses");
        System.out.println("✓ Subclasses can modify protected fields");
        System.out.println("✓ Subclasses can call protected methods");
    }
}
