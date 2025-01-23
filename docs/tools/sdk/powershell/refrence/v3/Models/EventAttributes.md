---
id: event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventAttributes'] 
slug: /tools/sdk/powershell/v3/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes']
---


# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the trigger | [required]
**VarFilter** |  Pointer to **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** |  Pointer to **String** | Description of the event trigger | [optional] 
**AttributeToFilter** |  Pointer to **String** | The attribute to filter on | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-PSSailpoint.V3EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute &#x3D;&#x3D; &#39;manager&#39;)] `
 -Description Triggered when an identity&#39;s manager attribute changes `
 -AttributeToFilter LifecycleState
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

