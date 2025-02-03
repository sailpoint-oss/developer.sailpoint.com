---
id: search-schedule-recipients-inner
title: SearchScheduleRecipientsInner
pagination_label: SearchScheduleRecipientsInner
sidebar_label: SearchScheduleRecipientsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchScheduleRecipientsInner', 'SearchScheduleRecipientsInner'] 
slug: /tools/sdk/powershell/v3/models/search-schedule-recipients-inner
tags: ['SDK', 'Software Development Kit', 'SearchScheduleRecipientsInner', 'SearchScheduleRecipientsInner']
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
$SearchScheduleRecipientsInner = Initialize-PSSailpoint.V3SearchScheduleRecipientsInner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$SearchScheduleRecipientsInner | ConvertTo-JSON
```


[[Back to top]](#) 

