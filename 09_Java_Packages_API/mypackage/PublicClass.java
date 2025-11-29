// Demonstrating package access modifiers and organization

// File showing different access levels in packages
package mypackage;

// Public class - accessible from other packages
public class PublicClass {
    public void publicMethod() {
        System.out.println("Public method in public class");
    }
}

// Package-private class (default) - only accessible in same package
class PackagePrivateClass {
    void packageMethod() {
        System.out.println("Package-private method");
    }
}

// Class demonstrating member access in packages
class AccessDemo {
    public String publicField = "Public";
    protected String protectedField = "Protected";
    String defaultField = "Default (Package-private)";
    private String privateField = "Private";
    
    public void showAccess() {
        System.out.println("From same class:");
        System.out.println("  Public: " + publicField);
        System.out.println("  Protected: " + protectedField);
        System.out.println("  Default: " + defaultField);
        System.out.println("  Private: " + privateField);
    }
}
