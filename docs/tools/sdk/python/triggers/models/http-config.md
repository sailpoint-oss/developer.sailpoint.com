# HttpConfig

# HttpConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL of the external/custom integration. | [required]
**http_dispatch_mode** | **HttpDispatchMode** |  | [required]
**http_authentication_type** | **HttpAuthenticationType** |  | [optional] [default to HttpAuthenticationType.NO_AUTH]
**basic_auth_config** | [**BasicAuthConfig**](basic-auth-config) |  | [optional] 
**bearer_token_auth_config** | [**BearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 
\}

## Example

```python
from sailpoint.triggers.models.http_config import HttpConfig

http_config = HttpConfig(
url='https://www.example.com',
http_dispatch_mode='SYNC',
http_authentication_type='NO_AUTH',
basic_auth_config=sailpoint.triggers.models.basic_auth_config.Basic Auth Config(
                    user_name = 'user@example.com', 
                    password = '', ),
bearer_token_auth_config=sailpoint.triggers.models.bearer_token_auth_config.Bearer Token Auth Config(
                    bearer_token = '', )
)

```
[[Back to top]](#) 

