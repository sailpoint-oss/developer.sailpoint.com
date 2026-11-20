# SourceUsageStatus

# SourceUsageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'COMPLETE',    'INCOMPLETE' ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 
\}

## Example

```python
from sailpoint.source_usages.models.source_usage_status import SourceUsageStatus

source_usage_status = SourceUsageStatus(
status='COMPLETE'
)

```
[[Back to top]](#) 

