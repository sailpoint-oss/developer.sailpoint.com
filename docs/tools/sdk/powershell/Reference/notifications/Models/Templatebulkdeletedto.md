---
id: templatebulkdeletedto
title: Templatebulkdeletedto
pagination_label: Templatebulkdeletedto
sidebar_label: Templatebulkdeletedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Templatebulkdeletedto', 'Templatebulkdeletedto'] 
slug: /tools/sdk/powershell/notifications/models/templatebulkdeletedto
tags: ['SDK', 'Software Development Kit', 'Templatebulkdeletedto', 'Templatebulkdeletedto']
---


# Templatebulkdeletedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template key to delete | [required]
**Medium** |  **Enum** [  "EMAIL",    "SLACK",    "TEAMS" ] | The notification medium (EMAIL, SLACK, or TEAMS) | [optional] 
**Locale** | **String** | The locale for the message text, a BCP 47 language tag. | [optional] 

## Examples

- Prepare the resource
```powershell
$Templatebulkdeletedto = Initialize-Templatebulkdeletedto  -Key cloud_manual_work_item_summary `
 -Medium EMAIL `
 -Locale en
```

- Convert the resource to JSON
```powershell
$Templatebulkdeletedto | ConvertTo-JSON
```


[[Back to top]](#) 

