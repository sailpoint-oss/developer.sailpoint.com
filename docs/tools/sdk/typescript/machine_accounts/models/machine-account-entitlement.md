# MachineAccountEntitlement

# MachineAccountEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**attribute** | **(optional)** `string` | The name of the account attribute that holds the entitlement. | [default to undefined]
**value** | **(optional)** `string` | The value of the entitlement. | [default to undefined]
**description** | **(optional)** `string` | The description of the entitlement. | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The source schema object type of the entitlement. | [default to undefined]
**privileged** | **(optional)** `boolean` | Indicates whether the entitlement is privileged. | [default to false]
**cloudGoverned** | **(optional)** `boolean` | Indicates whether the entitlement is governed in the cloud. | [default to false]
**requestable** | **(optional)** `boolean` | Indicates whether the entitlement can be requested. | [default to false]
**attributes** | **(optional)**  | Additional attributes of the entitlement. | [default to undefined]
**source** | **(optional)** `BaseReferenceDto` | The source the entitlement belongs to. | [default to undefined]
**owner** | **(optional)** `BaseReferenceDto` | The owner of the entitlement. | [default to undefined]

