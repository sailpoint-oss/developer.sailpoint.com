# FormUsedBy

# FormUsedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WORKFLOW',    'SOURCE',    'MySailPoint' ] | FormUsedByType value.  WORKFLOW FormUsedByTypeWorkflow SOURCE FormUsedByTypeSource MySailPoint FormUsedByType | [optional] 
**id** | **str** | Unique identifier of the system using the form. | [optional] 
**name** | **str** | Name of the system using the form. | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.form_used_by import FormUsedBy

form_used_by = FormUsedBy(
type='WORKFLOW',
id='61940a92-5484-42bc-bc10-b9982b218cdf',
name='Access Request Form'
)

```
[[Back to top]](#) 

