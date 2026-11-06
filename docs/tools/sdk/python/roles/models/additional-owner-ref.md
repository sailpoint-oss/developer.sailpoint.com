# AdditionalOwnerRef

# AdditionalOwnerRef

Reference to an additional owner (identity or governance group).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP' ] | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [optional] 
**id** | **str** | ID of the identity or governance group. | [optional] 
**name** | **str** | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [optional] 
\}

## Example

```python
from sailpoint.roles.models.additional_owner_ref import AdditionalOwnerRef

additional_owner_ref = AdditionalOwnerRef(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='support'
)

```
[[Back to top]](#) 

