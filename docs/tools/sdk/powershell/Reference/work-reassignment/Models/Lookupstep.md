---
id: lookupstep
title: Lookupstep
pagination_label: Lookupstep
sidebar_label: Lookupstep
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lookupstep', 'Lookupstep'] 
slug: /tools/sdk/powershell/workreassignment/models/lookupstep
tags: ['SDK', 'Software Development Kit', 'Lookupstep', 'Lookupstep']
---


# Lookupstep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedToId** | **String** | The ID of the Identity who work is reassigned to | [optional] 
**ReassignedFromId** | **String** | The ID of the Identity who work is reassigned from | [optional] 
**ReassignmentType** | [**Reassignmenttypeenum**](reassignmenttypeenum) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Lookupstep = Initialize-Lookupstep  -ReassignedToId 869320b6b6f34a169b6178b1a865e66f `
 -ReassignedFromId 51948a8f306a4e7a9a6f8f5d032fa59e `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$Lookupstep | ConvertTo-JSON
```


[[Back to top]](#) 

