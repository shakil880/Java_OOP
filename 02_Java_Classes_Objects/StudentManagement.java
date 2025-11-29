// Student Management System Example

class Student {
    String studentId;
    String name;
    int age;
    String major;
    double gpa;
    
    void study(String subject) {
        System.out.println(name + " is studying " + subject + "...");
    }
    
    void takeExam(String subject, double score) {
        System.out.println(name + " took " + subject + " exam");
        System.out.println("Score: " + score + "%");
        if (score >= 90) {
            System.out.println("Grade: A - Excellent! 🌟");
        } else if (score >= 80) {
            System.out.println("Grade: B - Good! ✓");
        } else if (score >= 70) {
            System.out.println("Grade: C - Average");
        } else {
            System.out.println("Grade: F - Need Improvement");
        }
    }
    
    void displayProfile() {
        System.out.println("╔════════════════════════════╗");
        System.out.println("  STUDENT PROFILE");
        System.out.println("╚════════════════════════════╝");
        System.out.println("ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Major: " + major);
        System.out.println("GPA: " + gpa);
        System.out.println("----------------------------");
    }
    
    void updateGPA(double newGPA) {
        System.out.println("Updating GPA from " + gpa + " to " + newGPA);
        gpa = newGPA;
    }
}

public class StudentManagement {
    public static void main(String[] args) {
        System.out.println("=== Student Management System ===\n");
        
        // Create students
        Student student1 = new Student();
        student1.studentId = "S001";
        student1.name = "Emily Chen";
        student1.age = 20;
        student1.major = "Computer Science";
        student1.gpa = 3.8;
        
        Student student2 = new Student();
        student2.studentId = "S002";
        student2.name = "Michael Brown";
        student2.age = 21;
        student2.major = "Mathematics";
        student2.gpa = 3.5;
        
        Student student3 = new Student();
        student3.studentId = "S003";
        student3.name = "Sophia Martinez";
        student3.age = 19;
        student3.major = "Physics";
        student3.gpa = 3.9;
        
        // Display all students
        student1.displayProfile();
        student2.displayProfile();
        student3.displayProfile();
        
        System.out.println("\n=== Student Activities ===\n");
        
        // Student 1 activities
        student1.study("Data Structures");
        student1.takeExam("Data Structures", 95);
        System.out.println();
        
        // Student 2 activities
        student2.study("Calculus");
        student2.takeExam("Calculus", 87);
        System.out.println();
        
        // Student 3 activities
        student3.study("Quantum Mechanics");
        student3.takeExam("Quantum Mechanics", 92);
        student3.updateGPA(4.0);
        System.out.println();
        
        // Final profiles
        System.out.println("\n=== Updated Profiles ===\n");
        student3.displayProfile();
    }
}
