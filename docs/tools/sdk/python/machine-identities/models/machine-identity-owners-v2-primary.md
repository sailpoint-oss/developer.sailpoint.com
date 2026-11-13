# MachineIdentityOwnersV2Primary

# MachineIdentityOwnersV2Primary

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
from sailpoint.machine_identities.models.machine_identity_owners_v2_primary import MachineIdentityOwnersV2Primary

machine_identity_owners_v2_primary = MachineIdentityOwnersV2Primary(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

