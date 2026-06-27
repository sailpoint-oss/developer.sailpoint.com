---
id: eventdocument-actor
title: EventdocumentActor
pagination_label: EventdocumentActor
sidebar_label: EventdocumentActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventdocumentActor', 'EventdocumentActor'] 
slug: /tools/sdk/powershell/search/models/eventdocument-actor
tags: ['SDK', 'Software Development Kit', 'EventdocumentActor', 'EventdocumentActor']
---


# EventdocumentActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the actor that generated the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventdocumentActor = Initialize-EventdocumentActor  -Name System
```

- Convert the resource to JSON
```powershell
$EventdocumentActor | ConvertTo-JSON
```


[[Back to top]](#) 

