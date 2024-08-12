---
layout: answer

title: "Chapter FOUR"
subtitle: "Working with Data"
exam_objectives:
  - "Use primitives and wrapper classes including Math API, parentheses, type promotion, and casting to evaluate arithmetic and boolean expressions."
  - "Manipulate text, including text blocks, using String and StringBuilder classes."
---

## Answers
**1. The correct answer is C.**

**Explanation:**

- **A)** A `double` can be directly assigned to a `float` without casting. 
  - This option is incorrect. A `double` cannot be directly assigned to a `float` without casting because `double` has a larger range and precision than a `float`.

- **B)** A `boolean` can be cast to an `int`.
  - This option is incorrect. `boolean` values cannot be cast to `int` in Java. They are not compatible types.

- **C)** A `String` can be assigned to an `Object` reference variable.
  - This option is correct. A `String` is an instance of the `Object` class, and hence it can be assigned to an `Object` reference variable.

- **D)** A `char` is a reference data type. 
  - This option is incorrect. `char` is a primitive data type, not a reference data type.

- **E)** An `int` can store a `long` value without any explicit casting.
  - This option is incorrect. an `int` cannot store a `long` value without explicit casting because `long` has a larger range than `int`.


**2. The correct answer is A.**

**Explanation:**

Let's break down the expression `a + b * c / a - b` step-by-step according to the order of operations:

1. **Multiplication and Division** are performed first from left to right:
   - `b * c` = `10 * 15` = `150`
   - `150 / a` = `150 / 5` = `30`

2. **Addition and Subtraction** are performed next from left to right:
   - `a + 30` = `5 + 30` = `35`
   - `35 - b` = `35 - 10` = `25`

So, the value of `result` is `25`, and the program prints `25`.

- **A)** `25`
  - This option is correct.

- **B)** `35`
  - This option is incorrect.

- **C)** `20` 
  - This option is incorrect.

- **D)** `15` 
  - This option is incorrect.


**3. The correct answer is D.**

**Explanation:**

- **A)** `StringBuilder` objects are immutable.
  - This option is incorrect. `StringBuilder` objects are mutable, meaning they can be changed after they are created.

- **B)** `String` objects can be modified after they are created. 
  - This option is incorrect. `String` objects are immutable, meaning once a `String` object is created, it cannot be modified. Any modification results in a new `String` object.

- **C)** `StringBuilder` is synchronized and thread-safe.
  - This option is incorrect. `StringBuilder` is not synchronized and is not thread-safe. If synchronization is required, `StringBuffer` should be used instead.

- **D)** `StringBuilder` provides methods for mutable sequence of characters.
  - This option is correct. `StringBuilder` provides methods for a mutable sequence of characters, allowing for modification of the object without creating new instances.

- **E)** `String` and `StringBuilder` have the same performance characteristics for string manipulation.
  - This option is incorrect. `String` and `StringBuilder` do not have the same performance characteristics for string manipulation. `StringBuilder` is generally more efficient for such operations because it is mutable and does not create new instances with each modification.


**4. The correct answers are A and B.**

**Explanation:**

- **A)** Text blocks can span multiple lines without needing escape sequences for new lines.
  - This option is correct. Text blocks can indeed span multiple lines without needing escape sequences for new lines, making it easier to work with multi-line strings.


- **B)** Text blocks preserve the exact format, including whitespace, of the code as written.
  - This option is correct. Text blocks preserve the exact format, including whitespace, of the code as written. This is useful for maintaining the original layout of the text.


- **C)** Text blocks can only be used within methods.
  - This option is incorrect. Text blocks can be used anywhere a regular `String` can be used, not just within methods. They can be part of class fields, method parameters, etc.


- **D)** Text blocks automatically trim leading and trailing whitespace from each line. 
  - This option is incorrect. Text blocks do not automatically trim leading and trailing whitespace from each line. They preserve the exact whitespace as written in the code.

- **E)** Text blocks require a minimum indentation level of one space.
  - This option is incorrect. Text blocks do not require a minimum indentation level of one space. The leading indentation common to all lines is removed automatically, but lines within the text block can have zero or more leading spaces.


**5. The correct answer is D.**

**Explanation:**

- **A)** The `Math.round()` method returns a `double`.
  - This option is incorrect. The `Math.round()` method returns a `long` when given a `double` argument and an `int` when given a `float` argument.

- **B)** The `Math.random()` method returns a random integer.
  - This option is incorrect. The `Math.random()` method returns a `double` value between 0.0 (inclusive) and 1.0 (exclusive).

- **C)** The `Math.max()` method can only be used with integers.
  - This option is incorrect. The `Math.max()` method can be used with various numeric types, including `int`, `long`, `float`, and `double`.

- **D)** The `Math.pow()` method returns the result of raising the first argument to the power of the second argument.
  - This option is correct. The `Math.pow()` method returns the result of raising the first argument to the power of the second argument. Both arguments are of type `double`.

- **E)** The `Math.abs()` method can only be used with positive numbers.
  - This option is incorrect. The `Math.abs()` method can be used with negative numbers to return their absolute value, and it works with various numeric types including `int`, `long`, `float`, and `double`.