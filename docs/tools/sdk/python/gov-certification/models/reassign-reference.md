# ReassignReference

# ReassignReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reassign** | [**[]Reassign**](reassign) | List of entities to be reassigned. | [required]
**reassign_to** | **str** | The ID of the identity to which the certification is reassigned | [required]
**reason** | **str** | The reason comment for why the reassign was made | [required]
\}

## Example

```python
from sailpoint.gov_certification.models.reassign_reference import ReassignReference

reassign_reference = ReassignReference(
reassign=[{"id":"ef38f943-47e9-4562-b5bb-8424a56397d8","type":"ITEM"}],
reassign_to='ef38f943-47e9-4562-b5bb-8424a56397d8',
reason='Reassigning this item to the appropriate reviewer.'
)

```
[[Back to top]](#) 

