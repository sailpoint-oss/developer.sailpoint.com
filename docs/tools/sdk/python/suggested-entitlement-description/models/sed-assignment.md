# SedAssignment

# SedAssignment

Sed Assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**SedAssignee**](sed-assignee) |  | [optional] 
**items** | **[]str** | List of SED id's | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.sed_assignment import SedAssignment

sed_assignment = SedAssignment(
assignee=sailpoint.suggested_entitlement_description.models.sed_assignee.Sed Assignee(
                    type = 'SOURCE_OWNER', 
                    value = '016629d1-1d25-463f-97f3-c6686846650', ),
items=[
                    '016629d1-1d25-463f-97f3-0c6686846650'
                    ]
)

```
[[Back to top]](#) 

