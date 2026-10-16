# AccessItemAppResponse

# AccessItemAppResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. entitlement in this case | [optional] 
**display_name** | **str** | the access item display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**app_role_id** | **str** | the app role id | [required]
\}

## Example

```python
from sailpoint.identity_history.models.access_item_app_response import AccessItemAppResponse

access_item_app_response = AccessItemAppResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='app',
display_name='Display Name',
source_name='appName',
app_role_id='2c918087763e69d901763e72e97f006f'
)

```
[[Back to top]](#) 

