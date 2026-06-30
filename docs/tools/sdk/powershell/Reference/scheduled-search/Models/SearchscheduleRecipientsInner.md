---
id: searchschedule-recipients-inner
title: SearchscheduleRecipientsInner
pagination_label: SearchscheduleRecipientsInner
sidebar_label: SearchscheduleRecipientsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchscheduleRecipientsInner', 'SearchscheduleRecipientsInner'] 
slug: /tools/sdk/powershell/scheduledsearch/models/searchschedule-recipients-inner
tags: ['SDK', 'Software Development Kit', 'SearchscheduleRecipientsInner', 'SearchscheduleRecipientsInner']
---


# SearchscheduleRecipientsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [required]
**Id** | **String** | The ID of the referenced object | [required]

## Examples

- Prepare the resource
```powershell
$SearchscheduleRecipientsInner = Initialize-SearchscheduleRecipientsInner  -Type IDENTITY `
 -Id 2c9180867624cbd7017642d8c8c81f67
```

- Convert the resource to JSON
```powershell
$SearchscheduleRecipientsInner | ConvertTo-JSON
```


[[Back to top]](#) 

