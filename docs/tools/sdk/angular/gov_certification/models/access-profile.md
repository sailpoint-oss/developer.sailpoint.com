# AccessProfile

# AccessProfile

Import this model from the entry point of its package:

```typescript
import { AccessProfile } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id of the Access Profile | [default to undefined]
**name** | **(optional)** `string` | Name of the Access Profile | [default to undefined]
**description** | **(optional)** `string` | Information about the Access Profile | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access profile contains any entitlements that are privileged. Retained for backward compatibility. | [default to false]
**cloudGoverned** | **(optional)** `boolean` | True if the access profile is cloud governed. | [default to false]
**endDate** | **(optional)** `string` | The date at which a user\'s access expires | [default to undefined]
**owner** | **(optional)** `IdentityReference` |  | [default to undefined]
**sourceName** | **(optional)** `string` | The name of the source for which this entitlement belongs | [default to undefined]
**sourceType** | **(optional)** `string` | The type of the source for which the entitlement belongs | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source for which the entitlement belongs | [default to undefined]
**created** | **(optional)** `string` | Date the Access Profile was created. | [default to undefined]
**modified** | **(optional)** `string` | Date the Access Profile was last modified. | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementReference>` | A list of entitlement references associated to this access profile. | [default to undefined]

