# MachineAccountV2AllOfOwners

# MachineAccountV2AllOfOwners

Import this model from the entry point of its package:

```typescript
import { MachineAccountV2AllOfOwners } from '@sailpoint/angular-sdk/machine_accounts';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary** | **(optional)** `BaseReferenceDto` | The identity selected as the primary owner. | [default to undefined]
**secondary** | **(optional)** `Array<BaseReferenceDto>` | The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both. | [default to undefined]

