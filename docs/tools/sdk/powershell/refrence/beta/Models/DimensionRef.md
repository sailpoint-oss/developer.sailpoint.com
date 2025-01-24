---
id: dimension-ref
title: DimensionRef
pagination_label: DimensionRef
sidebar_label: DimensionRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionRef'] 
slug: /tools/sdk/powershell/beta/models/dimension-ref
tags: ['SDK', 'Software Development Kit', 'DimensionRef']
---


# DimensionRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "DIMENSION" ] | The type of the object to which this reference applies | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionRef = Initialize-PSSailpoint.BetaDimensionRef  -Type DIMENSION `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Role 2
```

- Convert the resource to JSON
```powershell
$DimensionRef | ConvertTo-JSON
```


[[Back to top]](#) 

