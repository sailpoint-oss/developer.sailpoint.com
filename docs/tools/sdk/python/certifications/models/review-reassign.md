# ReviewReassign

# ReviewReassign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign** | [**[]ReassignReference**](reassign-reference) |  | [required]
**reassign_to** | **str** | The ID of the identity to which the certification is reassigned | [required]
**reason** | **str** | The reason comment for why the reassign was made | [required]
\}

## Example

```python
from sailpoint.certifications.models.review_reassign import ReviewReassign

review_reassign = ReviewReassign(
reassign=[
                    sailpoint.certifications.models.reassign_reference.Reassign Reference(
                        id = 'ef38f94347e94562b5bb8424a56397d8', 
                        type = 'ITEM', )
                    ],
reassign_to='ef38f94347e94562b5bb8424a56397d8',
reason='reassigned for some reason'
)

```
[[Back to top]](#) 

