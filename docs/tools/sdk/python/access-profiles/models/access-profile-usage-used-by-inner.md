# AccessProfileUsageUsedByInner

# AccessProfileUsageUsedByInner

Role using the access profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ROLE' ] | DTO type of role using the access profile. | [optional] 
**id** | **str** | ID of role using the access profile. | [optional] 
**name** | **str** | Display name of role using the access profile. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_usage_used_by_inner import AccessProfileUsageUsedByInner

access_profile_usage_used_by_inner = AccessProfileUsageUsedByInner(
type='ROLE',
id='2c8180857a9b3da0017aa03418480f9d',
name='Manager Role'
)

```
[[Back to top]](#) 

