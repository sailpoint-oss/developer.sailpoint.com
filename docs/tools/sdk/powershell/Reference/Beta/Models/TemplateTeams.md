---
id: beta-template-teams
title: TemplateTeams
pagination_label: TemplateTeams
sidebar_label: TemplateTeams
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateTeams', 'BetaTemplateTeams'] 
slug: /tools/sdk/powershell/beta/models/template-teams
tags: ['SDK', 'Software Development Kit', 'TemplateTeams', 'BetaTemplateTeams']
---


# TemplateTeams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** |  | [optional] 
**Title** | **String** |  | [optional] 
**Text** | **String** |  | [optional] 
**MessageJSON** | **String** |  | [optional] 
**IsSubscription** | **Boolean** |  | [optional] 
**ApprovalId** | **String** |  | [optional] 
**RequestId** | **String** |  | [optional] 
**RequestedById** | **String** |  | [optional] 
**NotificationType** | **String** |  | [optional] 
**AutoApprovalData** | [**TemplateSlackAutoApprovalData**](template-slack-auto-approval-data) |  | [optional] 
**CustomFields** | [**TemplateSlackCustomFields**](template-slack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateTeams = Initialize-BetaTemplateTeams  -Key null `
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

