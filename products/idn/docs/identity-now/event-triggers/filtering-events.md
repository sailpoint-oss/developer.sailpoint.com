---
id: filtering-events
title: Filtering Events
pagination_label: Filtering Events
sidebar_label: Filtering Events
sidebar_position: 4
sidebar_class_name: filteringEvents
keywords: ['filtering', 'events']
description: Many triggers can produce a staggering amount of events if left unfiltered. Event filtering helps you solve this problem.
slug: /docs/event-triggers/filtering-events
tags: ['Event Triggers']
---

## What is a Filter

Many triggers can produce a staggering amount of events if left unfiltered, resulting in more network traffic and more processing time on a subscribing service. Your subscribing service usually only needs to be notified of events containing a key attribute or value you want to process. For example, the Identity Attributes Changed trigger emits an event whenever an identity has a change in attributes. This can occur during the mover process when an identity changes departments or a manager is promoted, resulting in several identities receiving a new manager. Rather than inundate your subscribing service with every identity change, you can use an event trigger filter to specify which events your service is interested in processing.

## Benefits of Using Filters

Network bandwidth and processing power come at a cost, especially when you are using managed solutions like AWS or no-code providers like Zapier. Without filtering, a subscribing service would be sent every single event that the trigger receives. The first thing any subscriber must do in this scenario is inspect each event to figure out which ones it must process and which ones it can ignore. Taking this approach with managed providers that charge per invocation, like AWS Lambda, can become expensive. Furthermore, some no-code providers may put a limit on the total number of invocations that a service can make in a given month, which would be quickly exhausted with this approach. Trigger filters take the filtering logic out of your subscribing service and place it on the event trigger within SailPoint, so you only receive the events matching your filter criteria.

## Constructing a Filter

Event trigger filters are constructed using a **Jayway** JSONpath expression. See the following tables for a list of operators that can be used in a trigger filter.

:::info Update

SailPont's Workflow tool uses **Goessner** JSONpath when selecting variables to use in actions and operators. Please read the [Goessner](https://goessner.net/articles/JsonPath/) documentation to learn more about the supported operators.

Although variable selection in Workflows uses Goessner, the trigger filter field in Workflows still follows the Jayway operators listed below.

:::

### Expressions

Expressions specify a path to an element or array of elements in a JSON structure. Expressions are used to select data in a JSON structure to check for the existence of attributes or to narrow down the data where the filter logic is applied.

| Expression | Description | Example |
| --- | --- | --- |
| $ | **Root** - The root object / element. | $ |
| @ | **Current** - The current object / element of an array. | $.changes[?(@.attribute == "department")] |
| . | **Child operator** - Selects a child element of an object. | $.identity |
| .. | **Recursive descent** - JSONPath borrows this syntax from E4X. | $..id |
| \* | **Wildcard** - All objects / elements regardless of their names. | $.changes[*] |
| [] | **Subscript** - In Javascript and JSON, it is the native array operator. | $.changes[1].attribute |
| [,] | **Union** - Selects elements of an array. | $.changes[0,1,2] |
| [start:stop:step] | **Array slice** - Selects elements of an array. | $.changes[0:2:1] |
| [:n] | **Array slice** - Selects the first `n` elements of an array. | $.changes[:2] |
| [-n:] | **Array slice** - Selects the last `n` elements of an array. | $.changes[-1:] |
| ?() | **Filter expression** - Applies a filter expression. | $[?($.identity.name == "john.doe")] |
| () | **Script expression** - Applies a script expression. | $.changes[(@.length-1)] |

### Functions

Functions can be invoked at the tail end of a path - the input to a function is the output of the path expression. The function output is dictated by the function itself.

| Function | Description | Output type | Example |
| --- | --- | --- | --- |
| length() | Provides the length of an array | Integer | $[?($.changes.length() >= 3)] |

### Operators

Operators provide more options to filter JSON structures.

| Operator | Description | Example |
| --- | --- | --- |
| == | **Equals to** - Evaluates to `true` if operands match. | $[?($.identity.name == "john.doe")] |
| != | **Not equal to** - Evaluates to `true` if operands do not match. | $[?($.identity.name != "george.washington")] |
| > | **Greater than** - Evaluates to `true` if the left operand is greater than the right operand. It works on strings and numbers. | $[?($.attributes.created > '2020-04-27T16:48:33.200Z')] |
| >= | **Greater than or equal to** - Evaluates to `true` if the left operand is greater than or equal to the right operand. | $[?($.attributes.created >= '2020-04-27T16:48:33.597Z')] |
| < | **Less than** - Evaluates to `true` if the left operand is less than the right operand. | $[?($.attributes.created < '2020-04-27T16:48:33.200Z')] |
| <= | **Less than or equal to** - Evaluates to `true` if the left operand is less than or equal to the right operand. | $[?($.attributes.created <= '2020-04-27T16:48:33.200Z')] |
| =~ | **Regular expression** - Evaluates to `true` if the left operand matches the regular expression. | $.changes[?(@.attribute == "department" && @.newValue =~ /US.*Support/i)] |
| in | **In** - Evaluates to `true` if the left operand exists in the list of values on the right. | $.changes[?(@.attribute == 'department' && @.newValue in ['sales','engineering'])] |
| nin | **Not in** - Evaluates to `true` if the left operand **does not** exist in the list of values on the right. | $.changes[?(@.attribute == 'department' && @.newValue nin ['sales','engineering'])] |
| subsetof | **Subset of** - Evaluates to `true` if the left operand is a subset of the right. | $[?($.warnings subsetof ['Account skipped','Invalid account'])] |
| anyof | **Any of** - Evaluates to `true` if the left operand has an intersection with the right. | $[?($.warnings anyof ['Account skipped','Invalid account'])] |
| noneof | **None of** - Evaluates to `true` if the left operand **does not** have an intersection with the right. | $[?($.warnings anyof ['Account skipped','Invalid account'])] |
| size | **Size** - Evaluates to `true` if the size of the left (array or string) matches the right. | $[?($.warnings size 1] |
| && | Logical **AND** operator that evaluates `true` only if both conditions are `true`. | $.changes[?(@.attribute == "cloudLifecycleState" && @.newValue == "terminated")] |
| ! | **Not** - Negates the boolean expression. | $.identity.attributes[?(!@.alternateEmail)] |
| \|\| | Logical **OR** operator that evaluates `true` if at least one condition is `true`. | $.changes[?(@.attribute == "cloudLifecycleState" \|\| @.attribute == "department")] |
| contains | **Contains** - Checks whether a string contains the specified substring (case sensitive). | $[?($.identity.name contains "john")] |

### Developing Filters

Developing a filter can be faster when you use a tool like an online [JSONpath editor](https://www.javainuse.com/jsonpath). These tools can provide quick feedback on your filter, allowing you to focus on the exact filter expression you want before testing it on a trigger.  Just paste an example of your event trigger input and start crafting an expression to see its result.

![JSONPath editor](./img/jsonpath-editor.png)

Most of the examples provided in the operator tables above can be used against the Identity Attributes Changed event trigger input, as seen below. You can find all of the input/output schemas for the other available triggers in our [API specification](/idn/api/beta/triggers#available-event-triggers).

```json
{
  "identity": {
    "id": "ee769173319b41d19ccec6cea52f237b",
    "name": "john.doe",
    "type": "IDENTITY"
  },
  "changes": [
    {
      "attribute": "department",
      "oldValue": "Sales",
      "newValue": "Marketing"
    },
    {
      "attribute": "manager",
      "oldValue": {
        "id": "ee769173319b41d19ccec6c235423237b",
        "name": "robert.brown",
        "type": "IDENTITY"
      },
      "newValue": {
        "id": "ee769173319b41d19ccec6c235423236c",
        "name": "mary.johnson",
        "type": "IDENTITY"
      }
    },
    {
      "attribute": "cloudLifecycleState",
      "oldValue": "active",
      "newValue": "terminated"
    }
  ]
}
```

## Validating Filters

When you are finished developing your JSONpath filter, you must validate it with SailPoint's trigger service. There are two ways to do this: use the UI or the API.

### Validating Filters Using the UI

To validate a filter using the UI, subscribe to a new event trigger or edit an existing one. In the configuration options, paste your JSONpath expression in the `Filter` input box and select `Update`. If you do not receive an error message, then your filter expression is valid with SailPoint.

![UI filter](./img/ui-filter.png)

### Validating Filters Using the API

You can validate a trigger filter by using the [validate filter](/idn/api/beta/validate-filter) API endpoint. You must escape any double quotes, as seen in the example payload in the API description. Also, you must provide a sample input for the validation engine to run against. It is best to use the input example included in the input/output schemas for the event trigger you want to apply your filter to. Refer to [this table](/idn/api/beta/triggers#available-event-triggers) to find the schema of your event trigger. This is an example request:

```text
POST https://{tenant}.api.identitynow.com/beta/trigger-subscriptions/validate-filter
```

```json
{
  "input": {
    "identity": {
      "id": "ee769173319b41d19ccec6cea52f237b",
      "name": "john.doe",
      "type": "IDENTITY"
    },
    "changes": [
      {
        "attribute": "department",
        "oldValue": "Sales",
        "newValue": "Marketing"
      },
      {
        "attribute": "manager",
        "oldValue": {
          "id": "ee769173319b41d19ccec6c235423237b",
          "name": "robert.brown",
          "type": "IDENTITY"
        },
        "newValue": {
          "id": "ee769173319b41d19ccec6c235423236c",
          "name": "mary.johnson",
          "type": "IDENTITY"
        }
      },
      {
        "attribute": "cloudLifecycleState",
        "oldValue": "active",
        "newValue": "terminated"
      }
    ]
  },
  "filter": "$[?($.identity.name == \"john.doe\")]"
}
```

## Testing Filters

If SailPoint accepts your trigger filter, you must test whether it actually works. You must configure your trigger subscription to point to the URL of your testing service. [webhook.site](https://webhook.site) is an easy to use testing service. Just copy the unique URL it generates and paste it into your subscription's integration URL field. The easiest way to test a trigger subscription is to use the UI to fire off a test event.

![test subscription](./img/test-subscription.png)

Once you fire off a test event, monitor your webhook.site webpage for an incoming event. If the filter matches the test input, you will an event come in. If the filter does not match the input, then it will nott fire. Test both scenarios to make sure your filter is not always evaluating to `true`, and that it will indeed evaluate to `false` under the correct circumstances. For example, the filter `$[?($.identity.name contains "john")]` will match the test event for Identity Attributes Changed and you will see an event in webhook.site, but you also want to make sure that `$[?($.identity.name contains "archer")]` doesn't fire because the test input is always the same.

If you want to control the test input to validate your filter against a more robust set of data, use the [test invocation](/idn/api/beta/start-test-invocation) API endpoint.
