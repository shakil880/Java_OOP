// Real-world OOP example: Bank Account System

class BankAccount {
    // Attributes
    String accountNumber;
    String accountHolder;
    double balance;
    String accountType;
    
    // Methods
    void deposit(double amount) {
        balance = balance + amount;
        System.out.println("✓ Deposited: $" + amount);
        System.out.println("New Balance: $" + balance);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance = balance - amount;
            System.out.println("✓ Withdrawn: $" + amount);
            System.out.println("New Balance: $" + balance);
        } else {
            System.out.println("✗ Insufficient funds!");
        }
    }
    
    void checkBalance() {
        System.out.println("Current Balance: $" + balance);
    }
    
    void displayAccountInfo() {
        System.out.println("========================");
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Type: " + accountType);
        System.out.println("Balance: $" + balance);
        System.out.println("========================");
    }
}

public class RealWorldExample {
    public static void main(String[] args) {
        System.out.println("=== Bank Account Management System ===\n");
        
        // Create first account
        BankAccount account1 = new BankAccount();
        account1.accountNumber = "ACC001";
        account1.accountHolder = "John Smith";
        account1.accountType = "Savings";
        account1.balance = 1000.0;
        
        // Create second account
        BankAccount account2 = new BankAccount();
        account2.accountNumber = "ACC002";
        account2.accountHolder = "Sarah Johnson";
        account2.accountType = "Checking";
        account2.balance = 500.0;
        
        // Perform operations on account 1
        System.out.println("ACCOUNT 1 OPERATIONS:");
        account1.displayAccountInfo();
        System.out.println("\nDepositing money...");
        account1.deposit(500.0);
        System.out.println("\nWithdrawing money...");
        account1.withdraw(200.0);
        System.out.println();
        
        // Perform operations on account 2
        System.out.println("\nACCOUNT 2 OPERATIONS:");
        account2.displayAccountInfo();
        System.out.println("\nDepositing money...");
        account2.deposit(300.0);
        System.out.println("\nTrying to withdraw more than balance...");
        account2.withdraw(1000.0);
        System.out.println("\nChecking balance...");
        account2.checkBalance();
        
        System.out.println("\n\n✓ This example shows how OOP models real-world entities!");
        System.out.println("  Each bank account is an independent object with its own data.");
    }
}
