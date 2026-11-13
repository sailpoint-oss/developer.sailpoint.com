# TemplateBulkDeleteDto

# TemplateBulkDeleteDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The template key to delete | [required]
**medium** |  **Enum** [  'EMAIL',    'SLACK',    'TEAMS' ] | The notification medium (EMAIL, SLACK, or TEAMS) | [optional] 
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
\}

## Example

```python
from sailpoint.notifications.models.template_bulk_delete_dto import TemplateBulkDeleteDto

template_bulk_delete_dto = TemplateBulkDeleteDto(
key='cloud_manual_work_item_summary',
medium='EMAIL',
locale='en'
)

```
[[Back to top]](#) 

