---
id: beta-event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventAttributes'] 
slug: /tools/sdk/powershell/beta/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes']
---


# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | [required]
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** |  Pointer to **String** | Description of the event trigger | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-PSSailpoint.BetaEventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute &#x3D;&#x3D; &#39;manager&#39;)] `
 -Description null
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

