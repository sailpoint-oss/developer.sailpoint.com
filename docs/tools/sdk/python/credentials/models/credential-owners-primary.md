# CredentialOwnersPrimary

# CredentialOwnersPrimary

The identity selected as the primary owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.credentials.models.credential_owners_primary import CredentialOwnersPrimary

credential_owners_primary = CredentialOwnersPrimary(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

