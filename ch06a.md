---
layout: answer

title: "Chapter SIX"
subtitle: "Arrays, Generics, and Collections"
exam_objectives:
  - "Create Java arrays, List, Set, Map, and Deque collections, and add, remove, update, retrieve and sort their elements."
  - "Use generics, including wildcards."
---

## Answers
**1. The correct answer is D.**

**Explanation:**

- **A)** 
```
0 0 0 
0 0 0 
```
  - This option is incorrect because the array elements are initialized and modified within the loops. The values are not all zeros.

- **B)** 
```
0 1 2 
0 1 2 
```
  - This option is incorrect because each row is initialized with incremental values based on the sum of indices, not identical for both rows.

- **C)** 
```
0 0 0 
1 1 1 
```
  - This option is incorrect because the values should be the sum of the row index and the column index, not all zeros or all ones for the second row.

- **D)** 
```
0 1 2 
1 2 3 
```
  - This is the correct answer. Each element of the array is set to the sum of its indices. So, `arr[0][0] = 0 + 0 = 0`, `arr[0][1] = 0 + 1 = 1`, `arr[0][2] = 0 + 2 = 2`, `arr[1][0] = 1 + 0 = 1`, `arr[1][1] = 1 + 1 = 2`, `arr[1][2] = 1 + 2 = 3`.


**2. The correct answer is B.**

**Explanation:**

- **A)** 
```java
public static T getFirstElement(T[] array) {
    return array[0];
}
```
  - This option is incorrect because the generic type `<T>` is missing before the return type `T`.

- **B)** 
```java
public static <T> T getFirstElement(T[] array) {
    return array[0];
}
```
  - This is the correct answer. The generic type `<T>` is correctly declared before the return type `T`.

- **C)** 
```java
public static <T> getFirstElement(T[] array) {
    return array[0];
}
```
  - This option is incorrect because the return type `T` is missing.

- **D)** 
```java
public static <T> T[] getFirstElement(T[] array) {
    return array[0];
}
```
  - This option is incorrect because the return type is `T[]`, which does not match the intended method return type.


**3. The correct answer is D.**

**Explanation:**

**A)** The code compiles and prints:
```
1 2 3
1.1 2.2 3.3
one two three
```
  - This option is incorrect. The code does not compile, so it cannot produce any output.

**B)** The code compiles and prints:
```
1 2 3
1.1 2.2 3.3
```
  - This option is incorrect. While this would be the output if the `printList(strings)` line were removed, the code as written does not compile.

**C)** The code does not compile due to an error in the `printList` method.
  - This option is incorrect. The `printList` method is correctly defined using an upper bound wildcard `<? extends Number>`.

**D)** The code does not compile due to an error in the `main` method.
  - This option is correct. The code fails to compile due to an error in the `main` method. `printList(strings)` causes a compilation error because `String` is not a subclass of `Number`.

**E)** The code compiles but throws a runtime exception when executed.
  - This option is incorrect. The code fails to compile so it cannot be executed.
  
  
**4. The correct answer is A.** 

**Explanation:**

- **A)** `[A, B, E, C, D]`
  - This option is correct. The `add` method with an index parameter inserts the specified element at the specified position in the list. All elements after the specified position are shifted to the right. Hence, `"E"` is inserted at index 2, pushing `"C"` and `"D"` to the right.

- **B)** `[A, E, B, C, D]`
  - This option is incorrect. This would be the result if `"E"` were added at index 1, not index 2.

- **C)** `[A, B, C, E, D]`
  - This option is incorrect. This would be the result if `"E"` were added at index 3, not index 2.

- **D)** `[A, B, C, D, E]`
  - This option is incorrect. This would be the result if `"E"` were added at the end of the list, not at index 2.

- **E)** `[A, C, B, E, D]`
  - This option is incorrect. This sequence does not follow the proper behavior of the `add` method with index 2. It seems like a random shuffle and doesn't correspond to how elements are shifted when a new element is added.
  
  
**5. The correct answers are C and D.**.

**Explanation:**

- **A)** A `Set` allows duplicate elements.
  - This option is incorrect. One of the primary characteristics of a `Set` is that it does not allow duplicate elements. Each element must be unique.

- **B)** Elements in a `Set` are maintained in the order they were inserted.
  - This option is incorrect. The ordering of elements depends on the specific implementation of the `Set` interface. For example, `HashSet` does not maintain any order, while `LinkedHashSet` maintains insertion order, and `TreeSet` maintains a sorted order.

- **C)** The `Set` interface includes methods for adding, removing, and checking the presence of elements.
  - This option is correct. The `Set` interface provides methods such as `add()`, `remove()`, and `contains()` to manage its elements.

- **D)** The `Set` interface is implemented by classes like `HashSet`, `LinkedHashSet`, and `TreeSet`.
  - This option is correct. `HashSet`, `LinkedHashSet`, and `TreeSet` are all concrete implementations of the `Set` interface, each with different characteristics regarding order and performance.

- **E)** A `Set` guarantees constant-time performance for the basic operations (add, remove, contains).
  - This option is incorrect. This statement is true for `HashSet` specifically, which provides average constant-time performance for these operations. However, it is not true for all `Set` implementations. For example, `TreeSet` provides logarithmic time performance for these operations because it is based on a Red-Black tree.


**6. The correct answer is C.**

**Explanation:**

- **A)** `[A, B, C, D]`
  - This option is incorrect.This option ignores the order in which elements are added to the deque. It simply lists elements in the order they appear to be added without considering the `addFirst` and `addLast` methods.

- **B)** `[C, B, A, D]`
  - This option is incorrect. This option incorrectly assumes `"A"` is added after `"B"`, howerver, `addFirst("A")` puts `"A"` at the second position.

- **C)** `[C, A, B, D]`
  - This option is correct. This is indeed the correct output. The method `addFirst("C")` puts "C" at the front, `addFirst("A")` puts `"A"` at the second position, `addLast("B")` adds `"B"` after `"A"`, and `addLast("D")` adds `"D"` at the end. Thus, the final order is `[C, A, B, D]`.

- **D)** `[D, B, A, C]`
  - This option is incorrect. This option shows the reverse order, which does not match how elements are actually added to the deque.

- **E)** `[A, C, B, D]`
  - This option is incorrect. This option incorrectly assumes `"A"` is added before `"C"` despite `addFirst("C")` being called after `addFirst("A")`.


**7. The correct answer is D.**

**Explanation:**

- **A)** `{1=A, 2=B, 3=C, 2=D}`
  - This option is incorrect. This option suggests that the map would keep duplicate keys, which is not true for a `Map`. A key can only have one value associated with it at a time.

- **B)** `{1=A, 2=B, 3=C}`
  - This option is incorrect. This option ignores the fact that the value associated with key `2` is updated from `"B"` to `"D"`.

- **C)** `{1=A, 2=D, 3=C, 2=D}`
  - This option is incorrect. This option again suggests that the map can have duplicate keys, which it cannot.

- **D)** `{1=A, 2=D, 3=C}`
  - This option is correct. The `put` method updates the value associated with a key if the key already exists in the map. Therefore, the value associated with key `2` is updated from `"B"` to `"D"`.

- **E)** `{1=A, 3=C, 2=B}`
  - This option is incorrect. This option ignores the update to the value associated with key `2` from `"B"` to `"D"`.


**8. The correct answer is C.** 

**Explanation:**

- **A)**
```
Alice 30  
Bob 25  
Charlie 35
```
  - This option is incorrect. This option lists the elements in their original order, not the sorted order based on age.

- **B)** 
```
Charlie 35  
Alice 30  
Bob 25
```
  - This option is incorrect. This option lists the elements in descending order of age, but the `compareTo` method sorts in ascending order of age.

- **C)** 
```
Bob 25  
Alice 30  
Charlie 35
```
  - This option is correct. The `compareTo` method sorts the `Person` objects in ascending order based on their age. Hence, the sorted order is `Bob (25)`, `Alice (30)`, and `Charlie (35)`.

- **D)** 
```
Bob 25  
Charlie 35  
Alice 30
```
  - This option is incorrect. This option does not correctly follow the ascending order of age.

- **E)** 
```
Alice 30  
Charlie 35  
Bob 25
```
  - This option is incorrect. This option does not correctly follow the ascending order of age.


**9 .The correct answer is A.**


**Explanation:**

- **A)** 
```
Bob 25  
Alice 30  
Charlie 35
```
  - This option is incorrect. The `AgeComparator` sorts the `Person` objects in ascending order based on their age. Hence, the sorted order is `Bob (25)`, `Alice (30)`, and `Charlie (35)`.

- **B)** 
```
Charlie 35  
Alice 30  
Bob 25
```
  - This option is incorrect. This option lists the elements in descending order of age, but the `AgeComparator` sorts in ascending order of age.

- **C)** 
```
Alice 30  
Bob 25  
Charlie 35
```
  - This option is incorrect. This option does not correctly follow the ascending order of age.

- **D)** 
```
Bob 25  
Charlie 35  
Alice 30
```
  - This option is incorrect. This option does not correctly follow the ascending order of age.

- **E)** 
```
Alice 30  
Charlie 35  
Bob 25
```
  - This option is incorrect. This option does not correctly follow the ascending order of age.

