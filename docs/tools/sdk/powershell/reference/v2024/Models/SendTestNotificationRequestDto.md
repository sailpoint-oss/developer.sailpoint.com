---
id: v2024-send-test-notification-request-dto
title: SendTestNotificationRequestDto
pagination_label: SendTestNotificationRequestDto
sidebar_label: SendTestNotificationRequestDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendTestNotificationRequestDto'] 
slug: /tools/sdk/powershell/v2024/models/send-test-notification-request-dto
tags: ['SDK', 'Software Development Kit', 'SendTestNotificationRequestDto']
---


# SendTestNotificationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The template notification key. | [optional] 
**Medium** |  Pointer to  **Enum** [  "EMAIL",    "SLACK",    "TEAMS" ] | The notification medium. Has to be one of the following enum values. | [optional] 
**Context** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A Json object that denotes the context specific to the template. | [optional] 

## Examples

- Prepare the resource
```powershell
$SendTestNotificationRequestDto = Initialize-PSSailpoint.V2024SendTestNotificationRequestDto  -Key cloud_manual_work_item_summary `
 -Medium null `
 -Context null
```

- Convert the resource to JSON
```powershell
$SendTestNotificationRequestDto | ConvertTo-JSON
```


[[Back to top]](#) 

