# RoleMiningSessionParametersDto

# RoleMiningSessionParametersDto

Import this model from the entry point of its package:

```typescript
import { RoleMiningSessionParametersDto } from '@sailpoint/angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The ID of the role mining session | [default to undefined]
**name** | **(optional)** `string` | The session\'s saved name | [default to undefined]
**minNumIdentitiesInPotentialRole** | **(optional)** `number` | Minimum number of identities in a potential role | [default to undefined]
**pruneThreshold** | **(optional)** `number` | The prune threshold to be used or null to calculate prescribedPruneThreshold | [default to undefined]
**saved** | **(optional)** `boolean` | The session\'s saved status | [default to true]
**scope** | **(optional)** `RoleMiningSessionScope` |  | [default to undefined]
**type** | **(optional)** `RoleMiningRoleType` |  | [default to undefined]
**state** | **(optional)** `RoleMiningSessionState` |  | [default to undefined]
**scopingMethod** | **(optional)** `RoleMiningSessionScopingMethod` |  | [default to undefined]

