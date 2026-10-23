# Entitlement

# Entitlement

Import this model from the entry point of its package:

```typescript
import { Entitlement } from '@sailpoint/angular-sdk/gov_certification';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the entitlement | [default to undefined]
**name** | **(optional)** `string` | The name of the entitlement | [default to undefined]
**description** | **(optional)** `string` | Information about the entitlement | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [default to false]
**owner** | **(optional)** `IdentityReference` |  | [default to undefined]
**attributeName** | **(optional)** `string` | The name of the attribute on the source | [default to undefined]
**attributeValue** | **(optional)** `string` | The value of the attribute on the source | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The schema object type on the source used to represent the entitlement and its attributes | [default to undefined]
**sourceName** | **(optional)** `string` | The name of the source for which this entitlement belongs | [default to undefined]
**sourceType** | **(optional)** `string` | The type of the source for which the entitlement belongs | [default to undefined]
**sourceId** | **(optional)** `string` | The ID of the source for which the entitlement belongs | [default to undefined]
**hasPermissions** | **(optional)** `boolean` | Indicates if the entitlement has permissions | [default to false]
**isPermission** | **(optional)** `boolean` | Indicates if the entitlement is a representation of an account permission | [default to false]
**revocable** | **(optional)** `boolean` | Indicates whether the entitlement can be revoked | [default to true]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to false]
**account** | **(optional)** `AccountReference` |  | [default to undefined]
**dataAccess** | **(optional)** `DataAccess` |  | [default to undefined]
**containsDataAccess** | **(optional)** `boolean` | Will be true if the dataAccess property is populated. | [default to false]
**activityInsights** | **(optional)** `ActivityInsights` |  | [default to undefined]
**provisioningType** | **(optional)** `string` | Whether the entitlement assignment is just-in-time or standing | [default to undefined]

