---
id: v2024-event-target
title: EventTarget
pagination_label: EventTarget
sidebar_label: EventTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventTarget', 'V2024EventTarget'] 
slug: /tools/sdk/powershell/v2024/models/event-target
tags: ['SDK', 'Software Development Kit', 'EventTarget', 'V2024EventTarget']
---


# EventTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the target, or recipient, of the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventTarget = Initialize-PSSailpoint.V2024EventTarget  -Name Carol.Adams
```

- Convert the resource to JSON
```powershell
$EventTarget | ConvertTo-JSON
```


[[Back to top]](#) 

