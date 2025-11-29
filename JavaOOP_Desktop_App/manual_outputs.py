"""
Manual output mapper for Java programs
Add actual program outputs here for better demonstration
"""

# Manually curated outputs for Java programs
MANUAL_OUTPUTS = {
    '01_Java_OOP': {
        'IntroductionExample.java': '''=== Introduction to Java OOP ===

Animal 1:
Name: Leo
Species: Lion
Age: 5 years
-------------------
Leo makes a sound!

Animal 2:
Name: Bella
Species: Dog
Age: 3 years
-------------------
Bella makes a sound!

✓ This demonstrates the basic OOP concept:
  - Class (Animal) = Blueprint
  - Objects (animal1, animal2) = Instances
  - Attributes (name, age, species) = Data
  - Methods (makeSound, displayInfo) = Behavior'''
    },
    '02_Java_Classes_Objects': {
        'BasicClassAndObject.java': '''=== Creating and Using Objects ===

Hello! My name is Alice
I am 25 years old
I live in New York

🎉 Happy Birthday! Now I'm 26 years old!

========================================
Key Concepts Demonstrated:
1. Class Person is the blueprint
2. person1 is an object (instance)
3. name, age, city are attributes
4. introduce(), celebrateBirthday() are methods'''
    },
    '03_Java_Class_Attributes': {
        'AttributeBasics.java': '''=== Java Class Attributes Example ===

===== LAPTOP SPECIFICATIONS =====
Brand: Dell
Model: XPS 15
RAM: 16 GB
Storage: 512 GB
Price: $1499.99
Status: OFF
================================

✓ Dell XPS 15 powered ON

===== LAPTOP SPECIFICATIONS =====
Brand: Dell
Model: XPS 15
RAM: 16 GB
Storage: 512 GB
Price: $1499.99
Status: ON
================================

✓ Dell XPS 15 powered OFF

=== Direct Attribute Access ===
Brand: Dell
Price: $1499.99

✓ Attributes represent the STATE of an object!''',

        'InstanceVsStatic.java': '''=== Instance vs Static Attributes ===

Total websites: 0

Website: My Blog
URL: www.myblog.com
Visitors: 100
Hosting: WebHost Inc.

Website: Tech News
URL: www.technews.com
Visitors: 250
Hosting: WebHost Inc.

Website: Gaming Portal
URL: www.gaming.com
Visitors: 500
Hosting: WebHost Inc.

Total websites created: 3

=== Changing Hosting Company ===

Website: My Blog
URL: www.myblog.com
Visitors: 100
Hosting: CloudHost Pro

Website: Tech News
URL: www.technews.com
Visitors: 250
Hosting: CloudHost Pro

Website: Gaming Portal
URL: www.gaming.com
Visitors: 500
Hosting: CloudHost Pro

=== Key Differences ===
✓ Instance attributes: unique per object
✓ Static attributes: shared by all objects'''
    },
    '04_Java_Class_Methods': {
        'MethodBasics.java': '''=== Java Methods Example ===

╔════════════════════════════╗
║   Welcome to Calculator!   ║
╚════════════════════════════╝

15 + 25 = 40
100 + 50 = 150
50 - 20 = 30

Multiplication Table of 5:
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50

=== Robot Operations ===
✓ Hi! I'm R2D2
  Battery: 100%
✓ R2D2 says: Hello, humans!
✓ R2D2 moving forward...
✓ R2D2 moving right...
✓ R2D2 moving left...
✓ Hi! I'm R2D2
  Battery: 85%

✓ Methods define what objects CAN DO!''',

        'ReturnMethods.java': '''=== Methods with Return Values ===

25 + 35 = 60
7 × 8 = 56
100 ÷ 4 = 25.0

Is 10 even? true
Is 15 even? false

Max of 45 and 67: 67

2³ = 8.0
5² = 25.0

=== String Operations ===
Original: Hello
Reversed: olleH

'Programming' has 3 vowels

Is 'radar' a palindrome? true
Is 'hello' a palindrome? false

Title case: Java Programming

=== Temperature Conversions ===
25.0°C = 77.0°F
77.0°F = 25.0°C

Is 100°C boiling? true
Is 0°C freezing? true

(10+20) + (5×6) = 60

✓ Return values let methods produce results!'''
    },
    '05_Java_Constructors': {
        'ConstructorBasics.java': '''=== Constructor Basics Demo ===

Creating objects with constructors:

Student 1:
Name: Alice
Age: 20
Grade: A

Student 2:
Name: Bob
Age: 22
Grade: B

Constructor features:
✓ Automatically called when object is created
✓ Same name as class
✓ No return type
✓ Can be overloaded'''
    },
    '06_Java_this_Keyword': {
        'ParameterShadowing.java': '''=== Parameter Shadowing Example ===

Initial information:
Name: Alice
Age: 25
City: New York

=== Updating Age ===
Old age (instance variable): 25
New age (parameter): 26
Updated age: 26

=== Updating Name ===
Name: Alice Johnson
Age: 26
City: New York

=== Another Example ===
Name: Bob
Age: 30
City: Los Angeles

=== Benefits of 'this' ===
✓ Distinguishes instance variables from parameters
✓ Makes code clearer and more readable
✓ Avoids naming conflicts''',

        'ReturningThis.java': '''=== Method Chaining Example ===

Person 1 (traditional way):
Name: Alice
Age: 25
City: New York
Occupation: Engineer

=== With Method Chaining ===

Person 2 (method chaining):
Name: Bob
Age: 30
City: Los Angeles
Occupation: Designer

=== Chaining Multiple Operations ===
Age incremented to: 21
Age incremented to: 22

Person 3 (after chaining):
Name: Charlie
Age: 22
City: Chicago
Occupation: Student

=== Comparison Example ===
Alice and David are in the same city!

=== Method Chaining Benefits ===
✓ Fluent interface pattern
✓ More readable code
✓ Reduces temporary variables
✓ Enables builder pattern'''
    },
    '07_Java_Modifiers': {
        'AccessModifiers.java': '''=== Access Modifiers Demo ===

From main (same class):
Public variable: I am public
Private variable: I am private
Protected variable: I am protected
Default variable: I am default (package-private)

=== Calling Methods ===
Public method called
Can access all variables:
  - I am public
  - I am private
  - I am protected
  - I am default (package-private)

Calling private method from public method:
Private method called
This can only be called from within the class

=== Using Getter/Setter ===
Private var via getter: I am private
After setter: Modified private value

=== Access Levels ===
✓ public: Accessible everywhere
✓ protected: Package + subclasses
✓ default: Within package only
✓ private: Within class only''',

        'StaticAndFinal.java': '''=== Static and Final Modifiers ===

=== Static Access (No Object) ===
Company: TechCorp
PI: 3.14159
Initial instance count: 0

=== Static Method Call ===
Company: TechCorp
Max Users: 100
Total Instances Created: 0

=== Creating Instances ===
Created: Alice with ID: 1
Created: Bob with ID: 2
Created: Charlie with ID: 3

=== Static Variable Shared ===
Instance count after creating 3 objects: 3
Instance count via obj1: 3
Instance count via obj2: 3

=== Final Instance Variables ===
Name: Alice, ID: 1, Company: TechCorp
Name: Bob, ID: 2, Company: TechCorp
Name: Charlie, ID: 3, Company: TechCorp

=== Final Constants ===
Final constants cannot be modified!

=== Static Method Usage ===
Circle area (radius 5.0): 78.54

=== Next Available ID ===
Next ID will be: 4

=== Modifier Features ===
✓ static: Belongs to class, not instance
✓ final: Cannot be changed once initialized
✓ Combine for constants (public static final)'''
    },
    '08_Java_Encapsulation': {
        'BasicEncapsulation.java': '''=== Basic Encapsulation Demo ===

Initial Information:
Name: John Doe
Age: 30
Salary: $50000.0

=== Accessing via Getters ===
Name: John Doe
Age: 30
Salary: $50000.0

=== Modifying via Setters ===

After modifications:
Name: Jane Smith
Age: 35
Salary: $60000.0

=== Testing Validation ===
Invalid age! Age must be between 1 and 149.
Invalid age! Age must be between 1 and 149.
Invalid salary! Salary cannot be negative.

Information unchanged (due to validation):
Name: Jane Smith
Age: 35
Salary: $60000.0

✓ Private variables are protected from direct access!''',

        'DataHiding.java': '''=== Data Hiding and Validation Demo ===

PIN set successfully

=== Account Information ===
Account Number: ACC001
Account Holder: Alice
Balance: $0.0
Status: Active
PIN: ****

=== Deposit Operations ===
Deposited: $1000.0
New balance: $1000.0
Deposited: $500.0
New balance: $1500.0
Invalid amount! Must be positive.
Current balance: $1500.0

=== Withdrawal Operations ===
Withdrawn: $200.0
Remaining balance: $1300.0
Invalid PIN! Transaction denied.
Insufficient balance!

=== Creating Second Account ===
PIN set successfully
Deposited: $300.0
New balance: $300.0

=== Transfer Operation ===
Transferred $400.0 to Bob
Your new balance: $900.0

Account 1 balance: $900.0
Account 2 balance: $700.0

=== Benefits ===
✓ Data hiding (private fields)
✓ Controlled access (getters/setters)
✓ Data validation
✓ Security and integrity'''
    },
    '09_Java_Packages_API': {
        'BuiltInPackages.java': '''=== Built-In Java Packages Demo ===

=== java.util - Collections ===
Fruits: [Apple, Banana, Orange]
Ages: {Alice=25, Bob=30}

=== java.time - Date and Time ===
Today: 2025-11-29
Current time: 14:30:45.123
Now: 2025-11-29T14:30:45.123

=== java.math - Big Numbers ===
123.456 + 789.012 = 912.468

Big Integer multiplication:
12345678901234567890 × 98765432109876543210
= 1219326311370217952237463801111263526900

=== java.util.Random ===
Random integer: 42
Random double: 0.75
Random boolean: true

=== java.util.Arrays ===
Original: [5, 2, 8, 1, 9]
Sorted: [1, 2, 5, 8, 9]

=== java.lang (Auto-imported) ===
Length: 13
Uppercase: HELLO, WORLD!
Square root of 16: 4.0
Max of 10 and 20: 20

=== Common Packages ===
✓ java.lang - Core classes (String, Math, System)
✓ java.util - Collections, Date, Scanner
✓ java.io - Input/Output operations
✓ java.time - Date and Time API
✓ java.math - Mathematical operations'''
    },
    '10_Java_Inheritance': {
        'BasicInheritance.java': '''=== Basic Inheritance Demo ===

Animal sounds:
Generic animal sound
Woof! Woof!
Meow! Meow!

Dog specific behavior:
Buddy is wagging tail

Cat specific behavior:
Whiskers is purring

=== Inheritance Benefits ===
✓ Code reusability
✓ Method overriding
✓ Hierarchical classification
✓ Polymorphism foundation'''
    },
    '11_Java_Polymorphism': {
        'RuntimePolymorphism.java': '''=== Runtime Polymorphism Demo ===

Animal 1 (Dog reference):
Dog barks: Woof! Woof!
Dog runs on four legs

Animal 2 (Cat reference):
Cat meows: Meow! Meow!
Cat walks gracefully

Animal 3 (Bird reference):
Bird chirps: Tweet! Tweet!
Bird flies in the sky

=== Array of Animals ===

Animal 1: Dog barks: Woof! Woof!
Animal 2: Cat meows: Meow! Meow!
Animal 3: Bird chirps: Tweet! Tweet!
Animal 4: Dog barks: Woof! Woof!
Animal 5: Cat meows: Meow! Meow!

=== Polymorphic Method ===
Playing with animal: Dog barks: Woof! Woof!
Playing with animal: Cat meows: Meow! Meow!
Playing with animal: Bird chirps: Tweet! Tweet!

=== Runtime Polymorphism Benefits ===
✓ Same method call, different behavior
✓ Decided at runtime, not compile time
✓ Enables flexible and extensible code
✓ Write code that works with parent type''',

        'MethodOverloading.java': '''=== Method Overloading (Compile-Time Polymorphism) ===

=== Calculator Examples ===
Adding two integers
Result: 8

Adding three integers
Result: 10

Adding two doubles
Result: 8.7

Adding int and double
Result: 8.5

Adding double and int
Result: 8.5

==================================================

=== Printer Examples ===
Integer: 42
Double: 3.14
String: Hello, World!
Array: [1, 2, 3, 4, 5]
Age: 25

=== Method Overloading Rules ===
✓ Same method name
✓ Different parameters (number, type, or order)
✓ Return type can be different
✓ Resolved at compile time''',

        'PolymorphismExample.java': '''=== Polymorphism Real-World Example ===

Processing Payment 1:
Processing Credit Card payment...
Card: ****3456
Amount: $99.99
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN001
Amount: $99.99
Method: Credit Card

Processing Payment 2:
Processing PayPal payment...
Email: user@example.com
Amount: $49.99
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN002
Amount: $49.99
Method: PayPal

Processing Payment 3:
Processing Cash payment...
Amount due: $25.5
Cash received: $30.0
Change: $4.5
Payment successful!

=== Payment Receipt ===
Transaction ID: TXN003
Amount: $25.5
Method: Cash

==================================================

=== Processing Multiple Payments ===

Total transactions: 3
Total amount: $255.5

=== Polymorphism Benefits ===
✓ Single interface, multiple implementations
✓ Extensible without changing existing code
✓ Real-world problem modeling
✓ Reduces code complexity''',

        'UpcastingDowncasting.java': '''=== Upcasting and Downcasting Demo ===

=== UPCASTING (Child to Parent) ===
After upcasting Car to Vehicle:
Toyota vehicle starting
Brand: Toyota
Doors: 4
Type: Car

==================================================

=== DOWNCASTING (Parent to Child) ===
Downcasting successful!
Driving Honda car
Brand: Honda
Doors: 2
Type: Car

==================================================

=== instanceof Operator (Type Checking) ===
v1 instanceof Vehicle: true
v1 instanceof Car: true
v1 instanceof Bike: false

v2 instanceof Vehicle: true
v2 instanceof Car: false
v2 instanceof Bike: true

=== Safe Downcasting ===

Processing vehicle:
Ford vehicle starting
Driving Ford car

Processing vehicle:
Giant vehicle starting
Pedaling Giant bike

Processing vehicle:
Tesla vehicle starting
Driving Tesla car

Processing vehicle:
Schwinn vehicle starting
Pedaling Schwinn bike

=== Unsafe Downcasting (Error) ===
Error: Cannot cast Bike to Car!

=== Best Practices ===
✓ Upcasting is automatic and safe
✓ Downcasting requires explicit cast
✓ Always use instanceof before downcasting
✓ Avoid unnecessary downcasting'''
    },
    '12_Java_super_Keyword': {
        'SuperKeyword.java': '''=== super Keyword Demo ===

Creating Child object with no-arg constructor:
Parent constructor called
Child constructor called

==================================================

Creating Child object with parameterized constructor:
Parent constructor with parameter: Custom Parent Name
Child constructor with parameter

==================================================

=== Demonstrating super keyword ===
Child's name: Child Class
Child's value: 200
Parent's name: Parent Class
Parent's value: 100

==================================================

Message from Child class
Message from Parent class

==================================================

=== Accessing Parent Members ===
Calling parent's display():
Display from Parent
Name: Parent Class
Value: 100

Calling parent's showMessage():
Message from Parent class

=== super Keyword Uses ===
✓ super() - Call parent constructor
✓ super.variable - Access parent's variable
✓ super.method() - Call parent's method''',

        'SuperConstructor.java': '''=== Constructor Chaining with super ===

Example 1: No-arg constructors
Grandparent() - No-arg constructor
Parent() - No-arg constructor
Child() - No-arg constructor

=== Full Information ===
Family Name: Unknown
Parent Name: Unknown Parent
Child Name: Unknown Child

==================================================

Example 2: Parameterized constructors
Grandparent(String) - Family: Smith
Parent(String, String) - Parent: John Smith
Child(String, String, String) - Child: Emma Smith

=== Full Information ===
Family Name: Smith
Parent Name: John Smith
Child Name: Emma Smith

==================================================

Example 3: Another instance
Grandparent(String) - Family: Johnson
Parent(String, String) - Parent: Mary Johnson
Child(String, String, String) - Child: Tom Johnson

=== Full Information ===
Family Name: Johnson
Parent Name: Mary Johnson
Child Name: Tom Johnson

=== Constructor Chain ===
Child() → Parent() → Grandparent()
OR
Child(params) → Parent(params) → Grandparent(params)

✓ super() must be the first statement in constructor
✓ Ensures parent is initialized before child'''
    },
    '13_Java_Inner_Classes': {
        'MemberInnerClass.java': '''=== Member Inner Class Demo ===

=== Outer Class Method ===
=== Inner Class Method ===
Outer field: Outer Field
Outer value: 100
Inner field: Inner Field
Modified outer value to: 150

==================================================

=== Inner Class Method ===
Outer field: Outer Field
Outer value: 150
Inner field: Inner Field

==================================================

=== Inner Class Method ===
Outer field: Outer Field
Outer value: 100
Inner field: Inner Field

=== Member Inner Class Features ===
✓ Can access all members of outer class
✓ Requires outer class instance
✓ Cannot have static members (except final)
✓ Useful for helper classes''',
        
        'StaticNestedClass.java': '''=== Static Nested Class Demo ===

=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 0
Nested field: Nested Field

==================================================

Static method in nested class
Can access: Static Outer Field

==================================================

Counter incremented to: 1
Counter incremented to: 2
=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 2
Nested field: Nested Field

==================================================

=== From Outer Class ===
=== Static Nested Class ===
Static outer field: Static Outer Field
Counter: 2
Nested field: Nested Field

=== Static Nested Class Features ===
✓ No need for outer class instance
✓ Can access only static members of outer class
✓ Can have static members
✓ Like a static member of outer class''',
        
        'LocalAndAnonymous.java': '''=== Local and Anonymous Inner Classes ===

=== Local Inner Class Example ===
Local inner class
Message: Hello from local class!

==================================================

=== Anonymous Inner Class Example ===
Custom button behavior!
Button 'Submit' clicked!
Form submitted successfully!

==================================================

=== Anonymous Class with Interface ===
Button 'Save' clicked!
Saving data...
Data saved successfully!

Button 'Delete' clicked!
Deleting item...
Item deleted!

==================================================

=== Multiple Buttons ===
Button 'Button 1' clicked!
Action 1 performed

Button 'Button 2' clicked!
Action 2 performed

Button 'Button 3' clicked!
Action 3 performed

=== Inner Class Types Summary ===
✓ Local: Defined inside a method
✓ Anonymous: No name, created on-the-fly
✓ Used for one-time implementations
✓ Common in event handling'''
    },
    '14_Java_Abstraction': {
        'AbstractClasses.java': '''=== Abstract Classes Demo ===

=== Dog ===
Name: Buddy
Age: 3
Breed: Golden Retriever
Type: Dog
Buddy barks: Woof! Woof!
Buddy runs on four legs
Buddy is eating
Buddy is sleeping

==================================================

=== Bird 1 (Can Fly) ===
Name: Tweety
Age: 1
Can fly: true
Type: Bird
Tweety chirps: Tweet! Tweet!
Tweety flies in the sky
Tweety is eating

==================================================

=== Bird 2 (Cannot Fly) ===
Name: Penguin
Age: 5
Can fly: false
Type: Bird
Penguin chirps: Tweet! Tweet!
Penguin walks on the ground

==================================================

=== Polymorphism with Abstract Class ===
Name: Max, Age: 5, Type: Dog
Max barks: Woof! Woof!

Name: Parrot, Age: 2, Type: Bird
Parrot chirps: Tweet! Tweet!

Name: Charlie, Age: 2, Type: Dog
Charlie barks: Woof! Woof!

=== Abstract Class Features ===
✓ Cannot be instantiated
✓ Can have abstract and concrete methods
✓ Subclasses must implement abstract methods
✓ Used for common base functionality''',

        'AbstractionExample.java': '''=== Abstraction Real-World Example ===

=== Circle ===
Color: Red
Area: 78.54
Perimeter: 31.42
Drawing a Red circle with radius 5.0

=== Rectangle ===
Color: Blue
Area: 24.0
Perimeter: 20.0
Drawing a Blue rectangle 4.0×6.0

=== Triangle ===
Color: Green
Area: 6.0
Perimeter: 12.0
Drawing a Green triangle with sides 3.0, 4.0, 5.0

==================================================

=== Processing Multiple Shapes ===

Shape 1:
Color: Yellow, Area: 28.27
Drawing a Yellow circle with radius 3.0

Shape 2:
Color: Purple, Area: 40.0
Drawing a Purple rectangle 5.0×8.0

Shape 3:
Color: Orange, Area: 24.0
Drawing a Orange triangle with sides 6.0, 8.0, 10.0

Shape 4:
Color: Pink, Area: 153.94
Drawing a Pink circle with radius 7.0

=== Summary ===
Total shapes: 4
Total area: 246.21

=== Benefits of Abstraction ===
✓ Hide complex implementation details
✓ Focus on what object does, not how
✓ Provide common interface
✓ Enable polymorphism'''
    },
    '15_Java_Interface': {
        'BasicInterface.java': '''=== Basic Interface Demo ===

=== Dog ===
Buddy says: Woof! Woof!
Buddy is eating dog food
Buddy is sleeping in the doghouse

=== Cat ===
Whiskers says: Meow! Meow!
Whiskers is eating cat food
Whiskers is sleeping on the couch

=== Bird ===
Tweety says: Tweet! Tweet!
Tweety is eating seeds
Tweety is sleeping in the nest

==================================================

=== Polymorphism with Interface ===
Max says: Woof! Woof!
Max is eating dog food

Felix says: Meow! Meow!
Felix is eating cat food

Polly says: Tweet! Tweet!
Polly is eating seeds

Charlie says: Woof! Woof!
Charlie is eating dog food

=== Interface Features ===
✓ All methods are public and abstract by default
✓ Cannot be instantiated
✓ Class must implement all methods
✓ Supports multiple inheritance''',

        'MultipleInterfaces.java': '''=== Multiple Interfaces Demo ===

=== Duck ===
Donald is walking
Donald flaps wings and takes off!
Donald is flying
Landing...
Diving into water...
Donald is swimming

==================================================

=== Fish ===
Nemo is swimming gracefully
Diving into water...

==================================================

=== Airplane ===
Boeing 747 accelerates on runway and takes off!
Boeing 747 is flying at high altitude
Boeing 747 descends and lands on runway

==================================================

=== Polymorphism with Flyable ===
Daffy flaps wings and takes off!
Daffy is flying
Landing...

Airbus A380 accelerates on runway and takes off!
Airbus A380 is flying at high altitude
Airbus A380 descends and lands on runway

=== Swimmable Objects ===
Diving into water...
Huey is swimming

Diving into water...
Dory is swimming gracefully

=== Multiple Interfaces Benefits ===
✓ Class can implement multiple interfaces
✓ Solves multiple inheritance problem
✓ Default methods provide implementation
✓ Flexible and extensible design'''
    },
    '16_Java_Enums': {
        'BasicEnums.java': '''=== Basic Enums Demo ===

Today is: MONDAY
Start of the work week!

=== All Days ===
MONDAY
TUESDAY
WEDNESDAY
THURSDAY
FRIDAY
SATURDAY
SUNDAY

=== Size Enum ===
Shirt size: MEDIUM
Position: 1

=== Traffic Light System ===
RED - STOP
YELLOW - SLOW DOWN
GREEN - GO

=== Day Schedule ===
MONDAY: Go to work
WEDNESDAY: Go to work
FRIDAY: Go to work
SUNDAY: Weekend! Relax

=== Enum Methods ===
valueOf(): FRIDAY
name(): FRIDAY
ordinal(): 4
toString(): FRIDAY

=== Enum Features ===
✓ Special Java type for constants
✓ Type-safe constants
✓ Can be used in switch statements
✓ Have built-in methods''',

        'AdvancedEnums.java': '''=== Advanced Enums Demo ===

=== Planet Information ===
MERCURY: Mass=3.303e+23 kg, Radius=2.440e+06 m
  Your weight on MERCURY: 277.73 kg

EARTH: Mass=5.976e+24 kg, Radius=6.378e+06 m
  Your weight on EARTH: 735.20 kg

MARS: Mass=6.421e+23 kg, Radius=3.397e+06 m
  Your weight on MARS: 278.45 kg

JUPITER: Mass=1.900e+27 kg, Radius=7.149e+07 m
  Your weight on JUPITER: 1860.46 kg

==================================================

=== Pizza Menu ===
Small Pizza: 8 inches, $8.99, Area: 50.27 sq in
Medium Pizza: 10 inches, $11.99, Area: 78.54 sq in
Large Pizza: 12 inches, $14.99, Area: 113.10 sq in
Extra Large Pizza: 14 inches, $17.99, Area: 153.94 sq in

==================================================

=== Calculator Operations ===
ADD: 10.00 + 3.00 = 13.00
SUBTRACT: 10.00 - 3.00 = 7.00
MULTIPLY: 10.00 × 3.00 = 30.00
DIVIDE: 10.00 ÷ 3.00 = 3.33

=== Custom Calculations ===
Addition: 19.0
Multiplication: 60.0

=== Advanced Enum Features ===
✓ Can have fields and constructors
✓ Can have methods
✓ Can have abstract methods
✓ Each constant can override methods'''
    },
    '17_Java_User_Input': {
        'BasicUserInput.java': '''=== User Input Demo ===

Enter your name: Alice
Enter your age: 25
Enter your city: New York

Your Profile:
Name: Alice
Age: 25
City: New York

=== Scanner Methods ===
✓ nextLine() - Read string
✓ nextInt() - Read integer
✓ nextDouble() - Read decimal
✓ next() - Read single word'''
    },
    '18_Java_Date': {
        'BasicDateTime.java': '''=== Date and Time Demo ===

Current Date and Time:
2025-11-29T14:30:45.123

Date: 2025-11-29
Time: 14:30:45.123

Formatted:
Date: November 29, 2025
Time: 02:30 PM

Custom Date:
Birthday: January 15, 2000

=== Date/Time Features ===
✓ LocalDate - Date only
✓ LocalTime - Time only
✓ LocalDateTime - Both
✓ DateTimeFormatter - Formatting'''
    },
    '19_Java_ArrayList': {
        'BasicArrayList.java': '''=== Basic ArrayList Demo ===

=== Adding Elements ===
Fruits: [Apple, Banana, Orange, Mango]
After adding at index 1: [Apple, Strawberry, Banana, Orange, Mango]

=== Accessing Elements ===
First fruit: Apple
Third fruit: Banana
Last fruit: Mango

=== Modifying Elements ===
Before: [Apple, Strawberry, Banana, Orange, Mango]
After changing index 0: [Pineapple, Strawberry, Banana, Orange, Mango]

=== Removing Elements ===
Removed: Banana
After removal: [Pineapple, Strawberry, Orange, Mango]

=== ArrayList Features ===
✓ Dynamic size
✓ Add, remove, modify elements
✓ Random access (get by index)
✓ Can store objects
✓ Allows duplicates'''
    },
    '20_Java_HashMap': {
        'BasicHashMap.java': '''=== Basic HashMap Demo ===

=== Adding Elements ===
Countries: {USA=Washington DC, UK=London, France=Paris, Germany=Berlin, Japan=Tokyo}

=== Accessing Values ===
Capital of USA: Washington DC
Capital of France: Paris
Capital of India: null

=== Checking Keys ===
Contains USA? true
Contains India? false

=== Iterating HashMap ===
USA => Washington DC
UK => London
France => Paris
Germany => Berlin
Japan => Tokyo

=== HashMap Features ===
✓ Key-value pairs
✓ Fast lookup by key
✓ Unique keys (no duplicates)
✓ Allows one null key
✓ Unordered collection'''
    }
}

def get_manual_output(folder, filename):
    """Get manually curated output if available"""
    if folder in MANUAL_OUTPUTS and filename in MANUAL_OUTPUTS[folder]:
        return MANUAL_OUTPUTS[folder][filename]
    return None
