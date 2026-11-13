# IdentityV2

# IdentityV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the identity. | [default to undefined]
**name** | **(optional)** `string` | Display name of the identity. | [default to undefined]
**alias** | **(optional)** `string` | Alternate unique identifier of the identity. Equivalent to the account name on the authoritative source. | [default to undefined]
**type** | **(optional)** `string` | The identity type. | [default to undefined]
**emailAddress** | **(optional)** `string` | Email address of the identity. | [default to undefined]
**identityStatus** | **(optional)** `string` | The identity\'s status in the system. | [default to undefined]
**processingState** | **(optional)** `string` | The processing state of the identity. | [default to undefined]
**_protected** | **(optional)** `boolean` | Whether the identity is protected from accidental deletion or modification. | [default to false]
**correlated** | **(optional)** `boolean` | Whether the identity is correlated to an authoritative account. | [default to false]
**inactive** | **(optional)** `boolean` | Whether the identity is inactive. | [default to false]
**isManager** | **(optional)** `boolean` | Whether this identity is a manager of another identity. | [default to false]
**locked** | **(optional)** `boolean` | Whether the identity is locked. | [default to false]
**disabled** | **(optional)** `boolean` | Whether the identity is disabled. | [default to false]
**manager** | **(optional)** `IdentityV2Manager` |  | [default to undefined]
**lifecycleState** | **(optional)** `IdentityV2LifecycleState` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of the identity. | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the identity. | [default to undefined]
**synced** | **(optional)** `string` | Last time the identity was synchronized to search. | [default to undefined]
**lastRefresh** | **(optional)** `string` | The last time the identity was refreshed by the system. | [default to undefined]
**privilegeLevel** | **(optional)** `IdentityV2PrivilegeLevel` |  | [default to undefined]

