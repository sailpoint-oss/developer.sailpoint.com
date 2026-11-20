# AccessItemRef

# AccessItemRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the access item to retrieve the recommendation for. | [optional] 
**type** |  **Enum** [  'ENTITLEMENT',    'ACCESS_PROFILE',    'ROLE' ] | Access item's type. | [optional] 
\}

## Example

```python
from sailpoint.iai_recommendations.models.access_item_ref import AccessItemRef

access_item_ref = AccessItemRef(
id='2c938083633d259901633d2623ec0375',
type='ENTITLEMENT'
)

```
[[Back to top]](#) 

