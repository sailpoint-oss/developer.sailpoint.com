# PassThroughEntitlement

# PassThroughEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The id for the entitlement | [default to undefined]
**name** | **(optional)** `string` | The name of the entitlement | [default to undefined]
**created** | **(optional)** `string` | Time when the entitlement was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the entitlement was last modified | [default to undefined]
**attribute** | **(optional)** `string` | The entitlement attribute name | [default to undefined]
**value** | **(optional)** `string` | The value of the entitlement | [default to undefined]
**sourceSchemaObjectType** | **(optional)** `string` | The schema object type on the source used to represent the entitlement and its attributes | [default to undefined]
**privileged** | **(optional)** `boolean` | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the entitlement is a privileged entitlement. Retained for backward compatibility. | [default to false]
**cloudGoverned** | **(optional)** `boolean` | Indicates if the entitlement is cloud governed | [default to false]
**description** | **(optional)** `string` | Information about the entitlement | [default to undefined]
**requestable** | **(optional)** `boolean` | Indicates if the entitlement is requestable | [default to false]
**attributes** | **(optional)**  | A map of free-form key-value pairs from the source system | [default to undefined]
**source** | **(optional)** `SourceReferenceDTO` |  | [default to undefined]
**owner** | **(optional)** `OwnerReferenceDTO` |  | [default to undefined]
**directPermissions** | **(optional)** `Array<PermissionDTO>` |  | [default to undefined]
**segments** | **(optional)** `Array<string>` | List of IDs of segments, if any, to which this Entitlement is assigned. | [default to undefined]
**manuallyUpdatedFields** | **(optional)** `ManuallyUpdatedFieldsDTO` |  | [default to undefined]
**containsDataAccess** | **(optional)** `boolean` | True if the entitlement has DAS data | [default to false]
**dataAccess** | **(optional)** `DataAccess2` |  | [default to undefined]

