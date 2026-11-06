# BusinessApplicationRef

# BusinessApplicationRef

Import this model from the entry point of its package:

```typescript
import { BusinessApplicationRef } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Reference type. Must be `BUSINESS_APPLICATION`. | [default to undefined]
**id** | `string` | Existing Business Application id in the tenant. | [default to undefined]
**name** | **(optional)** `string` | Business Application display name. Ignored on write; responses are enriched from the Business Application. | [default to undefined]
**sanctionedStatus** | **(optional)** `SanctionedStatus` | Sanctioned status of the linked Business Application. Ignored on write; responses are enriched from the Business Application. | [readonly] [default to undefined]
**correlationType** | **(optional)** `CorrelationType` | Correlation type for this reference. On write: omit or `MANUAL` (default). `AUTOMATIC` is rejected (`400`). On response: may be `MANUAL` or `AUTOMATIC`. | [default to undefined]

