---
id: filtering-events
sidebar_position: 4
---

# Filtering Events

## What is a filter

Many triggers can produce a staggering amount of events if left unfiltered, resulting in more network traffic and more processing time on a subscribing service.  Most of the time, your subscribing service only needs to be notified of events that contain a key attribute or value that you are interested in processing.  For example, the Identity Attributes Changed trigger will emit an event every time an identity has a change in attributes.  This can occur during the mover process when an identity changes departments, or a manager is promoted resulting in several identities receiving a new manager.  Rather than inundate your subscribing service with every identity change, you can use an event trigger filter to specify which events your service is interested in processing.

## Benefits of using filters

Network bandwidth and processing power come at a cost, especially when using managed solutions like AWS or no code providers like Zapier.  Without filtering, a subscribing service would be sent every single event that the trigger receives.  The first thing that any subscriber would need to do in this scenario is inspect each event to figure out which ones it needs to process and which ones it can ignore.  Taking this approach with managed providers that charge per invocation, like AWS Lambda, can become expensive.  Furthermore, some no-code providers might put a limit on the total number of invocations that a service can make in a given month, which would be quickly exhausted with this approach.  Trigger filters take the filtering logic out of your subscribing service and place it on the event trigger within SailPoint, so you only receive the events that match your filter criteria.

## Constructing a filter

Filters are constructed using a [Goessner JSONpath expression](https://goessner.net/articles/JsonPath/).  

### Expressions

JSONPath expressions specify a path to an element, or array of elements, in a JSON structure.  Expressions are used to select data in a JSON structure to check for the existence of attributes or to narrow done the data where the filter logic will be applied.

| Expression | Description | Example |
| --- | --- | --- |
| $ | **Root** - The root object / element. | $ |
| @ | **Current** - The current object / element of an array. | $.changes[?(@.attribute == "department")] |
| . | **Child operator** - selects a child element of an object. | $.identity |
| .. | **Recursive descent** - JSONPath borrows this syntax from E4X. | $..id |
| * | **Wildcard** - All objects / elements regardless of their names. | $.changes[*]|
| [] | **Subscript** - In Javascript and JSON it is the native array operator. | $.changes[1].attribute |
| [,] | **Union** - Select elements of an array. | $.changes[0,1,2] |
| [start:stop:step] | **Array slice** - Select elements of an array. | $.changes[0:2:1] |
| [:n] | **Array slice** - Select the first `n` elements of an array. | $.changes[:2] |
| [-n:] | **Array slice** - Select the last `n` elements of an array. | $.changes[-1:] |
| ?() | **Filter expression** - Applies a filter expression. | $[?($.identity.name == "john.doe")] |
| () | **Script expression** - Applies a script expression. | $.changes[(@.length-1)] |

### Operators

JSONPath operators provide more options to filter JSON structures.

| Operator | Description | Example |
| --- | --- | --- |
| == | **Equals to** -  Evaluates to `true` if operands match. | $[?($.identity.name == "john.doe")] |
| != | **Not equal to** - Evaluates to `true` if operands don't match. | $[?($.identity.name != "george.washington")] |
| > | **Greater than** - Evaluates to `true` if the left operand is greater than the right operand.  Works on strings and numbers. | $[?($.attributes.created > '2020-04-27T16:48:33.200Z')] |
| >= | **Greater than or equal to** - Evaluates to `true` if the left operand is greater than or equal to the right operand. | $[?($.attributes.created >= '2020-04-27T16:48:33.597Z')] |
| < | **Less than** - Evaluates to `true` if the left operand is less than the right operand. | $[?($.attributes.created < '2020-04-27T16:48:33.200Z')] |
| <= | **Less than or equal to** - Evaluates to `true` if the left operand is less than or equal to the right operand. | $[?($.attributes.created <= '2020-04-27T16:48:33.200Z')] |
| && | Logical **AND** operator that evaluates `true` only if both conditions are `true`. | $.changes[?(@.attribute == "cloudLifecycleState" && @.newValue == "terminated")] |
| ! | **Not** - negate the boolean expression. | $.identity.attributes[?(!@.alternateEmail)] |
| \|\| | Logical **OR** operator that evaluates `true` if at least one condition is `true`. | $.changes[?(@.attribute == "cloudLifecycleState" \|\| @.attribute == "department")] |
| contains | **Contains** - Checks if a string contains the specified substring (case-sensitive). | $[?($.identity.name contains "john")] |

### Developing Filters

Development of a filter can go faster when using a tool like an online [JSONpath editor](https://jsonpath.herokuapp.com/).  These tools can provide quick feedback on your filter, allowing you to hone in on the exact filter expression you want before testing it in IdentityNow.  Be aware, however, that these online tools might have subtle differences compared with SailPoint's implementation of Goessner JSONpath.  Always test your JSONpath filter in IdentityNow before using it in production.

Start by opening a [JSONpath editor](https://jsonpath.herokuapp.com/) in your browser.  Make sure that the correct implementation is selected, if there is more than one option.  You can then paste in an example trigger input and start crafting your JSONpath expression.

![JSONPath editor](./img/jsonpath-editor.png)

Most of the examples provided in the operator tables above can be used against the Identity Attributes Changed event trigger input, as seen below.  You can find all of the input/output schemas for the other available triggers in our [API specification](https://developer.sailpoint.com/apis/beta/#section/Available-Event-Triggers).

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

## Validating filters

When you are finished developing your JSONpath filter, you need to validate it with SailPoint's trigger service.  There are two ways to do this: with the UI or the API.

### Validating filters using the UI

To validate a filter using the UI, subscribe to a new event trigger or edit an existing one.  In the configuration options, paste your JSONpath expression in the `Filter` input box and then click `Update`.  If you don't receive an error message, then your filter expression should be valid with SailPoint.

![UI filter](./img/ui-filter.png)

### Validating filters using the API

You can validate a trigger filter using the [validate filter](https://developer.sailpoint.com/apis/beta/#operation/validateFilter) API endpoint.  You will need to escape any double quotes, as seen in the example payload in the API description.  Also, you will need to provide a sample input for the validation engine to run against.  It is best to use the input example included in the input/output schemas for the event trigger you wish to apply your filter to.  Please see [this table](https://developer.sailpoint.com/apis/beta/#section/Available-Event-Triggers) to find the schema of your event trigger.  An example request is as follows:

POST `https://{tenant}.api.identitynow.com/beta/trigger-subscriptions/validate-filter`

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

## Testing filters

If your trigger filter is accepted by SailPoint, then you will want to test that it actually works.  You will need to configure your trigger subscription to point to the URL of your testing service.  [webhook.site](https://webhook.site) is an easy to use testing service.  Just copy the unique URL that it generates and paste it into integration URL field of your subscription.  The easist way to test a trigger subscription is to use the UI to fire off a test event.

![test subscription](./img/test-subscription.png)

Once you fire off a test event, monitor your webhook.site webpage for an incoming event.  If the filter matches the test input, you should see an event come in.  If the filter doesn't match the input, then it won't fire.  It's good to test both scenarios to make sure your filter isn't always evaluating to `true`, and that it will indeed evaluate to `false` under the correct circumstances.  For example, the filter `$[?($.identity.name contains "john")]` will match the test event for Identity Attributes Changed and you will see an event in webhook.site, but you will also want to make sure that `$[?($.identity.name contains "archer")]` doesn't fire, since the test input is always the same.

If you want to control the test input to validate your filter against a more robust set of data, then you can use the [test invocation](https://developer.sailpoint.com/apis/beta/#operation/startTestInvocation) API endpoint.