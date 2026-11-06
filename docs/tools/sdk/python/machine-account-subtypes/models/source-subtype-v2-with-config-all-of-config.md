# SourceSubtypeV2WithConfigAllOfConfig

# SourceSubtypeV2WithConfigAllOfConfig

Summary of the subtype's machine account creation configuration. `null` when the subtype is not a `MACHINE` subtype or has no machine account creation configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_account_create** | [**SourceSubtypeV2WithConfigAllOfConfigMachineAccountCreate**](source-subtype-v2-with-config-all-of-config-machine-account-create) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.source_subtype_v2_with_config_all_of_config import SourceSubtypeV2WithConfigAllOfConfig

source_subtype_v2_with_config_all_of_config = SourceSubtypeV2WithConfigAllOfConfig(
machine_account_create=sailpoint.machine_account_subtypes.models.source_subtype_v2_with_config_all_of_config_machine_account_create.SourceSubtypeV2WithConfig_allOf_config_machineAccountCreate(
                    account_create_enabled = True, )
)

```
[[Back to top]](#) 

