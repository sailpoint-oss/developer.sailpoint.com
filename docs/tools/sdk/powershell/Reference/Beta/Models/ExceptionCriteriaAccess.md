---
id: beta-exception-criteria-access
title: ExceptionCriteriaAccess
pagination_label: ExceptionCriteriaAccess
sidebar_label: ExceptionCriteriaAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptionCriteriaAccess', 'BetaExceptionCriteriaAccess'] 
slug: /tools/sdk/powershell/beta/models/exception-criteria-access
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaAccess', 'BetaExceptionCriteriaAccess']
---


# ExceptionCriteriaAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | **Boolean** | Whether the subject identity already had that access or not | [optional] 

## Examples

- Prepare the resource
```powershell
$ExceptionCriteriaAccess = Initialize-PSSailpoint.BetaExceptionCriteriaAccess  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN&#x3D;HelpDesk,OU&#x3D;test,OU&#x3D;test-service,DC&#x3D;TestAD,DC&#x3D;local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$ExceptionCriteriaAccess | ConvertTo-JSON
```


[[Back to top]](#) 

