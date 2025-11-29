# Java Date and Time

## Overview
Java provides several ways to work with dates and times. The modern approach uses classes from `java.time` package (introduced in Java 8), which is more intuitive and powerful than the legacy `java.util.Date` and `java.util.Calendar` classes.

## Java 8+ Date/Time API (java.time)

The `java.time` package provides immutable and thread-safe classes for date-time operations.

### Main Classes

| Class | Description | Example |
|-------|-------------|---------|
| `LocalDate` | Date without time | 2024-11-29 |
| `LocalTime` | Time without date | 14:30:45 |
| `LocalDateTime` | Date and time | 2024-11-29T14:30:45 |
| `ZonedDateTime` | Date, time with timezone | 2024-11-29T14:30:45+05:30[Asia/Kolkata] |
| `Instant` | Timestamp | 2024-11-29T09:00:00Z |
| `Duration` | Time-based amount | 2 hours, 30 minutes |
| `Period` | Date-based amount | 3 years, 2 months, 15 days |

## LocalDate

Represents a date (year, month, day):

```java
import java.time.LocalDate;

// Current date
LocalDate today = LocalDate.now();
System.out.println(today);  // 2024-11-29

// Specific date
LocalDate date = LocalDate.of(2024, 12, 25);
System.out.println(date);  // 2024-12-25

// Parse from string
LocalDate parsed = LocalDate.parse("2024-11-29");

// Get components
int year = today.getYear();
int month = today.getMonthValue();
int day = today.getDayOfMonth();
```

## LocalTime

Represents time (hour, minute, second, nanosecond):

```java
import java.time.LocalTime;

// Current time
LocalTime now = LocalTime.now();
System.out.println(now);  // 14:30:45.123456789

// Specific time
LocalTime time = LocalTime.of(14, 30, 45);
System.out.println(time);  // 14:30:45

// Parse from string
LocalTime parsed = LocalTime.parse("14:30:45");

// Get components
int hour = now.getHour();
int minute = now.getMinute();
int second = now.getSecond();
```

## LocalDateTime

Combines date and time:

```java
import java.time.LocalDateTime;

// Current date-time
LocalDateTime now = LocalDateTime.now();
System.out.println(now);  // 2024-11-29T14:30:45.123

// Specific date-time
LocalDateTime dt = LocalDateTime.of(2024, 12, 25, 10, 30, 0);
System.out.println(dt);  // 2024-12-25T10:30

// From LocalDate and LocalTime
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.of(date, time);

// Parse from string
LocalDateTime parsed = LocalDateTime.parse("2024-11-29T14:30:45");
```

## Formatting Dates

```java
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

LocalDateTime now = LocalDateTime.now();

// Predefined formatters
System.out.println(now.format(DateTimeFormatter.ISO_DATE));  // 2024-11-29
System.out.println(now.format(DateTimeFormatter.ISO_TIME));  // 14:30:45.123

// Custom formatter
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
String formatted = now.format(formatter);
System.out.println(formatted);  // 29/11/2024 14:30:45

// Common patterns:
// dd - day of month (01-31)
// MM - month (01-12)
// yyyy - year (2024)
// HH - hour (00-23)
// mm - minute (00-59)
// ss - second (00-59)
```

## Parsing Dates

```java
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

String dateString = "25/12/2024";
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
LocalDate date = LocalDate.parse(dateString, formatter);
System.out.println(date);  // 2024-12-25
```

## Date Operations

### Adding/Subtracting
```java
LocalDate today = LocalDate.now();

LocalDate tomorrow = today.plusDays(1);
LocalDate nextWeek = today.plusWeeks(1);
LocalDate nextMonth = today.plusMonths(1);
LocalDate nextYear = today.plusYears(1);

LocalDate yesterday = today.minusDays(1);
LocalDate lastWeek = today.minusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);
LocalDate lastYear = today.minusYears(1);
```

### Time Operations
```java
LocalTime now = LocalTime.now();

LocalTime later = now.plusHours(2);
LocalTime earlier = now.minusMinutes(30);
```

## Comparing Dates

```java
LocalDate date1 = LocalDate.of(2024, 11, 29);
LocalDate date2 = LocalDate.of(2024, 12, 25);

// Compare
boolean isBefore = date1.isBefore(date2);  // true
boolean isAfter = date1.isAfter(date2);    // false
boolean isEqual = date1.isEqual(date2);    // false

// Compare using compareTo
int result = date1.compareTo(date2);  // negative if date1 < date2
```

## Period (Date-based Duration)

```java
import java.time.Period;

LocalDate start = LocalDate.of(2020, 1, 1);
LocalDate end = LocalDate.of(2024, 11, 29);

Period period = Period.between(start, end);
System.out.println("Years: " + period.getYears());
System.out.println("Months: " + period.getMonths());
System.out.println("Days: " + period.getDays());

// Create period
Period twoMonths = Period.ofMonths(2);
Period oneYear = Period.ofYears(1);
LocalDate futureDate = LocalDate.now().plus(twoMonths);
```

## Duration (Time-based)

```java
import java.time.Duration;
import java.time.LocalTime;

LocalTime start = LocalTime.of(9, 0);
LocalTime end = LocalTime.of(17, 30);

Duration duration = Duration.between(start, end);
System.out.println("Hours: " + duration.toHours());
System.out.println("Minutes: " + duration.toMinutes());

// Create duration
Duration twoHours = Duration.ofHours(2);
Duration thirtyMinutes = Duration.ofMinutes(30);
```

## Getting Day of Week

```java
import java.time.LocalDate;
import java.time.DayOfWeek;

LocalDate date = LocalDate.now();
DayOfWeek dayOfWeek = date.getDayOfWeek();
System.out.println(dayOfWeek);  // FRIDAY

// Get as int (1=Monday, 7=Sunday)
int dayNum = dayOfWeek.getValue();
```

## Checking Leap Year

```java
LocalDate date = LocalDate.of(2024, 1, 1);
boolean isLeap = date.isLeapYear();
System.out.println("Is leap year: " + isLeap);
```

## ZonedDateTime (With Timezone)

```java
import java.time.ZonedDateTime;
import java.time.ZoneId;

// Current time with timezone
ZonedDateTime now = ZonedDateTime.now();
System.out.println(now);

// Specific timezone
ZonedDateTime tokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
ZonedDateTime newYork = ZonedDateTime.now(ZoneId.of("America/New_York"));

System.out.println("Tokyo: " + tokyo);
System.out.println("New York: " + newYork);
```

## Instant (Timestamp)

```java
import java.time.Instant;

// Current timestamp
Instant now = Instant.now();
System.out.println(now);  // 2024-11-29T09:00:00Z

// Epoch seconds
long epochSeconds = now.getEpochSecond();
System.out.println("Seconds since epoch: " + epochSeconds);
```

## Legacy Date Class (java.util.Date)

**Note:** This is old, prefer java.time classes!

```java
import java.util.Date;

// Current date
Date date = new Date();
System.out.println(date);

// Get time in milliseconds
long millis = date.getTime();
```

## Converting Between Old and New API

```java
import java.util.Date;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.Instant;

// Date to LocalDateTime
Date date = new Date();
LocalDateTime ldt = date.toInstant()
                        .atZone(ZoneId.systemDefault())
                        .toLocalDateTime();

// LocalDateTime to Date
LocalDateTime now = LocalDateTime.now();
Date oldDate = Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
```

## Practical Examples

### Age Calculator
```java
import java.time.LocalDate;
import java.time.Period;

LocalDate birthDate = LocalDate.of(2000, 5, 15);
LocalDate today = LocalDate.now();

Period age = Period.between(birthDate, today);
System.out.println("Age: " + age.getYears() + " years, " + 
                   age.getMonths() + " months, " + 
                   age.getDays() + " days");
```

### Days Until Event
```java
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

LocalDate today = LocalDate.now();
LocalDate newYear = LocalDate.of(2025, 1, 1);

long daysUntil = ChronoUnit.DAYS.between(today, newYear);
System.out.println("Days until New Year: " + daysUntil);
```

### Time Difference
```java
import java.time.LocalTime;
import java.time.Duration;

LocalTime start = LocalTime.of(9, 0);
LocalTime end = LocalTime.of(17, 30);

Duration workHours = Duration.between(start, end);
System.out.println("Work hours: " + workHours.toHours() + " hours");
```

## Best Practices

✅ Use java.time classes (not Date/Calendar)  
✅ Use immutable objects  
✅ Use appropriate class (LocalDate for date only, etc.)  
✅ Format dates for display, parse for input  
✅ Be aware of timezones when needed  
✅ Use Period for dates, Duration for time  

## Common Patterns

```java
// Pattern 1: Display current date/time
LocalDateTime now = LocalDateTime.now();
System.out.println(now.format(DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm")));

// Pattern 2: Calculate age
Period age = Period.between(birthDate, LocalDate.now());

// Pattern 3: Add business days (skip weekends)
LocalDate date = LocalDate.now();
while (businessDays > 0) {
    date = date.plusDays(1);
    if (date.getDayOfWeek() != DayOfWeek.SATURDAY && 
        date.getDayOfWeek() != DayOfWeek.SUNDAY) {
        businessDays--;
    }
}
```

## Examples in This Folder
- `DateBasics.java` - LocalDate, LocalTime, LocalDateTime
- `DateFormatting.java` - Formatting and parsing dates
- `DateOperations.java` - Adding, subtracting dates
- `DateComparison.java` - Comparing dates
- `PracticalExamples.java` - Real-world date applications
