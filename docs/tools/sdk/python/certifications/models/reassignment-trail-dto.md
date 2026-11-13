# ReassignmentTrailDTO

# ReassignmentTrailDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**previous_owner** | **str** | The ID of previous owner identity. | [optional] 
**new_owner** | **str** | The ID of new owner identity. | [optional] 
**reassignment_type** | **str** | The type of reassignment. | [optional] 
\}

## Example

```python
from sailpoint.certifications.models.reassignment_trail_dto import ReassignmentTrailDTO

reassignment_trail_dto = ReassignmentTrailDTO(
previous_owner='ef38f94347e94562b5bb8424a56397d8',
new_owner='ef38f94347e94562b5bb8424a56397a3',
reassignment_type='AUTOMATIC_REASSIGNMENT'
)

```
[[Back to top]](#) 

