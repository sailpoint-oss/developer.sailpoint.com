---
id: uuid-generator
title: UUIDGenerator
pagination_label: UUIDGenerator
sidebar_label: UUIDGenerator
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'UUIDGenerator'] 
slug: /tools/sdk/powershell/v3/models/uuid-generator
tags: ['SDK', 'Software Development Kit', 'UUIDGenerator']
---


# UUIDGenerator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$UUIDGenerator = Initialize-UUIDGenerator  -RequiresPeriodicRefresh false
```

- Convert the resource to JSON
```powershell
$UUIDGenerator | ConvertTo-JSON
```


[[Back to top]](#) 

