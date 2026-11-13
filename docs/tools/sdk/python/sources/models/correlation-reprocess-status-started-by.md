# CorrelationReprocessStatusStartedBy

# CorrelationReprocessStatusStartedBy

Identity that started the run. `null` when the run was not started by an identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DtoType** |  | [optional] 
**id** | **str** | ID of the object to which this reference applies | [optional] 
**name** | **str** | Human-readable display name of the object to which this reference applies | [optional] 
\}

## Example

```python
from sailpoint.sources.models.correlation_reprocess_status_started_by import CorrelationReprocessStatusStartedBy

correlation_reprocess_status_started_by = CorrelationReprocessStatusStartedBy(
type='IDENTITY',
id='2c91808568c529c60168cca6f90c1313',
name='William Wilson'
)

```
[[Back to top]](#) 

