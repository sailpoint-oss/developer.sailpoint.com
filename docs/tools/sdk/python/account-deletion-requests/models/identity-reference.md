# IdentityReference

# IdentityReference

The manager for the identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
\}

## Example

```python
from sailpoint.account_deletion_requests.models.identity_reference import IdentityReference

identity_reference = IdentityReference(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 

