---
id: beta-template-teams
title: TemplateTeams
pagination_label: TemplateTeams
sidebar_label: TemplateTeams
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateTeams'] 
slug: /tools/sdk/powershell/beta/models/template-teams
tags: ['SDK', 'Software Development Kit', 'TemplateTeams']
---


# TemplateTeams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** |  | [optional] 
**Title** |  Pointer to **String** |  | [optional] 
**Text** |  Pointer to **String** |  | [optional] 
**MessageJSON** |  Pointer to **String** |  | [optional] 
**IsSubscription** |  Pointer to **Boolean** |  | [optional] 
**ApprovalId** |  Pointer to **String** |  | [optional] 
**RequestId** |  Pointer to **String** |  | [optional] 
**RequestedById** |  Pointer to **String** |  | [optional] 
**NotificationType** |  Pointer to **String** |  | [optional] 
**AutoApprovalData** |  Pointer to [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** |  Pointer to [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateTeams = Initialize-PSSailpoint.BetaTemplateTeams  -Key null `
 -Title null `
 -Text null `
 -MessageJSON null `
 -IsSubscription null `
 -ApprovalId null `
 -RequestId null `
 -RequestedById null `
 -NotificationType null `
 -AutoApprovalData null `
 -CustomFields null
```

- Convert the resource to JSON
```powershell
$TemplateTeams | ConvertTo-JSON
```


[[Back to top]](#) 

