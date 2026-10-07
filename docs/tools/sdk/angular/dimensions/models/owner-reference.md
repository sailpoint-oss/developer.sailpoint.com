# OwnerReference

# OwnerReference

Import this model from the entry point of its package:

```typescript
import { OwnerReference } from '@sailpoint/angular-sdk/dimensions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Owner type. This field must be either left null or set to \'IDENTITY\' on input, otherwise a 400 Bad Request error will result. | [default to undefined]
**id** | **(optional)** `string` | Owner\'s identity ID. | [default to undefined]
**name** | **(optional)** `string` | Owner\'s name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner\'s display name, otherwise a 400 Bad Request error will result. | [default to undefined]

