---
id: accessmodelmetadata-values-inner
title: AccessmodelmetadataValuesInner
pagination_label: AccessmodelmetadataValuesInner
sidebar_label: AccessmodelmetadataValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessmodelmetadataValuesInner', 'AccessmodelmetadataValuesInner'] 
slug: /tools/sdk/powershell/roles/models/accessmodelmetadata-values-inner
tags: ['SDK', 'Software Development Kit', 'AccessmodelmetadataValuesInner', 'AccessmodelmetadataValuesInner']
---


# AccessmodelmetadataValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | **String** | The value to assign to the metdata item | [optional] 
**Name** | **String** | Display name of the value | [optional] 
**Status** | **String** | The status of the individual value | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessmodelmetadataValuesInner = Initialize-AccessmodelmetadataValuesInner  -Value development `
 -Name Development `
 -Status active
```

- Convert the resource to JSON
```powershell
$AccessmodelmetadataValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

