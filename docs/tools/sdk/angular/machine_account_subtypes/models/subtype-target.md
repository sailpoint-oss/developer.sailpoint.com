# SubtypeTarget

# SubtypeTarget

Import this model from the entry point of its package:

```typescript
import { SubtypeTarget } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | Type of the target. | [default to undefined]
**id** | **(optional)** `string` | Source ID for a `SOURCE` target, or connector type for a `CONNECTOR` target. | [default to undefined]
**name** | **(optional)** `string` | Name of the source or connector. | [default to undefined]
**supportsProvisioning** | **(optional)** `boolean` | Indicates whether the target supports provisioning. Only returned when you get a single subtype by ID. | [default to false]

