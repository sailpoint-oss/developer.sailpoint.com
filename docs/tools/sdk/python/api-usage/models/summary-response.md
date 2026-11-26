# SummaryResponse

# SummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_uri** | **str** | The endpoint of a SailPoint API | [optional] 
**number_of_calls** | **int** | Number of calls made to a specific SailPoint API | [optional] 
\}

## Example

```python
from sailpoint.api_usage.models.summary_response import SummaryResponse

summary_response = SummaryResponse(
requested_uri='/v2024/auth-org/session-config',
number_of_calls=10
)

```
[[Back to top]](#) 

