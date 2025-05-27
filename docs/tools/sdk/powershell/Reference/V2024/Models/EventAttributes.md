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
**FormDefinitionId** | **String** | Form definition's unique identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventAttributes = Initialize-V2024EventAttributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')] `
 -Description Triggered when an identity's manager attribute changes `
 -AttributeToFilter LifecycleState `
 -FormDefinitionId Admin_Access_Request_Form
```

- Convert the resource to JSON
```powershell
$EventAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

