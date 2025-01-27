---
id: beta-template-slack-auto-approval-data
title: TemplateSlackAutoApprovalData
pagination_label: TemplateSlackAutoApprovalData
sidebar_label: TemplateSlackAutoApprovalData
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlackAutoApprovalData'] 
slug: /tools/sdk/powershell/beta/models/template-slack-auto-approval-data
tags: ['SDK', 'Software Development Kit', 'TemplateSlackAutoApprovalData']
---


# TemplateSlackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** |  Pointer to **String** |  | [optional] 
**ItemId** |  Pointer to **String** |  | [optional] 
**ItemType** |  Pointer to **String** |  | [optional] 
**AutoApprovalMessageJSON** |  Pointer to **String** |  | [optional] 
**AutoApprovalTitle** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackAutoApprovalData = Initialize-PSSailpoint.BetaTemplateSlackAutoApprovalData  -IsAutoApproved null `
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

