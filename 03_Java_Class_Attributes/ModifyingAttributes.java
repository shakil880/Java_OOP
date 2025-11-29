// Modifying Attributes During Runtime

class BankAccount {
    String accountNumber;
    String holder;
    double balance;
    int transactionCount;
    
    void deposit(double amount) {
        balance += amount;
        transactionCount++;
        System.out.println("✓ Deposited: $" + amount);
        System.out.println("  New Balance: $" + balance);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            transactionCount++;
            System.out.println("✓ Withdrawn: $" + amount);
            System.out.println("  New Balance: $" + balance);
        } else {
            System.out.println("✗ Insufficient funds!");
        }
    }
    
    void displayAccount() {
        System.out.println("╔═══════════════════════════════╗");
        System.out.println("  Account: " + accountNumber);
        System.out.println("  Holder: " + holder);
        System.out.println("  Balance: $" + balance);
        System.out.println("  Transactions: " + transactionCount);
        System.out.println("╚═══════════════════════════════╝");
    }
}

class GameCharacter {
    String name;
    int health;
    int maxHealth;
    int level;
    int experience;
    
    void takeDamage(int damage) {
        health -= damage;
        if (health < 0) health = 0;
        System.out.println("💥 " + name + " took " + damage + " damage!");
        System.out.println("   Health: " + health + "/" + maxHealth);
    }
    
    void heal(int amount) {
        health += amount;
        if (health > maxHealth) health = maxHealth;
        System.out.println("💚 " + name + " healed " + amount + " HP!");
        System.out.println("   Health: " + health + "/" + maxHealth);
    }
    
    void gainXP(int xp) {
        experience += xp;
        System.out.println("⭐ " + name + " gained " + xp + " XP!");
        if (experience >= 100) {
            levelUp();
        }
    }
    
    void levelUp() {
        level++;
        experience = 0;
        maxHealth += 20;
        health = maxHealth;
        System.out.println("🎉 " + name + " leveled up to Level " + level + "!");
        System.out.println("   Max Health increased to " + maxHealth);
    }
    
    void displayStats() {
        System.out.println("━━━━━━━━━━━━━━━━━━━━━━━");
        System.out.println("  " + name);
        System.out.println("  Level: " + level);
        System.out.println("  Health: " + health + "/" + maxHealth);
        System.out.println("  Experience: " + experience + "/100");
        System.out.println("━━━━━━━━━━━━━━━━━━━━━━━");
    }
}

public class ModifyingAttributes {
    public static void main(String[] args) {
        System.out.println("=== Modifying Attributes Example ===\n");
        
        // Bank Account Example
        System.out.println("--- Bank Account Transactions ---\n");
        BankAccount account = new BankAccount();
        account.accountNumber = "ACC12345";
        account.holder = "John Doe";
        account.balance = 1000.0;
        account.transactionCount = 0;
        
        account.displayAccount();
        System.out.println();
        
        account.deposit(500);
        account.withdraw(200);
        account.deposit(1000);
        account.withdraw(300);
        System.out.println();
        account.displayAccount();
        
        // Game Character Example
        System.out.println("\n\n--- RPG Game Character ---\n");
        GameCharacter hero = new GameCharacter();
        hero.name = "Warrior";
        hero.health = 100;
        hero.maxHealth = 100;
        hero.level = 1;
        hero.experience = 0;
        
        hero.displayStats();
        System.out.println();
        
        // Simulate gameplay
        hero.takeDamage(30);
        System.out.println();
        
        hero.heal(20);
        System.out.println();
        
        hero.gainXP(50);
        System.out.println();
        
        hero.takeDamage(40);
        System.out.println();
        
        hero.gainXP(60);  // Will trigger level up
        System.out.println();
        
        hero.displayStats();
        
        System.out.println("\n✓ Attributes can be modified at any time!");
        System.out.println("✓ Changes persist throughout the object's lifetime!");
    }
}
