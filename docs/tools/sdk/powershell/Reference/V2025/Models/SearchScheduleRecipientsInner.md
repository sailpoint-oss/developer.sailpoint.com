---
id: v2025-search-schedule-recipients-inner
title: SearchScheduleRecipientsInner
pagination_label: SearchScheduleRecipientsInner
sidebar_label: SearchScheduleRecipientsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchScheduleRecipientsInner', 'V2025SearchScheduleRecipientsInner'] 
slug: /tools/sdk/powershell/v2025/models/search-schedule-recipients-inner
tags: ['SDK', 'Software Development Kit', 'SearchScheduleRecipientsInner', 'V2025SearchScheduleRecipientsInner']
---


# SearchScheduleRecipientsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [required]
**Id** | **String** | The ID of the referenced object | [required]

## Examples

- Prepare the resource
```powershell
$SearchScheduleRecipientsInner = Initialize-V2025SearchScheduleRecipientsInner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$SearchScheduleRecipientsInner | ConvertTo-JSON
```


[[Back to top]](#) 

