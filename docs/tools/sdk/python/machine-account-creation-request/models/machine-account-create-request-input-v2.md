# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

Contains the information for processing a user-initiated machine account creation request. Adds a target source and per-entitlement request details to the v1 request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtype_id** | **str** | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [required]
**source_id** | **str** | ID of the source to create the machine account on. The subtype must be available on this source. Required when subtypes can be configured per source for the tenant; otherwise it is ignored and the subtype's own source is used. | [optional] 
**form_id** | **str** | Form ID selected by user for the machine account create request. | [optional] 
**owner_identity_id** | **str** | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [required]
**machine_identity_id** | **str** | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [optional] 
**environment** | **str** | Environment type to use for the machine account. | [optional] 
**description** | **str** | Description for the machine account. | [optional] 
**user_input** | **object** | Fields of the form linked to the subtype in approval settings. | [optional] 
**entitlements** | [**[]MachineAccountCreateEntitlement**](machine-account-create-entitlement) | Entitlements to request for the created machine account, each with an optional comment, start date, and remove date. Duplicate IDs are ignored and up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [optional] 
**entitlement_ids** | **[]str** | List of entitlement IDs to provision for created machine account. Up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [optional] 
\}

## Example

```python
from sailpoint.machine_account_creation_request.models.machine_account_create_request_input_v2 import MachineAccountCreateRequestInputV2

machine_account_create_request_input_v2 = MachineAccountCreateRequestInputV2(
subtype_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
source_id='2c9180835d191a86015d28455b4a2329',
form_id='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
owner_identity_id='18104e7e499b4e23882d6323344ab6bc',
machine_identity_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
environment='Dev',
description='Requesting machine account for tracking the inventory.',
user_input={"target":"AD Source","description":"Inventory tracking"},
entitlements=[{"id":"2c91808a7624751a01762f19d67c220e","comment":"Needed to read the inventory share.","startDate":"2026-11-01T00:00:00Z","removeDate":"2027-11-01T00:00:00Z"}],
entitlement_ids=["6d28b7c1620c49c6b6d5cbf81eb4b5fa","2c91808a7624751a01762f19d67c220e"]
)

```
[[Back to top]](#) 

