---
id: v2024-uuid-generator
title: UUIDGenerator
pagination_label: UUIDGenerator
sidebar_label: UUIDGenerator
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UUIDGenerator', 'V2024UUIDGenerator'] 
slug: /tools/sdk/powershell/v2024/models/uuid-generator
tags: ['SDK', 'Software Development Kit', 'UUIDGenerator', 'V2024UUIDGenerator']
---


# UUIDGenerator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$UUIDGenerator = Initialize-PSSailpoint.V2024UUIDGenerator  -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$UUIDGenerator | ConvertTo-JSON
```


[[Back to top]](#) 

