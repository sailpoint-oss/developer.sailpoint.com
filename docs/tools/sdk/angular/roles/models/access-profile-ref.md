# AccessProfileRef

# AccessProfileRef

Import this model from the entry point of its package:

```typescript
import { AccessProfileRef } from '@sailpoint/angular-sdk/roles';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the Access Profile | [default to undefined]
**type** | **(optional)** `string` | Type of requested object. This field must be either left null or set to \'ACCESS_PROFILE\' when creating an Access Profile, otherwise a 400 Bad Request error will result. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the Access Profile. This field is ignored on input. | [default to undefined]

