---
layout: answer

title: "Chapter TWELVE"
subtitle: "File I/O and Serialization"
exam_objectives:
  - "Read and write console and file data using I/O Streams."
  - "Serialize and de-serialize Java objects."
  - "Create, traverse, read, and write Path objects and their properties using java.nio.file API."
---

## Answers
**1. The correct answer is D.**

**Explanation:**

- **A)** `/home/user`
  - This option is incorrect. The `resolve` method appends the given path to the base path. It does not return the base path alone.

- **B)** `/home/user/documents` 
  - This option is incorrect. The `resolve` method includes the entire relative path provided as an argument, not just part of it.

- **C)** `/documents/notes.txt`
  - This option is incorrect. The `resolve` method combines the base path with the given relative path; it does not replace the base path with the relative path.

- **D)** `/home/user/documents/notes.txt`
  - This option is correct. The `resolve` method appends the relative path to the base path, resulting in `/home/user/documents/notes.txt`.



**2. The correct answer is C.**

**Explanation:**

- **A)** `/home/user/../documents/./notes.txt` 
  - This option is incorrect. The `normalize` method removes redundant `.` and `..` elements, so it wouldn't leave the path as is.

- **B)** `/home/user/documents/notes.txt`
  - This option is incorrect. While the `.` is removed, the `..` navigates one directory up, resulting in an incorrect final path.

- **C)** `/home/documents/notes.txt`
  - This option is correct. The `normalize` method processes the path by removing the `.` and moving one directory up due to `..`, resulting in `/home/documents/notes.txt`.

- **D)** `/documents/notes.txt`
  - This option is incorrect. The `normalize` method does not completely remove the leading part of the path up to `documents`. It only processes the `.` and `..` elements.



**3. The correct answer is B.**

**Explanation:**

- **A)** `FileOutputStream`
  - This option is incorrect. `FileOutputStream` is used for writing binary data to a file, not for reading character streams.

- **B)** `FileReader`
  - This option is correct. `FileReader` is designed for reading character streams from a file, making it the appropriate class for this purpose.

- **C)** `BufferedOutputStream`
  - This option is incorrect. `BufferedOutputStream` is used to write binary data to an output stream, buffering the data for efficient writing. It is not used for reading character streams.

- **D)** `ObjectInputStream`
  - This option is incorrect. `ObjectInputStream` is used for deserializing objects from an input stream, not for reading character streams.



**4. The correct answer is C.**

**Explanation:**

- **A)** 
```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.copy(source, target, StandardCopyOption.ATOMIC_MOVE);
```
  - This option is incorrect. `StandardCopyOption.ATOMIC_MOVE` is used for moving files atomically, not for copying. It does not ensure that an existing file is overwritten.

- **B)** 
```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
```
  - This option is incorrect. `Files.move` is used to move or rename a file, not to copy it. `StandardCopyOption.REPLACE_EXISTING` ensures the target file is overwritten during a move, not a copy.

- **C)** 
```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
```
  - This option is correct. `Files.copy` with `StandardCopyOption.REPLACE_EXISTING` ensures the target file is overwritten if it exists, which is the correct way to copy a file with overwriting.

- **D)** 
```java
Path source = Paths.get("source.txt");
Path target = Paths.get("target.txt");
Files.copy(source, target, StandardCopyOption.APPEND);
```
  - This option is incorrect. `StandardCopyOption.APPEND` does not exist in the `StandardCopyOption` enum, making this code snippet invalid.



**5. The correct answer is D.**

**Explanation:**

- **A)** 
```java
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllBytes(path);
```
  - This option is incorrect. `Files.readAllBytes(path)` returns a byte array, not a `List<String>`.

- **B)** 
```java
Path path = Paths.get("file.txt");
List<String> lines = Files.readString(path);
```
  - This option is incorrect. `Files.readString(path)` returns a single `String` containing the entire content of the file, not a `List<String>`.

- **C)** 
```java
Path path = Paths.get("file.txt");
List<String> lines = Files.lines(path);
```
  - This option is incorrect. `Files.lines(path)` returns a `Stream<String>`, not a `List<String>`. It provides a lazy-loaded stream of lines.

- **D)** 
```java
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllLines(path);
```
  - This option is correct. `Files.readAllLines(path)` reads all lines from the file and returns them as a `List<String>`, which is the desired behavior.



**6. The correct answer is A.**

**Explanation:**

- **A)** 
```java
Path path = Paths.get("output.txt");
List<String> lines = Arrays.asList("line1", "line2", "line3");
Files.write(path, lines);
```
  - This option is correct. `Files.write(path, lines)` writes the given list of strings to the file at the specified path, creating the file if it does not exist.

- **B)** 
```java
Path path = Paths.get("output.txt");
List<String> lines = Arrays.asList("line1", "line2", "line3");
Files.writeString(path, lines);
```
  - This option is incorrect. `Files.writeString(path, lines)` does not exist. `Files.writeString` expects a single `String` as the second argument, not a `List<String>`.

- **C)** 
```java
Path path = Paths.get("output.txt");
List<String> lines = Arrays.asList("line1", "line2", "line3");
Files.writeLines(path, lines);
```
  - This option is incorrect. `Files.writeLines(path, lines)` does not exist. There is no such method in the `Files` class.

- **D)** 
```java
Path path = Paths.get("output.txt");
List<String> lines = Arrays.asList("line1", "line2", "line3");
Files.write(path, lines, StandardOpenOption.READ);
```
  - This option is incorrect. `StandardOpenOption.READ` is not a valid option for writing files. It is used for reading files.



**7. The correct answer is B.**

**Explanation:**

- **A)** 
```java
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastModifiedTime();
```
  - This option is incorrect. `attrs.lastModifiedTime()` retrieves the last modified time of the file, not the creation time.

- **B)** 
```java
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
attrs.creationTime();
```
  - This option is correct. `attrs.creationTime()` retrieves the creation time of the file, which is the correct method from `BasicFileAttributes` for this purpose.

- **C)** 
```java
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
attrs.lastAccessTime();
```
  - This option is incorrect. `attrs.lastAccessTime()` retrieves the last access time of the file, not the creation time.

- **D)** 
```java
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
attrs.size();
```
  - This option is incorrect. `attrs.size()` retrieves the size of the file, not the creation time.


**8. The correct answer is D.**

**Explanation:**

- **A)** 
```java
Path start = Paths.get("start_directory");
Files.walkFileTree(start, new SimpleFileVisitor<Path>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
        return FileVisitResult.SKIP_SUBTREE;
    }
});
```
  - This option is incorrect. `FileVisitResult.SKIP_SUBTREE` will skip the traversal of the entire subtree, not allowing the complete traversal of the directory tree.

- **B)** 
```java
Path start = Paths.get("start_directory");
Files.walkFileTree(start, new SimpleFileVisitor<Path>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
        throw new IOException("Error visiting file");
    }
});
```
  - This option is incorrect. Throwing an `IOException` inside `visitFile` will stop the traversal due to an unhandled exception.

- **C)** 
```java
Path start = Paths.get("start_directory");
Files.walkFileTree(start, new SimpleFileVisitor<Path>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
        System.out.println("Visited file: " + file);
        return FileVisitResult.TERMINATE;
    }
});
```
  - This option is incorrect. The use of `FileVisitResult.TERMINATE` will stop the traversal after visiting the first file, not allowing the complete traversal of the directory tree.

- **D)** 
```java
Path start = Paths.get("start_directory");
Files.walkFileTree(start, EnumSet.noneOf(FileVisitOption.class), Integer.MAX_VALUE, new SimpleFileVisitor<Path>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
        System.out.println("Visited file: " + file);
        return FileVisitResult.CONTINUE;
    }

    @Override
    public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
        return FileVisitResult.CONTINUE;
    }

    @Override
    public FileVisitResult visitFileFailed(Path file, IOException exc) throws IOException {
        return FileVisitResult.CONTINUE;
    }

    @Override
    public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
        return FileVisitResult.CONTINUE;
    }
});
```
  - This option is correct. It uses `Files.walkFileTree` with `SimpleFileVisitor`, specifying no special `FileVisitOption` and setting the maximum depth to `Integer.MAX_VALUE`, ensuring full traversal of the directory tree. Additionally, it correctly handles directory pre-visit, file visit, file visit failure, and directory post-visit events.



**9. The correct answer is B.**

**Explanation:**

- **A)** 

    ```java
    class Animal implements Serializable {
        private static final long serialVersionUID = 1L;
        private String species;
        private int age;

        public Animal(String species, int age) {
            this.species = species;
            this.age = age;
        }
    }

    Animal animal = new Animal("Lion", 5);
    try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("animal.ser"))) {
        ois.writeObject(animal);
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```
  - This option is incorrect. `ObjectInputStream` is used for deserialization (reading objects from a stream), not serialization. It should be `ObjectOutputStream`.

- **B)** 

    ```java
    class Animal implements Serializable {
        private static final long serialVersionUID = 1L;
        private String species;
        private int age;

        public Animal(String species, int age) {
            this.species = species;
            this.age = age;
        }
    }

    Animal animal = new Animal("Lion", 5);
    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("animal.ser"))) {
        oos.writeObject(animal);
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```
  - This option is correct. `ObjectOutputStream` is used to serialize an object to a file, which is what this code snippet does correctly.

- **C)** 

    ```java
    class Animal {
        private String species;
        private int age;

        public Animal(String species, int age) {
            this.species = species;
            this.age = age;
        }
    }

    Animal animal = new Animal("Lion", 5);
    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("animal.ser"))) {
        oos.writeObject(animal);
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```
  - This option is incorrect. The `Animal` class does not implement `Serializable`, so it cannot be serialized using `ObjectOutputStream`.

- **D)** 

    ```java
    class Animal implements Serializable {
        private static final long serialVersionUID = 1L;
        private String species;
        private int age;

        public Animal(String species, int age) {
            this.species = species;
            this.age = age;
        }
    }

    Animal animal = new Animal("Lion", 5);
    try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("animal.ser"))) {
        bos.write(animal);
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```
  - This option is incorrect. `BufferedOutputStream` cannot be used to write objects directly; `ObjectOutputStream` should be used for serialization.
