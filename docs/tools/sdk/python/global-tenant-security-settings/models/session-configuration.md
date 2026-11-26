# SessionConfiguration

# SessionConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_idle_time** | **int** | The maximum time in minutes a session can be idle. | [optional] 
**remember_me** | **bool** | Denotes if 'remember me' is enabled. | [optional] [default to False]
**max_session_time** | **int** | The maximum allowable session time in minutes. | [optional] 
\}

## Example

```python
from sailpoint.global_tenant_security_settings.models.session_configuration import SessionConfiguration

session_configuration = SessionConfiguration(
max_idle_time=15,
remember_me=True,
max_session_time=45
)

```
[[Back to top]](#) 

