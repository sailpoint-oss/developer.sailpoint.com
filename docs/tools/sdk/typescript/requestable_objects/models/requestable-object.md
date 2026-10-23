# RequestableObject

# RequestableObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Id of the requestable object itself | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of the requestable object | [default to undefined]
**created** | **(optional)** `string` | The time when the requestable object was created | [default to undefined]
**modified** | **(optional)** `string` | The time when the requestable object was last modified | [default to undefined]
**description** | **(optional)** `string` | Description of the requestable object. | [default to undefined]
**type** | **(optional)** `RequestableObjectType` |  | [default to undefined]
**requestStatus** | **(optional)** `RequestableObjectRequestStatus` |  | [default to undefined]
**identityRequestId** | **(optional)** `string` | If *requestStatus* is *PENDING*, indicates the id of the associated account activity. | [default to undefined]
**ownerRef** | **(optional)** `IdentityReferenceWithNameAndEmail` |  | [default to undefined]
**requestCommentsRequired** | **(optional)** `boolean` | Whether the requester must provide comments when requesting the object. | [default to undefined]

