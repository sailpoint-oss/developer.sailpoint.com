# CommonAccessItemResponse

# CommonAccessItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Common Access Item ID | [optional] 
**access** | [**CommonAccessItemAccess**](common-access-item-access) |  | [optional] 
**status** | **CommonAccessItemState** |  | [optional] 
**last_updated** | **str** |  | [optional] 
**reviewed_by_user** | **bool** |  | [optional] 
**last_reviewed** | **str** |  | [optional] 
**created_by_user** | **str** |  | [optional] 
\}

## Example

```python
from sailpoint.iai_common_access.models.common_access_item_response import CommonAccessItemResponse

common_access_item_response = CommonAccessItemResponse(
id='',
access=sailpoint.iai_common_access.models.common_access_item_access.Common Access Item Access(
                    id = '', 
                    type = 'ACCESS_PROFILE', 
                    name = '', 
                    description = '', 
                    owner_name = '', 
                    owner_id = '', ),
status='CONFIRMED',
last_updated='',
reviewed_by_user=True,
last_reviewed='',
created_by_user=''
)

```
[[Back to top]](#) 

