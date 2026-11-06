# ReassignReference

# ReassignReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of item or identity being reassigned. | [required]
**type** |  **Enum** [  'TARGET_SUMMARY',    'ITEM',    'IDENTITY_SUMMARY' ] | The type of item or identity being reassigned. | [required]
\}

## Example

```python
from sailpoint.certifications.models.reassign_reference import ReassignReference

reassign_reference = ReassignReference(
id='ef38f94347e94562b5bb8424a56397d8',
type='ITEM'
)

```
[[Back to top]](#) 

