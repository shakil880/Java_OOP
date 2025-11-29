// Demonstrating synchronized and transient modifiers

import java.io.*;

class BankAccount {
    private int balance = 0;
    
    // Synchronized method - thread-safe
    public synchronized void deposit(int amount) {
        System.out.println(Thread.currentThread().getName() + " depositing: " + amount);
        balance += amount;
        System.out.println(Thread.currentThread().getName() + " new balance: " + balance);
    }
    
    // Synchronized method
    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " withdrawing: " + amount);
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " new balance: " + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + " insufficient balance!");
        }
    }
    
    public synchronized int getBalance() {
        return balance;
    }
}

// Serializable class with transient variables
class User implements Serializable {
    private String username;
    private String email;
    
    // Transient - will NOT be serialized
    private transient String password;
    private transient String sessionToken;
    
    // Regular variable - will be serialized
    private int loginCount;
    
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.sessionToken = "TOKEN-" + System.currentTimeMillis();
        this.loginCount = 0;
    }
    
    public void displayInfo() {
        System.out.println("Username: " + username);
        System.out.println("Email: " + email);
        System.out.println("Password: " + (password != null ? password : "null (not serialized)"));
        System.out.println("Session Token: " + (sessionToken != null ? sessionToken : "null (not serialized)"));
        System.out.println("Login Count: " + loginCount);
    }
    
    public void login() {
        loginCount++;
        System.out.println(username + " logged in. Count: " + loginCount);
    }
}

public class SynchronizedAndTransient {
    
    // Synchronized static method
    public static synchronized void staticSynchronizedMethod() {
        System.out.println("This is a synchronized static method");
    }
    
    // Example of synchronized block
    public void synchronizedBlockExample() {
        System.out.println("Before synchronized block");
        
        synchronized(this) {
            System.out.println("Inside synchronized block");
            // Critical section code
        }
        
        System.out.println("After synchronized block");
    }
    
    public static void main(String[] args) throws Exception {
        System.out.println("=== Synchronized Modifier Demo ===\n");
        
        // Test synchronized methods with threads
        BankAccount account = new BankAccount();
        
        // Create threads that access the same account
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                account.deposit(100);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "Thread-1");
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                account.deposit(150);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        }, "Thread-2");
        
        System.out.println("Starting threads...");
        t1.start();
        t2.start();
        
        // Wait for threads to complete
        t1.join();
        t2.join();
        
        System.out.println("\nFinal balance: " + account.getBalance());
        
        // Transient modifier demo
        System.out.println("\n=== Transient Modifier Demo ===\n");
        
        // Create user
        User user = new User("john_doe", "john@example.com", "secret123");
        user.login();
        user.login();
        
        System.out.println("Before serialization:");
        user.displayInfo();
        
        // Serialize (save to file)
        System.out.println("\nSerializing user...");
        FileOutputStream fileOut = new FileOutputStream("user.ser");
        ObjectOutputStream out = new ObjectOutputStream(fileOut);
        out.writeObject(user);
        out.close();
        fileOut.close();
        System.out.println("User serialized to user.ser");
        
        // Deserialize (load from file)
        System.out.println("\nDeserializing user...");
        FileInputStream fileIn = new FileInputStream("user.ser");
        ObjectInputStream in = new ObjectInputStream(fileIn);
        User deserializedUser = (User) in.readObject();
        in.close();
        fileIn.close();
        
        System.out.println("\nAfter deserialization:");
        deserializedUser.displayInfo();
        
        System.out.println("\n=== Notice ===");
        System.out.println("Transient fields (password and sessionToken) are NULL after deserialization!");
        System.out.println("Regular fields (username, email, loginCount) are preserved!");
        
        // Clean up
        new File("user.ser").delete();
    }
}
