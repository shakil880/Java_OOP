import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// Basic Date and Time

public class BasicDateTime {
    public static void main(String[] args) {
        System.out.println("=== Basic Date and Time Demo ===\n");
        
        // LocalDate - date without time
        System.out.println("=== LocalDate ===");
        LocalDate today = LocalDate.now();
        System.out.println("Today: " + today);
        
        LocalDate specificDate = LocalDate.of(2024, 12, 25);
        System.out.println("Christmas 2024: " + specificDate);
        
        LocalDate parsedDate = LocalDate.parse("2025-01-01");
        System.out.println("New Year 2025: " + parsedDate);
        
        // Extract date components
        System.out.println("\nDate Components:");
        System.out.println("Year: " + today.getYear());
        System.out.println("Month: " + today.getMonth());
        System.out.println("Month Value: " + today.getMonthValue());
        System.out.println("Day of Month: " + today.getDayOfMonth());
        System.out.println("Day of Week: " + today.getDayOfWeek());
        System.out.println("Day of Year: " + today.getDayOfYear());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // LocalTime - time without date
        System.out.println("=== LocalTime ===");
        LocalTime currentTime = LocalTime.now();
        System.out.println("Current time: " + currentTime);
        
        LocalTime specificTime = LocalTime.of(14, 30, 45);
        System.out.println("Specific time: " + specificTime);
        
        LocalTime parsedTime = LocalTime.parse("09:30:00");
        System.out.println("Parsed time: " + parsedTime);
        
        // Extract time components
        System.out.println("\nTime Components:");
        System.out.println("Hour: " + currentTime.getHour());
        System.out.println("Minute: " + currentTime.getMinute());
        System.out.println("Second: " + currentTime.getSecond());
        System.out.println("Nano: " + currentTime.getNano());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // LocalDateTime - both date and time
        System.out.println("=== LocalDateTime ===");
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Now: " + now);
        
        LocalDateTime meeting = LocalDateTime.of(2024, 6, 15, 10, 30);
        System.out.println("Meeting: " + meeting);
        
        LocalDateTime parsed = LocalDateTime.parse("2024-12-31T23:59:59");
        System.out.println("Parsed: " + parsed);
        
        // Extract components
        System.out.println("\nDateTime Components:");
        System.out.println("Date: " + now.toLocalDate());
        System.out.println("Time: " + now.toLocalTime());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Formatting dates
        System.out.println("=== Date Formatting ===");
        
        DateTimeFormatter formatter1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println("dd/MM/yyyy: " + today.format(formatter1));
        
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("MMM dd, yyyy");
        System.out.println("MMM dd, yyyy: " + today.format(formatter2));
        
        DateTimeFormatter formatter3 = DateTimeFormatter.ofPattern("EEEE, MMMM dd, yyyy");
        System.out.println("Full date: " + today.format(formatter3));
        
        // Time formatting
        System.out.println("\n=== Time Formatting ===");
        
        DateTimeFormatter timeFormatter1 = DateTimeFormatter.ofPattern("HH:mm:ss");
        System.out.println("HH:mm:ss: " + currentTime.format(timeFormatter1));
        
        DateTimeFormatter timeFormatter2 = DateTimeFormatter.ofPattern("hh:mm a");
        System.out.println("hh:mm a: " + currentTime.format(timeFormatter2));
        
        // DateTime formatting
        System.out.println("\n=== DateTime Formatting ===");
        
        DateTimeFormatter dtFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        System.out.println("Full: " + now.format(dtFormatter));
        
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("EEEE, MMM dd 'at' hh:mm a");
        System.out.println("Custom: " + now.format(customFormatter));
        
        // Modifying dates
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Date Manipulation ===");
        
        LocalDate tomorrow = today.plusDays(1);
        System.out.println("Tomorrow: " + tomorrow);
        
        LocalDate nextWeek = today.plusWeeks(1);
        System.out.println("Next week: " + nextWeek);
        
        LocalDate nextMonth = today.plusMonths(1);
        System.out.println("Next month: " + nextMonth);
        
        LocalDate nextYear = today.plusYears(1);
        System.out.println("Next year: " + nextYear);
        
        LocalDate yesterday = today.minusDays(1);
        System.out.println("Yesterday: " + yesterday);
        
        System.out.println("\n=== Date/Time Features ===");
        System.out.println("✓ LocalDate - date only");
        System.out.println("✓ LocalTime - time only");
        System.out.println("✓ LocalDateTime - date and time");
        System.out.println("✓ DateTimeFormatter - format dates");
        System.out.println("✓ Immutable objects");
    }
}
