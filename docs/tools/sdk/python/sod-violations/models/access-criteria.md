# AccessCriteria

# AccessCriteria

A named set of conflicting access items that together define one side of a separation-of-duties conflict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the access criteria grouping. | [required]
**conflicting_items** | [**[]Conflictingitem**](conflictingitem) | The list of access items that make up this side of the conflict. | [required]
\}

## Example

```python
from sailpoint.sod_violations.models.access_criteria import AccessCriteria

access_criteria = AccessCriteria(
name='money-in',
conflicting_items=[{"id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator","type":"ENTITLEMENT"}]
)

```
[[Back to top]](#) 

