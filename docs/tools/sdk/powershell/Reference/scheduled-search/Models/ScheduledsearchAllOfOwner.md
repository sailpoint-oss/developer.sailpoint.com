---
id: scheduledsearch-all-of-owner
title: ScheduledsearchAllOfOwner
pagination_label: ScheduledsearchAllOfOwner
sidebar_label: ScheduledsearchAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledsearchAllOfOwner', 'ScheduledsearchAllOfOwner'] 
slug: /tools/sdk/powershell/scheduledsearch/models/scheduledsearch-all-of-owner
tags: ['SDK', 'Software Development Kit', 'ScheduledsearchAllOfOwner', 'ScheduledsearchAllOfOwner']
---


# ScheduledsearchAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [required]
**Id** | **String** | The ID of the referenced object | [required]

## Examples

- Prepare the resource
```powershell
$ScheduledsearchAllOfOwner = Initialize-ScheduledsearchAllOfOwner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$ScheduledsearchAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

