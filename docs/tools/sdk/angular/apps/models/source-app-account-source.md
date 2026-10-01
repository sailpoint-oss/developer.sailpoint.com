# SourceAppAccountSource

# SourceAppAccountSource

Import this model from the entry point of its package:

```typescript
import { SourceAppAccountSource } from '@sailpoint/angular-sdk/apps';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The source ID | [default to undefined]
**type** | **(optional)** `string` | The source type, will always be \"SOURCE\" | [default to undefined]
**name** | **(optional)** `string` | The source name | [default to undefined]
**useForPasswordManagement** | **(optional)** `boolean` | If the source is used for password management | [default to false]
**passwordPolicies** | **(optional)** `Array<BaseReferenceDto>` | The password policies for the source | [default to undefined]

