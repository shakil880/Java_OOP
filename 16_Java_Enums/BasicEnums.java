// Basic Enums

// Simple enum
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Enum with values
enum Size {
    SMALL, MEDIUM, LARGE, EXTRA_LARGE
}

// Enum in switch statement
enum TrafficLight {
    RED, YELLOW, GREEN
}

public class BasicEnums {
    
    // Method using enum in switch
    public static String getAction(TrafficLight light) {
        switch (light) {
            case RED:
                return "STOP";
            case YELLOW:
                return "SLOW DOWN";
            case GREEN:
                return "GO";
            default:
                return "Unknown";
        }
    }
    
    public static void main(String[] args) {
        System.out.println("=== Basic Enums Demo ===\n");
        
        // Using enums
        Day today = Day.MONDAY;
        System.out.println("Today is: " + today);
        
        // Enum comparison
        if (today == Day.MONDAY) {
            System.out.println("Start of the work week!");
        }
        
        System.out.println("\n=== All Days ===");
        // Iterating through enum values
        for (Day day : Day.values()) {
            System.out.println(day);
        }
        
        System.out.println("\n=== Size Enum ===");
        Size shirtSize = Size.MEDIUM;
        System.out.println("Shirt size: " + shirtSize);
        
        // Enum ordinal (position)
        System.out.println("Position: " + shirtSize.ordinal());
        
        System.out.println("\n=== Traffic Light System ===");
        for (TrafficLight light : TrafficLight.values()) {
            System.out.println(light + " - " + getAction(light));
        }
        
        // Switch with enum
        System.out.println("\n=== Day Schedule ===");
        Day[] week = {Day.MONDAY, Day.WEDNESDAY, Day.FRIDAY, Day.SUNDAY};
        
        for (Day day : week) {
            switch (day) {
                case MONDAY:
                case TUESDAY:
                case WEDNESDAY:
                case THURSDAY:
                case FRIDAY:
                    System.out.println(day + ": Go to work");
                    break;
                case SATURDAY:
                case SUNDAY:
                    System.out.println(day + ": Weekend! Relax");
                    break;
            }
        }
        
        // Enum methods
        System.out.println("\n=== Enum Methods ===");
        Day friday = Day.FRIDAY;
        System.out.println("valueOf(): " + Day.valueOf("FRIDAY"));
        System.out.println("name(): " + friday.name());
        System.out.println("ordinal(): " + friday.ordinal());
        System.out.println("toString(): " + friday.toString());
        
        System.out.println("\n=== Enum Features ===");
        System.out.println("✓ Special Java type for constants");
        System.out.println("✓ Type-safe constants");
        System.out.println("✓ Can be used in switch statements");
        System.out.println("✓ Have built-in methods");
    }
}
