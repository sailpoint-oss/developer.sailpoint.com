---
id: v2024-event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventAttributes', 'V2024EventAttributes'] 
slug: /tools/sdk/powershell/v2024/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes', 'V2024EventAttributes']
---


# EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the trigger | [required]
**VarFilter** | **String** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**Description** | **String** | Description of the event trigger | [optional] 
**AttributeToFilter** | **String** | The attribute to filter on | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-PSSailpoint.V2024EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute &#x3D;&#x3D; &#39;manager&#39;)] `
 -Description Triggered when an identity&#39;s manager attribute changes `
 -AttributeToFilter LifecycleState
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

