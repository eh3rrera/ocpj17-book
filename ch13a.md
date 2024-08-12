---
layout: answer

title: "Chapter THIRTEEN"
subtitle: "The Java Platform Module System"
exam_objectives:
  - "Define modules and their dependencies, expose module content including for reflection. Define services, producers, and consumers."
  - "Compile Java code, produce modular and non-modular jars, runtime images, and implement migration using unnamed and automatic modules."
---

## Answers
**1. The correct answers are A and C.** 

**Explanation:**

- **A)** Automatic module
  - This option is correct. An automatic module is created from a JAR file that is placed on the module path but does not have a module descriptor (`module-info.java`). The module system infers a module name from the JAR file name and exports all packages in the JAR.

- **B)** Default module
  - This option incorrect. There is no concept of a "default module" in JPMS. The term might be confused with unnamed modules or other types of configurations, but it is not a recognized type.

- **C)** Unnamed module
  - This option is correct. The unnamed module is a special module that includes all classes on the classpath. It does not have a module descriptor and can access other unnamed modules but cannot be required by named modules.

- **D)** Core module
  - This option is incorrect. There is no specific type called "core module" in JPMS. JPMS does not categorize modules this way.

- **E)** Primary module
  - This option is incorrect. Similar to "core module," there is no type called "primary module" in JPMS.



**2. The correct answer is D.**

**Explanation:**

- **A)** `module com.example { exports com.example.api; }`
  - This option is incorrect. The content inside the braces is not valid module declaration syntax. The correct syntax to export a package would be `exports com.example.api;`.

- **B)** `declare module com.example { }`
  - This option is incorrect. There is no `declare` keyword used in the JPMS for defining a module.

- **C)** `create module com.example { requires java.base; }`
  - This option is incorrect. The correct syntax does not use the `create` keyword for module declaration.

- **D)** `module com.example { }`
  - This option is correct. This is the correct way to declare a module named `com.example` without any additional requirements.

- **E)** `module com.example requires java.base;`
  - This option is incorrect. The syntax is invalid because it lacks braces `{ }` to define the module body.



**3. The correct answer is A.**

**Explanation:**

- **A)** `module com.example { exports com.example.internal to com.example.client; }`
  - This option is correct. The `exports` directive with the `to` clause restricts the export of the `com.example.internal` package to only the specified module `com.example.client`.

- **B)** `module com.example { opens com.example.internal to com.example.client; }`
  - This option is incorrect. The `opens` directive is used for reflection purposes, not for compile-time access control.

- **C)** `module com.example { requires com.example.internal; }`
  - This option is incorrect. The `requires` directive is used to specify module dependencies, not to control package accessibility.

- **D)** `module com.example { provides com.example.internal to com.example.client; }`
  - This option is incorrect. The `provides` directive is used to specify service providers in the module system, not for restricting package access.

- **E)** `module com.example { uses com.example.internal; }`
  - This option is incorrect. The `uses` directive is used to specify service consumers in the module system, not for restricting package access.



**4. The correct answer is B.**

**Explanation:**

- **A)** The `com.example.client` module can access the `com.example.api` package for deep reflection.
  - This option is incorrect. The `com.example.api` package is exported, not opened, meaning it is available for use but not for deep reflection by other modules.

- **B)** The `com.example.client` module cannot access the `com.example.api` package for deep reflection.
  - This option is correct. The `com.example.api` package is not opened for deep reflection; it is only exported for use by other modules.

- **C)** The `com.example.api` package is opened to all modules for deep reflection.
  - This option is incorrect. The `com.example.api` package is exported to all modules, but it is not opened for deep reflection to any module.

- **D)** The `com.example.internal` package is exported to the `com.example.client` module.
  - This option is incorrect. The `com.example.internal` package is opened to `com.example.client` for deep reflection but not exported.

- **E)** The `com.example.api` package is exported to the `com.example.client` module for deep reflection.
  - This option is incorrect. The `com.example.api` package is exported to the `com.example.client` module, but exporting does not include deep reflection capabilities.



**5. The correct answer is D.**

**Explanation:**

- **A)** The `java.base` module provides the Swing and AWT libraries for building graphical user interfaces.
  - This option is incorrect. The `java.base` module does not provide the Swing and AWT libraries. These libraries are provided by the `java.desktop` module.

- **B)** The `java.logging` module is responsible for handling collections, including lists, sets, and maps.
  - This option is incorrect. The `java.logging` module is responsible for the logging framework in Java, not for handling collections. The collections framework is part of the `java.base` module.

- **C)** The `java.desktop` module provides the classes for implementing standard input and output streams.
  - This option is incorrect. The `java.desktop` module includes classes for building graphical user interfaces (Swing and AWT), not for standard input and output streams. Standard I/O is part of the `java.base` module.

- **D)** The `java.xml` module includes the classes for processing XML documents.
  - This option is correct. The `java.xml` module includes classes for processing XML documents, such as those for parsing and transforming XML using APIs like DOM, SAX, and StAX.

- **E)** The `java.naming` module provides APIs for accessing and processing annotations.
  - This option is incorrect. The `java.naming` module provides APIs for accessing naming and directory services (JNDI), not for processing annotations. Annotations are part of the `java.base` module.



**6. The correct answer is C.**

**Explanation:**

- **A)** `javac -d out src/com.example/module-info.java src/com.example/com/example/*.java`
  - This option is incorrect. While it correctly specifies the output directory and the source files, it does not use the `--module-source-path` option and does not specify the module name with `-m`.

- **B)** `javac -sourcepath src -d out com.example/module-info.java com.example/com/example/*.java`
  - This option is incorrect. The `-sourcepath` option is not used for module compilation. The correct option should be `--module-source-path`.

- **C)** `javac -d out --module-source-path src -m com.example`
  - This option is correct. The `javac -d out --module-source-path src -m com.example` command correctly compiles the module `com.example` located in the `src` directory and outputs the compiled classes to the `out` directory.

- **D)** `javac -modulepath out -d src src/com.example/module-info.java src/com.example/com/example/*.java`
  - This option is incorrect. The `-modulepath` option is incorrectly placed, and the source and destination directories are swapped.

- **E)** `javac --module-path src --module com.example -d out`
  - This option is incorrect. The command incorrectly uses `--module-path` instead of `--module-source-path` and the module name is specified with `--module` instead of `-m`.



**7. The correct answer is A.**

**Explanation:**

- **A)** `javac --module-source-path src -d out $(find src -name "*.java")`
  - This option is correct. The command `javac --module-source-path src -d out $(find src -name "*.java")` correctly compiles both modules by specifying the module source path and finding all Java files in the source directory.

- **B)** `javac -d out --module com.foo,com.bar --module-source-path src`
  - This option is incorrect. The `--module` option does not accept multiple modules separated by commas in this context.

- **C)** `javac -sourcepath src -d out src/com.foo/module-info.java src/com.foo/com/foo/*.java src/com.bar/module-info.java src/com.bar/com/bar/*.java`
  - This option is incorrect. Although it specifies the source files, it does not use the `--module-source-path` option and is unnecessarily verbose.

- **D)** `javac -modulepath src -d out src/com.foo/*.java src/com.bar/*.java`
  - This option is incorrect. The `-modulepath` option is misused, and the path should point to the directory containing the module source code.

- **E)** `javac --module-source-path src/com.foo,src/com.bar -d out`
  - This option is incorrect. The `--module-source-path` option should point to the base directory (`src`), not individual module directories.



**8. The correct answer is C.**

**Explanation:**

- **A)** `requires com.example.Service with com.provider.ServiceImpl;`
  - This option is incorrect. The `requires` keyword is used to declare dependencies on other modules, not for specifying service providers.

- **B)** `exports com.example.Service with com.provider.ServiceImpl;`
  - This option is incorrect. The `exports` keyword is used to make packages accessible to other modules, not for specifying service providers.

- **C)** `provides com.example.Service with com.provider.ServiceImpl;`
  - This option is correct. The `provides com.example.Service with com.provider.ServiceImpl;` statement correctly specifies that the `com.provider` module provides an implementation of the `com.example.Service`.

- **D)** `uses com.example.Service with com.provider.ServiceImpl;`
  - This option is incorrect. The `uses` keyword is used to declare that the module relies on a service but does not provide an implementation.



**9. The correct answer is D.**

**Explanation:**

- **A)** `java --describe-module com.example/module-info.java`
  - This option is incorrect. The `--describe-module` option is not used with a specific file path like `module-info.java`; it requires a module name.

- **B)** `javac --describe-module com.example`
  - This option is incorrect. The `--describe-module` option is not valid for the `javac` command; it is used with the `java` command.

- **C)** `jar --describe-module com.example`
  - This option is incorrect. The `--describe-module` option is not valid for the `jar` command; it is used with the `java` command.

- **D)** `java --describe-module com.example`
  - This option is correct. The `java --describe-module com.example` command correctly describes the module `com.example` using the `--describe-module` option.



**10. The correct answers are B and C.**

**Explanation:**

- **A)** `jdeps --list-deps example.jar` 
  - This option is incorrect. The `--list-deps` option does not exist for `jdeps`.

- **B)** `jdeps -verbose example.jar`
  - This option is correct. While `-verbose` is a valid option, it provides more information.

- **C)** `jdeps -s example.jar`
  - This option is correct. The `-s` option with `jdeps` provides a summary of the dependencies of the `example.jar` file.

- **D)** `jdeps --check example.jar`
  - This option is incorrect. The `--check` option does not exist for `jdeps`.



**11. The correct answer is A.**

**Explanation:**

- **A)** `jmod create --class-path mods/com.example --output com.example.jmod`
  - This option is correct. It uses the correct syntax for the `jmod` command to create a JMOD file. The `create` operation is specified, followed by the `--class-path` option to indicate the source directory, and finally the name of the output JMOD file. This command will create a JMOD file named `com.example.jmod` using the contents of the `mods/com.example` directory.

- **B)** `jmod --create --class-path mods/com.example --output com.example.jmod`
  - This option is incorrect. The `create` operation in the `jmod` command should not be prefixed with `--`. The correct format is `jmod create`, not `jmod --create`. The rest of the command is correct, but this syntax error makes the entire command invalid.

- **C)** `jmod --create --dir mods/com.example --output com.example.jmod`
  - This option is incorrect. First, like option B, it incorrectly uses `--create` instead of `create`. Second, it uses the `--dir` option, which is not used for creating JMOD files, but for specifying the output directory when extracting files from a JMOD. When creating a JMOD file, we use `--class-path` to specify the source directory. The `--output` option is also not a valid option for the `jmod` command.

- **D)** `jmod create --dir mods/com.example --output com.example.jmod`
  - This option is incorrect. It uses the `--dir` option instead of `--class-path` for specifying the source directory, and it incorrectly includes an `--output` option, which is not valid for the `jmod` command. When creating a JMOD file, the output file name is simply specified as the last argument, not with an `--output` option.



**12. The correct answer is B.**

**Explanation:**

- **A)** `jlink --module-path java.base:com.example --output myimage`
  - This option is incorrect. The `--module-path` option should specify the directory containing the modules, not the module names directly.

- **B)** `jlink --module-path mods --add-modules java.base,com.example --output myimage`
  - This option is correct. The command `jlink --module-path mods --add-modules java.base,com.example --output myimage` correctly specifies the module path and adds the necessary modules, outputting the custom runtime image to the `myimage` directory.

- **C)** `jlink --add-modules java.base,com.example --image myimage` 
  - This option is incorrect. The `--image` option is not valid; the correct option is `--output`.

- **D)** `jlink --modules java.base,com.example --dir myimage`
  - This option is incorrect. The `--modules` option is incorrect; the correct option is `--add-modules`, and `--dir` should be `--output`.



**13. The correct answer is D.**

**Explanation:**

- **A)** An unnamed module can depend on named modules and other unnamed modules.
  - This option is incorrect. An unnamed module can depend on named modules, which is true. However, unnamed modules cannot depend on other unnamed modules. Unnamed modules are created when classes are loaded from the classpath, and they cannot read other unnamed modules. They can only read the named modules of the platform and other modules explicitly added to the module path.

- **B)** Automatic modules must have a `module-info.java` file to be placed on the module path.
  - This option is incorrect. Automatic modules do not require a `module-info.java` file. Their module name is inferred from the JAR file name.

- **C)** Unnamed modules can export their packages to named modules using `module-info.java`. 
  - This option is incorrect. Unnamed modules cannot export packages because they do not use `module-info.java`.

- **D)** An automatic module is created when a JAR file without a `module-info.java` is placed on the module path, and it can read all other modules.
  - This option is correct. An automatic module is created by placing a JAR file without a `module-info.java` on the module path. This automatic module can read all other modules, both named and unnamed.
