---
id: v2024-dimension-membership-selector
title: DimensionMembershipSelector
pagination_label: DimensionMembershipSelector
sidebar_label: DimensionMembershipSelector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionMembershipSelector', 'V2024DimensionMembershipSelector'] 
slug: /tools/sdk/powershell/v2024/models/dimension-membership-selector
tags: ['SDK', 'Software Development Kit', 'DimensionMembershipSelector', 'V2024DimensionMembershipSelector']
---


# DimensionMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DimensionMembershipSelectorType**](dimension-membership-selector-type) |  | [optional] 
**Criteria** | [**DimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionMembershipSelector = Initialize-V2024DimensionMembershipSelector  -Type null `
 -Criteria null
```

- Convert the resource to JSON
```powershell
$DimensionMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

