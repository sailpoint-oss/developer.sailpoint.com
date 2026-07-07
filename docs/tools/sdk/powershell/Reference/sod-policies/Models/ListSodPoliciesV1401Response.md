---
id: list-sod-policies-v1401-response
title: ListSodPoliciesV1401Response
pagination_label: ListSodPoliciesV1401Response
sidebar_label: ListSodPoliciesV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListSodPoliciesV1401Response', 'ListSodPoliciesV1401Response'] 
slug: /tools/sdk/powershell/sodpolicies/models/list-sod-policies-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListSodPoliciesV1401Response', 'ListSodPoliciesV1401Response']
---


# ListSodPoliciesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListSodPoliciesV1401Response = Initialize-ListSodPoliciesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListSodPoliciesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

