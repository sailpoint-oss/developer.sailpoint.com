# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

Machine account create request. `sourceId` is required while tiered subtype configuration is enabled and is ignored when that flag is off. `entitlements` is honored while per-entitlement request details are enabled. `entitlementIds` is honored while that flag is off. A non-empty list of the kind the current flag state does not honor is rejected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | Source the machine account is created on. Required while tiered subtype configuration is enabled, so a connector-tier subtype can name its source. Ignored when that flag is off; the source is then the subtype's own source. | [optional] [default to '']
**subtype_id** | **str** | Subtype that must be in the source effective set and for which the caller holds the create machine account entitlement. | [required]
**form_id** | **str** | Form selected for the machine account create request. | [optional] [default to '']
**owner_identity_id** | **str** | Identity assigned as owner of the created machine account. | [required]
**machine_identity_id** | **str** | Machine identity to correlate with the created machine account. When omitted, a new machine identity is created. | [optional] 
**environment** | **str** | Environment type to use for the machine account. | [optional] [default to '']
**description** | **str** | Description for the machine account. | [optional] [default to '']
**user_input** | **object** | Fields of the form linked to the subtype in approval settings. | [optional] 
**entitlements** | [**[]MachineAccountCreateEntitlement**](machine-account-create-entitlement) | Entitlements to provision, including an optional comment and access dates. Honored while per-entitlement request details are enabled. De-duplicated by `id` (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when that flag is off. An empty array is accepted. | [optional] [default to []]
**entitlement_ids** | **[]str** | Entitlement ids to provision. Honored while per-entitlement request details are off. Values are trimmed, blanks are dropped, and ids are de-duplicated (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when per-entitlement request details are enabled. An empty array is accepted. | [optional] [default to []]
\}

## Example

```python
from sailpoint.machine_account_creation_request.models.machine_account_create_request_input_v2 import MachineAccountCreateRequestInputV2

machine_account_create_request_input_v2 = MachineAccountCreateRequestInputV2(
source_id='',
subtype_id='1419fc28-a8ed-4a07-9f5c-0cb5dfad6311',
form_id='',
owner_identity_id='9f2c1b7e4a6d4c8fa1b2c3d4e5f60718',
machine_identity_id='b1e2c3d4-0a5b-4c6d-8e7f-9a0b1c2d3e4f',
environment='',
description='',
user_input={"accountName":"svc-recon-01"},
entitlements=[{"id":"858d2151-ff19-464b-ae0d-6938b3af2baf","comment":"Needed to read the reconciliation staging tables.","startDate":"2026-09-01T00:00:00.000Z","removeDate":"2027-03-01T00:00:00.000Z"},{"id":"0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"}],
entitlement_ids=["858d2151-ff19-464b-ae0d-6938b3af2baf","0c7a44b9-3e21-4f88-9a10-77bd2c6e5f31"]
)

```
[[Back to top]](#) 

