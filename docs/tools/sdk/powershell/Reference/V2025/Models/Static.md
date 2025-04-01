---
id: v2025-static
title: Static
pagination_label: Static
sidebar_label: Static
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Static', 'V2025Static'] 
slug: /tools/sdk/powershell/v2025/models/static
tags: ['SDK', 'Software Development Kit', 'Static', 'V2025Static']
---


# Static

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Values** | **String** | This must evaluate to a JSON string, either through a fixed value or through conditional logic using the Apache Velocity Template Language. | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Static = Initialize-PSSailpoint.V2025Static  -Values string$variable `
 -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Static | ConvertTo-JSON
```


[[Back to top]](#) 

