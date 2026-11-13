# AccessItemDiff

# AccessItemDiff


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the id of the access item | [optional] 
**event_type** |  **Enum** [  'ADD',    'REMOVE' ] |  | [optional] 
**display_name** | **str** | the display name of the access item | [optional] 
**source_name** | **str** | the source name of the access item | [optional] 
\}

## Example

```python
from sailpoint.identity_history.models.access_item_diff import AccessItemDiff

access_item_diff = AccessItemDiff(
id='',
event_type='ADD',
display_name='',
source_name=''
)

```
[[Back to top]](#) 

