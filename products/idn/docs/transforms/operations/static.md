---
id: static
slug: /docs/transforms/operations/static
---
# Static

## Overview

Use the static transform to return a fixed string value, or more commonly, to evaluate [Velocity Template Language](https://velocity.apache.org/engine/1.7/user-guide.html). The latter implementation is often useful when you are using if/then/else logic or iterating through a for loop. The static transform can also take other dynamically provided variables as inputs into the `value` attribute.

### Other Considerations

> - When you are using static transforms within the create profile for a source, you can enter the value directly in the input field if the user selects Static as the attribute type.
> - Because IdentityNow supports the ability to order attributes in a create profile, you can use the Velocity template of an attribute higher in the list to generate a static value for an attribute that is lower in the list. For example, if you wanted to generate an email address based on a display name, you would need to do the follwing:
  >   - Move the "displayName" attribute higher in the list so that it is created before the email address.
  >   - In the "mail" attribute, select Static for the attribute type. In the Static Value field, enter `$displayName@yourdomain.com.`

## Transform Structure

In addition to the standard `type` and `name` attributes, the static transform requires a value attribute to be specified:

```json
{
  "attributes": {
    "value": "Employee"
  },
  "type": "static",
  "name": "Static Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `static.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **value** - This must evaluate to a JSON string either through a fixed value or through conditional logic using Velocity Template Language.

- **Optional Attributes**
  - The static transform can implement variables within the `value` expression. These variables can be defined as optional attributes within the transform and can themselves be the results of other transforms.
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform uses a dynamic variable called `workerType`, which is set to the value of the user's HR record's empType value. The static transform then returns that value through the use of Velocity variable notation (i.e., `$<variableName>`).

**Transform Request Body**:

```json
{
  "attributes": {
    "workerType": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "empType"
      },
      "type": "accountAttribute"
    },
    "value": "$workerType"
  },
  "type": "static",
  "name": "Static Transform"
}
```

---

<p>&nbsp;</p>

This transform extends the previous one to show how you can use if/else logic to return data based on contingent logic.

**Transform Request Body**:

```json
{
  "attributes": {
    "workerType": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "empType"
      },
      "type": "accountAttribute"
    },
    "value": "#if($workerType=='Employee')Full-Time#{else}Contingent#end"
  },
  "type": "static",
  "name": "Static Transform"
}
```

## References

- [https://velocity.apache.org/engine/1.7/user-guide.html](https://velocity.apache.org/engine/1.7/user-guide.html)
