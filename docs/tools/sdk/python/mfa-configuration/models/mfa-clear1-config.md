# MfaClear1Config

# MfaClear1Config

Configuration of the CLEAR1 MFA method. At least one of `knownUserKeyFlowConfig` or `establishedIdentityFlowConfig` must be configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfa_method** | **str** | Mfa method name | [required]
**enabled** | **bool** | If MFA method is enabled. | [optional] [default to False]
**api_key** | **str** | The API key for authenticating requests to the CLEAR1 provider. This field is always required, regardless of whether the MFA method is enabled. This value is masked in responses. | [required]
**known_user_key_flow_config** | [**Mfaclear1knownuserkeyflowconfig**](mfaclear1knownuserkeyflowconfig) |  | [optional] 
**established_identity_flow_config** | [**Mfaclear1establishedidentityflowconfig**](mfaclear1establishedidentityflowconfig) |  | [optional] 
\}

## Example

```python
from sailpoint.mfa_configuration.models.mfa_clear1_config import MfaClear1Config

mfa_clear1_config = MfaClear1Config(
mfa_method='clear1',
enabled=True,
api_key='sk123Y3QlA5UqocYpdU3rEkzrK2D497O',
known_user_key_flow_config=sailpoint.mfa_configuration.models.mfaclear1knownuserkeyflowconfig.Mfaclear1knownuserkeyflowconfig(
                    enabled = True, 
                    project_id = '', 
                    identity_attribute = '', ),
established_identity_flow_config=sailpoint.mfa_configuration.models.mfaclear1establishedidentityflowconfig.Mfaclear1establishedidentityflowconfig(
                    enabled = True, 
                    project_id = '', 
                    user_profile_matching_attributes = sailpoint.mfa_configuration.models.mfaclear1userprofilematchingattributes.Mfaclear1userprofilematchingattributes(
                        first_name = '', 
                        last_name = '', 
                        dob = '', 
                        email = '', 
                        phone = '', 
                        line1 = '', 
                        line2 = '', 
                        city = '', 
                        state = '', 
                        postal_code = '', 
                        country = '', ), )
)

```
[[Back to top]](#) 

