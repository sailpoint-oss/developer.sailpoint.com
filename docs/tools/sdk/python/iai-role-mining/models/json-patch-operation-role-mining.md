# JsonPatchOperationRoleMining

# JsonPatchOperationRoleMining

A JSONPatch Operation for Role Mining endpoints, supporting only remove and replace operations as defined by [RFC 6902 - JSON Patch](https://tools.ietf.org/html/rfc6902)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** |  **Enum** [  'remove',    'replace' ] | The operation to be performed | [required]
**path** | **str** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**value** | [**JsonPatchOperationRoleMiningValue**](json-patch-operation-role-mining-value) |  | [optional] 
\}

## Example

```python
from sailpoint.iai_role_mining.models.json_patch_operation_role_mining import JsonPatchOperationRoleMining

json_patch_operation_role_mining = JsonPatchOperationRoleMining(
op='replace',
path='/description',
value=New description
)

```
[[Back to top]](#) 

