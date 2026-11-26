# MachineAccountSubtypeListConfigMachineAccountCreate

# MachineAccountSubtypeListConfigMachineAccountCreate

Stored create flag for this subtype. Omitted when no create config exists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_create_enabled** | **bool** | Whether machine account creation is enabled for this subtype. | [optional] [default to False]
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.machine_account_subtype_list_config_machine_account_create import MachineAccountSubtypeListConfigMachineAccountCreate

machine_account_subtype_list_config_machine_account_create = MachineAccountSubtypeListConfigMachineAccountCreate(
account_create_enabled=True
)

```
[[Back to top]](#) 

