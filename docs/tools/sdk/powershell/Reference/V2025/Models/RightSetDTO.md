---
id: v2025-right-set-dto
title: RightSetDTO
pagination_label: RightSetDTO
sidebar_label: RightSetDTO
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RightSetDTO', 'V2025RightSetDTO'] 
slug: /tools/sdk/powershell/v2025/models/right-set-dto
tags: ['SDK', 'Software Development Kit', 'RightSetDTO', 'V2025RightSetDTO']
---


# RightSetDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the RightSet. | [optional] 
**Name** | **String** | The human-readable name of the RightSet. | [optional] 
**Description** | **String** | A human-readable description of the RightSet. | [optional] 
**Category** | **String** | The category of the RightSet. | [optional] 
**Rights** | **[]String** | Right is the most granular unit that determines specific API permissions, this is a list of rights associated with the RightSet. | [optional] 
**RightSetIds** | **[]String** | List of unique identifiers for related RightSets, current RightSet contains rights from these RightSets. | [optional] 
**UiAssignableChildRightSetIds** | **[]String** | List of unique identifiers for UI-assignable child RightSets, used to build UI components. | [optional] 
**UiAssignable** | **Boolean** | Indicates whether the RightSet is UI-assignable. | [optional] [default to $false]
**TranslatedName** | **String** | The translated name of the RightSet. | [optional] 
**TranslatedDescription** | **String** | The translated description of the RightSet. | [optional] 
**ParentId** | **String** | The unique identifier of the parent RightSet for UI Assignable RightSet. | [optional] 

## Examples

- Prepare the resource
```powershell
$RightSetDTO = Initialize-V2025RightSetDTO  -Id idn:ui-right-set-example `
 -Name Right Set Name `
 -Description This is a description of the RightSet. `
 -Category identity `
 -Rights [idn:ui-right-set-example:read, idn:ui-right-set-example:write] `
 -RightSetIds [idn:ui-right-set-example-update, idn:ui-right-set-example-delete] `
 -UiAssignableChildRightSetIds [idn:ui-right-set-example-detail, idn:ui-right-set-example-management] `
 -UiAssignable true `
 -TranslatedName Translated Right Set Name `
 -TranslatedDescription This is a translated description of the RightSet. `
 -ParentId idn:ui-parent-example
```

- Convert the resource to JSON
```powershell
$RightSetDTO | ConvertTo-JSON
```


[[Back to top]](#) 

