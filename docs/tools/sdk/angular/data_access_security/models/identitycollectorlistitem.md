# Identitycollectorlistitem

# Identitycollectorlistitem

Import this model from the entry point of its package:

```typescript
import { Identitycollectorlistitem } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The unique identifier of the identity collector. | [default to undefined]
**name** | **(optional)** `string` | The display name of the identity collector. | [default to undefined]
**type** | **(optional)** `string` | The identity collector type, derived from its underlying source. | [default to undefined]
**sourceId** | **(optional)** `string` | The identifier of the source the identity collector is associated with, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. | [default to undefined]
**users** | **(optional)** `Identitycollectorcollectionsettings` |  | [default to undefined]
**groups** | **(optional)** `Identitycollectorcollectionsettings` |  | [default to undefined]

