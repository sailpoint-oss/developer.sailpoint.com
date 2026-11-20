# AccessProfile2

# AccessProfile2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ID of the Access Profile | [default to undefined]
**name** | **(optional)** `string` | Name of the Access Profile | [default to undefined]
**description** | **(optional)** `string` | Information about the Access Profile | [default to undefined]
**created** | **(optional)** `string` | Date the Access Profile was created | [default to undefined]
**modified** | **(optional)** `string` | Date the Access Profile was last modified. | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [default to true]
**owner** | **(optional)** `OwnerReferenceDTO` |  | [default to undefined]
**source** | **(optional)** `SourceReferenceDTO` |  | [default to undefined]
**entitlements** | **(optional)** `Array<EntitlementRef>` | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [default to undefined]
**requestable** | **(optional)** `boolean` | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value **false** in this field results in a 400 error. | [default to true]
**accessRequestConfig** | **(optional)** `Requestability` |  | [default to undefined]
**revocationRequestConfig** | **(optional)** `Revocability` |  | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Access Profile is assigned. | [default to undefined]
**provisioningCriteria** | **(optional)** `ProvisioningCriteriaLevel` |  | [default to undefined]

