# EntitlementV2

# EntitlementV2

Import this model from the entry point of its package:

```typescript
import { EntitlementV2 } from '@sailpoint/angular-sdk/entitlements';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The entitlement id | [default to undefined]
**name** | **(optional)** `string` | The entitlement name | [default to undefined]
**attribute** | **(optional)** `string` | The entitlement attribute name | [default to undefined]
**value** | **(optional)** `string` | The value of the entitlement | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The object type of the entitlement from the source schema | [default to undefined]
**description** | **(optional)** `string` | The description of the entitlement | [default to undefined]
**privilegeLevel** | **(optional)** `EntitlementV2PrivilegeLevel` |  | [default to undefined]
**tags** | **(optional)** `Array<string>` | List of tags assigned to the entitlement | [default to undefined]
**cloudGoverned** | **(optional)** `boolean` | True if the entitlement is cloud governed | [default to false]
**requestable** | **(optional)** `boolean` | True if the entitlement is able to be directly requested | [default to false]
**owner** | **(optional)** `EntitlementV2Owner` |  | [default to undefined]
**manuallyUpdatedFields** | **(optional)**  | A map of entitlement fields that have been manually updated. The key is the field name in UPPER_SNAKE_CASE format, and the value is true or false to indicate if the field has been updated. | [default to undefined]
**accessModelMetadata** | **(optional)** `EntitlementV2AccessModelMetadata` |  | [default to undefined]
**created** | **(optional)** `string` | Time when the entitlement was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the entitlement was last modified | [default to undefined]
**source** | **(optional)** `EntitlementV2Source` |  | [default to undefined]
**attributes** | **(optional)**  | A map of free-form key-value pairs from the source system | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Entitlement is assigned. | [default to undefined]
**directPermissions** | **(optional)** `Array<PermissionDTO>` |  | [default to undefined]

