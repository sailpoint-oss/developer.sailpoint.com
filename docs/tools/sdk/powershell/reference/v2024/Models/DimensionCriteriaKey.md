---
id: v2024-dimension-criteria-key
title: DimensionCriteriaKey
pagination_label: DimensionCriteriaKey
sidebar_label: DimensionCriteriaKey
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionCriteriaKey'] 
slug: /tools/sdk/powershell/v2024/models/dimension-criteria-key
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaKey']
---


# DimensionCriteriaKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**DimensionCriteriaKeyType**](dimension-criteria-key-type) |  | [required]
**Property** |  **String** | The name of the identity attribute to which the associated criteria applies. | [required]

## Examples

- Prepare the resource
```powershell
$DimensionCriteriaKey = Initialize-PSSailpoint.V2024DimensionCriteriaKey  -Type null `
 -Property attribute.email
```

- Convert the resource to JSON
```powershell
$DimensionCriteriaKey | ConvertTo-JSON
```


[[Back to top]](#) 

