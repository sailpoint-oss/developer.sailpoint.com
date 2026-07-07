---
id: machineidentityupdated
title: Machineidentityupdated
pagination_label: Machineidentityupdated
sidebar_label: Machineidentityupdated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentityupdated', 'Machineidentityupdated'] 
slug: /tools/sdk/powershell/triggers/models/machineidentityupdated
tags: ['SDK', 'Software Development Kit', 'Machineidentityupdated', 'Machineidentityupdated']
---


# Machineidentityupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** |  **Enum** [  "MACHINE_IDENTITY_UPDATED" ] | Type of the event. | [required]
**MachineIdentity** | [**MachineidentityupdatedMachineIdentity**](machineidentityupdated-machine-identity) |  | [required]
**MachineIdentityChangeTypes** | **[]String** | Types of changes that occurred to the machine identity. | [required]
**UserEntitlementChanges** | [**MachineidentityupdatedUserEntitlementChanges**](machineidentityupdated-user-entitlement-changes) |  | [required]
**OwnerChanges** | [**MachineidentityupdatedOwnerChanges**](machineidentityupdated-owner-changes) |  | [required]
**SingleValueAttributeChanges** | [**[]MachineidentityupdatedSingleValueAttributeChangesInner**](machineidentityupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | [required]

## Examples

- Prepare the resource
```powershell
$Machineidentityupdated = Initialize-Machineidentityupdated  -EventType MACHINE_IDENTITY_UPDATED `
 -MachineIdentity null `
 -MachineIdentityChangeTypes ["ATTRIBUTES_CHANGED","USER_ENTITLEMENTS_ADDED","USER_ENTITLEMENTS_REMOVED","OWNERS_ADDED","OWNERS_REMOVED"] `
 -UserEntitlementChanges null `
 -OwnerChanges null `
 -SingleValueAttributeChanges null
```

- Convert the resource to JSON
```powershell
$Machineidentityupdated | ConvertTo-JSON
```


[[Back to top]](#) 

