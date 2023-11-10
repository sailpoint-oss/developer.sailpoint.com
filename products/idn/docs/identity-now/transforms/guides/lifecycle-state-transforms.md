---
id: lifecycle-state-transform
title: Lifecycle State Transform
pagination_label: Lifecycle State Transform
sidebar_label: Lifecycle State Transform
sidebar_class_name: lifecycleStateTransform
keywords: ['transforms', 'guides', 'nested', 'lifecycle']
description: Learn how to build a lifecycle state transform
sidebar_position: 4
slug: /docs/transforms/guides/lifecycle-state-transform
tags: ['Transforms', 'Guides', 'Lifecycle']
---

## Overview

In this guide we will walk through a lifecycle state transform that requires nesting transforms together to achieve your desired result.

A lifecycle state is a status that an identity can be in for example, `active`, `inactive` and `terminated`. You can then use this lifecycle state in IdentityNow to determine the access of an identity.

## Determine Lifecycle State from End Date attribute

The scenario is as follows. If the end date is greater than 25 days from today the transform will return `active`. If the end date is between 7 and 25 days from today then the transform will return `activePendingTermination`. If the end date is between 0 and 7 days from today then the transform will return `inactivePendingTermination`. Finally, if the end date is in the past, the transform will return `terminated`.

The table shows conditions and expected outcomes.

| Condition                     | Return Value               |
| ----------------------------- | -------------------------- |
| end date within 0-7 Days      | inactivePendingTermination |
| end date within 7-25 Days out | activePendingTermination   |
| end date 25 Days or more      | active                     |
| end date in past              | terminated                 |

I will use a delimited file to show how this can be accomplished. The file contents will be in the following format.

:::caution

This example and dates assume that the `now` keyword in the dateMath expression returns 2023-11-07.

:::

| id     | email                        | first_name | last_name | end_date   |
| ------ | ---------------------------- | ---------- | --------- | ---------- |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | Hamilton  | 2023-11-01 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2023-11-09 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2023-11-25 |
| 100013 | keifer.sutherland@sailpoint.com | Keifer | Sutherland | 2023-12-25 |

### Check if End Date Is in the Past

The first part of the transform will check if the `end_date` attribute is in the past. We will determine this with `dateCompare`, `dateFormat` and `dateMath`.

We will use the [dateCompare](../operations/date-compare.md) operation to check that today is less than our end_date. In order to use the dateCompare operation the dates must be in the `ISO8601` format.

On lines 10-17 we use the [dathMath](../operations/date-math.md) operation to pull out the date `now` which represents the current moment in time and the [dateFormat](../operations/date-format.md) operation to convert it into the `ISO8601` format for comparison.

On lines 21-31 we use the dateFormat operation to convert the end date provided from the source to `ISO8601`. In this example the format of the end_date attribute on the source is `YYYY-MM-dd`.

Finally, on lines 34-36 we use the comparison operator greater than or equal to `gte`. If the current date is greater than or equal to the end date then the comparison will return true meaning that the end date is in the past otherwise it will return false.

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

### Check if End Date Is Within 7 Days

As the next part of this transform we will check that the `end_date` attribute is less than 7 days from now. We will also use `dateCompare`, `dateFormat` and `dateMath` for this comparison.

On line 27, we use the dateMath operation to add 7 days to the current date `now+7d`. We pull in the end date the same as before and convert both to ISO8601 for comparison.

On line 34-36, we use the comparison operator less than or equal to `lte`. Using the result from the previous check, if the end_date is not in the past and is less than 7 days out then our end date is between 0-7 days.

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

### Check if End Date Is Within 25 Days

The last comparison we need for this transform checks that the `end_date` attribute is between 7-25 days from now. We will also use `dateCompare`, `dateFormat` and `dateMath` for this comparison.

On line 27, we use the dateMath operation to add 25 days to the current date `now+25d`. We pull in the end date the same as before and convert both to ISO8601 for comparison.

On line 34-36, we use the comparison operator less than or equal to `lte`. Using a combination of the checks above, if the end date is not in the past, and is not less than 7 days but is less than 25 days we know it must be between 7-25 days.

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

Now that we have checks in place to see if the end date is in the past, within 7 days, and within 25 days we can calculate our lifecycle state using [velocity if/else logic](https://people.apache.org/~henning/velocity/html/ch05s03.html) within the static transform.

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

Logic within the static transform

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

The results of the transform on each identity given that `now` returns 2023-11-07.

| id     | email                        | first_name | last_name | end_date   | result |
| ------ | ---------------------------- | ---------- | --------- | ---------- | ------ |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | Hamilton  | 2023-11-01 | terminated |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2023-11-09 | inactivePendingTermination |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2023-11-25 | activePendingTermination |
| 100013 | keifer.sutherland@sailpoint.com | Keifer | Sutherland | 2023-12-25 | active |
