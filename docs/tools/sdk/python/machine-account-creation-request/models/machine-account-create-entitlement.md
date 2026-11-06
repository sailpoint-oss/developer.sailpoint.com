# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

An entitlement to request for the machine account, with optional comment and access dates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the entitlement to request. | [required]
**comment** | **str** | Comment to include with the entitlement request. | [optional] 
**start_date** | **datetime** | Date and time when access to the entitlement starts. Must be in the future and, when `removeDate` is also set, before `removeDate`. | [optional] 
**remove_date** | **datetime** | Date and time when access to the entitlement is removed. Must be in the future. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_creation_request.models.machine_account_create_entitlement import MachineAccountCreateEntitlement

machine_account_create_entitlement = MachineAccountCreateEntitlement(
id='2c91808a7624751a01762f19d67c220e',
comment='Needed to read the inventory share.',
start_date='2026-11-01T00:00Z',
remove_date='2027-11-01T00:00Z'
)

```
[[Back to top]](#) 

