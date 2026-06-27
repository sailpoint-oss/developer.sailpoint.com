---
id: nestedconfig
title: Nestedconfig
pagination_label: Nestedconfig
sidebar_label: Nestedconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nestedconfig', 'Nestedconfig'] 
slug: /tools/sdk/powershell/customuserlevels/models/nestedconfig
tags: ['SDK', 'Software Development Kit', 'Nestedconfig', 'Nestedconfig']
---


# Nestedconfig

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
$Nestedconfig = Initialize-Nestedconfig  -AncestorId idn:ui-ancestor-example `
 -Depth 2 `
 -ParentId idn:ui-parent-example `
 -ChildrenIds ["idn:ui-child-one-example","idn:ui-child-two-example"]
```

- Convert the resource to JSON
```powershell
$Nestedconfig | ConvertTo-JSON
```


[[Back to top]](#) 

