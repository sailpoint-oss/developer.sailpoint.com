# RoleMetadataBulkUpdateByFilterRequest

# RoleMetadataBulkUpdateByFilterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | `string` | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [default to undefined]
**operation** | `string` | The operation to be performed | [default to undefined]
**replaceScope** | **(optional)** `string` | The choice of update scope. | [default to undefined]
**values** | `Array<RoleMetadataBulkUpdateByFilterRequestValuesInner>` | The metadata to be updated, including attribute key and value. | [default to undefined]

