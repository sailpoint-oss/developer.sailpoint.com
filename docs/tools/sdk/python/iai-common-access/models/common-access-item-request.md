# CommonAccessItemRequest

# CommonAccessItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**status** | **CommonAccessItemState** |  | [optional] 
\}

## Example

```python
from sailpoint.iai_common_access.models.common_access_item_request import CommonAccessItemRequest

common_access_item_request = CommonAccessItemRequest(
access=sailpoint.iai_common_access.models.common_access_item_access.Common Access Item Access(
                    id = '', 
                    type = 'ACCESS_PROFILE', 
                    name = '', 
                    description = '', 
                    owner_name = '', 
                    owner_id = '', ),
status='CONFIRMED'
)

```
[[Back to top]](#) 

