---
id: machineidentityuserentitlements
title: Machineidentityuserentitlements
pagination_label: Machineidentityuserentitlements
sidebar_label: Machineidentityuserentitlements
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machineidentityuserentitlements', 'Machineidentityuserentitlements'] 
slug: /tools/sdk/python/triggers/models/machineidentityuserentitlements
tags: ['SDK', 'Software Development Kit', 'Machineidentityuserentitlements', 'Machineidentityuserentitlements']
---

# Machineidentityuserentitlements

Reference to a user entitlement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_id** | **str** | Entitlement identifier. | [required]
**display_name** | **str** | Display name of the entitlement. | [required]
**source** | [**Machineidentitysourcereference**](machineidentitysourcereference) |  | [required]
}

## Example

```python
from sailpoint.triggers.models.machineidentityuserentitlements import Machineidentityuserentitlements

machineidentityuserentitlements = Machineidentityuserentitlements(
entitlement_id='2509f650c20a3ab5956be70f6f136fbc',
display_name='CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local',
source={"type":"SOURCE","id":"c0201251a6ce4d268aba536cdd60a7f2","name":"IdentityNow"}
)

```
[[Back to top]](#) 

