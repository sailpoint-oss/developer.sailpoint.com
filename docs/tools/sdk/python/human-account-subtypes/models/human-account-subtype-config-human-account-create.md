# HumanAccountSubtypeConfigHumanAccountCreate

# HumanAccountSubtypeConfigHumanAccountCreate

Account-create settings for the human account subtype.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_create_enabled** | **bool** | Specifies if creation of human accounts is allowed for this subtype. | [optional] [default to False]
**approval_required** | **bool** | Specifies if approval is required for human account creation requests for this subtype. | [optional] [default to False]
**approval_config** | [**HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig**](human-account-subtype-config-human-account-create-approval-config) |  | [optional] 
**form_id** | **str** | ID of the form linked to the subtype. | [optional] 
\}

## Example

```python
from sailpoint.human_account_subtypes.models.human_account_subtype_config_human_account_create import HumanAccountSubtypeConfigHumanAccountCreate

human_account_subtype_config_human_account_create = HumanAccountSubtypeConfigHumanAccountCreate(
account_create_enabled=True,
approval_required=True,
approval_config=sailpoint.human_account_subtypes.models.human_account_subtype_config_human_account_create_approval_config.HumanAccountSubtypeConfig_humanAccountCreate_approvalConfig(
                    approvers = 'manager, sourceOwner', 
                    comments = 'ALL', ),
form_id='4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a'
)

```
[[Back to top]](#) 

