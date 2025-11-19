---
id: v2024-base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseReferenceDto', 'V2024BaseReferenceDto'] 
slug: /tools/sdk/powershell/v2024/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto', 'V2024BaseReferenceDto']
---


# BaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseReferenceDto = Initialize-V2024BaseReferenceDto  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$BaseReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

