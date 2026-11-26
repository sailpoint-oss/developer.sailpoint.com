# ClientLogConfigurationExpiration

# ClientLogConfigurationExpiration

Client Runtime Logging Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Log configuration's client ID | [optional] 
**expiration** | **datetime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**root_level** | **StandardLevel** |  | [required]
**log_levels** | **map[string]StandardLevel** | Mapping of identifiers to Standard Log Level values | [optional] 
\}

## Example

```python
from sailpoint.managed_clusters.models.client_log_configuration_expiration import ClientLogConfigurationExpiration

client_log_configuration_expiration = ClientLogConfigurationExpiration(
client_id='3a38a51992e8445ab51a549c0a70ee66',
expiration='2024-11-06T01:31:08.013164Z',
root_level='INFO',
log_levels=INFO
)

```
[[Back to top]](#) 

