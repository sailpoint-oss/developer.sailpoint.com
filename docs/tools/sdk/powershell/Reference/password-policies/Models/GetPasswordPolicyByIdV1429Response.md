---
id: get-password-policy-by-id-v1429-response
title: GetPasswordPolicyByIdV1429Response
pagination_label: GetPasswordPolicyByIdV1429Response
sidebar_label: GetPasswordPolicyByIdV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPasswordPolicyByIdV1429Response', 'GetPasswordPolicyByIdV1429Response'] 
slug: /tools/sdk/powershell/passwordpolicies/models/get-password-policy-by-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordPolicyByIdV1429Response', 'GetPasswordPolicyByIdV1429Response']
---


# GetPasswordPolicyByIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordPolicyByIdV1429Response = Initialize-GetPasswordPolicyByIdV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPasswordPolicyByIdV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

