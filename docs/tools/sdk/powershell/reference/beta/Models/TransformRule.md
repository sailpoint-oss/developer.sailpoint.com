---
id: beta-transform-rule
title: TransformRule
pagination_label: TransformRule
sidebar_label: TransformRule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TransformRule'] 
slug: /tools/sdk/powershell/beta/models/transform-rule
tags: ['SDK', 'Software Development Kit', 'TransformRule']
---


# TransformRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | This is the name of the Transform rule that needs to be invoked by the transform | [required]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TransformRule = Initialize-PSSailpoint.BetaTransformRule  -Name Transform Calculation Rule `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$TransformRule | ConvertTo-JSON
```


[[Back to top]](#) 

