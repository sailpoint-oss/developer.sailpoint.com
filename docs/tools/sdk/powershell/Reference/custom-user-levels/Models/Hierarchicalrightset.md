---
id: hierarchicalrightset
title: Hierarchicalrightset
pagination_label: Hierarchicalrightset
sidebar_label: Hierarchicalrightset
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Hierarchicalrightset', 'Hierarchicalrightset'] 
slug: /tools/sdk/powershell/customuserlevels/models/hierarchicalrightset
tags: ['SDK', 'Software Development Kit', 'Hierarchicalrightset', 'Hierarchicalrightset']
---


# Hierarchicalrightset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the RightSet. | [optional] 
**Name** | **String** | The human-readable name of the RightSet. | [optional] 
**Description** | **String** | A human-readable description of the RightSet. | [optional] 
**Category** | **String** | The category of the RightSet. | [optional] 
**NestedConfig** | [**Nestedconfig**](nestedconfig) |  | [optional] 
**Children** | [**[]Hierarchicalrightset**](hierarchicalrightset) | List of child HierarchicalRightSets. | [optional] 

## Examples

- Prepare the resource
```powershell
$Hierarchicalrightset = Initialize-Hierarchicalrightset  -Id idn:ui-right-set-example `
 -Name Hierarchical Right Set Name `
 -Description This is a description of the HierarchicalRightSet. `
 -Category identity `
 -NestedConfig null `
 -Children {"id":"idn:ui-identity-details-example","name":"Identity Details","description":"Read only access for identity details.","category":"identity","nestedConfig":{"ancestorId":"idn:ui-identity-management-example","depth":1,"parentId":"idn:ui-identity-management-example","childrenIds":[]},"children":[]}
```

- Convert the resource to JSON
```powershell
$Hierarchicalrightset | ConvertTo-JSON
```


[[Back to top]](#) 

