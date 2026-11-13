# MachineAccountSubtypeConfigDtoMachineAccountCreate

# MachineAccountSubtypeConfigDtoMachineAccountCreate

Configuration options for machine account creation, including whether creation is enabled, if approval is required, associated form and entitlement IDs, and detailed approval settings such as approvers and allowed comment types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_create_enabled** | **bool** | Specifies if the creation of machine accounts is allowed for this subtype. | [optional] [default to False]
**approval_required** | **bool** | Specifies if approval is required for machine account creation requests for this subtype. | [optional] [default to False]
**form_id** | **str** | Id of the form linked to subtype. | [optional] 
**entitlement_id** | **str** | Id of the system created entitlement entitlement upon enabling account creation for this subtype. | [optional] 
**password_setting** |  **Enum** [  'DO_NOT_SET_PASSWORD',    'SET_TO_EXISTING_ATTRIBUTE',    'SET_TO_NEW_ATTRIBUTE' ] | This is required before enabling the account creation to true. Default value will be null. | [optional] 
**password_attribute** | **str** | Name of the account attribute from the source's schema or new custom attribute to use when password settings is enabled. | [optional] 
**approval_config** | [**MachineSubtypeApprovalConfig**](machine-subtype-approval-config) |  | [optional] 
\}

## Example

```python
from sailpoint.machine_account_subtypes.models.machine_account_subtype_config_dto_machine_account_create import MachineAccountSubtypeConfigDtoMachineAccountCreate

machine_account_subtype_config_dto_machine_account_create = MachineAccountSubtypeConfigDtoMachineAccountCreate(
account_create_enabled=True,
approval_required=True,
form_id='4f1bb61b-a0ab-4c0a-b9fb-20f44407b75a',
entitlement_id='858d2151-ff19-464b-ae0d-6938b3af2baf',
password_setting='SET_TO_EXISTING_ATTRIBUTE',
password_attribute='accountName',
approval_config=sailpoint.machine_account_subtypes.models.machine_subtype_approval_config_dto.Machine Subtype Approval Config Dto(
                    approvers = 'manager, workgroup:1419fc28-a8ed-4a07-9f5c-0cb5dfad6311', 
                    comments = 'ALL', )
)

```
[[Back to top]](#) 

