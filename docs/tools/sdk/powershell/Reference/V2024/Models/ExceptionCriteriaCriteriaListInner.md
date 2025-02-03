---
id: v2024-exception-criteria-criteria-list-inner
title: ExceptionCriteriaCriteriaListInner
pagination_label: ExceptionCriteriaCriteriaListInner
sidebar_label: ExceptionCriteriaCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptionCriteriaCriteriaListInner', 'V2024ExceptionCriteriaCriteriaListInner'] 
slug: /tools/sdk/powershell/v2024/models/exception-criteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteriaCriteriaListInner', 'V2024ExceptionCriteriaCriteriaListInner']
---


# ExceptionCriteriaCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | The type of object that is referenced | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 
**Existing** | **Boolean** | Whether the subject identity already had that access or not | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ExceptionCriteriaCriteriaListInner = Initialize-PSSailpoint.V2024ExceptionCriteriaCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN&#x3D;HelpDesk,OU&#x3D;test,OU&#x3D;test-service,DC&#x3D;TestAD,DC&#x3D;local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$ExceptionCriteriaCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

