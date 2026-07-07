---
id: eventattributes
title: Eventattributes
pagination_label: Eventattributes
sidebar_label: Eventattributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Eventattributes', 'Eventattributes'] 
slug: /tools/sdk/powershell/workflows/models/eventattributes
tags: ['SDK', 'Software Development Kit', 'Eventattributes', 'Eventattributes']
---


# Eventattributes

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
$Eventattributes = Initialize-Eventattributes  -Id idn:identity-attributes-changed `
 -VarFilter $.changes[?(@.attribute == 'manager')] `
 -Description Triggered when an identity's manager attribute changes `
 -AttributeToFilter LifecycleState `
 -FormDefinitionId Admin_Access_Request_Form
```

- Convert the resource to JSON
```powershell
$Eventattributes | ConvertTo-JSON
```


[[Back to top]](#) 

