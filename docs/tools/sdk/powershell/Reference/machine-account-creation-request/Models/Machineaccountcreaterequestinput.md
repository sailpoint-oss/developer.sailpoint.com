---
id: machineaccountcreaterequestinput
title: Machineaccountcreaterequestinput
pagination_label: Machineaccountcreaterequestinput
sidebar_label: Machineaccountcreaterequestinput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineaccountcreaterequestinput', 'Machineaccountcreaterequestinput'] 
slug: /tools/sdk/powershell/machineaccountcreationrequest/models/machineaccountcreaterequestinput
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreaterequestinput', 'Machineaccountcreaterequestinput']
---


# Machineaccountcreaterequestinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **String** | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [required]
**FormId** | **String** | Form ID selected by user for the machine account create request. | [optional] 
**OwnerIdentityId** | **String** | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [required]
**MachineIdentityId** | **String** | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [optional] 
**Environment** | **String** | Environment type to use for the machine account. | [optional] 
**Description** | **String** | Description for the machine account. | [optional] 
**UserInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Fields of the form linked to the subtype in approval settings. | [optional] 
**EntitlementIds** | **[]String** | List of entitlement IDs to provision for created machine account. | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineaccountcreaterequestinput = Initialize-Machineaccountcreaterequestinput  -SubtypeId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -FormId f5dd23fe-3414-42b7-bb1c-869400ad7a10 `
 -OwnerIdentityId 18104e7e499b4e23882d6323344ab6bc `
 -MachineIdentityId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -Environment Dev `
 -Description Requesting machine account for tracking the inventory. `
 -UserInput {"target":"AD Source","description":"Inventory tracking"} `
 -EntitlementIds ["6d28b7c1620c49c6b6d5cbf81eb4b5fa","2c91808a7624751a01762f19d67c220e"]
```

- Convert the resource to JSON
```powershell
$Machineaccountcreaterequestinput | ConvertTo-JSON
```


[[Back to top]](#) 

