---
id: event-actor
title: EventActor
pagination_label: EventActor
sidebar_label: EventActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventActor', 'EventActor'] 
slug: /tools/sdk/powershell/v3/models/event-actor
tags: ['SDK', 'Software Development Kit', 'EventActor', 'EventActor']
---


# EventActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the actor that generated the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventActor = Initialize-EventActor  -Name System
```

- Convert the resource to JSON
```powershell
$EventActor | ConvertTo-JSON
```


[[Back to top]](#) 

