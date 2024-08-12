---
layout: answer

title: "Chapter SEVEN"
subtitle: "Error Handling and Exceptions"
exam_objectives:
  - "Handle exceptions using try/catch/finally, try-with-resources, and multi-catch blocks, including custom exceptions."
---

## Answers
**1. The correct answer is B.**

**Explanation:**

- **A.** A checked exception is a type of exception that inherits from the `java.lang.RuntimeException` class.
  - This option is incorrect. A checked exception does not inherit from `java.lang.RuntimeException`. Checked exceptions are subclasses of `java.lang.Exception` but not of `java.lang.RuntimeException`.

- **B.** A checked exception must be either caught or declared in the method signature using the `throws` keyword.
  - This option is correct. Checked exceptions must be either caught using a `try-catch` block or declared in the method signature with the `throws` keyword. This is to ensure that the exception is properly handled at some point in the code.

- **C.** A checked exception is an error that is typically caused by the environment in which the application is running, and it cannot be handled by the application.
  - This option is incorrect. It describes errors more accurately than checked exceptions. Errors are typically caused by the environment and are not expected to be handled by the application.

- **D.** A checked exception can be thrown by the Java Virtual Machine when a severe error occurs, such as an out-of-memory error.
  - This option is incorrect. It describes errors rather than checked exceptions. Errors like out-of-memory errors are thrown by the JVM and are not meant to be caught or handled by applications in most cases.


**2. The correct answer is A.**

**Explanation:**

- **A.** This code defines a custom checked exception and correctly throws and handles it.
  - This option is correct. The code defines a custom checked exception by extending `Exception`. The `methodThatThrowsException` method throws this custom exception, which is then caught and handled in the `main` method.

- **B.** This code defines a custom unchecked exception. 
  - This option is incorrect. The code extends `Exception`, not `RuntimeException`, making it a checked exception rather than an unchecked one.

- **C.** This code will not compile because the custom exception is not declared correctly in the method signature.
  - This option is incorrect. The custom exception is correctly declared in the method signature of `methodThatThrowsException`, so it will compile without issues.

- **D.** This code will compile but will not throw the custom exception at runtime.
  - This option is incorrect. The code will throw the custom exception at runtime as expected, and it will be caught and handled in the `catch` block.


**3. The correct answer is B.**

**Explanation:**

- **A.** `1`
  - This option is incorrect. Although the `catch` block returns `1`, the `finally` block will override this return value with `2`.

- **B.** `2`
  - This option is correct. The `finally` block always executes and its return value overrides the return value from the `catch` block, resulting in `2` being printed.

- **C.** Compilation fails
  - This option is incorrect. The code compiles without any errors.

- **D.** An exception occurs at runtime
  - This option is incorrect. While a `RuntimeException` is thrown in the `try` block, it is caught by the `catch` block, and no exception propagates to cause a runtime error.


**4. The correct answer is D.**

**Explanation:**

- **A.** The code doesn't compile correctly.
  - This option is incorrect. The code does compile correctly. A `try` block can be followed by a `finally` block without a `catch` block.

- **B.** The code would compile correctly if we add a `catch` block.
  - This option is incorrect. While adding a `catch` block is valid, it is not necessary for the code to compile. The `try` block can be used with only a `finally` block.

- **C.** The code would compile correctly if we remove the `finally` block.
  - This option is incorrect. Removing the `finally` block is not necessary for the code to compile. The code is valid with the `finally` block present.

- **D.** The code compiles correctly as it is.
  - This option is correct. The code compiles correctly as it is. A `try` block must be followed by either a `catch` block, a `finally` block, or both. 


**5. The correct answers are C and D.**

**Explanation:**

- **A.** In a `try-with-resources`, the `catch` block is required.
  - This option is incorrect. In a `try-with-resources` statement, the catch block is optional. The primary purpose of `try-with-resources` is to ensure that each resource is closed at the end of the statement, whether an exception is thrown or not.

- **B.** The `throw` keyword is used to throw an exception. 
  - This option is incorrect. The `throws` keyword is used in method declarations to specify that the method can throw an exception, not to throw an exception. The `throw` keyword is used to actually throw an exception.

- **C.** In a `try-with-resources` block, if you declare more than one resource, they have to be separated by a semicolon.
  - This option is correct. In a `try-with-resources` block, if you declare more than one resource, they must be separated by a semicolon.

- **D.** If a `catch` block is defined for an exception that couldn't be thrown by the code in the `try` block, a compile-time error is generated.
  - This option is correct. If a `catch` block is defined for an exception that cannot be thrown by the code in the `try` block, the compiler will generate an error because the `catch` block is unreachable.


**6. The correct answer is E.**

**Explanation:**

- **A.** `Close Exception`
  - This option is incorrect. While the `IOException` from `close()` will occur, it will be suppressed by the `RuntimeException`.

- **B.** `RuntimeException`
  - This option is incorrect. The primary exception is `RuntimeException`, but it will not print its message directly because the catch block does not handle it.

- **C.** `RuntimeException` and then `CloseException` 
  - This option is incorrect. Although both exceptions occur, the `RuntimeException` is primary, and the `IOException` is suppressed. Both messages are not printed in sequence.

- **D.** Compilation fails
  - This option is incorrect. The code compiles without any errors.

- **E.** The stack trace of an uncaught exception is printed.
  - This option is correct. The `RuntimeException` thrown in the try block is not caught by the `catch (IOException e)` block. Hence, the stack trace of the `RuntimeException` is printed.


**7. The correct answers are B and C.**

**Explanation:**

- **A.** `java.io.FileNotFoundException` is incorrect. It is a subclass of `java.io.IOException`, which in turn is a subclass of `java.lang.Exception`, making it a checked exception.

- **B.** `java.lang.ArithmeticException` is correct. It is a direct subclass of `java.lang.RuntimeException` and represents arithmetic errors such as division by zero.

- **C.** `java.lang.ClassCastException` is correct. It is a direct subclass of `java.lang.RuntimeException` and indicates an invalid cast operation.

- **D.** `java.lang.InterruptedException` is incorrect. It is a direct subclass of `java.lang.Exception`, making it a checked exception. It indicates that a thread has been interrupted.


**8. The correct answer is D.**

**Explanation:**

- **A.** Only `"Try Block Exception"` is printed.
  - This option is incorrect. The `Try Block Exception` is the main exception and is not directly printed because the `catch` block checks for suppressed exceptions first.

- **B.** Only `"Close Exception"` is printed.
  - This option is incorrect. The `Close Exception` is not directly printed; it is suppressed and accessed via the `getSuppressed` method.

- **C.** Both `"Try Block Exception"` and `"Close Exception"` are printed.
  - This option is incorrect. The code only prints suppressed exceptions, not the main exception message directly.

- **D.** `"Suppressed: Close Exception"` is printed.
  - This option is correct. The `RuntimeException` thrown in the `try` block is the main exception, and the `RuntimeException` from the `close` method is suppressed. The `catch` block prints the suppressed exception message, `"Suppressed: Close Exception"`.