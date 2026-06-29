---
id: transformrule
title: Transformrule
pagination_label: Transformrule
sidebar_label: Transformrule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Transformrule', 'Transformrule'] 
slug: /tools/sdk/powershell/sources/models/transformrule
tags: ['SDK', 'Software Development Kit', 'Transformrule', 'Transformrule']
---


# Transformrule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the Transform rule that needs to be invoked by the transform | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Transformrule = Initialize-Transformrule  -Name Transform Calculation Rule `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Transformrule | ConvertTo-JSON
```


[[Back to top]](#) 

