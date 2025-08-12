---
id: v2025-event-actor
title: EventActor
pagination_label: EventActor
sidebar_label: EventActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventActor', 'V2025EventActor'] 
slug: /tools/sdk/powershell/v2025/models/event-actor
tags: ['SDK', 'Software Development Kit', 'EventActor', 'V2025EventActor']
---


# EventActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the actor that generated the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventActor = Initialize-V2025EventActor  -Name System
```

- Convert the resource to JSON
```powershell
$EventActor | ConvertTo-JSON
```


[[Back to top]](#) 

