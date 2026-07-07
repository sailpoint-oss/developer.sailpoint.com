---
id: templateteams
title: Templateteams
pagination_label: Templateteams
sidebar_label: Templateteams
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Templateteams', 'Templateteams'] 
slug: /tools/sdk/powershell/notifications/models/templateteams
tags: ['SDK', 'Software Development Kit', 'Templateteams', 'Templateteams']
---


# Templateteams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template key | [optional] 
**Title** | **String** | The title of the Teams message | [optional] 
**Text** | **String** | The main text content of the Teams message | [optional] 
**MessageJSON** | **String** | JSON string of the Teams adaptive card | [optional] 
**IsSubscription** | **Boolean** | Whether this is a subscription notification | [optional] [default to $false]
**ApprovalId** | **String** | The approval request ID | [optional] 
**RequestId** | **String** | The request ID | [optional] 
**RequestedById** | **String** | The ID of the user who made the request | [optional] 
**NotificationType** | **String** | The type of notification | [optional] 
**AutoApprovalData** | [**TemplateslackAutoApprovalData**](templateslack-auto-approval-data) |  | [optional] 
**CustomFields** | [**TemplateslackCustomFields**](templateslack-custom-fields) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Templateteams = Initialize-Templateteams  -Key null `
 -Title null `
 -Text You have a new approval request `
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
$Templateteams | ConvertTo-JSON
```


[[Back to top]](#) 

