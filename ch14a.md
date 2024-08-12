---
layout: answer

title: "Chapter FOURTEEN"
subtitle: "Accessing Databases with JDBC"
exam_objectives:
  - "Create connections, create and execute basic, prepared and callable statements, process query results and control transactions using JDBC API."
---

## Answers
**1. The correct answer is D.** 

**Explanation:**

- **A)** `Connection connection = DriverManager.connect("jdbc:mysql://localhost:3306/mydatabase");`
  - This option is incorrect. This statement uses `DriverManager.connect`, which is not a valid method. The correct method is `DriverManager.getConnection`.

- **B)** `Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "user");`
  - This option is incorrect. This statement is missing the password parameter required for the `getConnection` method. The `getConnection` method requires a URL, username, and password.

- **C)** `Connection connection = DriverManager.connect("jdbc:mysql://localhost:3306/mydatabase", "user", "password");`
  - This option is incorrect. This statement uses `DriverManager.connect`, which is not a valid method. The correct method is `DriverManager.getConnection`.

- **D)** `Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "user", "password");`
  - This option is correct. This statement correctly uses the `getConnection` method with the URL, username, and password parameters, which are necessary to establish a connection to the database using JDBC. 


**2. The correct answer is A.**

**Explanation:**

- **A)** `ResultSet resultSet = statement.executeQuery("SELECT * FROM users");`
  - This option is correct. The `executeQuery` method of the `Statement` class is used to execute a SQL query that retrieves data from the database, and it returns a `ResultSet` object containing the data produced by the query.

- **B)** `int result = statement.executeQuery("SELECT * FROM users");` 
  - This option is incorrect. The `executeQuery` method returns a `ResultSet`, not an `int`. This would cause a compilation error.

- **C)** `ResultSet result = statement.execute("SELECT * FROM users");` 
  - This option is incorrect. The `execute` method can be used for executing any SQL statement and returns a boolean, but not a `ResultSet` object.

- **D)** `int resultSet = statement.executeUpdate("SELECT * FROM users");`
  - This option is incorrect. The `executeUpdate` method is used for executing SQL statements that update data (like `INSERT`, `UPDATE`, or `DELETE`), and it returns an `int` representing the number of rows affected. It is not used for executing `SELECT` queries.


**3. The correct answer is B.**

**Explanation:**

- **A)** 
```java
PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
ResultSet rs = pstmt.executeQuery(1);
```
  - This option is incorrect. The `executeQuery` method of `PreparedStatement` does not accept parameters directly; parameters must be set using setter methods like `setInt`.

- **B)** 
```java
PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
pstmt.setInt(1, 1);
ResultSet rs = pstmt.executeQuery();
```
  - This option is correct. The `PreparedStatement` object is created with a parameterized query. The parameter is set using `pstmt.setInt(1, 1)` and the query is executed with `pstmt.executeQuery()`, which returns a `ResultSet`.

- **C)** 
```java
PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM users WHERE id = 1");
ResultSet rs = pstmt.execute();
```
  - This option is incorrect. The query string in `prepareStatement` should include a parameter placeholder (`?`) and the parameters should be set using appropriate setter methods. Additionally, `execute()` returns a boolean, not a `ResultSet`.

- **D)** 
```java
PreparedStatement pstmt = connection.prepareStatement("SELECT * FROM users WHERE id = ?");
pstmt.setInt(1, 1);
boolean rs = pstmt.execute();
```
  - This option is incorrect. The `execute()` method returns a `boolean` indicating the type of the result, not a `ResultSet`. For executing a query that returns a `ResultSet`, `executeQuery()` should be used.


**4. The correct answer is D.**

**Explanation:**

- **A)** 
```java
while (resultSet.next()) {
    String id = resultSet.getString("id");
    int name = resultSet.getInt("name");
}
```
  - This option is incorrect. The `id` should be retrieved using `getInt` and `name` using `getString`. Here, `id` is being retrieved as a `String` and `name` as an `int`, which is incorrect.

- **B)** 
```java
if (resultSet.next()) {
    int id = resultSet.getInt(1);
    String name = resultSet.getString(2);
}
```
  - This option is incorrect. Although it retrieves data correctly using column indices, it retrieves only one row of data because `if` is used instead of `while`.

- **C)** 
```java
int id = resultSet.getInt(1);
String name = resultSet.getString(2);
```
  - This option is incorrect. It doesn't use any loop or check to move the `ResultSet` cursor. The `resultSet.next()` method needs to be called before attempting to retrieve data from each row.

- **D)** 
```java
while (resultSet.next()) {
    int id = resultSet.getInt("id");
    String name = resultSet.getString("name");
}
```
  - This option is correct. It uses a `while` loop to process all rows in the `ResultSet` and retrieves the data using the correct methods for each column type.


**5. The correct answer is B.**

**Explanation:**

- **A)** 
```java
connection.setAutoCommit(true);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.commit();
```
  - This option is incorrect. Setting `autoCommit` to `true` means each individual SQL statement is committed as soon as it is executed. This does not provide transactional control over multiple statements.

- **B)** 
```java
connection.setAutoCommit(false);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.commit();
```
  - This option is correct. Setting `autoCommit` to `false` disables the default auto-commit mode, allowing multiple SQL statements to be executed as part of a single transaction. The `commit` method is then used to commit the transaction.

- **C)** 
```java
connection.setAutoCommit(false);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.rollback();
```
  - This option is incorrect. Although it correctly sets `autoCommit` to `false`, it calls `rollback` instead of `commit`, which undoes all changes made in the transaction.

- **D)** 
```java
connection.setTransaction(true);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.commit();
```
  - This option is incorrect. There is no `setTransaction` method in the `Connection` class. The correct method to manage transactions is `setAutoCommit(false)`.


**6. The correct answer is C.**

**Explanation:**

- **A)** 
```java
Savepoint savepoint1 = connection.setSavepoint();
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.rollback(savepoint1);
connection.commit();
```
  - This option is incorrect. While it correctly creates a savepoint and rolls back to it, it commits the transaction right after the rollback, so any statements after the rollback are not executed.

- **B)** 
```java
Savepoint savepoint1 = connection.setSavepoint();
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.rollback();
statement.executeUpdate("INSERT INTO users (id, name) VALUES (3, 'Jane')");
connection.commit();
```
  - This option is incorrect. Although it sets a savepoint and rolls back, it uses `connection.rollback()` without specifying the savepoint, which rolls back the entire transaction, not just to the savepoint.

- **C)** 
```java
Savepoint savepoint1 = connection.setSavepoint("Savepoint1");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.rollback(savepoint1);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (3, 'Jane')");
connection.commit();
```
  - This option is correct. It sets a savepoint, performs some updates, rolls back to the savepoint, executes additional updates, and then commits the transaction. This sequence ensures that the first set of updates is undone, and the second set is applied.

- **D)** 
```java
Savepoint savepoint1 = connection.savepoint("Savepoint1");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (1, 'John')");
statement.executeUpdate("INSERT INTO users (id, name) VALUES (2, 'Doe')");
connection.rollbackToSavepoint(savepoint1);
statement.executeUpdate("INSERT INTO users (id, name) VALUES (3, 'Jane')");
connection.commit();
```
  - This option is incorrect. The method `savepoint` does not exist in the `Connection` class. The correct method to create a savepoint is `setSavepoint`. Additionally, the method `rollbackToSavepoint` does not exist; the correct method is `rollback(Savepoint)`.


**7. The correct answer is C.**

**Explanation:**

- **A)** 
```java
finally {
    if (statement != null) {
        statement.close();
    }
    if (connection != null) {
        connection.close();
    }
}
```
  - This option is incorrect. While it checks for `null` before closing, it does not handle the potential `SQLException` that might be thrown by the `close` methods.

- **B)** 
```java
finally {
    try {
        statement.close();
        connection.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```
  - This option is incorrect. It tries to close the resources without checking if they are `null` first, which can lead to a `NullPointerException` if the resources were never initialized.

- **C)**
```java
finally {
    try {
        if (statement != null) {
            statement.close();
        }
        if (connection != null) {
            connection.close();
        }
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```
  - This option is correct. It checks if the `statement` and `connection` are not `null` before attempting to close them and properly handles any `SQLException` that might be thrown in the process.

- **D)** 
```java
finally {
    statement.close();
    connection.close();
}
```
  - This option is incorrect. It directly calls `close` on the resources without checking if they are `null` and does not handle `SQLException`, which can lead to a `NullPointerException` or unhandled exceptions if the resources were not properly initialized.
