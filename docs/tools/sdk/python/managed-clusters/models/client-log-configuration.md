# ClientLogConfiguration

# ClientLogConfiguration

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**duration_minutes** | **int** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**root_level** | **StandardLevel** |  | [required]
**log_levels** | **map[string]StandardLevel** | Mapping of identifiers to Standard Log Level values | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.client_log_configuration import ClientLogConfiguration

client_log_configuration = ClientLogConfiguration(
client_id='3a38a51992e8445ab51a549c0a70ee66',
duration_minutes=120,
expiration='2024-11-06T01:31:08.013164Z',
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

