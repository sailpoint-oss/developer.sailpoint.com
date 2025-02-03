---
id: v2024-template-slack-auto-approval-data
title: TemplateSlackAutoApprovalData
pagination_label: TemplateSlackAutoApprovalData
sidebar_label: TemplateSlackAutoApprovalData
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackAutoApprovalData', 'V2024TemplateSlackAutoApprovalData'] 
slug: /tools/sdk/powershell/v2024/models/template-slack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateSlackAutoApprovalData', 'V2024TemplateSlackAutoApprovalData']
---


# TemplateSlackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** | **String** |  | [optional] 
**ItemId** | **String** |  | [optional] 
**ItemType** | **String** |  | [optional] 
**AutoApprovalMessageJSON** | **String** |  | [optional] 
**AutoApprovalTitle** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackAutoApprovalData = Initialize-PSSailpoint.V2024TemplateSlackAutoApprovalData  -IsAutoApproved null `
 -ItemId null `
 -ItemType null `
 -AutoApprovalMessageJSON null `
 -AutoApprovalTitle null
```

- Convert the resource to JSON
```powershell
$TemplateSlackAutoApprovalData | ConvertTo-JSON
```


[[Back to top]](#) 

