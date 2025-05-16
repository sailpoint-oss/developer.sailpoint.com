---
id: v2024-exception-criteria-access
title: ExceptionCriteriaAccess
pagination_label: ExceptionCriteriaAccess
sidebar_label: ExceptionCriteriaAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptionCriteriaAccess', 'V2024ExceptionCriteriaAccess'] 
slug: /tools/sdk/powershell/v2024/models/exception-criteria-access
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaAccess', 'V2024ExceptionCriteriaAccess']
---


# ExceptionCriteriaAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | **Boolean** | Whether the subject identity already had that access or not | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ExceptionCriteriaAccess = Initialize-V2024ExceptionCriteriaAccess  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$ExceptionCriteriaAccess | ConvertTo-JSON
```


[[Back to top]](#) 

