# RoleMiningPotentialRoleSourceUsage

# RoleMiningPotentialRoleSourceUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identity ID | [optional] 
**display_name** | **str** | Display name for the identity | [optional] 
**email** | **str** | Email address for the identity | [optional] 
**usage_count** | **int** | The number of days there has been usage of the source by the identity. | [optional] 
\}

## Example

```python
from sailpoint.iai_role_mining.models.role_mining_potential_role_source_usage import RoleMiningPotentialRoleSourceUsage

role_mining_potential_role_source_usage = RoleMiningPotentialRoleSourceUsage(
id='2c918089762475180176267f894b54dc',
display_name='Kirk Koepp',
email='kirk.koepp@testmail.identitynow.com',
usage_count=25
)

```
[[Back to top]](#) 

