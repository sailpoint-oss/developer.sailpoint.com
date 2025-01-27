---
id: dimension-membership-selector
title: DimensionMembershipSelector
pagination_label: DimensionMembershipSelector
sidebar_label: DimensionMembershipSelector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionMembershipSelector'] 
slug: /tools/sdk/powershell/v2024/models/dimension-membership-selector
tags: ['SDK', 'Software Development Kit', 'DimensionMembershipSelector']
---


# DimensionMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DimensionMembershipSelectorType**](dimension-membership-selector-type) |  | [optional] 
**Criteria** |  Pointer to [**DimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionMembershipSelector = Initialize-PSSailpoint.V2024DimensionMembershipSelector  -Type null `
 -Criteria null
```

- Convert the resource to JSON
```powershell
$DimensionMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

