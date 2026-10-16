# NonEmployeeApprovalSummary

# NonEmployeeApprovalSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **int** | The number of approved non-employee approval requests. | [optional] 
**pending** | **int** | The number of pending non-employee approval requests. | [optional] 
**rejected** | **int** | The number of rejected non-employee approval requests. | [optional] 
\}

## Example

```python
from sailpoint.non_employee_lifecycle_management.models.non_employee_approval_summary import NonEmployeeApprovalSummary

non_employee_approval_summary = NonEmployeeApprovalSummary(
approved=2,
pending=2,
rejected=2
)

```
[[Back to top]](#) 

