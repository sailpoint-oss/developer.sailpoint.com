---
id: v2024-dimension-ref
title: DimensionRef
pagination_label: DimensionRef
sidebar_label: DimensionRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionRef', 'V2024DimensionRef'] 
slug: /tools/sdk/powershell/v2024/models/dimension-ref
tags: ['SDK', 'Software Development Kit', 'DimensionRef', 'V2024DimensionRef']
---


# DimensionRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "DIMENSION" ] | The type of the object to which this reference applies | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionRef = Initialize-PSSailpoint.V2024DimensionRef  -Type DIMENSION `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Role 2
```

- Convert the resource to JSON
```powershell
$DimensionRef | ConvertTo-JSON
```


[[Back to top]](#) 

