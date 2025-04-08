---
id: v2025-dimension-membership-selector
title: DimensionMembershipSelector
pagination_label: DimensionMembershipSelector
sidebar_label: DimensionMembershipSelector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionMembershipSelector', 'V2025DimensionMembershipSelector'] 
slug: /tools/sdk/powershell/v2025/models/dimension-membership-selector
tags: ['SDK', 'Software Development Kit', 'DimensionMembershipSelector', 'V2025DimensionMembershipSelector']
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
$DimensionMembershipSelector = Initialize-PSSailpoint.V2025DimensionMembershipSelector  -Type null `
 -Criteria null
```

- Convert the resource to JSON
```powershell
$DimensionMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

