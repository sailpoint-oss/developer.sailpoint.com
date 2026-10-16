# ReviewableRole

# ReviewableRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the Role | [default to undefined]
**name** | **(optional)** `string` | The name of the Role | [default to undefined]
**description** | **(optional)** `string` | Information about the Role | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates if the entitlement is a privileged entitlement | [default to undefined]
**owner** | **(optional)** `IdentityReferenceWithNameAndEmail` |  | [default to undefined]
**revocable** | **(optional)** `boolean` | Indicates whether the Role can be revoked or requested | [default to undefined]
**endDate** | **(optional)** `string` | The date when a user\'s access expires. | [default to undefined]
**accessProfiles** | **(optional)** `Array<ReviewableAccessProfile>` | The list of Access Profiles associated with this Role | [default to undefined]
**entitlements** | **(optional)** `Array<ReviewableEntitlement>` | The list of entitlements associated with this Role | [default to undefined]

