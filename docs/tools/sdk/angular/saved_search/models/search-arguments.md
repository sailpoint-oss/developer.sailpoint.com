# SearchArguments

# SearchArguments

Import this model from the entry point of its package:

```typescript
import { SearchArguments } from '@sailpoint/angular-sdk/saved_search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleId** | **(optional)** `string` | The ID of the scheduled search that triggered the saved search execution.  | [default to undefined]
**owner** | **(optional)** `TypedReference` | The owner of the scheduled search being tested.  | [default to undefined]
**recipients** | **(optional)** `Array<TypedReference>` | The email recipients of the scheduled search being tested.  | [default to undefined]

