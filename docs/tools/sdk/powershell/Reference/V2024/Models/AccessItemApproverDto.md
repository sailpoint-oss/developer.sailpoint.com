---
id: v2024-access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemApproverDto', 'V2024AccessItemApproverDto'] 
slug: /tools/sdk/powershell/v2024/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto', 'V2024AccessItemApproverDto']
---


# AccessItemApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who approved the access item request. | [optional] 
**Id** | **String** | ID of identity who approved the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who approved the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemApproverDto = Initialize-PSSailpoint.V2024AccessItemApproverDto  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessItemApproverDto | ConvertTo-JSON
```


[[Back to top]](#) 

