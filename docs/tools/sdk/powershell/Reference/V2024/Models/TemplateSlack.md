---
id: v2024-template-slack
title: TemplateSlack
pagination_label: TemplateSlack
sidebar_label: TemplateSlack
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlack', 'V2024TemplateSlack'] 
slug: /tools/sdk/powershell/v2024/models/template-slack
tags: ['SDK', 'Software Development Kit', 'TemplateSlack', 'V2024TemplateSlack']
---


# TemplateSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** |  | [optional] 
**Text** | **String** |  | [optional] 
**Blocks** | **String** |  | [optional] 
**Attachments** | **String** |  | [optional] 
**NotificationType** | **String** |  | [optional] 
**ApprovalId** | **String** |  | [optional] 
**RequestId** | **String** |  | [optional] 
**RequestedById** | **String** |  | [optional] 
**IsSubscription** | **Boolean** |  | [optional] 
**AutoApprovalData** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlack = Initialize-PSSailpoint.V2024TemplateSlack  -Key null `
 -Text null `
 -Blocks null `
 -Attachments null `
 -NotificationType null `
 -ApprovalId null `
 -RequestId null `
 -RequestedById null `
 -IsSubscription null `
 -AutoApprovalData null `
 -CustomFields null
```

- Convert the resource to JSON
```powershell
$TemplateSlack | ConvertTo-JSON
```


[[Back to top]](#) 

