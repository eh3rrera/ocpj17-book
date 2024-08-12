---
layout: answer

title: "Chapter EIGHT"
subtitle: "Functional Interfaces and Lambda Expressions"
exam_objectives:
  - "Use Java object and primitive Streams, including lambda expressions implementing functional interfaces, to supply, filter, map, consume, and sort data."
---

## Answers
**1. The correct answers are B and D.**

**Explanation:**

- **A)** A functional interface can have multiple `abstract` methods.
  - This option is incorrect. A functional interface can have only one abstract method. Having multiple abstract methods would disqualify it from being a functional interface.

- **B)** A functional interface can have default and `static` methods.
  - This option is correct. A functional interface is allowed to have default and static methods, which are not counted as abstract methods.

- **C)** The `@FunctionalInterface` annotation is mandatory to declare a functional interface. 
  - This option is incorrect. The `@FunctionalInterface` annotation is not mandatory; it is only a marker to indicate that the interface is intended to be a functional interface. An interface can be a functional interface without this annotation as long as it has exactly one abstract method.

- **D)** Lambda expressions can be used to instantiate functional interfaces.
  - This option is correct. Lambda expressions are used to provide implementations for the single abstract method of a functional interface, making them a key feature for functional programming in Java.


**2. The correct answer is A.**

**Explanation:**

- **A)** `(s1, s2) -> s1.compareTo(s2)`
  - This option is correct. This lambda expression correctly implements the `Comparator<String>` interface. It uses the correct syntax for a lambda expression, with parameters enclosed in parentheses and a single expression for the body.

- **B)** `(String s1, s2) -> s1.compareTo(s2)`
  - This option is incorrect. The syntax is invalid because if you specify the type of one parameter, you must specify the type for all parameters. It should be `(String s1, String s2)`.

- **C)** `s1, s2 -> s1.compareTo(s2)`
  - This option is incorrect. Parameters must be enclosed in parentheses. The correct syntax is `(s1, s2)`.

- **D)** `(s1, s2) -> return s1.compareTo(s2);`
  - This option is incorrect. When using a return statement, you must also include curly braces.

- **E)** `(s1, s2) -> { s1.compareTo(s2); }`
  - This option is incorrect. When using curly braces, you must include a return statement for expressions that return a value. The correct syntax would be `(s1, s2) -> { return s1.compareTo(s2); }`.


**3. The correct answer is B.**

**Explanation:**

- **A)** `java.util.function.Function`
  - This option is incorrect. `Function` represents a function that takes one argument and produces a result.

- **B)** `java.util.function.BiFunction`
  - This option is correct. `BiFunction` represents a function that takes two arguments and produces a result.

- **C)** `java.util.function.Supplier`
  - This option is incorrect. `Supplier` represents a function that takes no arguments and produces a result.

- **D)** `java.util.function.Consumer`
  - This option is incorrect. `Consumer` represents a function that takes one argument and does not produce a result.

- **E)** `java.util.function.Predicate`
  - This option is incorrect. `Predicate` represents a function that takes one argument and returns a `boolean` value.


**4. The correct answer is A.**

**Explanation:**

- **A)** `13`
  - This option is correct. The `combinedFunction` first multiplies 5 by 2 to get 10, then adds 3, resulting in 13.

- **B)** `16`
  - This option is incorrect. It incorrectly assumes that 5 is added after doubling and doubling again.

- **C)** `10`
  - This option is incorrect. It represents only the result of the first function without applying the second function.

- **D)** `11`
  - This option is incorrect. It seems to mistakenly represent 5 plus the first function (double).

- **E)** `8`
  - This option is incorrect. It seems to incorrectly represent the input value doubled without adding 3.



**5. The correct answer is C.**

**Explanation:**

- **A)** `String::valueOf` 
  - This option is incorrect. `String::valueOf` converts an integer to a string, not a string to an integer.

- **B)** `Integer::valueOf`
  - This option is incorrect. `Integer::valueOf` returns an `Integer` object, while the lambda returns an `int`.

- **C)** `Integer::parseInt`
  - This option is correct. `Integer::parseInt` is a method reference that matches the lambda expression `str -> Integer.parseInt(str)` which converts a string to an integer.

- **D)** `String::parseInt`
  - This option is incorrect. `String` class does not have a `parseInt` method.

- **E)** `Integer::toString`
  - This option is incorrect. `Integer::toString` converts an integer to a string, not a string to an integer.

