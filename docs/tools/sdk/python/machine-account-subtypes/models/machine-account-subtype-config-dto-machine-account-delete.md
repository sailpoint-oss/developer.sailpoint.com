# MachineAccountSubtypeConfigDtoMachineAccountDelete

# MachineAccountSubtypeConfigDtoMachineAccountDelete

Configuration options for machine account deletion, including whether approval is required, the list of authorized approvers, and the types of comments permitted during the approval workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_required** | **bool** | Indicates whether approval is required for an account deletion request. | [optional] [default to False]
**approval_config** | [**MachineSubtypeApprovalConfig**](machine-subtype-approval-config) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.machine_account_subtype_config_dto_machine_account_delete import MachineAccountSubtypeConfigDtoMachineAccountDelete

machine_account_subtype_config_dto_machine_account_delete = MachineAccountSubtypeConfigDtoMachineAccountDelete(
approval_required=True,
approval_config=sailpoint.machine_account_subtypes.models.machine_subtype_approval_config_dto.Machine Subtype Approval Config Dto(
                    approvers = 'manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311', 
                    comments = 'ALL', )
)

```
[[Back to top]](#) 

