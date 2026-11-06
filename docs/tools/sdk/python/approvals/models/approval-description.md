# ApprovalDescription

# ApprovalDescription

The description of what the approval is asking for

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The description of what the approval is asking for | [optional] 
**locale** | **str** | What locale the description of the approval is using | [optional] 
\}

## Example

```python
from sailpoint.approvals.models.approval_description import ApprovalDescription

approval_description = ApprovalDescription(
value='This access allows viewing and editing of workflow resource',
locale='en_US'
)

```
[[Back to top]](#) 

