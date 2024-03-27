---
id: exception-criteria-access
title: ExceptionCriteriaAccess
pagination_label: ExceptionCriteriaAccess
sidebar_label: ExceptionCriteriaAccess
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ExceptionCriteriaAccess'] 
slug: /tools/sdk/powershell/v3/models/exception-criteria-access
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaAccess']
---


# ExceptionCriteriaAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** |  Pointer to **Boolean** | Whether the subject identity already had that access or not | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ExceptionCriteriaAccess = Initialize-PSSailpointExceptionCriteriaAccess  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN&#x3D;HelpDesk,OU&#x3D;test,OU&#x3D;test-service,DC&#x3D;TestAD,DC&#x3D;local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$ExceptionCriteriaAccess | ConvertTo-JSON
```


[[Back to top]](#) 

