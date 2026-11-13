# RoleMiningSessionResponse

# RoleMiningSessionResponse

Import this model from the entry point of its package:

```typescript
import { RoleMiningSessionResponse } from '@sailpoint/angular-sdk/iai_role_mining';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **(optional)** `RoleMiningSessionScope` |  | [default to undefined]
**minNumIdentitiesInPotentialRole** | **(optional)** `number` | Minimum number of identities in a potential role | [default to undefined]
**scopingMethod** | **(optional)** `string` | The scoping method of the role mining session | [default to undefined]
**prescribedPruneThreshold** | **(optional)** `number` | The computed (or prescribed) prune threshold for this session | [default to undefined]
**pruneThreshold** | **(optional)** `number` | The prune threshold to be used for this role mining session | [default to undefined]
**potentialRoleCount** | **(optional)** `number` | The number of potential roles | [default to undefined]
**potentialRolesReadyCount** | **(optional)** `number` | The number of potential roles which have completed processing | [default to undefined]
**status** | **(optional)** `RoleMiningSessionStatus` |  | [default to undefined]
**emailRecipientId** | **(optional)** `string` | The id of the user who will receive an email about the role mining session | [default to undefined]
**createdBy** | **(optional)** `RoleMiningSessionResponseCreatedBy` |  | [default to undefined]
**identityCount** | **(optional)** `number` | The number of identities | [default to undefined]
**saved** | **(optional)** `boolean` | The session\'s saved status | [default to false]
**name** | **(optional)** `string` | The session\'s saved name | [default to undefined]
**dataFilePath** | **(optional)** `string` | The data file path of the role mining session | [default to undefined]
**id** | **(optional)** `string` | Session Id for this role mining session | [default to undefined]
**createdDate** | **(optional)** `string` | The date-time when this role mining session was created. | [default to undefined]
**modifiedDate** | **(optional)** `string` | The date-time when this role mining session was completed. | [default to undefined]
**type** | **(optional)** `RoleMiningRoleType` |  | [default to undefined]

