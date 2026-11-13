# MfaConfigTestResponse

# MfaConfigTestResponse

Response model for configuration test of a given MFA method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** |  **Enum** [  'SUCCESS',    'FAILED' ] | The configuration test result. | [optional] [readonly] 
**error** | **str** | The error message to indicate the failure of configuration test. | [optional] [readonly] 
\}

## Example

```python
from sailpoint.mfa_configuration.models.mfa_config_test_response import MfaConfigTestResponse

mfa_config_test_response = MfaConfigTestResponse(
state='SUCCESS',
error='MFA Method is disabled.'
)

```
[[Back to top]](#) 

