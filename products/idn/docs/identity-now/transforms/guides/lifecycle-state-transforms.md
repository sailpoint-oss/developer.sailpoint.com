---
id: lifecycle-state-transform
title: Lifecycle State Transform
pagination_label: Lifecycle State Transform
sidebar_label: Lifecycle State Transform
sidebar_class_name: lifecycleStateTransform
keywords: ['transforms', 'guides', 'nested', 'lifecycle']
description: Learn how to build a lifecycle state transform.
sidebar_position: 4
slug: /docs/transforms/guides/lifecycle-state-transform
tags: ['Transforms', 'Guides', 'Lifecycle']
---

## Overview

In this guide, you will walk through a lifecycle state transform that requires you to nest multiple transforms together to achieve your desired result.

A lifecycle state is a status an identity can be in, such as `active`, `inactive` and `terminated`, for example. You can then use this lifecycle state in IdentityNow to determine an identity's access. 

## Determine lifecycle state from end date attribute

The example scenario is as follows: If the end date is greater than 25 days from today, the transform will return `active`. If the end date is between 7 and 25 days from today, the transform will return `activePendingTermination`. If the end date is between 0 and 7 days from today, the transform will return `inactivePendingTermination`. Finally, if the end date is in the past, the transform will return `terminated`.

The table shows conditions and expected outcomes.

| Condition                     | Return Value               |
| ----------------------------- | -------------------------- |
| end date within 0-7 Days      | inactivePendingTermination |
| end date within 7-25 Days out | activePendingTermination   |
| end date 25 Days or more      | active                     |
| end date in past              | terminated                 |

This example will use a delimited file to show how this can be accomplished. The file contents will be in the following format:

:::caution

This example and dates assume that the `now` keyword in the dateMath expression returns 2023-11-07.

:::

| id     | email                        | first_name | last_name | end_date   |
| ------ | ---------------------------- | ---------- | --------- | ---------- |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | Hamilton  | 2023-11-01 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2023-11-09 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2023-11-25 |
| 100013 | keifer.sutherland@sailpoint.com | Keifer | Sutherland | 2023-12-25 |

### Check whether the end date was in the past 

The first part of the transform will check whether the `end_date` attribute was in the past. You will use these transforms to do so: `dateCompare`, `dateFormat`, and `dateMath`.

First, use the [dateCompare operation](../operations/date-compare.md) to check that today is less than the specified `end_date`. To use the `dateCompare` operation, the dates must be in the `ISO8601` format, so the transform will require the use of the [dateFormat operation](../operations/date-format.md) as well. 

On lines 10-17, the [dathMath operation](../operations/date-math.md) to pull the date `now`, which represents the current moment in time. The `dateFormat` operation then converts it into the `ISO8601` format for comparison.

On lines 21-31, the `dateFormat` operation converts the end date provided from the source format (`YYYY-MM-dd`) into the `ISO8601` format. 

Finally, lines 34-36 use the comparison operator greater than or equal to `gte`. If the current date is greater than or equal to the end date, the comparison will return `true`, meaning that the end date is in the past. This would result in identity's `terminated` lifecycle state. If the current date is still less than the end date, the comparison will return `false`. 

<details>
<summary>Show Transform</summary>

```json showLineNumbers
{
  "type": "static",
  "attributes": {
    "inPast": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "YYYY-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "gte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "value": "$inPast"
  }
}
```

</details>

### Check whether end date is within 7 days

Once you have ensured that the `end_date` is in fact in the past, the next step is to check whether the `end_date` is fewer than 7 days away, 7-25 days days away, or more than 25 days away, to determine their exact lifecycle states. Start by checking whether the `end_date` is fewer than 7 days away. You will again use `dateCompare`, `dateFormat`, and `dateMath` for this comparison. 

On line 27, use the `dateMath` operation to add 7 days to the current date: `now+7d`. It pulls in the `end_date` the same way it did before, and it converts both dates to the `ISO8601` format for comparison.

Lines 34-36 use the comparison operator less than or equal to: `lte`. This uses the result from the previous check to ensure that if the `end_date` is not in the past and that it is also fewer than 7 days away, the `end_date` will indeed occur in the 0-7 days range. This would result in the identity's `inactivePendingTermination` lifecycle state. 

<details>
    <summary>Show Transform</summary>

```json showLineNumbers
{
  "type": "static",
  "attributes": {
    "Within7Days": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "yyyy-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now+7d"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "lte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "value": "$Within7Days"
  }
}
```

</details>

### Check whether end date is within 25 days

Once you have ensured that the end date is in the past and that it is not fewer than 7 days away, the last required comparison checks whether the `end_date` attribute is either between 7 and 25 days from now or more than 25 days away. You can do so by checking whether the `end_date` is fewer than 25 days away (and more than 7 days away, using the result from the previous transform). You will again use `dateCompare`, `dateFormat`, and `dateMath` for this comparison.

On line 27, the `dateMath` operation adds 25 days to the current date `now+25d`. It pulls in the end date the same way it did before, and it converts both dates to the `ISO8601` format for comparison.

Lines 34-36 use the comparison operator less than or equal to: `lte`. This uses the combination of the previous checks to ensure that if the `end_date` is not in the past, it is greater than 7 days away, and it returns `true` that it is fewer than 25 days away, then the `end_date` must fall between 7 and 25 days away. This would result in the identity's `activePendingTermination` lifecycle state. If it returns `false`, then the `end_date` must be more than 25 days away. This would result in the identity's `active` lifecycle state. 

<details>
    <summary>Show Transform</summary>

```json showLineNumbers
{
  "type": "static",
  "attributes": {
    "Within25Days": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "yyyy-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now+25d"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "lte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "value": "$Within25Days"
  }
}
```

</details>

## Putting It All Together

Now that you have taken the time to understand each of the nested transforms, you can put it all together! You can now calculate lifecycle states for the identities with the [velocity if/else logic](https://people.apache.org/~henning/velocity/html/ch05s03.html) within the static transform.

```javascript
#if($inPast=='false' && $Within7Days == 'true')
    inactivePendingTermination
#elseif($inPast == 'false' && $Within25Days == 'true')
    activePendingTermination
#elseif($inPast == 'false')
    active
#{else}
    terminated
#end
```

This is the logic within the static transform: 

```json
{
    "name": "Lifecycle State Transfrom",
    "type": "static",
    "attributes": {
        ...
        "value": "#if($inPast=='false' && $Within7Days == 'true')inactivePendingTermination#elseif($inPast == 'false' && $Within25Days == 'true')activePendingTermination#elseif($inPast == 'false')active#{else}terminated#end"
    }
}
```

<details>
    <summary>Show Complete Transform</summary>

```json
{
  "name": "Lifecycle State Transfrom",
  "type": "static",
  "attributes": {
    "inPast": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "YYYY-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "gte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "Within7Days": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "yyyy-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now+7d"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "lte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "Within25Days": {
      "type": "dateCompare",
      "attributes": {
        "firstDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "sourceName": "Example CSV",
                "attributeName": "end_date"
              }
            },
            "inputFormat": "yyyy-MM-dd",
            "outputFormat": "ISO8601"
          }
        },
        "secondDate": {
          "type": "dateFormat",
          "attributes": {
            "input": {
              "type": "dateMath",
              "attributes": {
                "expression": "now+25d"
              }
            },
            "inputFormat": "yyyy-MM-dd'T'HH:mm",
            "outputFormat": "ISO8601"
          }
        },
        "operator": "lte",
        "positiveCondition": "true",
        "negativeCondition": "false"
      }
    },
    "value": "#if($inPast=='false' && $Within7Days == 'true')inactivePendingTermination#elseif($inPast == 'false' && $Within25Days == 'true')activePendingTermination#elseif($inPast == 'false')active#{else}terminated#end"
  }
}
```

</details>

These are the results of the transform on each identity, given that `now` returns 2023-11-07:

| id     | email                        | first_name | last_name | end_date   | result |
| ------ | ---------------------------- | ---------- | --------- | ---------- | ------ |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | Hamilton  | 2023-11-01 | terminated |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2023-11-09 | inactivePendingTermination |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2023-11-25 | activePendingTermination |
| 100013 | keifer.sutherland@sailpoint.com | Keifer | Sutherland | 2023-12-25 | active |
