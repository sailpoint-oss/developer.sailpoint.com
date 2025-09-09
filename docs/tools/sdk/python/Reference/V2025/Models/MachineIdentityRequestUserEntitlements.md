---
id: v2025-machine-identity-request-user-entitlements
title: MachineIdentityRequestUserEntitlements
pagination_label: MachineIdentityRequestUserEntitlements
sidebar_label: MachineIdentityRequestUserEntitlements
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements'] 
slug: /tools/sdk/python/v2025/models/machine-identity-request-user-entitlements
tags: ['SDK', 'Software Development Kit', 'MachineIdentityRequestUserEntitlements', 'V2025MachineIdentityRequestUserEntitlements']
---

# MachineIdentityRequestUserEntitlements


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_id** | **str** | The ID of the entitlement | [required]
**source_id** | **str** | The source ID of the entitlement | [required]
}

## Example

```python
from sailpoint.v2025.models.machine_identity_request_user_entitlements import MachineIdentityRequestUserEntitlements

machine_identity_request_user_entitlements = MachineIdentityRequestUserEntitlements(
entitlement_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
source_id='5898b7c1-620c-49c6-cccc-cbf81eb4bddd'
)

```
[[Back to top]](#) 

