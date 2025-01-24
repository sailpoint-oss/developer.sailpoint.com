---
id: template-slack
title: TemplateSlack
pagination_label: TemplateSlack
sidebar_label: TemplateSlack
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateSlack'] 
slug: /tools/sdk/powershell/v2024/models/template-slack
tags: ['SDK', 'Software Development Kit', 'TemplateSlack']
---


# TemplateSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** |  | [optional] 
**Text** |  Pointer to **String** |  | [optional] 
**Blocks** |  Pointer to **String** |  | [optional] 
**Attachments** |  Pointer to **String** |  | [optional] 
**NotificationType** |  Pointer to **String** |  | [optional] 
**ApprovalId** |  Pointer to **String** |  | [optional] 
**RequestId** |  Pointer to **String** |  | [optional] 
**RequestedById** |  Pointer to **String** |  | [optional] 
**IsSubscription** |  Pointer to **Boolean** |  | [optional] 
**AutoApprovalData** |  Pointer to [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** |  Pointer to [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

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

