# RequestedItemDetails

# RequestedItemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ACCESS_PROFILE',    'ENTITLEMENT',    'ROLE' ] | The type of access item requested. | [optional] 
**id** | **str** | The id of the access item requested. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.requested_item_details import RequestedItemDetails

requested_item_details = RequestedItemDetails(
type='ENTITLEMENT',
id='779c6fd7171540bba1184e5946112c28'
)

```
[[Back to top]](#) 

