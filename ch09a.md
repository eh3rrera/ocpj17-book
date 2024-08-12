---
layout: answer

title: "Chapter NINE"
subtitle: "Streams"
exam_objectives:
  - "Use Java object and primitive Streams, including lambda expressions implementing functional interfaces, to supply, filter, map, consume, and sort data."
  - "Perform decomposition, concatenation and reduction, and grouping and partitioning on sequential and parallel streams."
---

## Answers
**1. The correct answer is C.**

**Explanation:**

- **A)** `Optional<String> optional = new Optional<>(value);`
  - This option is incorrect because `Optional` does not have a public constructor. Instead, static factory methods like `of` and `ofNullable` should be used.

- **B)** `Optional<String> optional = Optional.of(value);`
  - This option is incorrect because `Optional.of(value)` throws a `NullPointerException` if `value` is `null`. In this scenario, since `getValue()` can return `null`, this line could lead to an exception.

- **C)** `Optional<String> optional = Optional.ofNullable(value);`
  - This option is correct because `Optional.ofNullable(value)` will return an `Optional` describing the specified value if non-null, or an empty `Optional` if the value is `null`. This is the appropriate way to handle a potentially `null` value.

- **D)** `Optional<String> optional = Optional.empty(value);`
  - This option is incorrect because `Optional.empty()` does not accept any arguments. It simply returns an empty `Optional`.

- **E)** `Optional<String> optional = Optional.nullable(value);`
  - This option is incorrect because there is no method `nullable` in the `Optional` class. The correct method for this purpose is `ofNullable`. 


**2. The correct answer is E.**

**Explanation:**

- **A)** `stream.filter(s -> s.contains("A"));` 
  - This option is incorrect because `filter` is an intermediate operation. It returns a new stream with elements that match the given predicate.

- **B)** `stream.map(String::toLowerCase);`
  - This option is incorrect because `map` is an intermediate operation. It returns a new stream with elements that are the results of applying the given function.

- **C)** `stream.distinct();`
  - This option is incorrect because `distinct` is an intermediate operation. It returns a new stream with distinct elements.

- **D)** `stream.limit(2);`
  - This option is incorrect because `limit` is an intermediate operation. It returns a new stream that is truncated to be no longer than the given size.

- **E)** `stream.collect(Collectors.toList());`
  - This option is correct because `collect` is a terminal operation. It triggers the processing of the stream and collects the elements into a `List`.


**3. The correct answer is D.**

**Explanation:**

- **A)** `int sum = numbers.stream().sum();` 
  - This option is incorrect because arrays do not have a `stream` method directly on them. You need to use a method from a utility class like `IntStream` to create a stream.

- **B)** `int sum = IntStream.range(0, numbers.length).sum();` 
  - This option is incorrect because `IntStream.range(0, numbers.length)` generates a stream of integers from 0 to the length of the array, not the elements of the array itself.

- **C)** `int sum = IntStream.from(numbers).sum();`
  - This option is incorrect because `IntStream` does not have a `from` method. The correct method is `of`.

- **D)** `int sum = IntStream.of(numbers).sum();`
  - This option is correct because `IntStream.of(numbers).sum()` correctly creates an `IntStream` from the array and calculates the sum of its elements.

- **E)** `int sum = IntStream.range(numbers).sum();`
  - This option is incorrect because `IntStream.range` requires two arguments (a start and an end index) and is used to generate a stream of numbers within a range, not to sum an array.


**4. The correct answer is A.**

**Explanation:**

- **A)** `Stream<String> filteredStream = stream.filter(s -> s.length() > 3);`  
  - This option is correct because `filter` is the correct intermediate operation to apply a predicate to each element of the stream and return a new stream containing only elements that match the predicate.

- **B)** `Stream<String> filteredStream = stream.map(s -> s.length() > 3);` 
  - This option is incorrect because `map` is used to transform elements of the stream and does not filter them. The result would be a stream of `Boolean` values instead of the original strings.

- **C)** `Stream<String> filteredStream = stream.collect(Collectors.filtering(s -> s.length() > 3));` 
  - This option is incorrect because `Collectors.filtering` is not a valid method. Filtering is done through the `filter` method on the stream itself, not via collectors.

- **D)** `Stream<String> filteredStream = stream.filtering(s -> s.length() > 3);` 
  - This option is incorrect because there is no `filtering` method on the stream. The correct method is `filter`.

- **E)** `Stream<String> filteredStream = stream.filterByLength(3);`
  - This option is incorrect because there is no `filterByLength` method on the stream. The correct method to use is `filter`.


**5. The correct answer is C.**

**Explanation:**

- **A)** `Stream<String> lengthStream = stream.map(s -> s.length());`
  - This option is incorrect because the `map` method will transform the elements to `Integer`, not `String`. The correct type for the resulting stream should be `Stream<Integer>`.

- **B)** `Stream<String> lengthStream = stream.mapToInt(s -> s.length());`
  - This option is incorrect because `mapToInt` produces an `IntStream`, not a `Stream<String>`. Additionally, the resulting stream type would not be `Stream<String>`.

- **C)** `Stream<Integer> lengthStream = stream.map(s -> s.length());`
  - This option is correct because `map` transforms each string in the stream to its length, resulting in a `Stream<Integer>`.

- **D)** `IntStream lengthStream = stream.map(s -> s.length());` 
  - This option is incorrect because `map` produces a `Stream<R>`, not an `IntStream`. The correct method for producing an `IntStream` would be `mapToInt`.

- **E)** `Stream<String> lengthStream = stream.flatMap(s -> Stream.of(s.length()));`
  - This option is incorrect because `flatMap` is used to flatten nested streams and not simply map to another type. Additionally, the resulting stream type would not be `Stream<String>`.


**6. The correct answer is A.**

**Explanation:**

- **A)** `Stream<String> resultStream = stream.skip(2).limit(3);`
  - This option is correct because `skip(2)` skips the first 2 elements of the stream, and `limit(3)` limits the stream to the next 3 elements. Therefore, the resulting stream will contain the 3rd, 4th, and 5th elements of the original list.

- **B)** `Stream<String> resultStream = stream.limit(3).skip(2);`
  - This option is incorrect because `limit(3)` first limits the stream to the first 3 elements, and then `skip(2)` skips 2 of those elements, resulting in a stream with only the 3rd element.

- **C)** `Stream<String> resultStream = stream.skip(3).limit(2);`
  - This option is incorrect because `skip(3)` skips the first 3 elements, and `limit(2)` then limits the stream to the next 2 elements, resulting in a stream with the 4th and 5th elements.

- **D)** `Stream<String> resultStream = stream.limit(2).skip(3);`
  - This option is incorrect because `limit(2)` first limits the stream to the first 2 elements, and then `skip(3)` would attempt to skip more elements than are available, resulting in an empty stream.

- **E)** `Stream<String> resultStream = stream.slice(2, 5);`
  - This option is incorrect because there is no `slice` method in the Stream API. The correct methods to achieve the desired result are `skip` and `limit`.


**7. The correct answer is B.**

**Explanation:**

- **A)** `Stream<String> resultStream = Stream.concat(stream1, stream2.collect(Collectors.toList()));`
  - This option is incorrect because `Stream.concat` expects two streams as arguments. `stream2.collect(Collectors.toList())` converts `stream2` into a `List`, not a `Stream`.

- **B)** `Stream<String> resultStream = Stream.concat(stream1, stream2);`
  - This option is correct because `Stream.concat(stream1, stream2)` correctly concatenates the two streams into a single stream containing all elements from both streams.

- **C)** `Stream<String> resultStream = stream1.concat(stream2);`
  - This option is incorrect because `Stream` does not have an instance method `concat`. The `concat` method is a static method of the `Stream` class.

- **D)** `Stream<String> resultStream = stream1.merge(stream2);`
  - This option is incorrect because there is no `merge` method in the `Stream` API. The correct method for concatenating streams is `Stream.concat`.

- **E)** `Stream<String> resultStream = Stream.of(stream1, stream2);`
  - This option is incorrect because `Stream.of(stream1, stream2)` creates a stream of streams, resulting in `Stream<Stream<String>>` rather than a single concatenated `Stream<String>`.


**8. The correct answer is E.**

**Explanation:**

- **A)** `int product = stream.reduce(1, (a, b) -> a + b);`
  - This option is incorrect because the reduction operation is using addition instead of multiplication. The correct operation for calculating the product should be `(a, b) -> a * b`.

- **B)** `int product = stream.reduce((a, b) -> a * b);`
  - This option is incorrect because it does not provide an identity value, which is necessary for the reduction operation when dealing with an empty stream. Without an identity value, the result is an `Optional<Integer>` rather than an `int`.

- **C)** `int product = stream.reduce(0, (a, b) -> a * b);`
  - This option is incorrect because the identity value for multiplication should be `1`, not `0`. Using `0` as the identity value would result in a product of `0` regardless of the stream elements.

- **D)** `Optional<Integer> product = stream.reduce(1, (a, b) -> a * b);`
  - This option is incorrect because the correct use of the `reduce` method with an identity value does not return an `Optional`. It should return the result directly as `int`.

- **E)** `int product = stream.reduce(1, (a, b) -> a * b, (a, b) -> a * b);`
  - This option is correct because it correctly uses the `reduce` method with an identity value of `1` and a combiner function that multiplies the results. This form of `reduce` is suitable for parallel processing as well, ensuring the product is correctly calculated across multiple segments of the stream.


**9. The correct answer is B.**

**Explanation:**

- **A)** `Set<String> resultSet = stream.collect(Collectors.toSet());` 
  - This option is incorrect because `Collectors.toSet()` does not guarantee the order of the elements. The implementation returned by this collector does not preserve the order of insertion.

- **B)** `Set<String> resultSet = stream.collect(Collectors.toCollection(LinkedHashSet::new));`
  - This option is correct because `Collectors.toCollection(LinkedHashSet::new)` collects the elements into a `LinkedHashSet`, which maintains the order of insertion.

- **C)** `Set<String> resultSet = stream.collect(Collectors.toCollection(TreeSet::new));` 
  - This option is incorrect because `TreeSet` sorts the elements according to their natural ordering (or by a comparator, if provided). This does not necessarily preserve the original order of the stream elements.

- **D)** `Set<String> resultSet = stream.collect(Collectors.toList());` 
  - This option is incorrect because `Collectors.toList()` collects the elements into a `List`, not a `Set`.

- **E)** `Set<String> resultSet = stream.collect(Collectors.toMap());`
  - This option is incorrect because `Collectors.toMap()` is used to collect the elements into a `Map`, not a `Set`.