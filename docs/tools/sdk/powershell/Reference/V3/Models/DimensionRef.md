---
id: dimension-ref
title: DimensionRef
pagination_label: DimensionRef
sidebar_label: DimensionRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionRef', 'DimensionRef'] 
slug: /tools/sdk/powershell/v3/models/dimension-ref
tags: ['SDK', 'Software Development Kit', 'DimensionRef', 'DimensionRef']
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
$DimensionRef = Initialize-DimensionRef  -Type DIMENSION `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Role 2
```

- Convert the resource to JSON
```powershell
$DimensionRef | ConvertTo-JSON
```


[[Back to top]](#) 

