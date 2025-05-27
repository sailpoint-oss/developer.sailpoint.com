---
id: beta-lookup-step
title: LookupStep
pagination_label: LookupStep
sidebar_label: LookupStep
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LookupStep', 'BetaLookupStep'] 
slug: /tools/sdk/powershell/beta/models/lookup-step
tags: ['SDK', 'Software Development Kit', 'LookupStep', 'BetaLookupStep']
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
$LookupStep = Initialize-BetaLookupStep  -ReassignedToId 869320b6b6f34a169b6178b1a865e66f `
 -ReassignedFromId 51948a8f306a4e7a9a6f8f5d032fa59e `
 -ReassignmentType null
```

- Convert the resource to JSON
```powershell
$LookupStep | ConvertTo-JSON
```


[[Back to top]](#) 

