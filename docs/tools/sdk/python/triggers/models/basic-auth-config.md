# BasicAuthConfig

# BasicAuthConfig

Config required if BASIC_AUTH is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | The username to authenticate. | [optional] 
**password** | **str** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.basic_auth_config import BasicAuthConfig

basic_auth_config = BasicAuthConfig(
user_name='user@example.com',
password=''
)

```
[[Back to top]](#) 

