---
layout: chapter

title: "Appendix ONE"
subtitle: "Logging"
exam_objectives:
  - "Understand the basics of Java Logging API."

previous_link: "/ch16.html"
previous_title: "Annotations"
next_link: ""
next_title: ""
---

## Chapter Content

- [Introduction to Logging](#introduction-to-logging)
- [The Java Logging API](#the-java-logging-api)
    - [Loggers](#loggers)
    - [Handlers](#handlers)
    - [Formatters](#formatters)
    - [Levels](#levels)
    - [Understanding the Logger Hierarchy](#Understanding the Logger Hierarchy)

---

## Introduction to Logging
You might be thinking, "Isn't logging just about printing messages to the console?"

Well, not quite.

Logging is about recording information about your application's runtime behavior. It's like having a diary for your program, where it jots down what it's doing, when it's doing it, and sometimes, why it's doing it. But unlike a diary, which you might hide under your mattress, logs are meant to be read by developers, system administrators, and sometimes even by the programs themselves.

Java has had built-in logging capabilities since version 1.4, in the form of the Java Logging API (`java.util.logging`). But why use this instead of just sprinkling your code with `System.out.println()` statements? Well, let's look at a simple example:

```java
public class MyClass {
    public void doSomething() {
        System.out.println("Starting to do something");
        // ... some code here ...
        System.out.println("Finished doing something");
    }
}
```

Sure, this works, but let's see how we might do this with the Java Logging API:

```java
import java.util.logging.Logger;
import java.util.logging.Level;

public class MyClass {
    private static final Logger LOGGER = Logger.getLogger(MyClass.class.getName());

    public void doSomething() {
        LOGGER.info("Starting to do something");
        // ... some code here ...
        LOGGER.info("Finished doing something");
    }
}
```

At first glance, this might seem like more work. But trust me, it's worth it. Here's why:

1. **Configurability**: With logging, you can easily change the output destination. Want to write to a file instead of the console? No problem. Want to send logs to a remote server? You got it. All without changing your code.

2. **Granularity**: Logging frameworks typically provide different levels of importance for messages. For example, `WARNING` or `INFO`.

3. **Performance**: Good logging frameworks are designed to have minimal impact on your application's performance. They often use techniques like lazy evaluation of log messages to reduce overhead.

4. **Standardization**: Using a logging framework provides a consistent approach across your entire application, making it easier for anyone (including future you) to understand and maintain the code.

Let's review in more detail the Java Logging API.


## The Java Logging API

The Java Logging API, part of the `java.util.logging` package, follows a hierarchical structure. Think of it as a tree, where each branch represents a logger, and the leaves are the actual log messages. This structure allows for fine-grained control over logging behavior across different parts of your application.

The framework consists of several key components working together:

1. **Loggers:** The main entry points for logging messages
2. **Handlers:** Responsible for publishing log records to various destinations
3. **Formatters:** Determine how log records are formatted before being published
4. **Levels:** Define the importance and verbosity of log messages

Let's look at each of these components in more detail.

### Loggers

Loggers are responsible for capturing log messages and routing them to the appropriate handlers. Here's a simple example of how you might use a logger:

```java
import java.util.logging.Logger;

public class MyClass {
    private static final Logger LOGGER = Logger.getLogger(MyClass.class.getName());

    public void doSomething() {
        LOGGER.info("Doing something important");
    }
}
```

In this example, we're creating a logger for our class. But there's more to loggers than meets the eye. They follow a hierarchical naming convention, similar to Java package names. For instance, a logger named `"com.mycompany"` is the parent of `"com.mycompany.myapp"`.

To obtain a logger instance, you use the `Logger.getLogger()` method, passing the desired name. It's common practice to use the fully qualified class name as the logger name, as we did in the example above.

### Handlers

While loggers capture log messages, handlers are responsible for publishing these messages to various destinations. Java provides several built-in handlers:

- `ConsoleHandler`: Writes log messages to `System.err`
- `FileHandler`: Writes log messages to a file
- `SocketHandler`: Writes log messages to a network socket
- `MemoryHandler`: Buffers log records in memory

Here's how you might configure a file handler:

```java
import java.util.logging.*;

public class LogConfig {
    public static void configureLogging() throws IOException {
        Logger logger = Logger.getLogger("com.mycompany");
        FileHandler fileHandler = new FileHandler("myapp.log");
        logger.addHandler(fileHandler);
    }
}
```

In this example, we're adding a `FileHandler` to our logger, which will write log messages to a file named `myapp.log`.

### Formatters

Formatters determine how log records are formatted before they're published. Java provides two built-in formatters:

1. `SimpleFormatter`: Outputs brief, human-readable log messages
2. `XMLFormatter`: Outputs log records in XML format

You can also create custom formatters by extending the `Formatter` class. Here's an example of how to set a formatter for a handler:

```java
FileHandler fileHandler = new FileHandler("myapp.log");
fileHandler.setFormatter(new SimpleFormatter());
```

### Levels

Log levels define the importance and verbosity of log messages. Java defines the following log levels:

| Level | Use Case |
|-------|----------|
| `SEVERE` | Critical issues that need immediate attention |
| `WARNING` | Potential problems that don't stop execution |
| `INFO` | General information about program execution |
| `CONFIG` | Configuration-related messages |
| `FINE, FINER, FINEST` | Increasingly detailed debug information |

In addition to these levels, there are two special values used to control logging: 

- `ALL` (logs all messages)
- `OFF` (turns off logging)

Messages with a level lower than the set level will be ignored. For example:

```java
Logger logger = Logger.getLogger("com.mycompany");
logger.setLevel(Level.FINE);

logger.severe("This is a severe message");  // Will be logged
logger.fine("This is a fine message");      // Will be logged
logger.finest("This is the finest message"); // Won't be logged
```

Also, you can set the logging level at runtime, allowing you to control the verbosity of your logs without modifying the code.

### Understanding the Logger Hierarchy

The logger hierarchy is a powerful feature of the Java Logging framework. When you request a logger, if it doesn't exist, it's created and inserted into the hierarchy. The root of this hierarchy is a special logger named "" (empty string).

The hierarchy allows for a concept called *level inheritance*. If a logger's level isn't explicitly set, it inherits the level of its nearest ancestor with a specific level setting. This allows you to control the logging behavior of your entire application by setting the level of a parent logger.

```java
Logger parentLogger = Logger.getLogger("com.mycompany");
Logger childLogger = Logger.getLogger("com.mycompany.myapp");

parentLogger.setLevel(Level.WARNING);
// childLogger inherits WARNING level

childLogger.warning("This will be logged");
childLogger.info("This won't be logged");
```

In this example, `childLogger` inherits the `WARNING` level from `parentLogger`, so only messages at `WARNING` level or above will be logged.

Think of it like a family tree. Just as children inherit traits from their parents, child loggers inherit properties from their parent loggers. This hierarchical structure allows for powerful and flexible logging configurations.

