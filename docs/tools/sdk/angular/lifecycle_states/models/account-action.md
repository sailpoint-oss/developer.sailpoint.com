# AccountAction

# AccountAction

Import this model from the entry point of its package:

```typescript
import { AccountAction } from '@sailpoint/angular-sdk/lifecycle_states';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **(optional)** `string` | Describes if action will be enable, disable or delete. | [default to undefined]
**sourceIds** | **(optional)** `Array<string>` | A unique list of specific source IDs to apply the action to. The sources must have the ENABLE feature or flat file source. Required if allSources is not true. Must not be provided if allSources is true. Cannot be used together with excludeSourceIds See \"/sources\" endpoint for source features. | [default to undefined]
**excludeSourceIds** | **(optional)** `Array<string>` | A list of source IDs to exclude from the action. Cannot be used together with sourceIds. | [default to undefined]
**allSources** | **(optional)** `boolean` | If true, the action applies to all available sources. If true, sourceIds must not be provided. If false or not set, sourceIds is required. | [default to false]

