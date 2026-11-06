# MfaOktaConfig

# MfaOktaConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfa_method** | **str** | Mfa method name | [optional] 
**enabled** | **bool** | If MFA method is enabled. | [optional] [default to False]
**host** | **str** | The server host name or IP address of the MFA provider. | [optional] 
**access_key** | **str** | The secret key for authenticating requests to the MFA provider. | [optional] 
**identity_attribute** | **str** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
\}

## Example

```python
from sailpoint.mfa_configuration.models.mfa_okta_config import MfaOktaConfig

mfa_okta_config = MfaOktaConfig(
mfa_method='okta-verify',
enabled=True,
host='example.com',
access_key='qw123Y3QlA5UqocYpdU3rEkzrK2D497y',
identity_attribute='email'
)

```
[[Back to top]](#) 

