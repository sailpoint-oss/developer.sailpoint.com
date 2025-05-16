---
id: access-model-metadata-values-inner
title: AccessModelMetadataValuesInner
pagination_label: AccessModelMetadataValuesInner
sidebar_label: AccessModelMetadataValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessModelMetadataValuesInner', 'AccessModelMetadataValuesInner'] 
slug: /tools/sdk/powershell/v3/models/access-model-metadata-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadataValuesInner', 'AccessModelMetadataValuesInner']
---


# AccessModelMetadataValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The value to assign to the metdata item | [optional] 
**Name** | **String** | Display name of the value | [optional] 
**Status** | **String** | The status of the individual value | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessModelMetadataValuesInner = Initialize-AccessModelMetadataValuesInner  -Value development `
 -Name Development `
 -Status active
```

- Convert the resource to JSON
```powershell
$AccessModelMetadataValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

