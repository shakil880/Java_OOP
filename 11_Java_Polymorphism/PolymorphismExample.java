// Polymorphism in action with real-world example

abstract class Payment {
    protected double amount;
    protected String transactionId;
    
    public Payment(double amount, String transactionId) {
        this.amount = amount;
        this.transactionId = transactionId;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract void processPayment();
    
    public abstract String getPaymentMethod();
    
    public void displayReceipt() {
        System.out.println("\n=== Payment Receipt ===");
        System.out.println("Transaction ID: " + transactionId);
        System.out.println("Amount: $" + amount);
        System.out.println("Method: " + getPaymentMethod());
    }
}

class CreditCardPayment extends Payment {
    private String cardNumber;
    
    public CreditCardPayment(double amount, String transactionId, String cardNumber) {
        super(amount, transactionId);
        this.cardNumber = cardNumber;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing Credit Card payment...");
        System.out.println("Card: ****" + cardNumber.substring(cardNumber.length() - 4));
        System.out.println("Amount: $" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "Credit Card";
    }
}

class PayPalPayment extends Payment {
    private String email;
    
    public PayPalPayment(double amount, String transactionId, String email) {
        super(amount, transactionId);
        this.email = email;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment...");
        System.out.println("Email: " + email);
        System.out.println("Amount: $" + amount);
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "PayPal";
    }
}

class CashPayment extends Payment {
    private double cashReceived;
    
    public CashPayment(double amount, String transactionId, double cashReceived) {
        super(amount, transactionId);
        this.cashReceived = cashReceived;
    }
    
    @Override
    public void processPayment() {
        System.out.println("Processing Cash payment...");
        System.out.println("Amount due: $" + amount);
        System.out.println("Cash received: $" + cashReceived);
        double change = cashReceived - amount;
        if (change > 0) {
            System.out.println("Change: $" + change);
        }
        System.out.println("Payment successful!");
    }
    
    @Override
    public String getPaymentMethod() {
        return "Cash";
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        System.out.println("=== Polymorphism Real-World Example ===\n");
        
        // Create different payment types
        Payment payment1 = new CreditCardPayment(99.99, "TXN001", "1234567890123456");
        Payment payment2 = new PayPalPayment(49.99, "TXN002", "user@example.com");
        Payment payment3 = new CashPayment(25.50, "TXN003", 30.00);
        
        // Process payments polymorphically
        System.out.println("Processing Payment 1:");
        processPayment(payment1);
        
        System.out.println("\nProcessing Payment 2:");
        processPayment(payment2);
        
        System.out.println("\nProcessing Payment 3:");
        processPayment(payment3);
        
        // Array of payments
        System.out.println("\n" + "=".repeat(50));
        System.out.println("\n=== Processing Multiple Payments ===");
        
        Payment[] payments = {
            new CreditCardPayment(150.00, "TXN004", "9876543210987654"),
            new PayPalPayment(75.50, "TXN005", "customer@email.com"),
            new CashPayment(30.00, "TXN006", 50.00)
        };
        
        double totalAmount = 0;
        for (Payment payment : payments) {
            payment.processPayment();
            payment.displayReceipt();
            totalAmount += payment.amount;
            System.out.println();
        }
        
        System.out.println("=== Summary ===");
        System.out.println("Total transactions: " + payments.length);
        System.out.println("Total amount: $" + totalAmount);
    }
    
    // Polymorphic method - accepts any Payment type
    public static void processPayment(Payment payment) {
        payment.processPayment();
        payment.displayReceipt();
    }
}
