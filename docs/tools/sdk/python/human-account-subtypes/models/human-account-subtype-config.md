# HumanAccountSubtypeConfig

# HumanAccountSubtypeConfig

Account-create configuration of a human account subtype.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtype_id** | **str** | ID of the human account subtype this configuration belongs to. | [optional] [readonly] 
**human_account_create** | [**HumanAccountSubtypeConfigHumanAccountCreate**](human-account-subtype-config-human-account-create) |  | [optional] 
\}

## Example

```python
from sailpoint.human_account_subtypes.models.human_account_subtype_config import HumanAccountSubtypeConfig

human_account_subtype_config = HumanAccountSubtypeConfig(
subtype_id='1419fc28-a8ed-4a07-9f5c-0cb5dfad6311',
human_account_create=sailpoint.human_account_subtypes.models.human_account_subtype_config_human_account_create.HumanAccountSubtypeConfig_humanAccountCreate(
                    account_create_enabled = True, 
                    approval_required = True, 
                    approval_config = sailpoint.human_account_subtypes.models.human_account_subtype_config_human_account_create_approval_config.HumanAccountSubtypeConfig_humanAccountCreate_approvalConfig(
                        approvers = 'manager, sourceOwner', 
                        comments = 'ALL', ), 
                    form_id = '4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a', )
)

```
[[Back to top]](#) 

