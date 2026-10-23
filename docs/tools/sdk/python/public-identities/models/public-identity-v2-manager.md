# PublicIdentityV2Manager

# PublicIdentityV2Manager

Manager reference for a public identity search result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Manager identity id | [required]
**name** | **str** | Manager alias / technical name | [required]
**display_name** | **str** | Manager display name. Null when absent from the search hit. | [required]
\}

## Example

```python
from sailpoint.public_identities.models.public_identity_v2_manager import PublicIdentityV2Manager

public_identity_v2_manager = PublicIdentityV2Manager(
id='2c9180a46faadee4016fb4e018c20639',
name='thomas.edison',
display_name='Thomas Edison'
)

```
[[Back to top]](#) 

