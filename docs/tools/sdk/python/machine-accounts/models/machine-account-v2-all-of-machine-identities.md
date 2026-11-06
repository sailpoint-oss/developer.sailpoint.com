# MachineAccountV2AllOfMachineIdentities

# MachineAccountV2AllOfMachineIdentities


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'MACHINE_IDENTITY' ] | The reference type. | [optional] 
**id** | **str** | ID of the machine identity. | [optional] 
**name** | **str** | The display name of the machine identity. | [optional] 
**subtype** |  **Enum** [  'AI_AGENT',    'APPLICATION',    'DEVICE' ] | The subtype of the machine identity. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_v2_all_of_machine_identities import MachineAccountV2AllOfMachineIdentities

machine_account_v2_all_of_machine_identities = MachineAccountV2AllOfMachineIdentities(
type='MACHINE_IDENTITY',
id='1540e5a4-6c2e-4bf1-b88e-c08cae0696e9',
name='SVC_ADService',
subtype='APPLICATION'
)

```
[[Back to top]](#) 

