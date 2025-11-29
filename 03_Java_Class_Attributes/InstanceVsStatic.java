// Instance vs Static Attributes

class Website {
    // Instance attributes - unique to each website object
    String name;
    String url;
    int visitors;
    
    // Static attribute - shared across all website objects
    static int totalWebsites = 0;
    static String hostingCompany = "WebHost Inc.";
    
    // Constructor
    Website(String name, String url) {
        this.name = name;
        this.url = url;
        this.visitors = 0;
        totalWebsites++;  // Increment static counter
    }
    
    void addVisitors(int count) {
        visitors += count;
    }
    
    void displayInfo() {
        System.out.println("Website: " + name);
        System.out.println("URL: " + url);
        System.out.println("Visitors: " + visitors);
        System.out.println("Hosting: " + hostingCompany);
        System.out.println("-------------------");
    }
}

public class InstanceVsStatic {
    public static void main(String[] args) {
        System.out.println("=== Instance vs Static Attributes ===\n");
        
        System.out.println("Total websites: " + Website.totalWebsites);
        System.out.println();
        
        // Create first website
        Website site1 = new Website("My Blog", "www.myblog.com");
        site1.addVisitors(100);
        
        // Create second website
        Website site2 = new Website("Tech News", "www.technews.com");
        site2.addVisitors(250);
        
        // Create third website
        Website site3 = new Website("Gaming Portal", "www.gaming.com");
        site3.addVisitors(500);
        
        // Display all websites
        site1.displayInfo();
        site2.displayInfo();
        site3.displayInfo();
        
        System.out.println("Total websites created: " + Website.totalWebsites);
        
        // Change static attribute - affects ALL objects
        System.out.println("\n--- Changing Hosting Company ---");
        Website.hostingCompany = "CloudHost Pro";
        
        site1.displayInfo();
        site2.displayInfo();
        site3.displayInfo();
        
        System.out.println("\n✓ Instance attributes: unique per object");
        System.out.println("✓ Static attributes: shared by all objects");
    }
}
