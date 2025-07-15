---
id: v2025-nested-config
title: NestedConfig
pagination_label: NestedConfig
sidebar_label: NestedConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NestedConfig', 'V2025NestedConfig'] 
slug: /tools/sdk/powershell/v2025/models/nested-config
tags: ['SDK', 'Software Development Kit', 'NestedConfig', 'V2025NestedConfig']
---


# NestedConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AncestorId** | **String** | The unique identifier of the ancestor RightSet. | [optional] 
**Depth** | **Int32** | The depth level of the configuration. | [optional] 
**ParentId** | **String** | The unique identifier of the parent RightSet. | [optional] 
**ChildrenIds** | **[]String** | List of unique identifiers for child configurations. | [optional] 

## Examples

- Prepare the resource
```powershell
$NestedConfig = Initialize-V2025NestedConfig  -AncestorId idn:ui-ancestor-example `
 -Depth 2 `
 -ParentId idn:ui-parent-example `
 -ChildrenIds [idn:ui-child-one-example, idn:ui-child-two-example]
```

- Convert the resource to JSON
```powershell
$NestedConfig | ConvertTo-JSON
```


[[Back to top]](#) 

