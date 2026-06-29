---
id: uuidgenerator
title: Uuidgenerator
pagination_label: Uuidgenerator
sidebar_label: Uuidgenerator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Uuidgenerator', 'Uuidgenerator'] 
slug: /tools/sdk/powershell/transforms/models/uuidgenerator
tags: ['SDK', 'Software Development Kit', 'Uuidgenerator', 'Uuidgenerator']
---


# Uuidgenerator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Uuidgenerator = Initialize-Uuidgenerator  -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$Uuidgenerator | ConvertTo-JSON
```


[[Back to top]](#) 

