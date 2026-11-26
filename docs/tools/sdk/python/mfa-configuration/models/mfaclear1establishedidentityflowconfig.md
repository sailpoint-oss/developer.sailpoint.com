# Mfaclear1establishedidentityflowconfig

# Mfaclear1establishedidentityflowconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If the established identity flow is enabled for the CLEAR1 MFA method. | [optional] [default to False]
**project_id** | **str** | The ID of the CLEAR1 project used for the established identity flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 
**user_profile_matching_attributes** | [**Mfaclear1userprofilematchingattributes**](mfaclear1userprofilematchingattributes) |  | [optional] 
\}

## Example

```python
from sailpoint.mfa_configuration.models.mfaclear1establishedidentityflowconfig import Mfaclear1establishedidentityflowconfig

mfaclear1establishedidentityflowconfig = Mfaclear1establishedidentityflowconfig(
enabled=True,
project_id='',
user_profile_matching_attributes=sailpoint.mfa_configuration.models.mfaclear1userprofilematchingattributes.Mfaclear1userprofilematchingattributes(
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
                    country = '', )
)

```
[[Back to top]](#) 

