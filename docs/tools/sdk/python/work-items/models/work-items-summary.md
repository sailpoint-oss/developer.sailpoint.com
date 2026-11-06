# WorkItemsSummary

# WorkItemsSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open** | **int** | The count of open work items | [optional] 
**completed** | **int** | The count of completed work items | [optional] 
**total** | **int** | The count of total work items | [optional] 
\}

## Example

```python
from sailpoint.work_items.models.work_items_summary import WorkItemsSummary

work_items_summary = WorkItemsSummary(
open=29,
completed=1,
total=30
)

```
[[Back to top]](#) 

