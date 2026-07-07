---
id: machineaccountcreateaccessdto
title: Machineaccountcreateaccessdto
pagination_label: Machineaccountcreateaccessdto
sidebar_label: Machineaccountcreateaccessdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineaccountcreateaccessdto', 'Machineaccountcreateaccessdto'] 
slug: /tools/sdk/powershell/machineaccountcreationrequest/models/machineaccountcreateaccessdto
tags: ['SDK', 'Software Development Kit', 'Machineaccountcreateaccessdto', 'Machineaccountcreateaccessdto']
---


# Machineaccountcreateaccessdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Source ID. | [optional] 
**SourceName** | **String** | Source name. | [optional] 
**Subtypes** | [**[]MachineaccountcreateaccessdtoSubtypesInner**](machineaccountcreateaccessdto-subtypes-inner) | List of subtypes for which the user has an entitlement to request machine accounts. | [optional] 

## Examples

- Prepare the resource
```powershell
$Machineaccountcreateaccessdto = Initialize-Machineaccountcreateaccessdto  -SourceId 1419fc28a8ed4a079f5c0cb5dfad6311 `
 -SourceName Source name `
 -Subtypes null
```

- Convert the resource to JSON
```powershell
$Machineaccountcreateaccessdto | ConvertTo-JSON
```


[[Back to top]](#) 

