# ConfigurationItemRequest

# ConfigurationItemRequest

Import this model from the entry point of its package:

```typescript
import { ConfigurationItemRequest } from '@sailpoint/angular-sdk/work_reassignment';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassignedFromId** | **(optional)** `string` | The identity id to reassign an item from | [default to undefined]
**reassignedToId** | **(optional)** `string` | The identity id to reassign an item to | [default to undefined]
**configType** | **(optional)** `ConfigTypeEnum` |  | [default to undefined]
**startDate** | **(optional)** `string` | The date from which to start reassigning work items | [default to undefined]
**endDate** | **(optional)** `string` | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [default to undefined]

