---
layout: answer

title: "Chapter ELEVEN"
subtitle: "The Date API"
exam_objectives:
  - "Manipulate date, time, duration, period, instant and time-zone objects using Date-Time API."
---

## Answers
**1. The correct answer is D.**

**Explanation:**

- **A)** `LocalDate.of(2014);` 
  - This option is incorrect. The `LocalDate.of()` method requires a year, month, and day to be specified. Providing only a year will result in a compilation error.

- **B)** `LocalDate.with(2014, 1, 30);`
  - This option is incorrect. The `LocalDate` class does not have a `with()` method that takes three int arguments for year, month, and day. The correct method to use is `LocalDate.of(int year, int month, int dayOfMonth)`.

- **C)** `LocalDate.of(2014, 0, 30);`
  - This option is incorrect. The month value is 0, but months in the `LocalDate` class are indexed starting from 1. Valid month values are from 1 to 12, so using 0 will throw a `DateTimeException`.

- **D)** `LocalDate.now().plusDays(5);`
  - This option is correct. It accurately obtains the current date using `LocalDate.now()` and then adds 5 days to it using the `plusDays()` method. This will create a new `LocalDate` object representing the date 5 days from now.


**2. The correct answer is C.** 

**Explanation:**

- **A)** A `LocalDate` instance representing `2014-01-02` 
  - This option is incorrect. The `atTime` method does not return a `LocalDate`, but rather combines the `LocalDate` with the provided time parameters to create a `LocalDateTime` object.

- **B)** A `LocalTime` instance representing `14:30:59:999999`
  - This option is incorrect. The `atTime` method does not return a `LocalTime`, but rather combines the `LocalDate` with the provided time parameters to create a `LocalDateTime` object. Additionally, `LocalTime` does not have nanosecond precision, so `999999` nanoseconds would be an invalid `LocalTime`.

- **C)** A `LocalDateTime` instance representing `2014-01-02 14:30:59:999999` 
  - This option is correct. The `atTime` method takes a `LocalDate` and combines it with the provided hour, minute, second, and nanosecond parameters to create a `LocalDateTime` object representing that date and time. The resulting `LocalDateTime` will be `2014-01-02 14:30:59:999999`.

- **D)** An exception is thrown
  - This option is incorrect. The provided parameters of 14 for hour, 30 for minute, 59 for second, and 999999 for nanosecond are all valid values for their respective fields, so combining them with the `LocalDate` will not throw an exception.


**3. The correct answers are B and D.**

**Explanation:**

- **A)** `YEAR`
  - This option is incorrect. `YEAR` is not a valid `ChronoUnit` for `LocalTime`. `LocalTime` represents a time of day without any date information, so units of `YEAR` do not apply.

- **B)** `NANOS`
  - This option is correct. `NANOS` is a valid `ChronoUnit` for `LocalTime`. `LocalTime` has nanosecond precision, so you can perform operations on `LocalTime` using the `NANOS` unit.

- **C)** `DAY`
  - This option is incorrect. `DAY` is not a valid `ChronoUnit` for `LocalTime`. Similar to `YEAR`, `LocalTime` has no concept of days since it only represents a time, not a date.

- **D)** `HALF_DAYS`
  - This option is correct. `HALF_DAYS` is a valid `ChronoUnit` for `LocalTime`. A day can be divided into two 12-hour periods (AM and PM), so `HALF_DAYS` can be used with `LocalTime` to represent a difference or addition of 12 hour chunks of time.


**4. The correct answers are B and C.**

**Explanation:**

- **A)** `java.time.Period` implements `java.time.temporal.Temporal`
  - This option is incorrect. `java.time.Period` does not implement the `java.time.temporal.Temporal` interface. `Period` represents a span of time between two dates and is not itself a temporal object.

- **B)** `java.time.Instant` implements `java.time.temporal.Temporal`
  - This option is correct. `java.time.Instant` does implement the `java.time.temporal.Temporal` interface. `Instant` represents a point in time on the timeline and can be thought of as a temporal object.

- **C)** `LocalDate` and `LocalTime` are thread-safe.
  - This option is correct. `LocalDate` and `LocalTime` are indeed thread-safe. All the core Java Time classes, including `LocalDate`, `LocalTime`, `LocalDateTime`, `Instant`, etc., are designed to be immutable and thread-safe.

- **D)** `LocalDateTime.now()` will return the current time in UTC zone
  - This option is incorrect. `LocalDateTime.now()` returns the current date and time using the system clock in the default time zone, not necessarily in the UTC zone. To get the current time in UTC, you would use `LocalDateTime.now(ZoneOffset.UTC)` or `Instant.now()`.


**5. The correct answer is A.**

**Explanation:**

- **A)** `int nanos = i.getNano();`
  - This option is correct. The `Instant` class does have a `getNano()` method that returns the nanosecond part of the `Instant` as an `int`. This is a valid way to get the nanoseconds.

- **B)** `long nanos = i.get(ChronoField.NANOS);`
  - This option is incorrect. You can use the `get(TemporalField)` method of `Instant` to get the value of a specific `ChronoField`. Passing `ChronoField.NANO_OF_SECOND` (not `ChronoField.NANO`) will return the nanosecond part of the `Instant` as a `long`.

- **C)** `long nanos = i.get(ChronoUnit.NANOS);`
  - This option is incorrect. While `Instant` does have a `get(TemporalUnit)` method, `ChronoUnit.NANOS` is not a valid argument for it. `ChronoUnit` values are used for durations and periods, not for fields of a temporal object.

- **D)** `int nanos = i.getEpochNano();`
  - This option is incorrect. The `Instant` class does have a `getEpochSecond()` method that returns the number of seconds since the Unix epoch, but there is no corresponding `getEpochNano()` method.



**6. The correct answer is D.**

**Explanation:**

- **A)** `P29D`
  - This option is incorrect. The `Period.between` method calculates the period between the second date and the first date, in that order. Since the first date (2025-03-20) is later than the second date (2025-02-20), the resulting period will be negative, not positive.

- **B)** `P-29D`
  - This option is incorrect. While the resulting period will be negative, it will not be represented as `-29D`. A `Period` first counts the number of complete months, then the remaining days.

- **C)** `P1M`
  - This option is incorrect. The resulting period will be negative because the first date is later than the second date.

- **D)** `P-1M`
  - This option is correct. The `Period.between` method subtracts the second date from the first date. In this case, `2025-03-20` minus `2025-02-20` results in a period of -1 month, which is represented as `P-1M`. The `Period` class first calculates the difference in complete months, and then any remaining days. Since the difference is exactly one month, the result is `P-1M`.



**7. The correct answer is D.**

**Explanation:**

- **A)** `PT5M`
  - This option is incorrect. `PT5M` represents a duration of 5 minutes, which would be the result if the second time point was 5 minutes after the first. However, since `LocalTime.of(18, 5)` is being compared to a `LocalDateTime`, this causes an issue because they are not of the same type.

- **B)** `PT-5M`
  - This option is incorrect. `PT-5M` represents a duration of negative 5 minutes. Similar to option A, this would only be the case if the second time point was before the first. The main issue is that there is a type mismatch between `LocalDateTime` and `LocalTime`.

- **C)** `PT300S`
  - This option is incorrect. `PT300S` represents a duration of 300 seconds (or 5 minutes), which again would be the result if the second time point was 5 minutes after the first. However, this still doesn't resolve the type mismatch issue between `LocalDateTime` and `LocalTime`. 

- **D)** An exception is thrown
  - This option is correct. An exception is thrown because there is a type mismatch between `LocalDateTime.of(2025, 3, 20, 18, 0)` and `LocalTime.of(18, 5)`. The `Duration.between` method requires two temporal objects of the same type.


**8. The correct answers are A and C.**

**Explanation:**

- **A)** `DAY_OF_WEEK`
  - This option is correct. `DAY_OF_WEEK` is a valid `ChronoField` value for `LocalDate`. It represents the day of the week, an integer from 1 (Monday) to 7 (Sunday), which can be extracted from a `LocalDate`.

- **B)** `HOUR_OF_DAY`
  - This option is incorrect. `HOUR_OF_DAY` is not a valid `ChronoField` value for `LocalDate`. `HOUR_OF_DAY` pertains to `LocalTime` or `LocalDateTime`, which include time components, whereas `LocalDate` only deals with date components.

- **C)** `DAY_OF_MONTH`
  - This option is correct. `DAY_OF_MONTH` is a valid `ChronoField` value for `LocalDate`. It represents the day of the month, which can be extracted from a `LocalDate`.

- **D)** `MILLI_OF_SECOND`
  - This option is incorrect. `MILLI_OF_SECOND` is not a valid `ChronoField` value for `LocalDate`. `MILLI_OF_SECOND` pertains to time components, specifically for `LocalTime` or `LocalDateTime`, and `LocalDate` only deals with date components.



**9. The correct answer is C.**

**Explanation:**

- **A)** `ZoneId.ofHours(2);`
  - This option is incorrect. The method `ofHours(int)` belongs to the `ZoneOffset` class, not `ZoneId`.

- **B)** `ZoneId.of("2");`
  - This option is incorrect. The format of the offset is incorrect for `ZoneId`. It should be a proper time-zone ID or start with a sign (`+` or `-`).

- **C)** `ZoneId.of("-1");`
  - This option is correct. `ZoneId.of("-1")` is valid since it follows the correct format for time-zone offsets.

- **D)** `ZoneId.of("America/Canada");`
  - This option is incorrect. The format for zone regions should be in the `"Area/City"` format, not `"Area/Country"`. A valid example would be `"America/Montreal"`.


**10. The correct answer is D.**

**Explanation:**

- **A)** `0`
  - This option is incorrect. The method `offset.get(ChronoField.HOUR_OF_DAY)` does not return the hour value of the `ZoneOffset`. `ZoneOffset` represents a time-zone offset from UTC/Greenwich, and calling `get(ChronoField.HOUR_OF_DAY)` on it is not appropriate.

- **B)** `1`
  - This option is incorrect. Similar to option A, the `get` method of `ZoneOffset` with `ChronoField.HOUR_OF_DAY` does not produce this result. The `ZoneOffset` class is not meant to provide such a field directly.

- **C)** `12:00`
  - This option is incorrect. `12:00` is not a valid response for the method call as it implies a time representation, while `ZoneOffset` is dealing with offset values rather than specific time of day values.

- **D)** An exception is thrown
  - This option is correct. An exception is thrown because `ZoneOffset` does not support the field `ChronoField.HOUR_OF_DAY`. The `ZoneOffset` class provides offset values in terms of seconds rather than specific chrono fields like hour of day.


**11. The correct answer is A.**

**Explanation:**

- **A)** `05:00` 
  - This option is correct. `ZonedDateTime.of(2025, 02, 28, 5, 0, 0, 0, ZoneId.of("+05:00"))` creates a `ZonedDateTime` instance with the specified date, time, and time zone offset of +05:00. Calling `toLocalTime()` on this instance returns the local time, which is `05:00`, as no conversion to the local time zone of +2:00 is done in this code snippet.

- **B)** `17:00`
  - This option is incorrect. `17:00` would be the time if the code converted the given time (05:00) from the +05:00 time zone to the local time zone of +02:00, which it does not. 

- **C)** `02:00`
  - This option is incorrect. `02:00` does not correspond to any logical result based on the given time and time zone offset.

- **D)** `03:00`
  - This option is incorrect. `03:00` also does not correspond to any logical result based on the given time and time zone offset.


**12. The correct answer is B.**

**Explanation:**

- **A)** `java.time.ZoneOffset` is a subclass of `java.time.ZoneId`.
  - This option is incorrect. `java.time.ZoneOffset` is not a subclass of `java.time.ZoneId`. `java.time.ZoneOffset` is a final class that extends `java.time.ZoneId` but it is not a subclass.

- **B)** `java.time.Instant` can be obtained from `java.time.ZonedDateTime`. 
  - This option is correct. `java.time.Instant` can indeed be obtained from `java.time.ZonedDateTime` using the `toInstant()` method.

- **C)** `java.time.ZoneOffset` represents the amount of time adjusted for daylight saving time (DST).
  - This option is incorrect. `java.time.ZoneOffset` represents the amount of time that a time-zone differs from Greenwich/UTC.

- **D)** `java.time.OffsetDateTime` represents a point in time in the UTC time zone.
  - This option is incorrect. `java.time.OffsetDateTime` represents a date-time with an offset from UTC, but it does not necessarily represent a point in the UTC time zone. The offset can be any valid `ZoneOffset`.


**13. The correct answer is C.**

**Explanation:**

- **A)** `5/7/15 4:00 PM`
  - This option is incorrect. The `DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)` method is used to format only the time portion of a `LocalDateTime` object, and it does not include the date. Therefore, the output will not include `5/7/15`.

- **B)** `5/7/15`
  - This option is incorrect. As mentioned earlier, the `DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)` formats only the time portion and does not include the date. Thus, the output `5/7/15` is not possible.

- **C)** `4:00 PM`
  - This option is correct. The `DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)` formats the time portion of the `LocalDateTime` object in a short style. Given the input time `16:00`, in the `Locale.ENGLISH`, the formatted output is `4:00 PM`.

- **D)** `4:00:00 PM`
  - This option is incorrect. The `DateTimeFormatter.ofLocalizedTime(FormatStyle.SHORT)` formats the time portion without including seconds. Therefore, the output will not include `4:00:00 PM`.


**14. The correct answer is D.**

**Explanation:**

- **A)** The pattern `HH:mm:ss X` is invalid.
  - This option is incorrect. The pattern `HH:mm:ss X` is valid. `HH` represents the hour of the day (00-23), `mm` represents the minute of the hour, `ss` represents the second of the minute, and `X` represents the ISO 8601 time zone offset.

- **B)** An `OffsetDateTime` is created successfully. 
  - This option is incorrect. The pattern `HH:mm:ss X` is valid, but the `OffsetDateTime.parse` method requires a date and time format along with the offset. Since the input string `"11:50:20 Z"` does not contain a date part, this will cause a `DateTimeParseException`.

- **C)** `Z` is an invalid offset.
  - This option is incorrect. `Z` is a valid offset representing UTC (Coordinated Universal Time).

- **D)** An exception is thrown at runtime.
  - This option is correct. An exception is thrown at runtime because the input string `"11:50:20 Z"` does not match the expected pattern for an `OffsetDateTime`, which typically includes a date part as well as the time and offset.
