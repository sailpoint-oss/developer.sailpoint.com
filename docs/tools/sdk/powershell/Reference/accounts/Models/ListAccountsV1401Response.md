---
id: list-accounts-v1401-response
title: ListAccountsV1401Response
pagination_label: ListAccountsV1401Response
sidebar_label: ListAccountsV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ListAccountsV1401Response', 'ListAccountsV1401Response'] 
slug: /tools/sdk/powershell/accounts/models/list-accounts-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListAccountsV1401Response', 'ListAccountsV1401Response']
---


# ListAccountsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListAccountsV1401Response = Initialize-ListAccountsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListAccountsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

