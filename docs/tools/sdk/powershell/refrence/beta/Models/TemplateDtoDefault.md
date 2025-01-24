---
id: template-dto-default
title: TemplateDtoDefault
pagination_label: TemplateDtoDefault
sidebar_label: TemplateDtoDefault
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateDtoDefault'] 
slug: /tools/sdk/powershell/beta/models/template-dto-default
tags: ['SDK', 'Software Development Kit', 'TemplateDtoDefault']
---


# TemplateDtoDefault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The key of the default template | [optional] 
**Name** |  Pointer to **String** | The name of the default template | [optional] 
**Medium** |  Pointer to  **Enum** [  "EMAIL",    "PHONE",    "SMS",    "SLACK",    "TEAMS" ] | The message medium. More mediums may be added in the future. | [optional] 
**Locale** |  Pointer to **String** | The locale for the message text, a BCP 47 language tag. | [optional] 
**Subject** |  Pointer to **String** | The subject of the default template | [optional] 
**Header** |  Pointer to **String** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**Body** |  Pointer to **String** | The body of the default template | [optional] 
**Footer** |  Pointer to **String** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**VarFrom** |  Pointer to **String** | The ""From:"" address of the default template | [optional] 
**ReplyTo** |  Pointer to **String** | The ""Reply To"" field of the default template | [optional] 
**Description** |  Pointer to **String** | The description of the default template | [optional] 
**SlackTemplate** |  Pointer to [**TemplateSlack**](template-slack) |  | [optional] 
**TeamsTemplate** |  Pointer to [**TemplateTeams**](template-teams) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateDtoDefault = Initialize-PSSailpoint.BetaTemplateDtoDefault  -Key cloud_manual_work_item_summary `
 -Name Task Manager Subscription `
 -Medium EMAIL `
 -Locale en `
 -Subject You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}. `
 -Header null `
 -Body Please go to the task manager `
 -Footer null `
 -VarFrom $__global.emailFromAddress `
 -ReplyTo $__global.emailFromAddress `
 -Description Daily digest - sent if number of outstanding tasks for task owner &gt; 0 `
 -SlackTemplate null `
 -TeamsTemplate null
```

- Convert the resource to JSON
```powershell
$TemplateDtoDefault | ConvertTo-JSON
```


[[Back to top]](#) 

