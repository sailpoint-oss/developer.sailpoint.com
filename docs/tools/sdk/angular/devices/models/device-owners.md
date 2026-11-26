# DeviceOwners

# DeviceOwners

Import this model from the entry point of its package:

```typescript
import { DeviceOwners } from '@sailpoint/angular-sdk/devices';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `DeviceOwnersPrimary` |  | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [default to undefined]

