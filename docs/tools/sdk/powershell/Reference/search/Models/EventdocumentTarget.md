---
id: eventdocument-target
title: EventdocumentTarget
pagination_label: EventdocumentTarget
sidebar_label: EventdocumentTarget
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventdocumentTarget', 'EventdocumentTarget'] 
slug: /tools/sdk/powershell/search/models/eventdocument-target
tags: ['SDK', 'Software Development Kit', 'EventdocumentTarget', 'EventdocumentTarget']
---


# EventdocumentTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the target, or recipient, of the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventdocumentTarget = Initialize-EventdocumentTarget  -Name Carol.Adams
```

- Convert the resource to JSON
```powershell
$EventdocumentTarget | ConvertTo-JSON
```


[[Back to top]](#) 

