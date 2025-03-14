---
id: beta-access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemApproverDto', 'BetaAccessItemApproverDto'] 
slug: /tools/sdk/powershell/beta/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto', 'BetaAccessItemApproverDto']
---


# AccessItemApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity who approved the access item request. | [optional] 
**Id** | **String** | ID of the identity who approved the access item request. | [optional] 
**Name** | **String** | Name of the identity who approved the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemApproverDto = Initialize-PSSailpoint.BetaAccessItemApproverDto  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessItemApproverDto | ConvertTo-JSON
```


[[Back to top]](#) 

