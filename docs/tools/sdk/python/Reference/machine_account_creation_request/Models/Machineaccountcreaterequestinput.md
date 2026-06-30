---
id: machineaccountcreaterequestinput
title: Machineaccountcreaterequestinput
pagination_label: Machineaccountcreaterequestinput
sidebar_label: Machineaccountcreaterequestinput
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineaccountcreaterequestinput', 'Machineaccountcreaterequestinput'] 
slug: /tools/sdk/python/machine-account-creation-request/models/machineaccountcreaterequestinput
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreaterequestinput', 'Machineaccountcreaterequestinput']
---

# Machineaccountcreaterequestinput

Contains the required information for processing a user-initiated machine account creation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtype_id** | **str** | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [required]
**form_id** | **str** | Form ID selected by user for the machine account create request. | [optional] 
**owner_identity_id** | **str** | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [required]
**machine_identity_id** | **str** | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [optional] 
**environment** | **str** | Environment type to use for the machine account. | [optional] 
**description** | **str** | Description for the machine account. | [optional] 
**user_input** | **object** | Fields of the form linked to the subtype in approval settings. | [optional] 
**entitlement_ids** | **[]str** | List of entitlement IDs to provision for created machine account. | [optional] 
}

## Example

```python
from sailpoint.machine_account_creation_request.models.machineaccountcreaterequestinput import Machineaccountcreaterequestinput

machineaccountcreaterequestinput = Machineaccountcreaterequestinput(
subtype_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
form_id='f5dd23fe-3414-42b7-bb1c-869400ad7a10',
owner_identity_id='18104e7e499b4e23882d6323344ab6bc',
machine_identity_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
environment='Dev',
description='Requesting machine account for tracking the inventory.',
user_input={"target":"AD Source","description":"Inventory tracking"},
entitlement_ids=["6d28b7c1620c49c6b6d5cbf81eb4b5fa","2c91808a7624751a01762f19d67c220e"]
)

```
[[Back to top]](#) 

