# Mfaclear1knownuserkeyflowconfig

# Mfaclear1knownuserkeyflowconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | If the known user key flow is enabled for the CLEAR1 MFA method. | [optional] [default to False]
**project_id** | **str** | The ID of the CLEAR1 project used for the known user key flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 
**identity_attribute** | **str** | The name of the attribute used to map an Identity Security Cloud identity to the CLEAR1 user key. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [optional] 
\}

## Example

```python
from sailpoint.mfa_configuration.models.mfaclear1knownuserkeyflowconfig import Mfaclear1knownuserkeyflowconfig

mfaclear1knownuserkeyflowconfig = Mfaclear1knownuserkeyflowconfig(
enabled=True,
project_id='',
identity_attribute=''
)

```
[[Back to top]](#) 

