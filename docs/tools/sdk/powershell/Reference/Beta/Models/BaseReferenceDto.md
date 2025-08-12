---
id: beta-base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseReferenceDto', 'BetaBaseReferenceDto'] 
slug: /tools/sdk/powershell/beta/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto', 'BetaBaseReferenceDto']
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
$BaseReferenceDto = Initialize-BetaBaseReferenceDto  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$BaseReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

