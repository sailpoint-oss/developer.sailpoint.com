---
id: machineidentityupdated-user-entitlement-changes
title: MachineidentityupdatedUserEntitlementChanges
pagination_label: MachineidentityupdatedUserEntitlementChanges
sidebar_label: MachineidentityupdatedUserEntitlementChanges
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineidentityupdatedUserEntitlementChanges', 'MachineidentityupdatedUserEntitlementChanges'] 
slug: /tools/sdk/python/triggers/models/machineidentityupdated-user-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedUserEntitlementChanges', 'MachineidentityupdatedUserEntitlementChanges']
---

# MachineidentityupdatedUserEntitlementChanges

Changes to user entitlements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Name of the attribute that changed. | [optional] 
**added** | [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were added. | [optional] 
**removed** | [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | User entitlements that were removed. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.machineidentityupdated_user_entitlement_changes import MachineidentityupdatedUserEntitlementChanges

machineidentityupdated_user_entitlement_changes = MachineidentityupdatedUserEntitlementChanges(
attribute_name='userEntitlements',
added=[
                    {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                    ],
removed=[
                    {"entitlementId":"2509f650c20a3ab5956be70f6f136fbc","displayName":"CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local","source":{"type":"SOURCE","id":"7443d0ffb1304bbcbdf4c07b5c09d4f2","name":"ODS-AD-Source"}}
                    ]
)

```
[[Back to top]](#) 

