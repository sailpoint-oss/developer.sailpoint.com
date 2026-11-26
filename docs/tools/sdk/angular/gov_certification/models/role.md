# Role

# Role

Import this model from the entry point of its package:

```typescript
import { Role } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the Role | [default to undefined]
**name** | **(optional)** `string` | The name of the Role | [default to undefined]
**description** | **(optional)** `string` | Information about the Role | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility. | [default to false]
**owner** | **(optional)** `IdentityReference` |  | [default to undefined]
**revocable** | **(optional)** `boolean` | Indicates whether the Role can be revoked or requested | [default to false]
**assignmentId** | **(optional)** `string` | the ID of the role assignment | [default to undefined]
**endDate** | **(optional)** `string` | The date when a user\'s access expires. | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementReference>` | A list of entitlement references associated to this Role. | [default to undefined]
**accessProfiles** | **(optional)** `Array<AccessProfileReference>` | A list of access profile references associated to this Role. | [default to undefined]

