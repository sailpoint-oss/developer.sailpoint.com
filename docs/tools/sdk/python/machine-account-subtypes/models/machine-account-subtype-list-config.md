# MachineAccountSubtypeListConfig

# MachineAccountSubtypeListConfig

Slim machine-account-create config embedded on a list item when `includeConfigs` is `true`. Full create, delete, approval, password, and form fields stay on the machine-config API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_account_create** | [**MachineAccountSubtypeListConfigMachineAccountCreate**](machine-account-subtype-list-config-machine-account-create) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.machine_account_subtype_list_config import MachineAccountSubtypeListConfig

machine_account_subtype_list_config = MachineAccountSubtypeListConfig(
machine_account_create=sailpoint.machine_account_subtypes.models.machine_account_subtype_list_config_machine_account_create.MachineAccountSubtypeListConfig_machineAccountCreate(
                    account_create_enabled = True, )
)

```
[[Back to top]](#) 

