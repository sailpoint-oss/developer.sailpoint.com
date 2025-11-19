---
id: beta-base-role-reference-dto
title: BaseRoleReferenceDto
pagination_label: BaseRoleReferenceDto
sidebar_label: BaseRoleReferenceDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto'] 
slug: /tools/sdk/powershell/beta/models/base-role-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto']
---


# BaseRoleReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | DTO type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseRoleReferenceDto = Initialize-BetaBaseRoleReferenceDto  -Type ROLE `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$BaseRoleReferenceDto | ConvertTo-JSON
```


[[Back to top]](#) 

