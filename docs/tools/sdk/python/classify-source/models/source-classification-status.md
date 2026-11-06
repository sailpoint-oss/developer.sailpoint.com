# SourceClassificationStatus

# SourceClassificationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'STARTED',    'COLLECTED',    'COMPLETED',    'CANCELLED',    'TERMINATED' ] | Status of Classification Process | [optional] 
**started** | **datetime** | Time when the process was started | [optional] 
**updated** | **datetime** | Time when the process status was last updated | [optional] 
**counts** | [**SourceClassificationStatusAllOfCounts**](source-classification-status-all-of-counts) |  | [optional] 
\}

## Example

```python
from sailpoint.classify_source.models.source_classification_status import SourceClassificationStatus

source_classification_status = SourceClassificationStatus(
status='COMPLETED',
started='2017-07-11T18:45:37.098Z',
updated='2018-06-25T20:22:28.104Z',
counts=sailpoint.classify_source.models.source_classification_status_all_of_counts.SourceClassificationStatus_allOf_counts(
                    expected = 1000, 
                    received = 800, 
                    completed = 500, )
)

```
[[Back to top]](#) 

