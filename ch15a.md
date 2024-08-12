---
layout: answer

title: "Chapter FIFTEEN"
subtitle: "Localization"
exam_objectives:
  - "Implement localization using locales, resource bundles, parse and format messages, dates, times, and numbers including currency and percentage values."
---

## Answers
**1. The correct answer is C.**

**Explanation:**

- **A)** 
```
true
true
true
French (Canada)
French (Canada)
French (Canada)
```
  - This option is incorrect because it doesn't account for the differences caused by the variant in `locale2`.

- **B)** 
```
false
true
false
French (Canada)
French (Canada, UNIX2024)
French (Canada)
```
  - This option is incorrect because it doesn't correctly represent the display name for `Locale.CANADA_FRENCH`.

- **C)** 
```
false
true
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
```
  - This option is correct. Let's break it down:

    1. `locale1.equals(locale2)` is `false` because `locale2` has a variant (`"UNIX2024"`) while `locale1` doesn't.
    2. `locale1.equals(locale3)` is `true` because `Locale.CANADA_FRENCH` is equivalent to `new Locale("fr", "CA")`.
    3. `locale2.equals(locale3)` is `false` because `locale2` has a variant while `locale3` doesn't.
    4. `locale1.getDisplayName(Locale.ENGLISH)` returns `"French (Canada)"`.
    5. `locale2.getDisplayName(Locale.ENGLISH)` returns `"French (Canada, UNIX2024)"`, including the variant.
    6. `locale3.getDisplayName(Locale.ENGLISH)` returns `"Canadian French"`, which is the special display name for this constant.

- **D)** 
```
false
false
false
French (Canada)
French (Canada, UNIX2024)
Canadian French
```
  - This option is incorrect because it suggests that `locale1` and `locale3` are not equal, which they are.

- **E)** The code will throw a `IllegalArgumentException` because `UNIX2024` is not a valid variant.
  - This option is incorrect. While `UNIX2024` is not a standard ISO 639 variant code, the `Locale` constructor accepts any string as a variant without throwing an exception.


**2. The correct answer is D.**

**Explanation:**

- **A)** The `Locale.Category` enum has three values: `DISPLAY`, `FORMAT`, and `LANGUAGE`.
  - This option is incorrect. The `Locale.Category` enum has only two values: `DISPLAY` and `FORMAT`. There is no `LANGUAGE` category.

- **B)** The `Locale.setDefault(Locale.Category, Locale)` method can only set the default locale for the `FORMAT` category.
  - This option is incorrect. The `Locale.setDefault(Locale.Category, Locale)` method can set the default locale for both the `DISPLAY` and `FORMAT` categories, not just `FORMAT`.

- **C)** Using `Locale.getDefault(Locale.Category)` always returns the same locale regardless of the category specified.
  - This option is incorrect. `Locale.getDefault(Locale.Category)` can return different locales depending on the category specified. The `DISPLAY` and `FORMAT` categories can have different default locales.

- **D)** The `DISPLAY` category affects the language used for displaying user interface elements, while the `FORMAT` category affects the formatting of numbers, dates, and currencies.
  - This option is correct. The `DISPLAY` category indeed affects the language used for displaying user interface elements (like error messages or GUI labels), while the `FORMAT` category affects how numbers, dates, currencies, and other locale-sensitive data are formatted.

- **E)** Locale categories were introduced in Java 8 to replace the older `Locale` methods.
  - This option is incorrect. Locale categories were added to provide more granular control over localization aspects, complementing (not replacing) the existing `Locale` methods.


**3. The correct answer is D.**

**Explanation:**

- **A)** Resource bundles can only be stored in `.properties` files.
  - This option is incorrect. While `.properties` files are commonly used for resource bundles, Java also supports class-based resource bundles. These are Java classes that extend `ResourceBundle` and provide localized resources programmatically.

- **B)** The `ResourceBundle.getBundle()` method always throws a `MissingResourceException` if the requested bundle is not found.
  - This option is incorrect. The `ResourceBundle.getBundle()` method does not always throw a `MissingResourceException` if the requested bundle is not found. It follows a fallback mechanism, trying to find the most specific bundle, then falling back to more general bundles, and finally to the default bundle.

- **C)** When searching for a resource bundle, Java only considers the specified locale and its language.
  - This option is incorrect. When searching for a resource bundle, Java considers not only the specified locale and its language but also the country, variant, and even the default locale. It follows a well-defined lookup procedure to find the most appropriate bundle.

- **D)** If a key is not found in a specific locale's resource bundle, Java will look for it in the parent locale's bundle.
  - This option is correct. Java implements a parent chain fallback mechanism for resource bundles. If a key is not found in the specific locale's bundle, it will look in the parent locale's bundle. For example, if a key is not found in a `fr_FR` (French France) bundle, it will look in the `fr` (French) bundle, and then in the default bundle.

- **E)** Resource bundles are loaded dynamically at runtime, so changes to `.properties` files are immediately reflected in the running application.
  - This option is incorrect. Resource bundles are typically loaded when `ResourceBundle.getBundle()` is called and then cached. Changes to .properties files are not immediately reflected in a running application. The application usually needs to be restarted or the resource bundle cache cleared for changes to take effect.


**4. The correct answer is A.**

**Explanation:**

- **A)** 
```
red
blue
```
  - This option is correct. Let's break down the code execution:
      1. Properties are set and stored in the `config.properties` file.
      2. `props.clear()` removes all properties from the `props` object.
      3. `System.out.println(props.getProperty("color", "red"))` prints `red` because the properties have been cleared, so it uses the default value.
      4. The properties are loaded from the file.
      5. `System.out.println(props.getProperty("color", "red"))` now prints `blue` because it's loaded from the file.

- **B)** 
```
blue
blue
```
  - This option is incorrect. It doesn't account for the `clear()` method call which empties the properties before the first print statement.

- **C)** 
```
red
red
```
  - This option is incorrect. It doesn't account for the successful loading of properties from the file before the second print statement.

- **D)** The code will throw a `FileNotFoundException`.
  - This option is incorrect. The code creates the file in the first `try-with-resources` block, so it should exist for the second block to read from.

- **E)** 
```
null
blue
```
  - This option is incorrect. `getProperty()` returns the default value `red` when the property is not found, not `null`.


**5. The correct answer is B.**

**Explanation:**

- **A)** The code will throw a `IllegalArgumentException` because the date format is invalid. 
  - This option is incorrect. The date format `"long"` is valid in `MessageFormat` and will not throw an exception.

- **B)** The output will include the date in long format, the name `"Alice"`, the number 3, the word `"apples"`, and the price in US currency format.
  - This option is correct. The `MessageFormat` will correctly format each parameter according to the specified pattern:
   - `{0, date, long}` will format the `Date` in long format (`"June 1, 2023"`)
   - `{1}` will simply insert `"Alice"`
   - `{2,number,integer}` will format 3 as an integer
   - `{3}` will insert "apples"
   - `{4,number,currency}` will format 19.99 as currency according to the US locale (`"$19.99"`)


- **C)** The `{2,number,integer}` format will display 3 as `"3.0"`.
  - This option is incorrect. The `{2,number,integer}` format will display 3 as `"3"`, not `"3.0"`. The integer format doesn't include decimal places.

- **D)** The code will not compile because `MessageFormat` doesn't accept a `Locale` in its constructor.
  - This option is incorrect. `MessageFormat` does have a constructor that accepts a `Locale`. The code will compile successfully.

- **E)** The `{4,number,currency}` format will always display the price in USD, regardless of the `Locale`.
  - This option is incorrect. The currency format will use the locale specified in the `MessageFormat` constructor, which in this case is `Locale.US`. If a different locale were used, the currency symbol and formatting could change.


**6. The correct answer is A.**

**Explanation:**

- **A)** The `NumberFormat.getCurrencyInstance()` method returns a formatter that can format monetary amounts according to the specified locale's conventions.
  - This option is correct. The `getCurrencyInstance()` method of `NumberFormat` returns a currency formatter for the specified locale (or the default locale if none is specified). This formatter applies the appropriate currency symbol, digit grouping, and decimal separator according to the locale's conventions.

- **B)** `NumberFormat` is a concrete class that can be instantiated directly using its constructor.
  - This option is incorrect. `NumberFormat` is an abstract class and cannot be instantiated directly. Instead, you obtain instances through its static factory methods like `getInstance()`, `getCurrencyInstance()`, or `getPercentInstance()`.

- **C)** The `setMaximumFractionDigits()` method in `NumberFormat` can only accept values between 0 and 3.
  - This option is incorrect. The `setMaximumFractionDigits()` method is not limited to the range of 0 to 3.

- **D)** When parsing strings, `NumberFormat` always throws a `ParseException` if the input doesn't exactly match the expected format.
  - This option is incorrect. `NumberFormat` is generally lenient when parsing. It will attempt to parse as much of the string as it can recognize as a number, and will only throw a `ParseException` if it can't parse any part of the string as a number.

- **E)** The `NumberFormat` class can only format and parse integer values, not floating-point numbers.
  - This option is incorrect. `NumberFormat` can format and parse both integer and floating-point numbers. It provides methods like `setMaximumFractionDigits()` and `setMinimumFractionDigits()` specifically for handling decimal places in floating-point numbers.


**7. The correct answer is A.**

**Explanation:**

- **A)** 
```
2023-06-15 10:30 EDT America/New_York
2023-06-15 23:30 JST Asia/Tokyo
```
  - This option is correct. Let's break down the formatter pattern:
       - `"yyyy-MM-dd HH:mm"` formats the date and time
       - `"z"` outputs the short name of the zone, like EDT or JST
       - `"VV"` outputs the full time zone ID, like `America/New_York` or `Asia/Tokyo`
       The second line shows the correct time in Tokyo, which is 13 hours ahead of New York.

- **B)** 
```
2023-06-15 10:30 EDT New_York
2023-06-15 23:30 JST Tokyo
```
  - This option is incorrect. The `"VV"` pattern outputs the full time zone ID, not just the city name.

- **C)** 
```
2023-06-15 10:30 -04:00 America/New_York
2023-06-15 23:30 +09:00 Asia/Tokyo
```
  - This option is incorrect. The `"z"` pattern outputs the short name of the zone (EDT, JST), not the offset.

- **D)** 
```
2023-06-15 10:30 America/New_York
2023-06-15 23:30 Asia/Tokyo
```
  - This option is incorrect. It's missing the short zone names (EDT, JST) that the `"z"` pattern should output.

- **E)** The code will throw a `DateTimeException` because the formatter pattern is invalid.
  - This option is incorrect. The formatter pattern is valid and will not throw an exception.
