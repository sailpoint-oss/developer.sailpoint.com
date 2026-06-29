---
id: exceptioncriteria-criteria-list-inner
title: ExceptioncriteriaCriteriaListInner
pagination_label: ExceptioncriteriaCriteriaListInner
sidebar_label: ExceptioncriteriaCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExceptioncriteriaCriteriaListInner', 'ExceptioncriteriaCriteriaListInner'] 
slug: /tools/sdk/powershell/sodviolations/models/exceptioncriteria-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'ExceptioncriteriaCriteriaListInner', 'ExceptioncriteriaCriteriaListInner']
---


# ExceptioncriteriaCriteriaListInner

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
$ExceptioncriteriaCriteriaListInner = Initialize-ExceptioncriteriaCriteriaListInner  -Type ENTITLEMENT `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name CN=HelpDesk,OU=test,OU=test-service,DC=TestAD,DC=local `
 -Existing true
```

- Convert the resource to JSON
```powershell
$ExceptioncriteriaCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

