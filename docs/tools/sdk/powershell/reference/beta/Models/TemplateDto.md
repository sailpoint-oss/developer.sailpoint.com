---
id: beta-template-dto
title: TemplateDto
pagination_label: TemplateDto
sidebar_label: TemplateDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TemplateDto', 'BetaTemplateDto'] 
slug: /tools/sdk/powershell/beta/models/template-dto
tags: ['SDK', 'Software Development Kit', 'TemplateDto', 'BetaTemplateDto']
---


# TemplateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  **String** | The key of the template | [required]
**Name** |  Pointer to **String** | The name of the Task Manager Subscription | [optional] 
**Medium** |   **Enum** [  "EMAIL",    "PHONE",    "SMS",    "SLACK",    "TEAMS" ] | The message medium. More mediums may be added in the future. | [required]
**Locale** |  **String** | The locale for the message text, a BCP 47 language tag. | [required]
**Subject** |  Pointer to **String** | The subject line in the template | [optional] 
**Header** |  Pointer to **String** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**Body** |  Pointer to **String** | The body in the template | [optional] 
**Footer** |  Pointer to **String** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**VarFrom** |  Pointer to **String** | The ""From:"" address in the template | [optional] 
**ReplyTo** |  Pointer to **String** | The ""Reply To"" line in the template | [optional] 
**Description** |  Pointer to **String** | The description in the template | [optional] 
**Id** |  Pointer to **String** | This is auto-generated. | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when this template is created. This is auto-generated. | [optional] 
**Modified** |  Pointer to **System.DateTime** | The time when this template was last modified. This is auto-generated. | [optional] 
**SlackTemplate** |  Pointer to **String** |  | [optional] 
**TeamsTemplate** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateDto = Initialize-PSSailpoint.BetaTemplateDto  -Key cloud_manual_work_item_summary `
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
 -Id c17bea3a-574d-453c-9e04-4365fbf5af0b `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -SlackTemplate null `
 -TeamsTemplate null
```

- Convert the resource to JSON
```powershell
$TemplateDto | ConvertTo-JSON
```


[[Back to top]](#) 

