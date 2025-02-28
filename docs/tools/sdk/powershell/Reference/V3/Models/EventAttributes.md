---
id: event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EventAttributes', 'EventAttributes'] 
slug: /tools/sdk/powershell/v3/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes', 'EventAttributes']
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
$EventAttributes = Initialize-PSSailpoint.V3EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')] `
 -Description Triggered when an identity's manager attribute changes `
 -AttributeToFilter LifecycleState
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

