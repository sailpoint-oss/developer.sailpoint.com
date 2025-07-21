---
id: v2025-hierarchical-right-set
title: HierarchicalRightSet
pagination_label: HierarchicalRightSet
sidebar_label: HierarchicalRightSet
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'HierarchicalRightSet', 'V2025HierarchicalRightSet'] 
slug: /tools/sdk/powershell/v2025/models/hierarchical-right-set
tags: ['SDK', 'Software Development Kit', 'HierarchicalRightSet', 'V2025HierarchicalRightSet']
---


# HierarchicalRightSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the RightSet. | [optional] 
**Name** | **String** | The human-readable name of the RightSet. | [optional] 
**Description** | **String** | A human-readable description of the RightSet. | [optional] 
**Category** | **String** | The category of the RightSet. | [optional] 
**NestedConfig** | [**NestedConfig**](nested-config) |  | [optional] 
**Children** | [**[]HierarchicalRightSet**](hierarchical-right-set) | List of child HierarchicalRightSets. | [optional] 

## Examples

- Prepare the resource
```powershell
$HierarchicalRightSet = Initialize-V2025HierarchicalRightSet  -Id idn:ui-right-set-example `
 -Name Hierarchical Right Set Name `
 -Description This is a description of the HierarchicalRightSet. `
 -Category identity `
 -NestedConfig null `
 -Children {id=idn:ui-identity-details-example, name=Identity Details, description=Read only access for identity details., category=identity, nestedConfig={ancestorId=idn:ui-identity-management-example, depth=1, parentId=idn:ui-identity-management-example, childrenIds=[]}, children=[]}
```

- Convert the resource to JSON
```powershell
$HierarchicalRightSet | ConvertTo-JSON
```


[[Back to top]](#) 

