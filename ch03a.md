---
layout: answer

title: "Chapter THREE"
subtitle: "Working with Records and Enums"
exam_objectives:
  - "Create classes and records, and define and use instance and static fields and methods, constructors, and instance and static initializers."
  - "Create and use enumerations with fields, methods and constructors."
---

## Answers

**1. The correct answer is C.**

**Explanation:**

- **A)** The `Employee` record explicitly defines a public constructor that initializes its fields. 
  - This option is incorrect because the record `Employee` does not explicitly define a `public` constructor. Records automatically generate a `public` constructor with the same parameters as the record's declaration.

- **B)** The fields `name` and `age` can be reassigned to new values after an `Employee` object is created.
  - This option is incorrect as the fields within a record are `final`, which means they cannot be reassigned to new values after an `Employee` object has been created. This immutability is one of the key characteristics of records.

- **C)** The `Employee` record implicitly creates a `public` constructor and `private` `final` fields for `name` and `age`.
  - This is the correct option. Records implicitly create a public constructor for the record's fields and also make these fields `private` and `final`. This means you don't have to manually write boilerplate code for constructor, getters, or to ensure immutability.

- **D)** It is mandatory to define getters for the fields `name` and `age` in the `Employee` record.
  - This option is incorrect because records automatically generate public methods to access the fields, known as accessor methods, which essentially act as getters. Therefore, it is not mandatory (or even possible) to define separate getters for the fields.



**2. The correct answer is B.**

**Explanation:**

- **A)** The `balance` field can be modified using a public setter method within the `Account` record.
  - This option is incorrect because records in Java do not support public setter methods for their fields. The fields of a record are `final` and cannot be modified after the object's construction, which is a key aspect of their design to enforce immutability.

- **B)** Once an `Account` object is created, its `id` and `balance` cannot be changed.
  - This is the correct option. Records are immutable by design, meaning that once a record object is created, the values of its fields (`id` and `balance` in this case) cannot be changed. This immutability is ensured by making the fields `private` and `final`, and by not providing setter methods.

- **C)** Immutability of records can be bypassed by you define custom setter methods for the `id` and `balance` fields. 
  - This option is incorrect. Custom setter methods cannot be defined for the record fields because records do not allow defining mutators for their components.

- **D)** Records allow field values to be modified if accessed directly, without using setter methods.
  - This option is incorrect because the fields in a record are implicitly `final` and private, which means they cannot be modified directly or through setter methods. The design of records enforces this immutability to ensure that instances of records act as true carriers of immutable data.


**3. The correct answer is D.** 

**Explanation:**

- **A)** `Product p = new Product();`
  - This option is incorrect because the default constructor without parameters does not exist for records in Java. Records require all their fields to be specified at the time of instantiation.

- **B)** `Product p = Product(101, "Coffee", 15.99);`
  - This option is incorrect because the syntax used here is not valid for creating a new instance of a record in Java. The correct syntax for instantiating a record involves using the `new` keyword followed by the record name and the parameters in parentheses.

- **C)** `Product p = {101, "Coffee", 15.99};`
  - This option is incorrect as it mistakenly uses the syntax for array initialization. In Java, objects, including records, cannot be instantiated using curly braces without the `new` keyword and proper constructor.

- **D)** `Product p = new Product(101, "Coffee", 15.99);`
  - This is the correct option. Records in Java are instantiated using the `new` keyword followed by the record's constructor, which requires passing all the fields defined in the record. This syntax correctly creates a new `Product` record with the given `id`, `name`, and `price`.


**4. The correct answer is B.**

**Explanation:**

- **A)** Records cannot implement interfaces because they are `final` and immutable by design, which prevents any form of behavior customization.
  - This option is incorrect. Records in Java can implement interfaces. The finality and immutability of records do not preclude them from implementing interfaces, which can be used to add behaviors or contractual obligations to a record.

- **B)** This record correctly implements the `Comparable` interface, allowing `Item` objects to be sorted based on their `price`.
  - This is the correct option. The provided record definition correctly implements the `Comparable<Item>` interface by overriding the `compareTo` method. This customization allows instances of the `Item` record to be sorted based on the `price` field, demonstrating that records can indeed implement interfaces and override their methods as needed.

- **C)** Implementing interfaces in records is restricted only to functional interfaces due to their immutable nature.
  - This option is incorrect. There is no such restriction that limits records to implementing only functional interfaces. Records can implement any interface, including those with multiple abstract methods, as long as the record provides implementations for the abstract methods defined in the interface.

- **D)** The `compareTo` method cannot be overridden in records because method overriding is not supported in record types.
  - This option is incorrect. Records can override methods from the interfaces they implement, including the `compareTo` method from the `Comparable` interface in this example. Method overriding is a key aspect of implementing interfaces and is fully supported by record types in Java.


**5. The correct answers are A and D.**

**Explanation:**

- **A)** 
```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```
  - This option is correct. It demonstrates a valid declaration of an enum in Java. Enums are used to define a set of named constants, and this syntax is the standard way to declare them. The `public` access modifier makes this enum accessible from any other class.

- **B)** 
```java
enum Month {
    private JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER;
}
```
  - This option is incorrect. Enums cannot have `private` access modifiers for their constants. Enum constants are implicitly `public`, `static`, and `final` and should be declared without access modifiers.

- **C)** 
```java
protected enum Season {
    WINTER, SPRING, SUMMER, FALL
}
```
  - This option is incorrect because enums cannot be declared with `protected` or `private` access levels. Enums are implicitly `public` if they are defined outside of a class. If defined within a class, they can have any access level, but the `protected` keyword cannot be used at the enum level itself.

- **D)** 
```java
enum Status {
    ACTIVE, INACTIVE, DELETED;

    public void printStatus() {
        System.out.println("Current status: " + this);
    }
}
```
  - This option is correct. It shows an enum `Status` with a method `printStatus()`. Enums in Java can contain methods, fields, constructors, and implement interfaces. This demonstrates the ability of enums to have methods, making this declaration valid.


**6. The correct answer is A.**

**Explanation:**

- **A)** `1`
   - This option is correct. The `ordinal()` method returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero). Since `GREEN` is the second enum constant declared in the `Color` enum, its ordinal value is 1.

- **B)** `2`
  - This option is incorrect. The ordinal value of `BLUE` would be 2, not `GREEN`, because `BLUE` is the third declared constant in the `Color` enum.

- **C)** `0`
  - This option is incorrect. The ordinal value of `RED` is 0, as it is the first declared constant in the `Color` enum.

- **D)** `Color.GREEN`
  - This option is incorrect. The `ordinal()` method returns an integer representing the position of the enum constant in the declaration, not the enum constant itself.


**7. The correct answer is D.**

**Explanation:**

- **A)** 
```java
public enum Size {
    SMALL, MEDIUM, LARGE;
    public static void printSize() {
        System.out.println("The size is " + this.name());
    }
}
```
  - This option is incorrect because the method `printSize()` is defined as `static`, which means it cannot access the `this` reference. Static methods in enums can't directly access the enum constants without specifying the constant explicitly or being passed a reference.

- **B)** 
```java
enum Flavor {
    CHOCOLATE, VANILLA, STRAWBERRY;
    void printFlavor() {
        System.out.println("Flavor: " + Flavor.name);
    }
}
```
  - This option is incorrect because the `name` property of an enum constant is `private`. You can only access it using the `this` reference and the `name()` method (`this.name()`).

- **C)** 
```java
protected enum Direction {
    NORTH, SOUTH, EAST, WEST;
    private printDirection() {
        System.out.println("Going " + this.toString());
    }
}
```
  - This option is incorrect for a couple of reasons. First, `protected` is not a valid access modifier for enums at the top level. Enums can be `public` or package-private (no modifier). Second, the `printDirection()` method is missing a visibility modifier, and it appears to be intended as a private method (which would also be incorrect as it wouldn't be callable from outside the enum itself), but the syntax is incorrect as it lacks the `void` return type.

- **D)** 
```java
public enum Season {
    WINTER, SPRING, SUMMER, FALL;
    public void printSeason() {
        System.out.println("The season is " + this.name());
    }
}
```
  - This is the correct option. The `printSeason()` method is properly defined: it's `public`, non-static, and utilizes the `this` reference to access the name of the current enum constant. This method correctly provides custom behavior for each enum constant, allowing it to print a message indicating the current season.
