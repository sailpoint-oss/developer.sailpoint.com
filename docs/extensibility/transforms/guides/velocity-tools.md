---
id: velocity-tools
title: Use Velocity tools in transforms
pagination_label: Velocity Tools
sidebar_label: Velocity Tools
sidebar_class_name: velocityTools
keywords: ['transforms', 'guides', 'velocity', 'dateTool', 'mathTool', 'numberTool', 'escapeTool']
description: Use the date, number, math, and escape Velocity tools in transform templates.
sidebar_position: 6
slug: /extensibility/transforms/guides/velocity-tools
tags: ['Transforms', 'Guides', 'Velocity']
---

## Overview

The global template context of every transform includes four [Apache Velocity Tools](https://velocity.apache.org/tools/3.1/tools-summary.html). These are the same tools that email templates use. You can use them in any string that goes through the template engine, in any transform type. With them, you can do date, number, and text work in one expression. You do not need a long chain of nested transforms, Java workarounds, or a cloud rule.

| Variable | Tool | Use it to |
| --- | --- | --- |
| `$__dateTool` | [DateTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/DateTool.html) | Parse a date string, get the current date, read parts of a date, and format a date. |
| `$__mathTool` | [MathTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/MathTool.html) | Add, subtract, multiply, divide, round, and find the largest or smallest value. |
| `$__numberTool` | [NumberTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/NumberTool.html) | Format numbers with leading zeros, decimal places, thousands separators, or a currency sign. |
| `$__esc` | [EscapeTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/EscapeTool.html) | Make values safe for URLs, XML, HTML, and JavaScript. |

In this guide, you will learn how to:

- [Find the latest of several dates](#find-the-latest-of-several-dates).
- [Get the number of days between two dates](#get-the-number-of-days-between-two-dates).
- [Do arithmetic on numbers](#do-arithmetic-on-numbers).
- [Format numbers](#format-numbers).
- [Get and format the current date](#get-and-format-the-current-date).
- [Format for another locale](#format-for-another-locale).
- [Escape values](#escape-values).
- [Use the tools in other transform types](#use-the-tools-in-other-transform-types).

Most examples in this guide use a `static` transform, because it is the easiest place to write a long template.

## Before you start

Read these rules before you write a template with the tools:

- **The variable names start with `__`.** For example, use `$__dateTool`. The names `$dateTool`, `$date`, and `$math` do not work.
- **Do not name your own variables with a leading `__`.** SailPoint keeps this prefix for the tools.
- **Transform values are strings.** MathTool and NumberTool change numeric strings to numbers for you. For example, `$__mathTool.add("10", 5)` returns `15`.
- **An undefined variable or an unknown method stops the transform.** The transform fails with the error `Error rendering template`. Give each input a default value, for example with a [first valid](../operations/first-valid.md) transform.
- **The default time zone is GMT, and the default locale is `en_US`.** For example, `$__numberTool.currency(1234.56)` returns `$1,234.56`. To use a different locale, refer to [Format for another locale](#format-for-another-locale).
- **Escape double quotes in JSON.** A date pattern such as `"yyyy-MM-dd'T'HH:mm:ss'Z'"` must be written as `\"yyyy-MM-dd'T'HH:mm:ss'Z'\"` inside the `value` string.

## Find the latest of several dates

A common need is the last date that a user was active across many sources. For example, Active Directory has `lastLogon`, `lastLogonTimestamp`, `pwdLastSet`, and `whenCreated`. Microsoft Entra ID has `lastSignInDateTime` and `lastNonInteractiveSignInDateTime`.

### Before: integer workaround

The [find latest date](https://github.com/sailpoint-oss/colab-transforms/tree/main/transforms/find-latest-date) CoLab transform solved this without the tools. It used a workaround:

1. Change each date to the `yyMMddHH` format, so that the date fits in a 32-bit integer.
2. Get access to `parseInt` through an integer variable (`$max.parseInt(...)`).
3. Loop over the values to find the largest one.
4. Wrap the result in a `dateFormat` transform to change `yyMMddHH` back to ISO8601. Then wrap that in a `firstValid` transform.

This is the template from that transform:

```velocity
#set($max=-10)#set($array = [$max.parseInt($adLastLogon),$max.parseInt($adLastLogonTimestamp),$max.parseInt($adPwdLastSet),$max.parseInt($adWhenCreated),$max.parseInt($azureLastInteractive),$max.parseInt($azureLastNonInteractive)])#foreach($val in $array)#if($val > $max)#set($max = $val)#end#end#if($max > 0)$max#end
```

The workaround has these problems:

- The result keeps only the hour. The minutes, seconds, and milliseconds are lost.
- The two-digit year in `yyMMddHH` works only until 2099.
- The template is hard to read and hard to debug.

### After: one MathTool expression

With the tools, you change two things:

1. Set `outputFormat` to `EPOCH_TIME_JAVA` in each nested `dateFormat` transform. Each date is then a number of milliseconds.
2. Replace the template with one expression. `$__mathTool.max` finds the largest number, and `$__dateTool.format` changes it to an ISO8601 string.

```velocity
$__dateTool.format("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", $__mathTool.max($adLastLogon, $adLastLogonTimestamp, $adPwdLastSet, $adWhenCreated, $azureLastInteractive, $azureLastNonInteractive))
```

The outer `firstValid` and `dateFormat` wrappers are not necessary. The `static` transform is now the root transform.

For an identity with a `pwdLastSet` value of `131932642710076565`, the two versions return these values:

| Version | Result |
| --- | --- |
| Before | `2019-01-29T19:00:00.000Z` |
| After | `2019-01-29T19:37:51.007Z` |

<details>
<summary>Full transform after the change</summary>

Keep the `firstValid` default for each date. If an account does not have an attribute, the default value prevents an undefined variable.

```json
{
  "name": "LastActiveDate",
  "type": "static",
  "attributes": {
    "adLastLogon": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "lastLogon",
                  "sourceName": "Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "125911584000000000"
                }
              }
            ]
          }
        },
        "inputFormat": "EPOCH_TIME_WIN32",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "adLastLogonTimestamp": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "lastLogonTimestamp",
                  "sourceName": "Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "125911584000000000"
                }
              }
            ]
          }
        },
        "inputFormat": "EPOCH_TIME_WIN32",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "adPwdLastSet": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "pwdLastSet",
                  "sourceName": "Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "125911584000000000"
                }
              }
            ]
          }
        },
        "inputFormat": "EPOCH_TIME_WIN32",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "adWhenCreated": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "whenCreated",
                  "sourceName": "Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "20000101010000.0Z"
                }
              }
            ]
          }
        },
        "inputFormat": "yyyyMMddHHmmss.S'Z'",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "azureLastInteractive": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "lastSignInDateTime",
                  "sourceName": "Azure Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "2000-01-01T00:00:00Z"
                }
              }
            ]
          }
        },
        "inputFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "azureLastNonInteractive": {
      "type": "dateFormat",
      "attributes": {
        "input": {
          "type": "firstValid",
          "attributes": {
            "values": [
              {
                "type": "accountAttribute",
                "attributes": {
                  "attributeName": "lastNonInteractiveSignInDateTime",
                  "sourceName": "Azure Active Directory"
                }
              },
              {
                "type": "static",
                "attributes": {
                  "value": "2000-01-01T00:00:00Z"
                }
              }
            ]
          }
        },
        "inputFormat": "yyyy-MM-dd'T'HH:mm:ss'Z'",
        "outputFormat": "EPOCH_TIME_JAVA"
      }
    },
    "value": "$__dateTool.format(\"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'\", $__mathTool.max($adLastLogon, $adLastLogonTimestamp, $adPwdLastSet, $adWhenCreated, $azureLastInteractive, $azureLastNonInteractive))"
  }
}
```

</details>

## Get the number of days between two dates

Before the tools, no transform returned a number of days. The [date compare](../operations/date-compare.md) transform returns only one of two values, and the [date math](../operations/date-math.md) transform adds or subtracts a fixed time. Many users wrote a cloud rule to get a day count.

To get the number of days, do these steps in one template:

1. Parse each date with `$__dateTool.toDate(format, value)`.
2. Use `.time` to get the date as milliseconds.
3. Subtract the two values with `$__mathTool.sub`.
4. Divide by `86400000` (the number of milliseconds in one day) with `$__mathTool.div`.
5. Remove the decimal part with `$__mathTool.toInteger`.

This transform returns the number of days from `startDate` to `endDate`:

```json
{
  "name": "Days Between Dates",
  "type": "static",
  "attributes": {
    "startDate": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "start_date"
      }
    },
    "endDate": {
      "type": "accountAttribute",
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "end_date"
      }
    },
    "value": "#set($f = 'MM/dd/yyyy')$__mathTool.toInteger($__mathTool.div($__mathTool.sub($__dateTool.toDate($f, $endDate).time, $__dateTool.toDate($f, $startDate).time), 86400000))"
  }
}
```

If `startDate` is `06/05/2025` and `endDate` is `06/08/2025`, the transform returns `3`.

To count the days from a date until today, use `$__dateTool.date` (the current date) in place of the second date:

```velocity
$__mathTool.toInteger($__mathTool.div($__mathTool.sub($__dateTool.date.time, $__dateTool.toDate('yyyy-MM-dd', $lastSignIn).time), 86400000))
```

:::caution

Do not use `$__mathTool.idiv` with millisecond values. The `idiv` method changes its inputs to 32-bit integers before it divides, and millisecond values are too large. For example, `$__mathTool.idiv("1762400000000", 86400000)` returns `16`, not `20398`.

:::

## Do arithmetic on numbers

Velocity treats a transform value as a string. The `+` operator joins two strings, and does not add them. For example, if `$employeeId` is `202500020098`, the template `#set($n = $employeeId + 1)$n` returns `2025000200981`.

Before the tools, a common workaround was to get access to `Long.parseLong` through a number variable:

```velocity
#set($Long = 202500020098)#set($val = $Long.parseLong($employeeId))#set($newVal = $val + 1)$newVal
```

With MathTool, use one method:

```velocity
$__mathTool.add($employeeId, 1)
```

This returns `202500020099`.

MathTool has these methods, among others:

| Method | Example | Result |
| --- | --- | --- |
| `add` | `$__mathTool.add("10", 5)` | `15` |
| `sub` | `$__mathTool.sub("100", 30)` | `70` |
| `mul` | `$__mathTool.mul("10", 5)` | `50` |
| `div` | `$__mathTool.div("100", 10)` | `10` |
| `max` | `$__mathTool.max("1", "5", "3", "9")` | `9` |
| `round` | `$__mathTool.round("42.567")` | `43` |
| `roundTo` | `$__mathTool.roundTo(2, "42.567")` | `42.57` |
| `toInteger` | `$__mathTool.toInteger("42.9")` | `42` |

## Format numbers

Use NumberTool to format a number as text.

### Add leading zeros

To pad an employee number to six digits, use a pattern of zeros. You do not need a separate [left pad](../operations/left-pad.md) transform:

```velocity
$__numberTool.format('000000', $employeeNumber)
```

If `$employeeNumber` is `42`, this returns `000042`.

### Add decimal places and thousands separators

```velocity
$__numberTool.format('#,##0.00', $amount)
```

If `$amount` is `1234567.891`, this returns `1,234,567.89`.

### Format as currency

```velocity
$__numberTool.currency($amount)
```

If `$amount` is `1234.56`, this returns `$1,234.56`.

## Get and format the current date

`$__dateTool.date` is the current date and time. Use `$__dateTool.format` to change a date to text:

```velocity
$__dateTool.format('yyyy-MM-dd', $__dateTool.date)
```

This returns the current date, for example `2026-11-06`.

To get part of a date, use a pattern or the `getValue` method:

| Template | Result for 2026-11-06 |
| --- | --- |
| `$__dateTool.format('EEEE', $__dateTool.toDate('yyyy-MM-dd', $d))` | `Friday` |
| `$__dateTool.getValue('DAY_OF_WEEK', $__dateTool.toDate('yyyy-MM-dd', $d))` | `6` (Sunday is `1`) |
| `$__dateTool.getYear($__dateTool.toDate('yyyy-MM-dd', $d))` | `2026` |

`$__dateTool.format` also accepts a number of milliseconds. Change the string to a number first with `$__mathTool.toNumber`:

```velocity
$__dateTool.format("yyyy-MM-dd'T'HH:mm:ss'Z'", $__mathTool.toNumber($epochMillis))
```

If `$epochMillis` is `1700000000000`, this returns `2023-11-14T22:13:20Z`.

## Format for another locale

A locale sets the language and the number format, for example the decimal sign and the currency sign. The default locale is `en_US`. You cannot change the default, but you can give a locale to each method that accepts one.

To use a different locale, do these steps:

1. Make a locale with `$__dateTool.toLocale('<language>_<country>')`. For example, use `de_DE` for German (Germany) or `fr_FR` for French (France).
2. Give the locale to the method as the last argument.

| Template | Result |
| --- | --- |
| `$__numberTool.format('currency', '1234.56', $__dateTool.toLocale('de_DE'))` | `1.234,56 €` |
| `$__numberTool.format('#,##0.00', '1234.56', $__dateTool.toLocale('de_DE'))` | `1.234,56` |
| `$__numberTool.format('currency', '1234.56', $__dateTool.toLocale('ja_JP'))` | `￥1,235` |

To format a date in a different language, use the `format` method with four arguments: the pattern, the date, the locale, and the time zone. Use `$__dateTool.timeZone` for the time zone argument:

```velocity
$__dateTool.format('EEEE d MMMM yyyy', $__mathTool.toNumber($epochMillis), $__dateTool.toLocale('fr_FR'), $__dateTool.timeZone)
```

If `$epochMillis` is `1700000000000`, this returns `mardi 14 novembre 2023`.

## Escape values

Use EscapeTool to make a value safe for the place where you use it. For example, a value in a URL or an XML document must not contain some characters.

| Method | Input | Result |
| --- | --- | --- |
| `$__esc.url($value)` | `jane.o'neil+test@example.com` | `jane.o%27neil%2Btest%40example.com` |
| `$__esc.xml($value)` | `O'Neil & Sons <Ltd>` | `O&apos;Neil &amp; Sons &lt;Ltd&gt;` |
| `$__esc.html($value)` | `O'Neil & Sons <Ltd>` | `O'Neil &amp; Sons &lt;Ltd&gt;` |
| `$__esc.javascript($value)` | `It's a "test"` | `It\'s a \"test\"` |

## Use the tools in other transform types

The tools are in the global template context. Thus, they work in every string that the template engine renders, not only in a `static` value. You do not need a `static` transform to use them.

This [concatenation](../operations/concatenation.md) transform pads a number in one of its values:

```json
{
  "name": "Padded ID",
  "type": "concat",
  "attributes": {
    "values": ["ID-", "$__numberTool.format('000000', 42)"]
  }
}
```

This transform returns `ID-000042`.

This [upper](../operations/upper.md) transform escapes its `input` before it changes the case:

```json
{
  "name": "Upper URL Value",
  "type": "upper",
  "attributes": {
    "input": "$__esc.url('jane doe@example.com')"
  }
}
```

This transform returns `JANE+DOE%40EXAMPLE.COM`.

This [date compare](../operations/date-compare.md) transform uses MathTool in its `positiveCondition`:

```json
{
  "name": "Date Compare With Math",
  "type": "dateCompare",
  "attributes": {
    "firstDate": "now",
    "secondDate": "2020-01-01T00:00:00Z",
    "operator": "gt",
    "positiveCondition": "after-$__mathTool.add(1, 2)",
    "negativeCondition": "before"
  }
}
```

This transform returns `after-3`.

## Limits

- DateTool does not have a `difference` method. To compare dates, use `.time` and MathTool, as shown in [Get the number of days between two dates](#get-the-number-of-days-between-two-dates).
- EscapeTool does not have a `json` method.
- `$__dateTool.format` does not accept a string of digits. Use `$__mathTool.toNumber` first.

## References

- [Apache Velocity Tools 3.1 summary](https://velocity.apache.org/tools/3.1/tools-summary.html)
- [DateTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/DateTool.html)
- [MathTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/MathTool.html)
- [NumberTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/NumberTool.html)
- [EscapeTool](https://velocity.apache.org/tools/3.1/apidocs/org/apache/velocity/tools/generic/EscapeTool.html)
- [Java date and time patterns](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/text/SimpleDateFormat.html)
