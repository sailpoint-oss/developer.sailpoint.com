# ReelectRequest

# ReelectRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_id** | **str** | The UUID of the identity proposed to be re-elected as the resource owner. | [optional] 
**campaign_name** | **str** | The name of the campaign or election process for re-electing the owner. | [optional] 
**reviewers** | **[]str** | A list of UUIDs representing the identities of reviewers participating in the re-election process. | [optional] 
\}

## Example

```python
from sailpoint.data_access_security.models.reelect_request import ReelectRequest

reelect_request = ReelectRequest(
owner_id='c1a2b3d4-e5f6-7890-abcd-1234567890ab',
campaign_name='Annual Resource Owner Election',
reviewers=["d4e5f6a7-b8c9-0123-4567-89abcdef0123","e7f8g9h0-i1j2-3456-7890-klmnopqrstuv"]
)

```
[[Back to top]](#) 

