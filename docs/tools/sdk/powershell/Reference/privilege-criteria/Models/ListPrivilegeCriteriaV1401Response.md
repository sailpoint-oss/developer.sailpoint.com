---
id: list-privilege-criteria-v1401-response
title: ListPrivilegeCriteriaV1401Response
pagination_label: ListPrivilegeCriteriaV1401Response
sidebar_label: ListPrivilegeCriteriaV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListPrivilegeCriteriaV1401Response', 'ListPrivilegeCriteriaV1401Response'] 
slug: /tools/sdk/powershell/privilegecriteria/models/list-privilege-criteria-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListPrivilegeCriteriaV1401Response', 'ListPrivilegeCriteriaV1401Response']
---


# ListPrivilegeCriteriaV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListPrivilegeCriteriaV1401Response = Initialize-ListPrivilegeCriteriaV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListPrivilegeCriteriaV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

