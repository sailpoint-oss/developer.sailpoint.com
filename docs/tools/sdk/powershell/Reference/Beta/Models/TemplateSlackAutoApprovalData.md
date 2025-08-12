---
id: beta-template-slack-auto-approval-data
title: TemplateSlackAutoApprovalData
pagination_label: TemplateSlackAutoApprovalData
sidebar_label: TemplateSlackAutoApprovalData
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackAutoApprovalData', 'BetaTemplateSlackAutoApprovalData'] 
slug: /tools/sdk/powershell/beta/models/template-slack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateSlackAutoApprovalData', 'BetaTemplateSlackAutoApprovalData']
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
$TemplateSlackAutoApprovalData = Initialize-BetaTemplateSlackAutoApprovalData  -IsAutoApproved null `
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

