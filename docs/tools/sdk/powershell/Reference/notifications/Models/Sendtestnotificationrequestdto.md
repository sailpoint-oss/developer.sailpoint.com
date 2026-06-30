---
id: sendtestnotificationrequestdto
title: Sendtestnotificationrequestdto
pagination_label: Sendtestnotificationrequestdto
sidebar_label: Sendtestnotificationrequestdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sendtestnotificationrequestdto', 'Sendtestnotificationrequestdto'] 
slug: /tools/sdk/powershell/notifications/models/sendtestnotificationrequestdto
tags: ['SDK', 'Software Development Kit', 'Sendtestnotificationrequestdto', 'Sendtestnotificationrequestdto']
---


# Sendtestnotificationrequestdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template notification key. | [optional] 
**Medium** |  **Enum** [  "EMAIL",    "SLACK",    "TEAMS" ] | The notification medium. Has to be one of the following enum values. | [optional] 
**Locale** | **String** | The locale for the message text. | [optional] 
**Context** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A Json object that denotes the context specific to the template. | [optional] 
**RecipientEmailList** | **[]String** | A list of override recipient email addresses for the test notification. | [optional] 
**CarbonCopy** | **[]String** | A list of CC email addresses for the test notification. | [optional] 
**BlindCarbonCopy** | **[]String** | A list of BCC email addresses for the test notification. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sendtestnotificationrequestdto = Initialize-Sendtestnotificationrequestdto  -Key cloud_manual_work_item_summary `
 -Medium EMAIL `
 -Locale en `
 -Context {"numberOfPendingTasks":"4","taskTasks":"tasks"} `
 -RecipientEmailList ["test@example.com"] `
 -CarbonCopy ["cc@example.com"] `
 -BlindCarbonCopy ["bcc@example.com"]
```

- Convert the resource to JSON
```powershell
$Sendtestnotificationrequestdto | ConvertTo-JSON
```


[[Back to top]](#) 

