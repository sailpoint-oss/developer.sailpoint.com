---
id: get-password-policy-by-id-v1401-response
title: GetPasswordPolicyByIdV1401Response
pagination_label: GetPasswordPolicyByIdV1401Response
sidebar_label: GetPasswordPolicyByIdV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordPolicyByIdV1401Response', 'GetPasswordPolicyByIdV1401Response'] 
slug: /tools/sdk/powershell/passwordpolicies/models/get-password-policy-by-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordPolicyByIdV1401Response', 'GetPasswordPolicyByIdV1401Response']
---


# GetPasswordPolicyByIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordPolicyByIdV1401Response = Initialize-GetPasswordPolicyByIdV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordPolicyByIdV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

