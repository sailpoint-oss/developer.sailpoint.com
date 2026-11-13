# MachineAccountV2AllOfResource

# MachineAccountV2AllOfResource

The source resource the machine account is derived from. Null when the account has no source resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The source resource identifier. | [optional] 
**type** | **str** | The type of the source resource. | [optional] 
**name** | **str** | The display name of the source resource. | [optional] 
**features** | **[]str** | The features supported by the source resource. | [optional] 
\}

## Example

```python
from sailpoint.machine_accounts.models.machine_account_v2_all_of_resource import MachineAccountV2AllOfResource

machine_account_v2_all_of_resource = MachineAccountV2AllOfResource(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='aws:iam-role',
name='nightly-batch-role',
features=["PROVISIONING","AUTHENTICATION"]
)

```
[[Back to top]](#) 

