// Methods that Return Values

class MathOperations {
    // Method returns int
    int add(int a, int b) {
        return a + b;
    }
    
    // Method returns double
    double divide(double a, double b) {
        if (b != 0) {
            return a / b;
        }
        return 0.0;
    }
    
    // Method returns int
    int multiply(int a, int b) {
        return a * b;
    }
    
    // Method returns boolean
    boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    // Method returns int (maximum)
    int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    
    // Method returns double (power)
    double power(double base, int exponent) {
        double result = 1;
        for (int i = 0; i < exponent; i++) {
            result *= base;
        }
        return result;
    }
}

class StringUtility {
    // Returns reversed string
    String reverse(String text) {
        String reversed = "";
        for (int i = text.length() - 1; i >= 0; i--) {
            reversed += text.charAt(i);
        }
        return reversed;
    }
    
    // Returns character count
    int countVowels(String text) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (int i = 0; i < text.length(); i++) {
            if (vowels.indexOf(text.charAt(i)) != -1) {
                count++;
            }
        }
        return count;
    }
    
    // Returns boolean
    boolean isPalindrome(String text) {
        String reversed = reverse(text);
        return text.equals(reversed);
    }
    
    // Returns formatted string
    String toTitleCase(String text) {
        if (text.length() == 0) return text;
        return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
    }
}

class Temperature {
    // Celsius to Fahrenheit
    double celsiusToFahrenheit(double celsius) {
        return (celsius * 9/5) + 32;
    }
    
    // Fahrenheit to Celsius
    double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
    
    // Check if water boils
    boolean isBoiling(double celsius) {
        return celsius >= 100;
    }
    
    // Check if water freezes
    boolean isFreezing(double celsius) {
        return celsius <= 0;
    }
}

public class ReturnMethods {
    public static void main(String[] args) {
        System.out.println("=== Methods with Return Values ===\n");
        
        // Math operations
        MathOperations math = new MathOperations();
        
        int sum = math.add(25, 35);
        System.out.println("25 + 35 = " + sum);
        
        int product = math.multiply(7, 8);
        System.out.println("7 × 8 = " + product);
        
        double quotient = math.divide(100.0, 4.0);
        System.out.println("100 ÷ 4 = " + quotient);
        
        System.out.println("Is 10 even? " + math.isEven(10));
        System.out.println("Is 15 even? " + math.isEven(15));
        
        System.out.println("Max of 45 and 67: " + math.max(45, 67));
        System.out.println("2³ = " + math.power(2, 3));
        System.out.println("5² = " + math.power(5, 2));
        
        // String utilities
        System.out.println("\n--- String Operations ---\n");
        StringUtility strUtil = new StringUtility();
        
        String text = "Hello";
        String reversed = strUtil.reverse(text);
        System.out.println("Original: " + text);
        System.out.println("Reversed: " + reversed);
        
        String word = "Programming";
        int vowelCount = strUtil.countVowels(word);
        System.out.println("\n'" + word + "' has " + vowelCount + " vowels");
        
        System.out.println("\nIs 'radar' a palindrome? " + strUtil.isPalindrome("radar"));
        System.out.println("Is 'hello' a palindrome? " + strUtil.isPalindrome("hello"));
        
        System.out.println("\nTitle case: " + strUtil.toTitleCase("java programming"));
        
        // Temperature conversions
        System.out.println("\n--- Temperature Conversions ---\n");
        Temperature temp = new Temperature();
        
        double celsius = 25.0;
        double fahrenheit = temp.celsiusToFahrenheit(celsius);
        System.out.println(celsius + "°C = " + fahrenheit + "°F");
        
        double fahr = 77.0;
        double cels = temp.fahrenheitToCelsius(fahr);
        System.out.println(fahr + "°F = " + cels + "°C");
        
        System.out.println("\nIs 100°C boiling? " + temp.isBoiling(100));
        System.out.println("Is 0°C freezing? " + temp.isFreezing(0));
        
        // Using return values in calculations
        int a = math.add(10, 20);
        int b = math.multiply(5, 6);
        int total = math.add(a, b);
        System.out.println("\n(10+20) + (5×6) = " + total);
        
        System.out.println("\n✓ Return values let methods produce results!");
    }
}
