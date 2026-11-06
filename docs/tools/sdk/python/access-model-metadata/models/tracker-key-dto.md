# TrackerKeyDTO

# TrackerKeyDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the tracker created to record this delete operation. | [optional] 
**type** | **str** | The type of object being tracked. | [optional] 
**status** | **str** | The status of the delete operation. | [optional] 
**errors** | **[]str** | Any errors encountered while processing the delete operation. | [optional] 
**created** | **datetime** | The time the delete operation was initiated. | [optional] 
**key** | **str** | Technical name of the deleted Attribute. | [optional] 
\}

## Example

```python
from sailpoint.access_model_metadata.models.tracker_key_dto import TrackerKeyDTO

tracker_key_dto = TrackerKeyDTO(
id='2c9180867817ac4d017817c491119a20',
type='metadata-attribute',
status='DELETING',
errors=[
                    ''
                    ],
created='2020-10-08T18:33:52.029Z',
key='iscPrivacy'
)

```
[[Back to top]](#) 

