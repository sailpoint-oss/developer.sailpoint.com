---
id: v2025-machine-identity-response-user-entitlements
title: MachineIdentityResponseUserEntitlements
pagination_label: MachineIdentityResponseUserEntitlements
sidebar_label: MachineIdentityResponseUserEntitlements
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements'] 
slug: /tools/sdk/python/v2025/models/machine-identity-response-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityResponseUserEntitlements', 'V2025MachineIdentityResponseUserEntitlements']
---

# MachineIdentityResponseUserEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_id** | **str** | The source ID of the entitlement | [optional] 
**entitlement_id** | **str** | The ID of the entitlement | [optional] 
**display_name** | **str** | The display name of the entitlement | [optional] 
**source** | **object** | The source of the entitlement | [optional] 
}

## Example

```python
from sailpoint.v2025.models.machine_identity_response_user_entitlements import MachineIdentityResponseUserEntitlements

machine_identity_response_user_entitlements = MachineIdentityResponseUserEntitlements(
source_id='5898b7c1-620c-49c6-cccc-cbf81eb4bddd',
entitlement_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
display_name='Entitlement Name',
source=sailpoint.v2025.models.machine_identity_response_source_1.Machine_Identity_Response_source_1()
)

```
[[Back to top]](#) 

