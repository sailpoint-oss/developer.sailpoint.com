# SearchScheduleRecipientsInner

# SearchScheduleRecipientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [required]
**id** | **str** | The ID of the referenced object | [required]
\}

## Example

```python
from sailpoint.scheduled_search.models.search_schedule_recipients_inner import SearchScheduleRecipientsInner

search_schedule_recipients_inner = SearchScheduleRecipientsInner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

