---
id: get-privilege-criteria-config-v1401-response
title: GetPrivilegeCriteriaConfigV1401Response
pagination_label: GetPrivilegeCriteriaConfigV1401Response
sidebar_label: GetPrivilegeCriteriaConfigV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPrivilegeCriteriaConfigV1401Response', 'GetPrivilegeCriteriaConfigV1401Response'] 
slug: /tools/sdk/powershell/privilegecriteriaconfiguration/models/get-privilege-criteria-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPrivilegeCriteriaConfigV1401Response', 'GetPrivilegeCriteriaConfigV1401Response']
---


# GetPrivilegeCriteriaConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPrivilegeCriteriaConfigV1401Response = Initialize-GetPrivilegeCriteriaConfigV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPrivilegeCriteriaConfigV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

