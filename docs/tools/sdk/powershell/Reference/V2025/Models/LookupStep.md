---
id: v2025-lookup-step
title: LookupStep
pagination_label: LookupStep
sidebar_label: LookupStep
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LookupStep', 'V2025LookupStep'] 
slug: /tools/sdk/powershell/v2025/models/lookup-step
tags: ['SDK', 'Software Development Kit', 'LookupStep', 'V2025LookupStep']
---


# LookupStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedToId** | **String** | The ID of the Identity who work is reassigned to | [optional] 
**ReassignedFromId** | **String** | The ID of the Identity who work is reassigned from | [optional] 
**ReassignmentType** | [**ReassignmentTypeEnum**](reassignment-type-enum) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$LookupStep = Initialize-PSSailpoint.V2025LookupStep  -ReassignedToId 869320b6b6f34a169b6178b1a865e66f `
 -ReassignedFromId 51948a8f306a4e7a9a6f8f5d032fa59e `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$LookupStep | ConvertTo-JSON
```


[[Back to top]](#) 

