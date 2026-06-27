---
id: templateslack-auto-approval-data
title: TemplateslackAutoApprovalData
pagination_label: TemplateslackAutoApprovalData
sidebar_label: TemplateslackAutoApprovalData
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateslackAutoApprovalData', 'TemplateslackAutoApprovalData'] 
slug: /tools/sdk/powershell/notifications/models/templateslack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateslackAutoApprovalData', 'TemplateslackAutoApprovalData']
---


# TemplateslackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** | **String** | Whether the request was auto-approved | [optional] 
**ItemId** | **String** | The item ID | [optional] 
**ItemType** | **String** | The item type | [optional] 
**AutoApprovalMessageJSON** | **String** | JSON message for auto-approval | [optional] 
**AutoApprovalTitle** | **String** | Title for auto-approval | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateslackAutoApprovalData = Initialize-TemplateslackAutoApprovalData  -IsAutoApproved null `
 -ItemId null `
 -ItemType null `
 -AutoApprovalMessageJSON null `
 -AutoApprovalTitle null
```

- Convert the resource to JSON
```powershell
$TemplateslackAutoApprovalData | ConvertTo-JSON
```


[[Back to top]](#) 

