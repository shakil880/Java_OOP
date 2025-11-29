import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Period;
import java.time.Duration;
import java.time.temporal.ChronoUnit;

// Date Operations and Comparisons

public class DateOperations {
    
    public static void displayAge(LocalDate birthDate) {
        LocalDate today = LocalDate.now();
        Period age = Period.between(birthDate, today);
        
        System.out.println("Birth Date: " + birthDate);
        System.out.println("Age: " + age.getYears() + " years, " + 
                         age.getMonths() + " months, " + 
                         age.getDays() + " days");
    }
    
    public static void main(String[] args) {
        System.out.println("=== Date Operations Demo ===\n");
        
        LocalDate today = LocalDate.now();
        LocalDate futureDate = LocalDate.of(2025, 12, 31);
        LocalDate pastDate = LocalDate.of(2020, 1, 1);
        
        // Date comparison
        System.out.println("=== Date Comparison ===");
        System.out.println("Today: " + today);
        System.out.println("Future: " + futureDate);
        System.out.println("Past: " + pastDate);
        
        System.out.println("\nIs today before future? " + today.isBefore(futureDate));
        System.out.println("Is today after past? " + today.isAfter(pastDate));
        System.out.println("Is today equal to today? " + today.isEqual(today));
        
        // Using compareTo
        System.out.println("\ncompareTo results:");
        System.out.println("today vs future: " + today.compareTo(futureDate));
        System.out.println("today vs past: " + today.compareTo(pastDate));
        System.out.println("today vs today: " + today.compareTo(today));
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Period - difference between dates
        System.out.println("=== Period (Date Differences) ===");
        
        Period period1 = Period.between(pastDate, today);
        System.out.println("From " + pastDate + " to " + today + ":");
        System.out.println("Years: " + period1.getYears());
        System.out.println("Months: " + period1.getMonths());
        System.out.println("Days: " + period1.getDays());
        System.out.println("Total: " + period1);
        
        Period period2 = Period.between(today, futureDate);
        System.out.println("\nFrom " + today + " to " + futureDate + ":");
        System.out.println("Total: " + period2);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Duration - difference between times
        System.out.println("=== Duration (Time Differences) ===");
        
        LocalDateTime start = LocalDateTime.of(2024, 1, 1, 10, 0);
        LocalDateTime end = LocalDateTime.of(2024, 1, 1, 15, 30);
        
        Duration duration = Duration.between(start, end);
        System.out.println("From: " + start);
        System.out.println("To: " + end);
        System.out.println("Hours: " + duration.toHours());
        System.out.println("Minutes: " + duration.toMinutes());
        System.out.println("Seconds: " + duration.getSeconds());
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Calculate age
        System.out.println("=== Age Calculator ===\n");
        
        LocalDate birth1 = LocalDate.of(1990, 5, 15);
        displayAge(birth1);
        
        System.out.println();
        
        LocalDate birth2 = LocalDate.of(2000, 12, 25);
        displayAge(birth2);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Days until event
        System.out.println("=== Days Until Events ===\n");
        
        LocalDate christmas = LocalDate.of(today.getYear(), 12, 25);
        if (today.isAfter(christmas)) {
            christmas = christmas.plusYears(1);
        }
        
        long daysUntilChristmas = ChronoUnit.DAYS.between(today, christmas);
        System.out.println("Days until Christmas: " + daysUntilChristmas);
        
        LocalDate newYear = LocalDate.of(today.getYear() + 1, 1, 1);
        long daysUntilNewYear = ChronoUnit.DAYS.between(today, newYear);
        System.out.println("Days until New Year: " + daysUntilNewYear);
        
        System.out.println("\n" + "=".repeat(50) + "\n");
        
        // Date arithmetic
        System.out.println("=== Date Arithmetic ===");
        
        LocalDate base = LocalDate.of(2024, 6, 15);
        System.out.println("Base date: " + base);
        
        System.out.println("\nAdding:");
        System.out.println("+ 10 days: " + base.plusDays(10));
        System.out.println("+ 3 weeks: " + base.plusWeeks(3));
        System.out.println("+ 2 months: " + base.plusMonths(2));
        System.out.println("+ 1 year: " + base.plusYears(1));
        
        System.out.println("\nSubtracting:");
        System.out.println("- 5 days: " + base.minusDays(5));
        System.out.println("- 2 weeks: " + base.minusWeeks(2));
        System.out.println("- 1 month: " + base.minusMonths(1));
        System.out.println("- 1 year: " + base.minusYears(1));
        
        // Check leap year
        System.out.println("\n" + "=".repeat(50) + "\n");
        System.out.println("=== Leap Year Check ===");
        
        int[] years = {2020, 2021, 2024, 2100};
        for (int year : years) {
            LocalDate date = LocalDate.of(year, 1, 1);
            System.out.println(year + " is leap year? " + date.isLeapYear());
        }
        
        System.out.println("\n=== Date Operation Features ===");
        System.out.println("✓ isBefore/isAfter/isEqual");
        System.out.println("✓ Period for date differences");
        System.out.println("✓ Duration for time differences");
        System.out.println("✓ ChronoUnit for calculations");
        System.out.println("✓ Leap year detection");
    }
}
