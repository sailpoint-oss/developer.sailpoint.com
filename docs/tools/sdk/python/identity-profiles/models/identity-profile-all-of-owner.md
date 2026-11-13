# IdentityProfileAllOfOwner

# IdentityProfileAllOfOwner

Identity profile's owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's object type. | [optional] 
**id** | **str** | Owner's ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_profile_all_of_owner import IdentityProfileAllOfOwner

identity_profile_all_of_owner = IdentityProfileAllOfOwner(
type='IDENTITY',
id='2c9180835d191a86015d28455b4b232a',
name='William Wilson'
)

```
[[Back to top]](#) 

