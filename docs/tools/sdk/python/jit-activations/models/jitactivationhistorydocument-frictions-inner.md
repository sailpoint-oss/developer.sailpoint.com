# JitactivationhistorydocumentFrictionsInner

# JitactivationhistorydocumentFrictionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of friction control. | [optional] 
**bypass_allowed** | **bool** | Whether the user had permission to bypass this friction. | [optional] [default to False]
**submitted_data** | **str** | Data submitted by the user to satisfy this friction (e.g. ticket ID, justification text). | [optional] 
**status** | **str** | Completion status of this friction item. | [optional] 
\}

## Example

```python
from sailpoint.jit_activations.models.jitactivationhistorydocument_frictions_inner import JitactivationhistorydocumentFrictionsInner

jitactivationhistorydocument_frictions_inner = JitactivationhistorydocumentFrictionsInner(
type='TICKET',
bypass_allowed=False,
submitted_data='INC0012345',
status='COMPLETE'
)

```
[[Back to top]](#) 

