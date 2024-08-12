---
layout: answer

title: "Chapter ONE"
subtitle: "Utilizing Java Object-Oriented Approach - Part 1"
exam_objectives:
  - "Declare and instantiate Java objects including nested class objects, and explain the object life-cycle including creation, reassigning references, and garbage collection."
  - "Create classes and records, and define and use instance and static fields and methods, constructors, and instance and static initializers."
  - "Implement overloading, including var-arg methods."
---

## Answers

**1. The correct answer is B.**

**Explanation:**

- **A)** Both `sb1` and `sb2` are eligible for garbage collection.
  - This option is incorrect because `sb2` still holds a reference to the `StringBuilder` object it was initially assigned. Therefore, it is not eligible for garbage collection.

- **B)** Only the `StringBuilder` object initially referenced by `sb1` is eligible for garbage collection.
  - This option is correct. After `sb1` is reassigned to reference the same object as `sb2`, the original `StringBuilder` object created with `new StringBuilder("Java")` and initially referenced by `sb1` is no longer accessible. Since there are no references pointing to it, it becomes eligible for garbage collection.

- **C)** Only the `StringBuilder` object initially referenced by `sb2` is eligible for garbage collection.
  - This option is incorrect because after the assignment `sb1 = sb2;`, both `sb1` and `sb2` reference the same object (`new StringBuilder("Python")`). This object is still accessible through `sb2` (and now `sb1` as well), so it is not eligible for garbage collection.

- **D)** Neither of the `StringBuilder` objects are eligible for garbage collection.
  - This option is incorrect because, as explained, the object initially referenced by `sb1` becomes eligible for garbage collection after `sb1` is reassigned to `sb2`.



**2. The correct answers are C and D.**

**Explanation:**

- **A)** `implement` is incorrect. The correct keyword for implementing an interface in Java is `implements`.

- **B)** `array` is incorrect. Java does not have a reserved keyword named `array`. Arrays are declared with square brackets `[ ]`.

- **C)** `volatile` is correct. `volatile` is a reserved keyword that is used to indicate that a variable's value will be modified by different threads.

- **D)** `extends` is correct. `extends` is a reserved keyword used in class declarations to inherit from a superclass.



**3. The correct answers are A and E.**

**Explanation:**

- **A)** Line 1 is an example of a single-line comment.
  - This option is correct. Line 1 uses `//` to start a single-line comment, which is a common way to add notes or explain a part of code that does not affect the execution.

- **B)** Lines 3-7 demonstrate the use of a javadoc comment.
  - This option is incorrect. Lines 3-7 use a block comment. Javadoc comments start with `/**` and end with `*/`.

- **C)** Line 9 uses a javadoc comment to explain the `add` method.
  - This option is incorrect. Line 9 is a single-line comment, not a javadoc comment. Javadoc comments in Java are defined with `/**` at the beginning and `*/` at the end, and are specifically used to describe classes, methods, and fields.

- **D)** Line 12 uses a special `TODO` comment, different from a single-line comment.
  - This option is incorrect. Line 12 uses a `TODO` comment, which is a convention many developers follow to mark parts of the code that require further development or attention but is still a single-line comment.

- **E)** Lines 3-7 is a block comment that is used as if it were a javadoc comment.
  - This option is correct. Lines 3-7 use a block comment, which is not processed by javadoc tools and therefore not suitable for generating official documentation.



**4. The correct answers are B and D.** 

**Explanation:**

- **A)** The `import` statement in `Application.java` is unnecessary because both classes are in the same directory.
  - This option is incorrect. In Java, the `import` statement is used to bring a class or an entire package into visibility, and its necessity is determined by the package membership of the classes, not their directory location. Even if classes are in the same directory, if they belong to different packages, the `import` statement is required to use one in the other.

- **B)** The `import` statement in `Application.java` is necessary for using the `Calculator` class because they belong to different packages.
  - This is the correct answer. The `Calculator` class is in the `math` package, and the `Application` class is in the `app` package. Despite being in the same directory, the different packages require an `import` statement to use `Calculator` in `Application`.

- **C)** The `Calculator` class will not be accessible in `Application.java` due to being in a different directory.
  - This option is incorrect. Java's access control is not based on the directory structure but on the `package` and `import` declarations. As long as the classes are correctly packaged and imported, they can be accessed across different directories.

- **D)** Removing the `package` statement from both files will allow `Application.java` to use `Calculator` without an `import` statement, regardless of directory structure.
  - This option is correct. Removing the `package` statement from both files will place them in the default package, and they will be able to access each other without an `import` statement. However, this is not recommended for anything beyond very simple or temporary code due to namespace management and readability concerns.



**5. The correct answers are A, B, and C.** 

**Explanation:**

- **A)** A `public` class or member can be accessed by any other class in the same package or in any other package.
  - This is correct. The `public` modifier grants the highest level of access. A `public` class or member is accessible from any other class, regardless of the packages they belong to.

- **B)** A `protected` member can be accessed by any class in its own package, but from outside the package, only by classes that extend the class containing the protected member.
  - This is correct. The `protected` access level allows a member to be accessed within its own package and by subclasses in any package. It offers a more restrictive level of access than `public`.

- **C)** A member with `default` (no modifier) access can be accessed by any class in the same package but not from a class in a different package.
  - This is correct. If no access modifier (also known as `default` access level) is specified, the member is accessible only within classes in the same package. This is more restrictive than `protected` and `public`.

- **D)** A `private` member can be accessed only by methods that are members of the same class or within the same file.
  - This option is incorrect because `private` members can be accessed only within the same class. It's not about being within the same file, as Java allows only one public top-level class per file.

- **E)** A `protected` member can be accessed by any class in the Java program, regardless of package.
  - This is incorrect. `Protected` access does not grant universal access across all classes in a program. Access from outside the package is limited to subclasses only.



**6. The correct answer is D:** 

**Explanation:**

- **A)** `class public Vehicle { }`
  - This option is incorrect because the syntax is wrong. The correct order is the access modifier followed by the `class` keyword, and then the class name.

- **B)** `public class vehicle { }`
  - This option is incorrect mainly due to the class naming convention. In Java, class names should start with an uppercase letter, so `vehicle` should be `Vehicle`.

- **C)** `Public class Vehicle { }`
  - This option is incorrect because `Public` is incorrectly capitalized. Java is case-sensitive, and the correct keyword is `public`.

- **D)** `public class Vehicle { }`
  - This is the correct answer. The syntax follows the proper order: the access modifier (`public`), followed by the `class` keyword, and then the class name (`Vehicle`), which correctly starts with an uppercase letter as per Java naming conventions.

- **E)** `classVehicle public { }`
  - This option is incorrect due to several reasons: the syntax order is wrong, there is no space between `class` and the class name, and the access modifier's position is incorrect.



**7. The correct answers are A, C, and D.** 

**Explanation:**

- **A)** The `COUNT` variable can be accessed directly using the class name without creating an instance of `Counter`.
  - This option is correct. Static variables belong to the class and can be accessed directly with the class name, such as `Counter.COUNT`, without needing to instantiate the class.

- **B)** The `getCount()` method is an example of a static method because it returns the value of a static variable.
  - This option is incorrect. Although `getCount()` returns a static variable's value, it is not defined as a static method. Static methods are declared using the `static` modifier. The method's instance or non-static nature does not change based on the variables it accesses or returns.

- **C)** Every time a new instance of `Counter` is created, the `COUNT` variable is incremented.
  - This option is correct. The constructor increments the `COUNT` variable by 1 each time a new instance of `Counter` is created, demonstrating the shared nature of static variables across all instances.

- **D)** The `resetCount()` method resets the `COUNT` variable to 0 for all instances of `Counter`.
  - This option is correct. The `resetCount()` static method sets the `COUNT` variable to zero. Since `COUNT` is static, this change affects all instances of the class, as there is only one `COUNT` variable shared among them.



**8. The correct answers are A, C, and D.**

**Explanation:**

- **A)** `int _age;` is correct. Identifiers in Java can begin with a letter, an underscore (_), or a dollar sign ($). Therefore, `_age` is a valid identifier.

- **B)** `double 2ndValue;` is incorrect. Identifiers cannot start with a digit. The correct format would be to start with a letter or a non-digit character such as an underscore or a dollar sign.

- **C)** `boolean is_valid;` is correct. Similar to `_age`, `is_valid` is a valid identifier because it starts with a letter and can contain underscores.

- **D)** `String $name;` is correct. Identifiers can also start with a dollar sign ($), making `$name` a valid identifier.

- **E)** `char #char;` is incorrect. The hash (#) character is not allowed as a starting character in identifiers. Identifiers can only start with letters, `$`, or `_`.



**9. The correct answer is B.** 

**Explanation:**

- **A)** `int public static final computeSum(int num1, int num2)` is incorrect because the return type in method declarations goes right before the name of the method, not at the beginning.

- **B)** `private void updateRecord(int id) throws IOException` is correct. This method declaration is syntactically correct in Java. It uses the `private` access modifier, specifies a return type (`void`), includes an exception (`IOException`) that this method might throw, and correctly defines the parameter list.

- **C)** `synchronized boolean checkStatus [int status]` Correct syntax requires parentheses for the parameter list, even when there are no parameters, making the correct declaration `synchronized boolean checkStatus(int status)`.

- **D)** `float calculateArea() {}` is incorrect because a method that returns `float` cannot have an empty method body.



**10. The correct answers are A and B.**

**Explanation:**

In Java, a method signature consists of the method name and the parameter list. The return type, access modifier, and exception list are not considered part of the method signature.

- **A)** (`public void update(int id, String value)`) 
- **B)** (`private void update(int identifier, String data)`) 
  - The above options have the same method signature (`update(int, String)`) because they both have the same method name and parameter list (an `int` and a `String`, in that order). The difference in parameter names (`id` vs. `identifier` and `value` vs. `data`) does not affect the method signature.

- **C)** `public boolean update(String value, int id)` 
  - This option does not have the same signature as A or B because the parameter list is different.

- **D)** `void update(String value, int id)`
  - This option has a different method signature (`update(String, int)`) because the order of the parameters is reversed compared to A and B.

- **E)** `protected void update(int id, int value) throws IOException`
  - This option also has a different parameter list (`update(int, int)`).



**11. The correct answers are C and D.** 

**Explanation:**

- **A)** The `resetAccountPassword` method can be accessed from any class within the same package but not from a class in a different package.
  - This option is incorrect. The `resetAccountPassword` method has `private` access, which means it is accessible only within the `AccountManager` class itself, not from any class, even within the same package. The initial statement was slightly incorrect in suggesting package-level access for a `private` method.

- **B)** The `auditTrail` method can be accessed from any class within the same package and from subclasses in different packages.
  - This option is incorrect because the `auditTrail` method has package-private access (no access modifier), which means it is accessible from any class within the same package but not from subclasses in different packages unless they are also within the same package.

- **C)** The `notifyAccountChanges` method can be accessed from any class within the same package and from subclasses in different packages.
  - This option is correct. The `notifyAccountChanges` method has `protected` access, meaning it can be accessed within the same package and by subclasses, even if the subclasses are in different packages.

- **D)** The `updateAccountInformation` method can be accessed from any class, regardless of its package.
  - This option is correct. The `updateAccountInformation` method is `public`, so it can be accessed from any class, regardless of the package it belongs to.



**12. The correct answer is B.**

**Explanation:**

Java is strictly pass-by-value. This means that when passing a variable to a method, Java passes a copy of the variable's value, not the variable itself. Changes to the parameter inside the method do not affect the original variable.

- **A)** 
```
Before calling changeValue: 10  
After calling changeValue: 20  
 ```
  - This option is incorrect because, although the `changeValue` method changes the `value` parameter to 20, this change does not affect the original variable `originalValue` outside the method. The change to `value` is made on its copy, not on `originalValue` itself.

- **B)** 
```
Before calling changeValue: 10  
After calling changeValue: 10  
```
  - This is the correct answer. `originalValue` is passed by value to the `changeValue` method. Thus, modifications to `value` inside `changeValue` do not affect `originalValue`. The output confirms that `originalValue` remains unchanged after the method call.

- **C)**
```
Before calling changeValue: 20  
After calling changeValue: 20  
```
- **D)** 
```
Before calling changeValue: 20  
After calling changeValue: 10  
```
  - These options are incorrect as they suggest changes to the method parameters can affect the original variables, which is not how Java's pass-by-value semantics work.



**13. The correct answer is B.**

**Explanation:**

- **A)** `Object`
  - This option is incorrect because Java uses the most specific method that is applicable to the parameters. In this case, `String` is more specific than `Object`, so the `print(String s)` method is called.

- **B)** `String`
  - This option is correct. Even though `null` can be assigned to any reference type, Java prefers the most specific method applicable to the method parameters. Since `String` is a more specific type than `Object`, the `print(String s)` method is chosen over the `print(Object o)` method.

- **C)** Compilation fails
  - Compilation does not fail because both `print` methods are correctly defined and can potentially match the call `print(null)`. Java's method overloading mechanism allows this to compile without any issues.

- **D)** A runtime exception is thrown
  - No runtime exception is thrown because the method call to `print` successfully resolves to the `print(String s)` method at compile time. Since the method is correctly invoked, and there is no other code that could cause a runtime exception, this program runs successfully.



**14. The correct answers are B and D.**

**Explanation:**

- **A)** `public void print(String... messages, int count)`
  - This option is incorrect because varargs (variable arguments) must be the last parameter in a method's parameter list. Having `int count` after `String... messages` violates this rule.

- **B)** `public void print(int count, String... messages)`
  - This option is correct. It correctly places the varargs parameter `String... messages` at the end of the method's parameter list, which is the required syntax for using varargs.

- **C)** `public void print(String messages...)`
  - This option is incorrect because the syntax `String messages...` is invalid. The correct syntax for varargs is to place the ellipsis (`...`) after the type and before the variable name, like `String... messages`.

- **D)** `public void print(String[]... messages)`
  - This option is correct. It demonstrates the use of varargs with an array type, which is allowed. Here, each argument passed to `messages` can itself be an array of `String`, and `messages` will be treated as an array of arrays (`String[][]`).

- **E)** `public void print(String... messages, String lastMessage)`
  - This option is incorrect, similar to option A, because varargs must be the last parameter in the method's parameter list. Having another parameter after the varargs parameter is not allowed.



**15. The correct answer is A.** 

**Explanation:**

- **A)** The class `Vehicle` demonstrates constructor overloading by having multiple constructors with different parameter lists.
  - This option is correct. Constructor overloading in Java is a technique of having more than one constructor with different parameter lists in the same class. It allows objects of the class to be initialized in different ways. The `Vehicle` class has two constructors, one that takes a `String` (for the vehicle type) and another that takes an `int` (for the max speed), which is a perfect example of constructor overloading.

- **B)** The class `Vehicle` will compile with an error because it does not provide a default constructor.
  - This option is incorrect. Java does not require an explicit default constructor if the class provides any other constructors. The absence of a default constructor (one that takes no arguments) is not a compilation error; it simply means that the programmer cannot instantiate the class using a no-argument constructor unless it's explicitly defined.

- **C)** It is possible to create an instance of `Vehicle` with both `type` and `maxSpeed` initialized.
  - This option is incorrect because with the current constructors, it's not possible to create a `Vehicle` instance with both `type` and `maxSpeed` initialized through a single constructor call.

- **D)** Calling either constructor will initialize both `type` and `maxSpeed` fields of the `Vehicle` class.
  - This option is incorrect. Calling either constructor only initializes the parameter that is provided to it. The first constructor initializes the `type`, and the second initializes the `maxSpeed`. Without additional code, such as a constructor that accepts both parameters or setter methods, there's no way for either constructor alone to initialize both fields.



**16. The correct answer are A and D.** 

**Explanation:**

- **A)** The instance initializer block is executed before the constructor, initializing the `books` list and adding two books to it.
  - This option is correct. The instance initializer block is executed each time an instance of the class is created, before the constructor code runs. It initializes the `books` list and adds two books to it.

- **B)** The instance initializer block replaces the need for a constructor in the `Library` class.
  - This option is incorrect. The instance initializer block does not replace the need for a constructor. It is used in addition to constructors, often to initialize common parts of various constructors in a class.

- **C)** Instance initializer blocks cannot initialize instance variables like `books`. 
  - This option is incorrect. Instance initializer blocks can indeed initialize instance variables. In this case, the `books` list is an instance variable that is being initialized and populated within the instance initializer block.

- **D)** If multiple instances of `Library` are created, the instance initializer block will execute each time before the constructor, ensuring the `books` list is initialized and populated for each object.
  - This option is correct. For each new instance of the `Library` class, the instance initializer block runs before the constructor is invoked. This ensures that the `books` list is initialized and populated with `"Book 1"` and `"Book 2"` for every `Library` object created.



**17. The correct answer is A.** 

**Explanation:**

- **A)** The `static` initializer block is executed only once when the class is first loaded into memory, initializing the `settings` map with default values.
  - This option is correct. Static initializer blocks are executed a single time, when the class is first loaded into the JVM memory. In this case, it initializes the `settings` map with default configuration values.

- **B)** The `static` initializer block allows instance methods to modify the `settings` map without creating an instance of the `Configuration` class.
  - This option is misleading. While static methods like `getSetting` can access and modify static fields like `settings` without needing an instance of the class, this capability is not due to the static initializer block itself but rather the nature of static fields and methods.

- **C)** `static` initializer blocks are executed each time a new instance of the `Configuration` class is created.
  - This option is incorrect. Static initializer blocks are not executed each time a new instance of the class is created. They are executed only once: when the class is first loaded.

- **D)** The `static` initializer block is executed before any instance initializer blocks or constructors, when an instance of the class is created.
  - This statement is partially correct in that static initializer blocks are executed before any instance initializer blocks or constructors, but it's misleading as it implies a sequence with instance creation. The key point is that static initializer blocks run once upon class loading, irrespective of the creation of any instances.



**18. The correct answer is B.** 

**Explanation:**

In Java, the order of initialization when a class is loaded and an instance of that class is created is as follows:

1. **Static fields and static initializers** are processed in the order they appear in the class definition. First, the static initializer block prints `"1. Static initializer"`. Then, the static field `staticValue` is initialized by calling `initializeStaticValue()`, which prints `"2. Static value initializer".`

2. **Instance fields and instance initializers** are processed in the order they appear when an instance of the class is created. First, the instance field `instanceValue` is initialized by calling `initializeInstanceValue()`, which prints `"3. Instance value initializer"`. Then, the instance initializer block prints `"3. Instance initializer"`.

3. **Constructors** are executed after all fields and instance initializers have been processed. The constructor in this case prints `"4. Constructor"`.

The numbering of the output for `"3. Instance initializer"` and `"3. Instance value initializer"` in the question might seem to suggest they are executed simultaneously or out of order, but it's important to remember that instance fields and instance initializers execute in the order they appear in the class, before the constructor is executed. The duplicate numbering means that instance field initializers run first, followed by instance initializers, and finally, the constructor runs.

- **A)**
```
1. Static initializer
2. Static value initializer
3. Instance initializer
3. Instance value initializer
4. Constructor 
```
  - This option is incorrect.

- **B)** 
```
1. Static initializer
2. Static value initializer
3. Instance value initializer
3. Instance initializer
4. Constructor
```
  - This option is correct.

- **C)** 
```
1. Static initializer
3. Instance initializer
2. Static value initializer
3. Instance value initializer
4. Constructor
``` 
  - This option is incorrect. 

- **D)** 
```
2. Static value initializer
1. Static initializer
3. Instance value initializer
3. Instance initializer
4. Constructor 
```
  - This option is incorrect.



**19. The correct answers are A and C.** 

**Explanation:**

- **A)** Invoking `toString()` on an instance of `CustomObject` will return a `String` that includes the class name followed by the `@` symbol and the object's hashcode.
  - This option is correct. The `toString()` method in `java.lang.Object` returns a string that includes the class name, the `@` symbol, and the object's hashcode in hexadecimal. If `CustomObject` does not override `toString()`, this default format is used.

- **B)** Calling `equals(Object obj)` on two different instances of `CustomObject` that have identical content will return `true` because they are instances of the same class. 
  - This option is incorrect. The default implementation of `equals(Object obj)` in `java.lang.Object` checks for reference equality, meaning it returns `true` only if both references point to the exact same object. Without overriding `equals`, two different instances of `CustomObject`, even with identical content, would not be considered equal.

- **C)** Using `hashCode()` on any instance of `CustomObject` will generate a unique integer that remains consistent across multiple invocations within the same execution of a program.  
  - This option is correct. The `hashCode()` method is designed to return an integer representation of the object's memory address or a value derived from it. While the exact implementation is not specified and can vary, it is consistent during the execution of a program for any given object.

- **D)** The `clone()` method can be used to create a shallow copy of an instance of `CustomObject` without the need for `CustomObject` to implement the `Cloneable` interface. 
  - This option is incorrect. The `clone()` method in `java.lang.Object` is protected, and it throws a `CloneNotSupportedException` unless the class implements the `Cloneable` interface. Without `CustomObject` explicitly implementing `Cloneable` and overriding `clone()` to make it `public`, it cannot be used to clone instances of `CustomObject`.



**20. The correct answer is B.**

**Explanation:**

- **A)** A static nested class can access both static and non-static members of its enclosing class directly. 
  - This option is incorrect because a static nested class cannot directly access non-static members of its enclosing class. It can only access static members directly.

- **B)** Instances of a static nested class can exist without an instance of its enclosing class.
  - This is the correct answer. A static nested class is associated with its outer class, and unlike inner classes, it does not need an instance of the outer class to be instantiated. This makes it useful for grouping classes that will be used in a static context.

- **C)** A static nested class can only be instantiated within the static method of its enclosing class.
  - This option is incorrect. A static nested class can be instantiated from any context (static or non-static) as long as it is accessible (i.e., visibility allows it).

- **D)** Static nested classes are not considered members of their enclosing class and cannot access any members of the enclosing class.
  - This option is incorrect. Static nested classes are indeed considered members of their enclosing class and can access its static members and static methods. However, they do not have access to non-static members of the enclosing class unless they instantiate the enclosing class.



**21. The correct answer is A.** 

**Explanation:**

- **A)** A non-static nested class can directly access both static and non-static members of its enclosing clas
  - This option is correct. A non-static nested class, or inner class, has access to all members (including both static and non-static) of its enclosing class, as demonstrated in the code snippet where `InnerClass` accesses the non-static `message` field of `OuterClass`.

- **B)** Instances of a non-static nested class can exist independently of an instance of its enclosing class. 
  - This option is incorrect. Instances of a non-static nested class (inner class) are implicitly associated with an instance of the enclosing class. Therefore, they cannot exist independently of an instance of the enclosing class. In the provided code snippet, the `InnerClass` instance is created through an instance of `OuterClass`.

- **C)** A non-static nested class cannot access the non-static members of its enclosing class directly.
  - This option is incorrect. As stated above, an inner class can directly access both static and non-static members of its enclosing class.

- **D)** Non-static nested classes must be declared static to access the static members of their enclosing class.
  - This option is incorrect. Non-static nested classes (inner classes) are designed to access members of their enclosing class directly without needing to be declared static. Declaring a nested class as static changes its type to a static nested class, which has different access properties from an inner class.



**22. The correct answers are A and D.** 

**Explanation:**

- **A)** Local classes can be declared within any block that precedes a statement.
  - This option is correct. Local classes in Java can indeed be declared within any block that precedes a statement, such as a method body, a `for` loop, or an `if` statement.

- **B)** Instances of a local class can be created and used outside of the block where the local class is defined.
  - This option is incorrect. Instances of local classes cannot be created and used outside the block where they are defined. Their scope is limited to the block in which they are declared.

- **C)** Local classes are a type of static nested class and can access both static and non-static members of the enclosing class directly.
  - This option is incorrect. Local classes are not static; they are associated with an instance of the enclosing class and have access to its instance members. They do not have the static context that static nested classes have, and thus they can access both static and non-static members of the enclosing class.

- **D)** Local classes can access local variables and parameters of the enclosing block only if they are declared `final` or effectively final.
  - This is correct. Local classes can access local variables and parameters of the method (or any enclosing block) in which they are defined, but those variables must be declared `final` or effectively final (which means their values do not change after they are initialized).



**23. The correct answer is A.** 

**Explanation:**

- **A)** Anonymous classes can implement interfaces and extend classes without the need to declare a named class.
  - This option is correct. Anonymous classes are a way to extend existing classes or implement interfaces on the spot without the need for a formal class declaration. This makes them useful for creating quick, one-off implementations.

- **B)** An anonymous class must override all methods in the superclass or interface it declares it is implementing or extending.
  - This option is incorrect. An anonymous class only needs to override abstract methods of the superclass or interface it extends or implements. If the superclass or interface has no abstract methods, then the anonymous class does not need to override any methods.

- **C)** Anonymous classes can have constructors as named classes do.
  - This option is incorrect. Anonymous classes do not have named constructors because they do not have names themselves. Instead, any initialization is done through an instance initializer block.

- **D)** Instances of anonymous classes cannot be passed as arguments to methods.
  - This option is incorrect. Instances of anonymous classes can indeed be passed as arguments to methods. They are useful for creating on-the-fly implementations for interfaces or subclasses that are required for a method call.



**24. The correct answer is C.** 

**Explanation:**

- **A)** A source file can contain multiple public classes.
  - This option is incorrect. A Java source file cannot contain more than one `public` class. If a class is declared `public`, it must be the only `public` class in the file, and the file name must match the class name.

- **B)** Private classes can be declared at the top level in a source file.
  - This option is incorrect. Java does not allow classes to be declared as `private` at the top level. Only `public`, or package-private (no access modifier) classes can be defined at the top level. Inner classes can be `private`.

- **C)** A `public` class must be declared in a source file that has the same name as the class.
  - This is correct. According to Java's rules, if a class is declared `public`, the source file in which it is defined must have the same name as the class, followed by the `.java` extension. This is a strict rule that helps the Java compiler easily locate source files.

- **D)** If a source file contains more than one class, none of the classes can be `public`.
  - This is incorrect. While it is true that if a source file contains a `public` class, the source file must be named after that `public` class, it is not true that none of the classes can be `public` if a source file contains more than one class. A source file can contain multiple classes, but only one of them can be `public`, and the source file must be named after that `public` class. The statement could imply that multiple non-public top-level classes are a common scenario without the context of the `public` class naming rule.
