---
id: source-created
---

# Source Created

## Event context

Source Created events occur when a new source is successfully created via the API or the Admin UI.

Some uses cases for this trigger include:

- Provide evidence to show auditors that connector logic and sources are not manipulated outside of proper change control processes.
- Auto-configure new sources with proper owners using external data sources.

An example input from this trigger is as follows:

```json
{
  "id": "2c9180866166b5b0016167c32ef31a66",
  "name": "Test source",
  "type": "DIRECT_CONNECT",
  "created": "2021-03-29T22:01:50.474Z",
  "connector": "active-directory",
  "actor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  }
}
```

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Created-Event-Trigger-Input) -->
