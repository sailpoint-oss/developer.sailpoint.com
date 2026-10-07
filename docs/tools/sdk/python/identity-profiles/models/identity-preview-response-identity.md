# IdentityPreviewResponseIdentity

# IdentityPreviewResponseIdentity

Identity's basic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's display name. | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_preview_response_identity import IdentityPreviewResponseIdentity

identity_preview_response_identity = IdentityPreviewResponseIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

