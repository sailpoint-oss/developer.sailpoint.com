# AccessProfileBulkDeleteRequest

# AccessProfileBulkDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_profile_ids** | **[]str** | List of IDs of Access Profiles to be deleted. | [optional] 
**best_effort_only** | **bool** | If **true**, silently skip over any of the specified Access Profiles if they cannot be deleted because they are in use. If **false**, no deletions will be attempted if any of the Access Profiles are in use. | [optional] 
\}

## Example

```python
from sailpoint.access_profiles.models.access_profile_bulk_delete_request import AccessProfileBulkDeleteRequest

access_profile_bulk_delete_request = AccessProfileBulkDeleteRequest(
access_profile_ids=["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"],
best_effort_only=True
)

```
[[Back to top]](#) 

