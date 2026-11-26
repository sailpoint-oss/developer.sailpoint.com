# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

One entitlement to provision on the created machine account. `id` is the entitlement id. Comment and access dates are optional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Entitlement id to provision. Not required to be a UUID. | [required]
**comment** | **str** | Justification stored with the entitlement request. | [optional] [default to '']
**start_date** | **datetime** | When access starts. Must be in the future and before `removeDate` when both are set. | [optional] 
**remove_date** | **datetime** | When access ends. Must be in the future and after `startDate` when both are set. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_creation_request.models.machine_account_create_entitlement import MachineAccountCreateEntitlement

machine_account_create_entitlement = MachineAccountCreateEntitlement(
id='858d2151-ff19-464b-ae0d-6938b3af2baf',
comment='',
start_date='2026-09-01T00:00Z',
remove_date='2027-03-01T00:00Z'
)

```
[[Back to top]](#) 

