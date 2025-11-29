// Overriding methods and accessing parent implementation with super

class BankAccount {
    protected double balance;
    
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }
    
    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
        System.out.println("New balance: $" + balance);
    }
    
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            System.out.println("Remaining balance: $" + balance);
        } else {
            System.out.println("Insufficient funds!");
        }
    }
    
    public void displayBalance() {
        System.out.println("Balance: $" + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    public SavingsAccount(double initialBalance, double interestRate) {
        super(initialBalance);
        this.interestRate = interestRate;
    }
    
    // Override deposit to add interest
    @Override
    public void deposit(double amount) {
        System.out.println("--- Savings Account Deposit ---");
        super.deposit(amount);  // Call parent's deposit
        
        // Add bonus interest
        double interest = amount * (interestRate / 100);
        super.deposit(interest);  // Use parent's method for interest
        System.out.println("Bonus interest added: $" + interest);
    }
    
    // Override withdraw with minimum balance check
    @Override
    public void withdraw(double amount) {
        System.out.println("--- Savings Account Withdrawal ---");
        if (balance - amount >= 100) {  // Minimum balance $100
            super.withdraw(amount);  // Call parent's withdraw
        } else {
            System.out.println("Cannot withdraw! Minimum balance $100 required.");
            System.out.println("Current balance: $" + balance);
        }
    }
    
    @Override
    public void displayBalance() {
        super.displayBalance();  // Call parent's method
        System.out.println("Interest Rate: " + interestRate + "%");
        System.out.println("Account Type: Savings");
    }
}

public class SuperMethodOverriding {
    public static void main(String[] args) {
        System.out.println("=== super in Method Overriding ===\n");
        
        // Regular bank account
        System.out.println("=== Regular Bank Account ===");
        BankAccount regular = new BankAccount(500);
        regular.displayBalance();
        System.out.println();
        regular.deposit(100);
        System.out.println();
        regular.withdraw(200);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Savings account
        System.out.println("=== Savings Account ===");
        SavingsAccount savings = new SavingsAccount(1000, 5);
        savings.displayBalance();
        System.out.println();
        savings.deposit(200);  // Gets bonus interest
        System.out.println();
        savings.withdraw(500);  // Checks minimum balance
        System.out.println();
        savings.withdraw(600);  // Should fail (min balance)
        System.out.println();
        savings.displayBalance();
        
        System.out.println("\n=== Benefits of super in Overriding ===");
        System.out.println("✓ Reuse parent's logic");
        System.out.println("✓ Add extra functionality");
        System.out.println("✓ Avoid code duplication");
        System.out.println("✓ Maintain parent behavior");
    }
}
