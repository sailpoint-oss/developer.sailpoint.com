---
id: event-target
title: EventTarget
pagination_label: EventTarget
sidebar_label: EventTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventTarget', 'EventTarget'] 
slug: /tools/sdk/powershell/v3/models/event-target
tags: ['SDK', 'Software Development Kit', 'EventTarget', 'EventTarget']
---


# EventTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the target, or recipient, of the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventTarget = Initialize-EventTarget  -Name Carol.Adams
```

- Convert the resource to JSON
```powershell
$EventTarget | ConvertTo-JSON
```


[[Back to top]](#) 

